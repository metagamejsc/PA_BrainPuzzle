using System.Collections;
using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(RectTransform))]
public class TutorialHandController : MonoBehaviour
{
    public static TutorialHandController Instance { get; private set; }

    [Header("=== Layer & Sorting ===")]
    [Tooltip("Sorting Layer của bàn tay (mặc định Interactable để nổi trên prefab level)")]
    [SerializeField] private string sortingLayerName = "Interactable";

    [Tooltip("Sorting Order của bàn tay (mặc định 5000: cao hơn prefab level 0-100 nhưng thấp hơn Win/Lose 30000)")]
    [SerializeField] private int sortingOrder = 5000;

    [Header("=== Movement Targets ===")]
    [Tooltip("Điểm bắt đầu (Cái áo Croptop). Nếu để trống sẽ tự động tìm")]
    [SerializeField] private Transform startTarget;

    [Tooltip("Điểm kết thúc (Nhân vật chính). Nếu để trống sẽ tự động tìm")]
    [SerializeField] private Transform endTarget;

    [Tooltip("Độ lệch vị trí bàn tay so với tâm vật phẩm (Pixel)")]
    [SerializeField] private Vector2 handOffset = new Vector2(30f, -30f);

    [Tooltip("Độ lệch vị trí đích trên nhân vật chính (Pixel)")]
    [SerializeField] private Vector2 targetOffset = new Vector2(0f, 100f);

    [Header("=== Animation Settings ===")]
    [Tooltip("Thời gian di chuyển từ áo sang nhân vật (giây)")]
    [SerializeField] private float moveDuration = 1.2f;

    [Tooltip("Thời gian chờ tại điểm xuất phát trước khi kéo (giây)")]
    [SerializeField] private float waitAtStart = 0.25f;

    [Tooltip("Thời gian chờ tại điểm đến trước khi lặp lại (giây)")]
    [SerializeField] private float waitAtEnd = 0.25f;

    [Tooltip("Ngưỡng di chuyển chuột/chạm để tính là drag (Pixel)")]
    [SerializeField] private float dragThreshold = 12f;

    private RectTransform rectTransform;
    private RectTransform canvasRect;
    private Camera mainCam;
    private RawImage rawImage;
    private Canvas subCanvas;

    private bool hasDismissed = false;
    private Coroutine tutorialRoutine;
    private Vector2 pointerDownPos;
    private bool isPointerDown = false;

    private void Awake()
    {
        if (Instance == null) Instance = this;
        rectTransform = GetComponent<RectTransform>();

        // Đảm bảo lấy RectTransform của Canvas cha (nơi hand nằm trong đó),
        // KHÔNG lấy Canvas của chính hand (vì hand có subCanvas sẽ làm lệch hệ tọa độ khi hand di chuyển)
        if (transform.parent != null)
        {
            canvasRect = transform.parent.GetComponent<RectTransform>();
        }
        if (canvasRect == null)
        {
            var rootCanvas = GetComponentInParent<Canvas>()?.rootCanvas;
            if (rootCanvas != null)
            {
                canvasRect = rootCanvas.GetComponent<RectTransform>();
            }
        }

        // Đảm bảo không chặn click của người chơi xuống các vật phẩm bên dưới
        rawImage = GetComponent<RawImage>();
        if (rawImage != null)
        {
            rawImage.raycastTarget = false;
        }

        SetupSorting();
    }

    private void Start()
    {
        mainCam = Camera.main;
        if (mainCam == null) mainCam = FindObjectOfType<Camera>();

        AutoFindTargets();
        SetupSorting();

        tutorialRoutine = StartCoroutine(TutorialLoop());
    }

    private void Update()
    {
        if (hasDismissed) return;

        // 1. Kiểm tra nếu có bất kỳ vật phẩm nào đang được kéo (DragController)
        if (DragController.IsDragging)
        {
            DismissHand();
            return;
        }

        // 2. Kiểm tra người chơi click/chạm và kéo (drag) vào bất cứ vùng nào trên màn hình
        HandleInputDetection();
    }

    private void SetupSorting()
    {
        // Tạo hoặc cấu hình Canvas con để bàn tay nổi lên trên prefab level (order 5000)
        // nhưng vẫn nằm dưới Win/Lose (order 30000)
        subCanvas = GetComponent<Canvas>();
        if (subCanvas == null) subCanvas = gameObject.AddComponent<Canvas>();
        subCanvas.overrideSorting = true;
        if (!string.IsNullOrEmpty(sortingLayerName))
        {
            subCanvas.sortingLayerName = sortingLayerName;
        }
        subCanvas.sortingOrder = sortingOrder;

        // Bỏ GraphicRaycaster nếu có để không cản trở thao tác game
        var raycaster = GetComponent<GraphicRaycaster>();
        if (raycaster != null) Destroy(raycaster);
    }

    private void AutoFindTargets()
    {
        if (startTarget == null)
        {
            // Tìm cái áo Croptop trong Sequence_Croptop
            var croptopDA = GameObject.Find("Canvas/L_1002.Win/Seq/Parallel/Sequence_Croptop/DragIn/DraggableArea");
            if (croptopDA == null) croptopDA = GameObject.Find("DraggableArea");
            if (croptopDA != null) startTarget = croptopDA.transform;
        }

        if (endTarget == null)
        {
            // Tìm nhân vật chính Chubby Girl
            var chubby = GameObject.Find("Canvas/L_1002.Win/Environment/Spine GameObject (Girl_Chubby)");
            if (chubby == null) chubby = GameObject.Find("Spine GameObject (Girl_Chubby)");
            if (chubby != null) endTarget = chubby.transform;
        }
    }

    private void HandleInputDetection()
    {
        bool down = Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began);
        bool stay = Input.GetMouseButton(0) || (Input.touchCount > 0 && (Input.GetTouch(0).phase == TouchPhase.Moved || Input.GetTouch(0).phase == TouchPhase.Stationary));
        bool up = Input.GetMouseButtonUp(0) || (Input.touchCount > 0 && (Input.GetTouch(0).phase == TouchPhase.Ended || Input.GetTouch(0).phase == TouchPhase.Canceled));

        Vector2 currentScreenPos = Input.touchCount > 0 ? Input.GetTouch(0).position : (Vector2)Input.mousePosition;

        if (down)
        {
            isPointerDown = true;
            pointerDownPos = currentScreenPos;
        }
        else if (stay && isPointerDown)
        {
            float dist = Vector2.Distance(currentScreenPos, pointerDownPos);
            // Người chơi đã bắt đầu kéo chuột hoặc ngón tay
            if (dist >= dragThreshold)
            {
                DismissHand();
            }
        }
        else if (up)
        {
            isPointerDown = false;
        }
    }

    private RectTransform TargetCanvasRect
    {
        get
        {
            if (canvasRect != null) return canvasRect;
            if (transform.parent != null)
            {
                canvasRect = transform.parent.GetComponent<RectTransform>();
            }
            if (canvasRect == null)
            {
                var rootCanvas = GetComponentInParent<Canvas>()?.rootCanvas;
                if (rootCanvas != null) canvasRect = rootCanvas.GetComponent<RectTransform>();
            }
            return canvasRect;
        }
    }

    /// <summary>
    /// Chuyển toạ độ thế giới sang toạ độ Canvas cục bộ (theo hệ quy chiếu của Canvas cha)
    /// </summary>
    private Vector2 WorldToCanvasPoint(Vector3 worldPos)
    {
        var targetRect = TargetCanvasRect;
        if (targetRect == null) return (Vector2)worldPos;
        if (mainCam == null) mainCam = Camera.main;

        Vector3 screenPoint = mainCam != null ? mainCam.WorldToScreenPoint(worldPos) : worldPos;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(targetRect, screenPoint, mainCam, out Vector2 canvasPoint);
        return canvasPoint;
    }

    private IEnumerator TutorialLoop()
    {
        while (!hasDismissed)
        {
            AutoFindTargets();

            // Tính toạ độ xuất phát và điểm đến
            Vector3 startWorld = startTarget != null ? startTarget.position : new Vector3(-4.5f, -2.4f, 0f);
            Vector3 endWorld = endTarget != null ? endTarget.position : new Vector3(0f, 0f, 0f);

            Vector2 startCanvas = WorldToCanvasPoint(startWorld) + handOffset;
            Vector2 endCanvas = WorldToCanvasPoint(endWorld) + targetOffset;

            // 1. Đặt bàn tay tại vị trí cái áo
            rectTransform.anchoredPosition = startCanvas;
            rectTransform.localScale = Vector3.one;
            SetAlpha(1f);

            // 2. Hiệu ứng chạm / nhấn nhẹ vào cái áo
            float pressElapsed = 0f;
            float pressDuration = waitAtStart;
            while (pressElapsed < pressDuration)
            {
                if (hasDismissed) yield break;
                pressElapsed += Time.deltaTime;
                float pt = Mathf.Clamp01(pressElapsed / pressDuration);
                float scale = Mathf.Lerp(1f, 0.85f, pt);
                rectTransform.localScale = new Vector3(scale, scale, 1f);
                yield return null;
            }

            // 3. Di chuyển bàn tay mượt mà từ cái áo sang nhân vật
            float moveElapsed = 0f;
            while (moveElapsed < moveDuration)
            {
                if (hasDismissed) yield break;
                moveElapsed += Time.deltaTime;
                float t = Mathf.Clamp01(moveElapsed / moveDuration);

                // Đường cong EaseInOutCubic mượt mà tự nhiên
                float smoothT = t < 0.5f ? 4f * t * t * t : 1f - Mathf.Pow(-2f * t + 2f, 3f) / 2f;

                rectTransform.anchoredPosition = Vector2.Lerp(startCanvas, endCanvas, smoothT);
                yield return null;
            }

            rectTransform.anchoredPosition = endCanvas;

            // 4. Nhả tay (Scale trở lại 1.0)
            rectTransform.localScale = Vector3.one;
            yield return new WaitForSeconds(waitAtEnd);

            // 5. Fade mờ đi trước khi lặp lại chu kỳ mới
            float fadeElapsed = 0f;
            float fadeDuration = 0.25f;
            while (fadeElapsed < fadeDuration)
            {
                if (hasDismissed) yield break;
                fadeElapsed += Time.deltaTime;
                float ft = Mathf.Clamp01(fadeElapsed / fadeDuration);
                SetAlpha(1f - ft);
                yield return null;
            }

            SetAlpha(0f);
            yield return new WaitForSeconds(0.2f);
        }
    }

    private void SetAlpha(float alpha)
    {
        if (rawImage != null)
        {
            Color c = rawImage.color;
            c.a = alpha;
            rawImage.color = c;
        }
    }

    /// <summary>
    /// Ẩn bàn tay tutorial vĩnh viễn khi người chơi bắt đầu tương tác
    /// </summary>
    public void DismissHand()
    {
        if (hasDismissed) return;
        hasDismissed = true;

        if (tutorialRoutine != null)
        {
            StopCoroutine(tutorialRoutine);
            tutorialRoutine = null;
        }

        gameObject.SetActive(false);
        Debug.Log("[TutorialHandController] Player interacted! Tutorial hand dismissed.");
    }
}
