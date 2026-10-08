using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;
using UnityEngine.UI;

/// <summary>
/// Script hướng dẫn người chơi click vào một item cụ thể bằng bàn tay (Hand).
/// - Tự động định vị Hand chỉ vào targetItem (hỗ trợ cả UI Canvas và World space).
/// - Thực hiện animation nhấp nháy / click (scale và nhấp xuống) để thu hút sự chú ý.
/// - Tự động ẩn Hand ngay khi người chơi click / chạm vào targetItem.
/// </summary>
public class HandClickGuide : MonoBehaviour {
    [Header("References")]
    [Tooltip("Đối tượng bàn tay (Hand) sẽ thực hiện hành động chỉ và click")]
    [SerializeField] private GameObject handObject;

    [Tooltip("Item mục tiêu cần hướng dẫn người chơi bấm vào")]
    [SerializeField] private Transform targetItem;

    [Header("Position Settings")]
    [Tooltip("Tự động đặt vị trí của Hand tới vị trí của targetItem khi kích hoạt")]
    [SerializeField] private bool autoPositionHand = true;

    [Tooltip("Độ lệch vị trí (local offset) để ngón tay chỉ đúng vào item")]
    [SerializeField] private Vector3 offset = new Vector3(30f, -30f, 0f);

    [Tooltip("Liên tục bám theo item nếu item di chuyển")]
    [SerializeField] private bool followTarget = false;

    [Header("Click Animation")]
    [Tooltip("Tự động chạy animation click khi hiển thị")]
    [SerializeField] private bool playClickAnimation = true;

    [Tooltip("Scale của Hand khi nhấn xuống (ví dụ 0.8 để tạo cảm giác ấn)")]
    [SerializeField] private float clickScale = 0.82f;

    [Tooltip("Thời gian thực hiện 1 lần nhấn xuống và nhả ra (giây)")]
    [SerializeField] private float clickDuration = 0.35f;

    [Tooltip("Thời gian nghỉ giữa các lần click (giây)")]
    [SerializeField] private float clickInterval = 0.4f;

    [Tooltip("Độ dịch chuyển nhẹ khi ấn xuống (local offset)")]
    [SerializeField] private Vector3 clickMovementOffset = new Vector3(-8f, -8f, 0f);

    [Tooltip("Sử dụng Unscaled Time để animation không bị ảnh hưởng khi pause game")]
    [SerializeField] private bool useUnscaledTime = true;

    [Header("Click Detection Options")]
    [Tooltip("Nếu tích chọn: Người chơi chạm vào bất cứ đâu trên màn hình cũng ẩn Hand. Nếu bỏ chọn: chỉ ẩn khi click đúng targetItem")]
    [SerializeField] private bool hideOnAnyTouch = false;

    [Header("Events")]
    [Tooltip("Sự kiện kích hoạt khi Hand bị ẩn đi")]
    [SerializeField] private UnityEvent onHandHidden = new UnityEvent();

    private Vector3 _initialHandScale = Vector3.one;
    private Vector3 _baseLocalPos = Vector3.zero;
    private Coroutine _clickAnimCoroutine;
    private bool _isHandHidden = false;
    private Button _targetButton;
    private TouchablePuzzleElement _targetTouchable;
    private ItemClickTrigger _itemTrigger;

    public GameObject HandObject {
        get => handObject;
        set => handObject = value;
    }

    public Transform TargetItem {
        get => targetItem;
        set {
            targetItem = value;
            SetupTargetListeners();
            if (autoPositionHand) PositionHandAtTarget();
        }
    }

    private void Awake() {
        if (handObject == null) {
            // Tự tìm con có tên chứa 'hand' nếu chưa gán
            var handTransform = transform.Find("Hand") ?? transform.Find("hand");
            if (handTransform != null) handObject = handTransform.gameObject;
        }

        if (handObject != null) {
            _initialHandScale = handObject.transform.localScale == Vector3.zero ? Vector3.one : handObject.transform.localScale;
        }
    }

    private void OnEnable() {
        _isHandHidden = false;

        if (handObject != null) {
            handObject.SetActive(true);
            handObject.transform.localScale = _initialHandScale;
        }

        if (autoPositionHand && targetItem != null) {
            PositionHandAtTarget();
        }

        SetupTargetListeners();

        if (playClickAnimation && handObject != null) {
            StartClickAnimation();
        }
    }

    private void OnDisable() {
        StopClickAnimation();
        RemoveTargetListeners();
    }

    private void Update() {
        if (_isHandHidden || handObject == null || !handObject.activeSelf) return;

        if (followTarget && autoPositionHand && targetItem != null) {
            PositionHandAtTarget();
        }

        CheckPlayerInput();
    }

    /// <summary>
    /// Đặt vị trí Hand tới targetItem cộng với offset
    /// </summary>
    public void PositionHandAtTarget() {
        if (handObject == null || targetItem == null) return;

        RectTransform handRect = handObject.GetComponent<RectTransform>();
        RectTransform targetRect = targetItem.GetComponent<RectTransform>();

        if (handRect != null && targetRect != null) {
            // Cả hai đều là UI RectTransform
            handRect.position = targetRect.position;
            handRect.localPosition += offset;
        } else if (handRect != null && targetRect == null) {
            // Hand là UI nhưng targetItem là World Object
            Camera cam = Camera.main;
            if (cam != null) {
                Vector3 screenPoint = cam.WorldToScreenPoint(targetItem.position);
                handRect.position = screenPoint;
                handRect.localPosition += offset;
            } else {
                handRect.position = targetItem.position + offset;
            }
        } else {
            // Cả hai đều ở World space
            handObject.transform.position = targetItem.position;
            handObject.transform.localPosition += offset;
        }

        _baseLocalPos = handObject.transform.localPosition;
    }

    /// <summary>
    /// Đăng ký lắng nghe sự kiện click từ targetItem
    /// </summary>
    private void SetupTargetListeners() {
        if (targetItem == null) return;

        // 1. Kiểm tra UI Button
        _targetButton = targetItem.GetComponent<Button>();
        if (_targetButton != null) {
            _targetButton.onClick.AddListener(OnTargetClicked);
        }

        // 2. Kiểm tra TouchablePuzzleElement
        _targetTouchable = targetItem.GetComponent<TouchablePuzzleElement>();
        if (_targetTouchable != null) {
            _targetTouchable.OnTouchEvent.AddListener(OnTargetClicked);
        }

        // 3. Gắn trigger component để bắt event IPointerDown / IPointerClick
        _itemTrigger = targetItem.GetComponent<ItemClickTrigger>();
        if (_itemTrigger == null) {
            _itemTrigger = targetItem.gameObject.AddComponent<ItemClickTrigger>();
        }
        _itemTrigger.onClicked = OnTargetClicked;
    }

    private void RemoveTargetListeners() {
        if (_targetButton != null) {
            _targetButton.onClick.RemoveListener(OnTargetClicked);
            _targetButton = null;
        }

        if (_targetTouchable != null) {
            _targetTouchable.OnTouchEvent.RemoveListener(OnTargetClicked);
            _targetTouchable = null;
        }

        if (_itemTrigger != null) {
            _itemTrigger.onClicked = null;
        }
    }

    /// <summary>
    /// Kiểm tra input click/touch của người chơi trên màn hình
    /// </summary>
    private void CheckPlayerInput() {
        if (!Input.GetMouseButtonDown(0) && (Input.touchCount <= 0 || Input.GetTouch(0).phase != TouchPhase.Began)) {
            return;
        }

        if (hideOnAnyTouch) {
            OnTargetClicked();
            return;
        }

        Vector2 screenPos = Input.touchCount > 0 ? Input.GetTouch(0).position : (Vector2)Input.mousePosition;

        // Kiểm tra raycast UI
        if (EventSystem.current != null && targetItem != null) {
            PointerEventData pointerData = new PointerEventData(EventSystem.current) { position = screenPos };
            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(pointerData, results);

            for (int i = 0; i < results.Count; i++) {
                if (results[i].gameObject != null &&
                    (results[i].gameObject == targetItem.gameObject || results[i].gameObject.transform.IsChildOf(targetItem))) {
                    OnTargetClicked();
                    return;
                }
            }
        }

        // Kiểm tra 2D collider của targetItem nếu có
        Camera cam = Camera.main;
        if (cam != null && targetItem != null) {
            Vector3 worldPoint = cam.ScreenToWorldPoint(screenPos);
            Collider2D col2D = Physics2D.OverlapPoint(worldPoint);
            if (col2D != null && (col2D.gameObject == targetItem.gameObject || col2D.transform.IsChildOf(targetItem))) {
                OnTargetClicked();
                return;
            }
        }
    }

    /// <summary>
    /// Bắt đầu animation click
    /// </summary>
    public void StartClickAnimation() {
        StopClickAnimation();
        if (handObject != null) {
            _clickAnimCoroutine = StartCoroutine(ClickAnimationRoutine());
        }
    }

    /// <summary>
    /// Dừng animation click
    /// </summary>
    public void StopClickAnimation() {
        if (_clickAnimCoroutine != null) {
            StopCoroutine(_clickAnimCoroutine);
            _clickAnimCoroutine = null;
        }
    }

    /// <summary>
    /// Coroutine thực hiện hành động click lặp đi lặp lại
    /// </summary>
    private IEnumerator ClickAnimationRoutine() {
        Transform handT = handObject.transform;
        _baseLocalPos = handT.localPosition;

        while (!_isHandHidden && handObject != null) {
            float halfDuration = clickDuration * 0.5f;

            // Phase 1: Nhấn xuống (Scale nhỏ lại và dịch chuyển nhẹ)
            float elapsed = 0f;
            while (elapsed < halfDuration) {
                float dt = useUnscaledTime ? Time.unscaledDeltaTime : Time.deltaTime;
                elapsed += dt;
                float t = Mathf.Clamp01(elapsed / halfDuration);

                // Easing SmoothStep
                float smooth = t * t * (3f - 2f * t);

                handT.localScale = Vector3.Lerp(_initialHandScale, _initialHandScale * clickScale, smooth);
                handT.localPosition = Vector3.Lerp(_baseLocalPos, _baseLocalPos + clickMovementOffset, smooth);

                yield return null;
            }

            // Phase 2: Nhả lên (Scale trở lại bình thường)
            elapsed = 0f;
            while (elapsed < halfDuration) {
                float dt = useUnscaledTime ? Time.unscaledDeltaTime : Time.deltaTime;
                elapsed += dt;
                float t = Mathf.Clamp01(elapsed / halfDuration);

                float smooth = t * t * (3f - 2f * t);

                handT.localScale = Vector3.Lerp(_initialHandScale * clickScale, _initialHandScale, smooth);
                handT.localPosition = Vector3.Lerp(_baseLocalPos + clickMovementOffset, _baseLocalPos, smooth);

                yield return null;
            }

            handT.localScale = _initialHandScale;
            handT.localPosition = _baseLocalPos;

            // Phase 3: Nghỉ giữa các nhịp click
            if (clickInterval > 0f) {
                if (useUnscaledTime) {
                    yield return new WaitForSecondsRealtime(clickInterval);
                } else {
                    yield return new WaitForSeconds(clickInterval);
                }
            }
        }
    }

    /// <summary>
    /// Gọi khi người chơi click/chạm vào targetItem hoặc gọi thủ công
    /// </summary>
    public void OnTargetClicked() {
        if (_isHandHidden) return;
        HideHand();
    }

    /// <summary>
    /// Ẩn Hand và dừng hoạt ảnh
    /// </summary>
    public void HideHand() {
        _isHandHidden = true;
        StopClickAnimation();

        if (handObject != null) {
            handObject.SetActive(false);
        }

        onHandHidden?.Invoke();
    }

    /// <summary>
    /// Hiển thị lại Hand và chạy lại chỉ dẫn
    /// </summary>
    public void ShowHand() {
        _isHandHidden = false;
        if (handObject != null) {
            handObject.SetActive(true);
            handObject.transform.localScale = _initialHandScale;
        }

        if (autoPositionHand && targetItem != null) {
            PositionHandAtTarget();
        }

        if (playClickAnimation) {
            StartClickAnimation();
        }
    }

    /// <summary>
    /// Component phụ gắn tạm thời vào targetItem để bắt sự kiện click UI/Pointer
    /// </summary>
    private class ItemClickTrigger : MonoBehaviour, IPointerDownHandler, IPointerClickHandler {
        public System.Action onClicked;

        public void OnPointerDown(PointerEventData eventData) {
            onClicked?.Invoke();
        }

        public void OnPointerClick(PointerEventData eventData) {
            onClicked?.Invoke();
        }
    }
}
