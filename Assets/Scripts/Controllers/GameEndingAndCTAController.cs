using System.Collections;
using UnityEngine;

public class GameEndingAndCTAController : MonoBehaviour
{
    public static GameEndingAndCTAController Instance { get; private set; }

    [Header("=== Win / Lose Screens ===")]
    [Tooltip("Object màn hình Win (active false ban đầu)")]
    [SerializeField] private GameObject winObject;

    [Tooltip("Object màn hình Lose (active false ban đầu)")]
    [SerializeField] private GameObject loseObject;

    [Tooltip("Title của màn hình Win (sẽ scale từ 0.3 lên 1.0)")]
    [SerializeField] private Transform winTitle;

    [Tooltip("Title của màn hình Lose (sẽ scale từ 1.8 về 1.0)")]
    [SerializeField] private Transform loseTitle;

    [Tooltip("Thời gian hiệu ứng scale title (giây)")]
    [SerializeField] private float titleAnimDuration = 0.5f;

    [Tooltip("Scale bắt đầu của Win Title (mặc định: 0.3)")]
    [SerializeField] private float winStartScale = 0.3f;

    [Tooltip("Scale bắt đầu của Lose Title (mặc định: 1.8)")]
    [SerializeField] private float loseStartScale = 1.8f;

    [Tooltip("Scale đích của Title (mặc định: 1.0)")]
    [SerializeField] private float targetTitleScale = 1.0f;

    [Header("=== Mid-Game CTA (Bật theo Step) ===")]
    [Tooltip("Object CTA xuất hiện giữa chừng (active false ban đầu)")]
    [SerializeField] private GameObject midGameCTA;

    [Tooltip("Số step trên progressbar cần đạt để bật midGameCTA (ví dụ: 3). Đặt 0 nếu không dùng")]
    [SerializeField] private int showCTAAtStep = 0;
    public int ShowCTAAtStep
    {
        get => showCTAAtStep;
        set => showCTAAtStep = value;
    }

    [Header("=== CTA Logos Idle Animation (Nhấp nháy / Co giãn) ===")]
    [Tooltip("Logo CTA thứ nhất")]
    [SerializeField] private Transform ctaLogo1;

    [Tooltip("Logo CTA thứ hai")]
    [SerializeField] private Transform ctaLogo2;

    [Tooltip("Tốc độ nhấp nháy / co giãn idle")]
    [SerializeField] private float idlePulseSpeed = 3f;

    [Tooltip("Biên độ co giãn idle (+/- giá trị này)")]
    [SerializeField] private float idlePulseScale = 0.08f;

    [Header("=== Layer & Position Settings ===")]
    [Tooltip("Đưa Win/Lose lên layer trên cùng của Canvas (SetAsLastSibling) khi xuất hiện để không bị các UI khác đè lên")]
    [SerializeField] private bool bringToFrontOnShow = true;

    [Tooltip("Sorting Layer cho Win/Lose (mặc định: Interactable là layer cao nhất để đè lên Spine meshes và prefab gameplay)")]
    [SerializeField] private string topSortingLayerName = "Interactable";

    [Tooltip("Sorting Order cho Win/Lose (mặc định: 30000 để đè lên mọi đối tượng cùng layer)")]
    [SerializeField] private int topSortingOrder = 30000;

    [Tooltip("Khoảng cách đẩy vị trí Win/Lose lên trên theo trục Y (Pixel Offset Y). Bạn có thể chỉnh trong Inspector")]
    [SerializeField] private float posYOffset = 0f;

    private bool isGameEnded = false;
    private bool isWin = false;
    private bool midCtaShown = false;

    private Vector2 winInitialAnchoredPos;
    private Vector2 loseInitialAnchoredPos;
    private bool winPosRecorded = false;
    private bool losePosRecorded = false;

    private Coroutine winTitleAnim;
    private Coroutine loseTitleAnim;
    private Coroutine cta1Idle;
    private Coroutine cta2Idle;

    private Vector3 cta1BaseScale = Vector3.one;
    private Vector3 cta2BaseScale = Vector3.one;

    private void Awake()
    {
        if (Instance == null) Instance = this;

        // Auto-find fallback nếu chưa kéo vào Inspector
        if (winObject == null)
        {
            var canvas = GameObject.Find("Canvas");
            if (canvas != null)
            {
                var t = canvas.transform.Find("Win");
                if (t != null) winObject = t.gameObject;
            }
        }
        if (loseObject == null)
        {
            var canvas = GameObject.Find("Canvas");
            if (canvas != null)
            {
                var t = canvas.transform.Find("Lose");
                if (t != null) loseObject = t.gameObject;
            }
        }
        if (winTitle == null && winObject != null)
        {
            winTitle = winObject.transform.Find("Title");
        }
        if (loseTitle == null && loseObject != null)
        {
            loseTitle = loseObject.transform.Find("Title");
        }

        // Lưu vị trí gốc ban đầu của Win và Lose
        if (winObject != null)
        {
            RectTransform r = winObject.GetComponent<RectTransform>();
            if (r != null) { winInitialAnchoredPos = r.anchoredPosition; winPosRecorded = true; }
        }
        if (loseObject != null)
        {
            RectTransform r = loseObject.GetComponent<RectTransform>();
            if (r != null) { loseInitialAnchoredPos = r.anchoredPosition; losePosRecorded = true; }
        }

        // Cấu hình SubCanvas sorting cao nhất cho Win, Lose, CTA
        EnsureTopCanvas(winObject);
        EnsureTopCanvas(loseObject);
        EnsureTopCanvas(midGameCTA);

        // 1. Đảm bảo Win, Lose và Mid-game CTA ở trạng thái active = false ban đầu
        if (winObject != null) winObject.SetActive(false);
        if (loseObject != null) loseObject.SetActive(false);
        if (midGameCTA != null) midGameCTA.SetActive(false);

        // Lưu lại base scale gốc của 2 logo CTA nếu có
        if (ctaLogo1 != null) cta1BaseScale = ctaLogo1.localScale;
        if (ctaLogo2 != null) cta2BaseScale = ctaLogo2.localScale;
    }

    private void Start()
    {
        // 2. Bắt đầu hiệu ứng Idle nhấp nháy / co giãn cho 2 logo CTA
        StartIdleAnimations();

        // 3. Đăng ký lắng nghe sự kiện từ LevelHeaderUI
        if (LevelHeaderUI.Instance != null)
        {
            LevelHeaderUI.Instance.OnStepChanged += HandleStepProgress;
            LevelHeaderUI.Instance.OnTimeEnded += HandleTimeEnded;
        }
    }

    private void OnDestroy()
    {
        if (LevelHeaderUI.Instance != null)
        {
            LevelHeaderUI.Instance.OnStepChanged -= HandleStepProgress;
            LevelHeaderUI.Instance.OnTimeEnded -= HandleTimeEnded;
        }
    }

    // --- Xử lý sự kiện Step & Timer ---

    private void HandleStepProgress(int current, int max)
    {
        OnStepUpdated(current, max);
    }

    private void HandleTimeEnded()
    {
        // Khi hết giờ, nếu chưa thắng thì bật Lose
        if (!isGameEnded)
        {
            TriggerLose();
        }
    }

    /// <summary>
    /// Gọi khi số step tăng lên. Kiểm tra bật Mid-Game CTA và kiểm tra Win.
    /// </summary>
    public void OnStepUpdated(int currentStep, int maxSteps)
    {
        // Kiểm tra bật Mid-Game CTA nếu chạm step chỉ định
        if (showCTAAtStep > 0 && currentStep >= showCTAAtStep && !midCtaShown)
        {
            midCtaShown = true;
            if (midGameCTA != null)
            {
                ApplyPositionAndLayer(midGameCTA);
                midGameCTA.SetActive(true);
                Debug.Log($"[GameEndingAndCTAController] Mid-Game CTA activated at step {currentStep}!");
            }
        }

        // Kiểm tra đủ steps để thắng
        if (maxSteps > 0 && currentStep >= maxSteps && !isGameEnded)
        {
            TriggerWin();
        }
    }

    /// <summary>
    /// Bật màn hình Win và chạy animation phóng to Win Title từ 0.3 lên 1.0
    /// </summary>
    public void TriggerWin()
    {
        if (isGameEnded) return;
        isGameEnded = true;
        isWin = true;

        Debug.Log("[GameEndingAndCTAController] WIN TRIGGERED!");

        if (loseObject != null) loseObject.SetActive(false);
        if (winObject != null)
        {
            ApplyPositionAndLayer(winObject);
            winObject.SetActive(true);
        }

        // Ẩn bàn tay tutorial nếu vẫn còn hiện
        TutorialHandController.Instance?.DismissHand();

        // Hiệu ứng title: Scale từ 0.3 lên 1.0 (kèm bounce nhẹ)
        if (winTitle != null)
        {
            if (winTitleAnim != null) StopCoroutine(winTitleAnim);
            winTitleAnim = StartCoroutine(AnimateScaleBounce(winTitle, winStartScale, targetTitleScale, titleAnimDuration));
        }

        // Thông báo Luna Playable Bridge nếu có
        LunaPlayableBridge.Instance?.OnGameWin();
    }

    /// <summary>
    /// Bật màn hình Lose và chạy animation thu nhỏ Lose Title từ 1.8 về 1.0
    /// </summary>
    public void TriggerLose()
    {
        if (isGameEnded) return;
        isGameEnded = true;
        isWin = false;

        Debug.Log("[GameEndingAndCTAController] LOSE TRIGGERED (Time Up)!");

        if (winObject != null) winObject.SetActive(false);
        if (loseObject != null)
        {
            ApplyPositionAndLayer(loseObject);
            loseObject.SetActive(true);
        }

        // Ẩn bàn tay tutorial nếu vẫn còn hiện
        TutorialHandController.Instance?.DismissHand();

        // Hiệu ứng title: Scale từ 1.8 về 1.0 (kèm impact đập xuống)
        if (loseTitle != null)
        {
            if (loseTitleAnim != null) StopCoroutine(loseTitleAnim);
            loseTitleAnim = StartCoroutine(AnimateScaleImpact(loseTitle, loseStartScale, targetTitleScale, titleAnimDuration));
        }

        // Thông báo Luna Playable Bridge nếu có
        LunaPlayableBridge.Instance?.OnGameLose();
    }

    /// <summary>
    /// Đẩy popup lên trên cùng của Canvas (SetAsLastSibling) và đẩy vị trí Y nếu có cấu hình posYOffset
    /// </summary>
    private void ApplyPositionAndLayer(GameObject obj)
    {
        if (obj == null) return;

        // 1. Đảm bảo Canvas sorting layer/order cao nhất để đè lên Spine mesh và các prefab khác
        EnsureTopCanvas(obj);

        // 2. Đẩy lên layer trên cùng của Canvas
        if (bringToFrontOnShow)
        {
            obj.transform.SetAsLastSibling();
        }

        // 3. Dịch chuyển vị trí Y lên trên
        if (posYOffset != 0f)
        {
            RectTransform rect = obj.GetComponent<RectTransform>();
            if (rect != null)
            {
                if (obj == winObject)
                {
                    if (!winPosRecorded) { winInitialAnchoredPos = rect.anchoredPosition; winPosRecorded = true; }
                    rect.anchoredPosition = winInitialAnchoredPos + new Vector2(0f, posYOffset);
                }
                else if (obj == loseObject)
                {
                    if (!losePosRecorded) { loseInitialAnchoredPos = rect.anchoredPosition; losePosRecorded = true; }
                    rect.anchoredPosition = loseInitialAnchoredPos + new Vector2(0f, posYOffset);
                }
                else
                {
                    rect.anchoredPosition = new Vector2(rect.anchoredPosition.x, rect.anchoredPosition.y + posYOffset);
                }
            }
            else
            {
                Vector3 pos = obj.transform.localPosition;
                pos.y += posYOffset;
                obj.transform.localPosition = pos;
            }
        }
    }

    /// <summary>
    /// Đảm bảo popup có Canvas con với overrideSorting = true và Sorting Layer/Order cao nhất
    /// để luôn hiển thị đè lên trên tất cả các Spine MeshRenderers và Prefab gameplay.
    /// </summary>
    public void EnsureTopCanvas(GameObject obj)
    {
        if (obj == null) return;

        Canvas c = obj.GetComponent<Canvas>();
        if (c == null) c = obj.AddComponent<Canvas>();
        c.overrideSorting = true;
        if (!string.IsNullOrEmpty(topSortingLayerName))
        {
            c.sortingLayerName = topSortingLayerName;
        }
        c.sortingOrder = topSortingOrder;

        UnityEngine.UI.GraphicRaycaster gr = obj.GetComponent<UnityEngine.UI.GraphicRaycaster>();
        if (gr == null) obj.AddComponent<UnityEngine.UI.GraphicRaycaster>();
    }

    // --- Animation Co-routines ---

    /// <summary>
    /// Hiệu ứng scale từ startScale lên targetScale với độ nảy nhẹ (Ease Out Back)
    /// </summary>
    private IEnumerator AnimateScaleBounce(Transform target, float start, float end, float duration)
    {
        if (target == null) yield break;

        target.localScale = Vector3.one * start;
        float elapsed = 0f;

        while (elapsed < duration)
        {
            elapsed += Time.unscaledDeltaTime;
            float t = Mathf.Clamp01(elapsed / duration);

            // EaseOutBack formula for juicy pop-up feel
            float c1 = 1.70158f;
            float c3 = c1 + 1f;
            float eased = 1f + c3 * Mathf.Pow(t - 1f, 3f) + c1 * Mathf.Pow(t - 1f, 2f);

            float currentScale = Mathf.LerpUnclamped(start, end, eased);
            target.localScale = Vector3.one * currentScale;

            yield return null;
        }

        target.localScale = Vector3.one * end;
    }

    /// <summary>
    /// Hiệu ứng scale từ startScale (lớn) dập xuống targetScale (Ease Out Cubic)
    /// </summary>
    private IEnumerator AnimateScaleImpact(Transform target, float start, float end, float duration)
    {
        if (target == null) yield break;

        target.localScale = Vector3.one * start;
        float elapsed = 0f;

        while (elapsed < duration)
        {
            elapsed += Time.unscaledDeltaTime;
            float t = Mathf.Clamp01(elapsed / duration);

            // EaseOutCubic formula
            float eased = 1f - Mathf.Pow(1f - t, 3f);

            float currentScale = Mathf.Lerp(start, end, eased);
            target.localScale = Vector3.one * currentScale;

            yield return null;
        }

        target.localScale = Vector3.one * end;
    }

    /// <summary>
    /// Chạy hiệu ứng Idle nhấp nháy / co giãn cho 2 logo CTA
    /// </summary>
    public void StartIdleAnimations()
    {
        if (ctaLogo1 != null)
        {
            cta1BaseScale = ctaLogo1.localScale;
            if (cta1Idle != null) StopCoroutine(cta1Idle);
            cta1Idle = StartCoroutine(IdlePulseRoutine(ctaLogo1, cta1BaseScale));
        }

        if (ctaLogo2 != null)
        {
            cta2BaseScale = ctaLogo2.localScale;
            if (cta2Idle != null) StopCoroutine(cta2Idle);
            cta2Idle = StartCoroutine(IdlePulseRoutine(ctaLogo2, cta2BaseScale));
        }
    }

    private IEnumerator IdlePulseRoutine(Transform target, Vector3 baseScale)
    {
        if (target == null) yield break;

        while (true)
        {
            if (target != null && target.gameObject.activeInHierarchy)
            {
                // Sóng hình sin mềm mại tạo hiệu ứng breathing / nhấp nháy
                float wave = Mathf.Sin(Time.unscaledTime * idlePulseSpeed) * idlePulseScale;
                target.localScale = baseScale * (1f + wave);
            }
            yield return null;
        }
    }
}
