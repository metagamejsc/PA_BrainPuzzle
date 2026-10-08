using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;
using UnityEngine.UI;

/// <summary>
/// Script hướng dẫn người chơi kéo thả (Drag & Drop) gói Snack đến BlackMan.
/// - Định vị chính xác qua Canvas ScreenPointToLocalPointInRectangle (không bị lệch tọa độ World/Canvas).
/// - Di chuyển cực kỳ mượt mà từ Snack đến BlackMan, có hiệu ứng ấn xuống, kéo sang, nhả ra và fade lặp lại.
/// - Tự động đưa Hand lên trên cùng (SetAsLastSibling) để không bị che khuất.
/// - Tự động ẩn bàn tay khi người chơi bắt đầu kéo hoặc thả Snack.
/// </summary>
public class HandDragGuide : MonoBehaviour {
    [Header("References")]
    [Tooltip("Đối tượng bàn tay (Hand). Nếu để trống sẽ tự lấy GameObject này hoặc tìm 'hand'")]
    [SerializeField] private GameObject handObject;

    [Tooltip("Item bắt đầu kéo (Snack)")]
    [SerializeField] private Transform startItem;

    [Tooltip("Vị trí đích cần kéo tới (BlackMan)")]
    [SerializeField] private Transform targetReceiver;

    [Header("Auto Find Fallbacks (Nội bộ)")]
    [SerializeField] private string startItemName = "Snack";
    [SerializeField] private string targetReceiverName = "BlackMan";

    [Header("Position & Offsets (Canvas Pixels)")]
    [Tooltip("Độ lệch vị trí tại điểm bắt đầu (pixels)")]
    [SerializeField] private Vector2 startOffset = new Vector2(20f, -20f);

    [Tooltip("Độ lệch vị trí tại điểm đích (pixels)")]
    [SerializeField] private Vector2 targetOffset = Vector2.zero;

    [Header("Drag Animation Settings")]
    [Tooltip("Thời gian bàn tay trượt từ Snack sang BlackMan (giây)")]
    [SerializeField] private float dragDuration = 1.1f;

    [Tooltip("Thời gian dừng tại đích trước khi lặp lại (giây)")]
    [SerializeField] private float pauseAtTarget = 0.25f;

    [Tooltip("Thời gian mờ dần khi quay về ban đầu (giây)")]
    [SerializeField] private float fadeDuration = 0.2f;

    [Tooltip("Thời gian nghỉ trước vòng lặp tiếp theo (giây)")]
    [SerializeField] private float loopDelay = 0.35f;

    [Tooltip("Sử dụng Unscaled Time để animation mượt khi timeScale thay đổi")]
    [SerializeField] private bool useUnscaledTime = true;

    [Header("Hide Conditions")]
    [Tooltip("Ẩn bàn tay ngay khi người chơi bắt đầu kéo")]
    [SerializeField] private bool hideOnDragStart = true;

    [Tooltip("Ẩn bàn tay khi chạm vào bất cứ đâu trên màn hình")]
    [SerializeField] private bool hideOnAnyTouch = false;

    [Header("Events")]
    [SerializeField] private UnityEvent onHandHidden = new UnityEvent();

    private RectTransform _handRect;
    private RectTransform _canvasRect;
    private Canvas _canvas;
    private Camera _canvasCamera;

    private Vector3 _initialHandScale = Vector3.one;
    private Coroutine _dragAnimCoroutine;
    private bool _isHandHidden = false;
    private DraggablePuzzleElement _draggableElement;
    private CanvasGroup _handCanvasGroup;
    private RawImage _handRawImage;
    private Image _handImage;

    public GameObject HandObject {
        get => handObject;
        set => handObject = value;
    }

    public Transform StartItem {
        get => startItem;
        set {
            startItem = value;
            SetupDragListeners();
        }
    }

    public Transform TargetReceiver {
        get => targetReceiver;
        set => targetReceiver = value;
    }

    private void Awake() {
        InitReferences();
    }

    private void OnEnable() {
        InitReferences();
        _isHandHidden = false;

        if (handObject != null) {
            handObject.SetActive(true);
            handObject.transform.localScale = _initialHandScale;
            handObject.transform.SetAsLastSibling(); // Luôn hiển thị trên cùng
            SetHandAlpha(1f);
        }

        SetupDragListeners();
        StartDragAnimation();
    }

    private void OnDisable() {
        StopDragAnimation();
        RemoveDragListeners();
    }

    private void Update() {
        if (_isHandHidden || handObject == null || !handObject.activeSelf) return;

        CheckPlayerInput();
    }

    private void InitReferences() {
        if (handObject == null) {
            if (GetComponent<Graphic>() != null || name.ToLower().Contains("hand")) {
                handObject = gameObject;
            } else {
                var h = GameObject.Find("hand") ?? GameObject.Find("Hand");
                if (h != null) handObject = h;
            }
        }

        if (handObject != null) {
            _handRect = handObject.GetComponent<RectTransform>();
            _initialHandScale = handObject.transform.localScale == Vector3.zero ? Vector3.one : handObject.transform.localScale;
            _handCanvasGroup = handObject.GetComponent<CanvasGroup>();
            _handRawImage = handObject.GetComponent<RawImage>();
            _handImage = handObject.GetComponent<Image>();

            _canvas = handObject.GetComponentInParent<Canvas>();
            if (_canvas != null) {
                _canvasRect = _canvas.GetComponent<RectTransform>();
                _canvasCamera = GetCanvasCamera(_canvas);
            }
        }

        if (startItem == null && !string.IsNullOrEmpty(startItemName)) {
            var s = GameObject.Find(startItemName);
            if (s != null) startItem = s.transform;
        }

        if (targetReceiver == null && !string.IsNullOrEmpty(targetReceiverName)) {
            var t = GameObject.Find(targetReceiverName);
            if (t != null) targetReceiver = t.transform;
        }
    }

    private Camera GetCanvasCamera(Canvas canvas) {
        if (canvas == null) return null;
        if (canvas.renderMode == RenderMode.ScreenSpaceOverlay) return null;
        return canvas.worldCamera != null ? canvas.worldCamera : Camera.main;
    }

    private Vector2 GetCanvasLocalPos(Transform target) {
        if (target == null || _canvasRect == null) return Vector2.zero;
        Vector2 screenPoint = RectTransformUtility.WorldToScreenPoint(_canvasCamera, target.position);
        RectTransformUtility.ScreenPointToLocalPointInRectangle(_canvasRect, screenPoint, _canvasCamera, out Vector2 localPoint);
        return localPoint;
    }

    private void SetupDragListeners() {
        if (startItem == null) return;

        _draggableElement = startItem.GetComponent<DraggablePuzzleElement>();
        if (_draggableElement != null) {
            _draggableElement.OnDragStartEvent.AddListener(OnItemDragStarted);
            _draggableElement.OnDragSuccessEvent.AddListener(OnItemDragCompleted);
        }
    }

    private void RemoveDragListeners() {
        if (_draggableElement != null) {
            _draggableElement.OnDragStartEvent.RemoveListener(OnItemDragStarted);
            _draggableElement.OnDragSuccessEvent.RemoveListener(OnItemDragCompleted);
            _draggableElement = null;
        }
    }

    private void CheckPlayerInput() {
        if (!Input.GetMouseButtonDown(0) && (Input.touchCount <= 0 || Input.GetTouch(0).phase != TouchPhase.Began)) {
            return;
        }

        if (hideOnAnyTouch) {
            HideHand();
            return;
        }

        Vector2 screenPos = Input.touchCount > 0 ? Input.GetTouch(0).position : (Vector2)Input.mousePosition;

        if (EventSystem.current != null && startItem != null) {
            PointerEventData pointerData = new PointerEventData(EventSystem.current) { position = screenPos };
            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(pointerData, results);

            for (int i = 0; i < results.Count; i++) {
                if (results[i].gameObject != null &&
                    (results[i].gameObject == startItem.gameObject || results[i].gameObject.transform.IsChildOf(startItem))) {
                    OnItemDragStarted();
                    return;
                }
            }
        }
    }

    private void OnItemDragStarted() {
        if (!hideOnDragStart || _isHandHidden) return;
        HideHand();
    }

    private void OnItemDragCompleted() {
        HideHand();
    }

    public void StartDragAnimation() {
        StopDragAnimation();
        if (handObject != null && startItem != null && targetReceiver != null) {
            _dragAnimCoroutine = StartCoroutine(DragAnimationRoutine());
        }
    }

    public void StopDragAnimation() {
        if (_dragAnimCoroutine != null) {
            StopCoroutine(_dragAnimCoroutine);
            _dragAnimCoroutine = null;
        }
    }

    /// <summary>
    /// Coroutine thực hiện hoạt ảnh kéo thả cực kỳ mượt mà
    /// </summary>
    private IEnumerator DragAnimationRoutine() {
        if (_handRect == null) yield break;

        Transform handT = handObject.transform;

        while (!_isHandHidden && handObject != null && startItem != null && targetReceiver != null) {
            Vector2 startPos = GetCanvasLocalPos(startItem) + startOffset;
            Vector2 endPos = GetCanvasLocalPos(targetReceiver) + targetOffset;

            // 1. Đặt vị trí tại Snack và hiển thị
            _handRect.anchoredPosition = startPos;
            handT.localScale = _initialHandScale;
            SetHandAlpha(1f);

            // 2. Kéo mượt mà sang BlackMan (Smooth Drag)
            float elapsed = 0f;
            while (elapsed < dragDuration) {
                float dt = Mathf.Min(useUnscaledTime ? Time.unscaledDeltaTime : Time.deltaTime, 0.033f);
                elapsed += dt;
                float t = Mathf.Clamp01(elapsed / dragDuration);

                // SmoothStep Easing
                float smooth = t * t * (3f - 2f * t);

                Vector2 curStart = GetCanvasLocalPos(startItem) + startOffset;
                Vector2 curEnd = GetCanvasLocalPos(targetReceiver) + targetOffset;

                _handRect.anchoredPosition = Vector2.Lerp(curStart, curEnd, smooth);
                yield return null;
            }

            _handRect.anchoredPosition = GetCanvasLocalPos(targetReceiver) + targetOffset;

            // 3. Dừng một chút tại BlackMan
            if (pauseAtTarget > 0f) {
                if (useUnscaledTime) yield return new WaitForSecondsRealtime(pauseAtTarget);
                else yield return new WaitForSeconds(pauseAtTarget);
            }

            // 4. Fade Out mờ dần khi hoàn thành 1 lượt kéo
            elapsed = 0f;
            while (elapsed < fadeDuration) {
                float dt = Mathf.Min(useUnscaledTime ? Time.unscaledDeltaTime : Time.deltaTime, 0.033f);
                elapsed += dt;
                float t = Mathf.Clamp01(elapsed / fadeDuration);
                SetHandAlpha(1f - t);
                yield return null;
            }
            SetHandAlpha(0f);

            // 5. Nghỉ ngắn trước chu kỳ kéo tiếp theo
            if (loopDelay > 0f) {
                if (useUnscaledTime) yield return new WaitForSecondsRealtime(loopDelay);
                else yield return new WaitForSeconds(loopDelay);
            }
        }
    }

    private void SetHandAlpha(float alpha) {
        if (_handCanvasGroup != null) {
            _handCanvasGroup.alpha = alpha;
            return;
        }

        if (_handRawImage != null) {
            Color c = _handRawImage.color;
            c.a = alpha;
            _handRawImage.color = c;
        } else if (_handImage != null) {
            Color c = _handImage.color;
            c.a = alpha;
            _handImage.color = c;
        }
    }

    /// <summary>
    /// Ẩn Hand và dừng animation
    /// </summary>
    public void HideHand() {
        if (_isHandHidden) return;
        _isHandHidden = true;
        StopDragAnimation();

        if (handObject != null) {
            handObject.SetActive(false);
        }

        onHandHidden?.Invoke();
    }

    /// <summary>
    /// Hiển thị lại Hand và bắt đầu animation
    /// </summary>
    public void ShowHand() {
        _isHandHidden = false;
        if (handObject != null) {
            handObject.SetActive(true);
            handObject.transform.localScale = _initialHandScale;
            handObject.transform.SetAsLastSibling();
            SetHandAlpha(1f);
        }
        StartDragAnimation();
    }
}
