using System.Collections;
using UnityEngine;

/// <summary>
/// Controller điều khiển hiệu ứng UI:
/// - Hiệu ứng xuất hiện cho Title Win (scale 0.3 -> 1.0)
/// - Hiệu ứng xuất hiện cho Title Lose (scale 1.8 -> 1.0)
/// - Hiệu ứng Idle (nhấp nháy / breathing pulse) cho Logo và Button CTA
/// 
/// Không tự động tìm Object; gán trực tiếp Transform/GameObject vào Inspector.
/// Không can thiệp LunaController.
/// </summary>
public class UIEffectsController : MonoBehaviour
{
    public enum EaseType
    {
        EaseOutBack,
        EaseOutCubic,
        EaseOutBounce,
        Linear,
        SmoothStep
    }

    [Header("--- TITLE WIN APPEAR EFFECT ---")]
    [Tooltip("Kéo Title Win vào đây")]
    [SerializeField] private Transform winTitle;
    [Tooltip("Tỷ lệ scale ban đầu khi xuất hiện (mặc định 0.3)")]
    [SerializeField] private float winStartScale = 0.3f;
    [Tooltip("Tỷ lệ scale đích khi xuất hiện xong (mặc định 1.0)")]
    [SerializeField] private float winTargetScale = 1.0f;
    [Tooltip("Thời gian xuất hiện của Title Win (giây)")]
    [SerializeField] private float winDuration = 0.45f;
    [Tooltip("Kiểu easing khi xuất hiện")]
    [SerializeField] private EaseType winEase = EaseType.EaseOutBack;

    [Header("--- TITLE LOSE APPEAR EFFECT ---")]
    [Tooltip("Kéo Title Lose vào đây")]
    [SerializeField] private Transform loseTitle;
    [Tooltip("Tỷ lệ scale ban đầu khi xuất hiện (mặc định 1.8)")]
    [SerializeField] private float loseStartScale = 1.8f;
    [Tooltip("Tỷ lệ scale đích khi xuất hiện xong (mặc định 1.0)")]
    [SerializeField] private float loseTargetScale = 1.0f;
    [Tooltip("Thời gian xuất hiện của Title Lose (giây)")]
    [SerializeField] private float loseDuration = 0.45f;
    [Tooltip("Kiểu easing khi xuất hiện")]
    [SerializeField] private EaseType loseEase = EaseType.EaseOutBack;

    [Header("--- LOGO IDLE EFFECT ---")]
    [Tooltip("Kéo Logo vào đây")]
    [SerializeField] private Transform logo;
    [Tooltip("Scale nhỏ nhất trong chu kỳ Idle")]
    [SerializeField] private float logoMinScale = 0.95f;
    [Tooltip("Scale lớn nhất trong chu kỳ Idle")]
    [SerializeField] private float logoMaxScale = 1.05f;
    [Tooltip("Tốc độ Idle của Logo")]
    [SerializeField] private float logoIdleSpeed = 2.0f;

    [Header("--- BUTTON CTA IDLE EFFECT ---")]
    [Tooltip("Kéo Button CTA vào đây")]
    [SerializeField] private Transform ctaButton;
    [Tooltip("Scale nhỏ nhất trong chu kỳ Idle")]
    [SerializeField] private float ctaMinScale = 0.95f;
    [Tooltip("Scale lớn nhất trong chu kỳ Idle")]
    [SerializeField] private float ctaMaxScale = 1.08f;
    [Tooltip("Tốc độ Idle của Button CTA")]
    [SerializeField] private float ctaIdleSpeed = 2.5f;

    // Lưu lại scale gốc ban đầu trên Inspector/Scene để tránh bị bóp méo tỷ lệ thiết kế
    private Vector3 _winBaseScale = Vector3.one;
    private Vector3 _loseBaseScale = Vector3.one;
    private Vector3 _logoBaseScale = Vector3.one;
    private Vector3 _ctaBaseScale = Vector3.one;

    private bool _winBaseRecorded = false;
    private bool _loseBaseRecorded = false;
    private bool _logoBaseRecorded = false;
    private bool _ctaBaseRecorded = false;

    private bool _winWasActive = false;
    private bool _loseWasActive = false;

    private Coroutine _winAnimCoroutine;
    private Coroutine _loseAnimCoroutine;

    private void Awake()
    {
        RecordBaseScales();
    }

    private void OnEnable()
    {
        RecordBaseScales();
        // Kiểm tra ngay nếu winTitle hoặc loseTitle đang active sẵn
        CheckActiveTransitions();
    }

    private void RecordBaseScales()
    {
        if (winTitle != null && !_winBaseRecorded)
        {
            _winBaseScale = winTitle.localScale == Vector3.zero ? Vector3.one : winTitle.localScale;
            _winBaseRecorded = true;
        }

        if (loseTitle != null && !_loseBaseRecorded)
        {
            _loseBaseScale = loseTitle.localScale == Vector3.zero ? Vector3.one : loseTitle.localScale;
            _loseBaseRecorded = true;
        }

        if (logo != null && !_logoBaseRecorded)
        {
            _logoBaseScale = logo.localScale == Vector3.zero ? Vector3.one : logo.localScale;
            _logoBaseRecorded = true;
        }

        if (ctaButton != null && !_ctaBaseRecorded)
        {
            _ctaBaseScale = ctaButton.localScale == Vector3.zero ? Vector3.one : ctaButton.localScale;
            _ctaBaseRecorded = true;
        }
    }

    private void Update()
    {
        CheckActiveTransitions();
        UpdateIdleAnimations();
    }

    private void CheckActiveTransitions()
    {
        // Tự động kích hoạt hiệu ứng xuất hiện khi Title Win được bật active
        if (winTitle != null)
        {
            bool isActive = winTitle.gameObject.activeInHierarchy;
            if (isActive && !_winWasActive)
            {
                PlayWinTitle();
            }
            else if (!isActive && _winWasActive)
            {
                if (_winAnimCoroutine != null)
                {
                    StopCoroutine(_winAnimCoroutine);
                    _winAnimCoroutine = null;
                }
            }
            _winWasActive = isActive;
        }

        // Tự động kích hoạt hiệu ứng xuất hiện khi Title Lose được bật active
        if (loseTitle != null)
        {
            bool isActive = loseTitle.gameObject.activeInHierarchy;
            if (isActive && !_loseWasActive)
            {
                PlayLoseTitle();
            }
            else if (!isActive && _loseWasActive)
            {
                if (_loseAnimCoroutine != null)
                {
                    StopCoroutine(_loseAnimCoroutine);
                    _loseAnimCoroutine = null;
                }
            }
            _loseWasActive = isActive;
        }
    }

    /// <summary>
    /// Kích hoạt hiệu ứng xuất hiện cho Win Title (scale từ 0.3 lên 1.0)
    /// </summary>
    public void PlayWinTitle()
    {
        if (winTitle == null) return;
        if (!_winBaseRecorded) RecordBaseScales();

        if (_winAnimCoroutine != null) StopCoroutine(_winAnimCoroutine);
        _winAnimCoroutine = StartCoroutine(AnimateScale(winTitle, _winBaseScale, winStartScale, winTargetScale, winDuration, winEase));
    }

    /// <summary>
    /// Kích hoạt hiệu ứng xuất hiện cho Lose Title (scale từ 1.8 về 1.0)
    /// </summary>
    public void PlayLoseTitle()
    {
        if (loseTitle == null) return;
        if (!_loseBaseRecorded) RecordBaseScales();

        if (_loseAnimCoroutine != null) StopCoroutine(_loseAnimCoroutine);
        _loseAnimCoroutine = StartCoroutine(AnimateScale(loseTitle, _loseBaseScale, loseStartScale, loseTargetScale, loseDuration, loseEase));
    }

    private void UpdateIdleAnimations()
    {
        // Idle animation cho Logo
        if (logo != null && logo.gameObject.activeInHierarchy)
        {
            if (!_logoBaseRecorded) RecordBaseScales();
            float t = (Mathf.Sin(Time.unscaledTime * logoIdleSpeed) + 1f) * 0.5f;
            float factor = Mathf.Lerp(logoMinScale, logoMaxScale, t);
            logo.localScale = _logoBaseScale * factor;
        }

        // Idle animation cho Button CTA
        if (ctaButton != null && ctaButton.gameObject.activeInHierarchy)
        {
            if (!_ctaBaseRecorded) RecordBaseScales();
            float t = (Mathf.Sin(Time.unscaledTime * ctaIdleSpeed) + 1f) * 0.5f;
            float factor = Mathf.Lerp(ctaMinScale, ctaMaxScale, t);
            ctaButton.localScale = _ctaBaseScale * factor;
        }
    }

    private IEnumerator AnimateScale(Transform target, Vector3 baseScale, float startScaleMult, float targetScaleMult, float duration, EaseType ease)
    {
        if (target == null) yield break;

        target.localScale = baseScale * startScaleMult;
        if (duration <= 0f)
        {
            target.localScale = baseScale * targetScaleMult;
            yield break;
        }

        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += Time.unscaledDeltaTime;
            float linearProgress = Mathf.Clamp01(elapsed / duration);
            float easedProgress = EvaluateEase(ease, linearProgress);

            float currentMult = Mathf.LerpUnclamped(startScaleMult, targetScaleMult, easedProgress);
            if (target != null)
            {
                target.localScale = baseScale * currentMult;
            }
            yield return null;
        }

        if (target != null)
        {
            target.localScale = baseScale * targetScaleMult;
        }
    }

    private float EvaluateEase(EaseType ease, float t)
    {
        switch (ease)
        {
            case EaseType.EaseOutBack:
                float c1 = 1.70158f;
                float c3 = c1 + 1f;
                float p = t - 1f;
                return 1f + c3 * p * p * p + c1 * p * p;

            case EaseType.EaseOutCubic:
                return 1f - Mathf.Pow(1f - t, 3f);

            case EaseType.EaseOutBounce:
                return EaseOutBounce(t);

            case EaseType.SmoothStep:
                return Mathf.SmoothStep(0f, 1f, t);

            case EaseType.Linear:
            default:
                return t;
        }
    }

    private float EaseOutBounce(float x)
    {
        const float n1 = 7.5625f;
        const float d1 = 2.75f;

        if (x < 1f / d1)
        {
            return n1 * x * x;
        }
        else if (x < 2f / d1)
        {
            x -= 1.5f / d1;
            return n1 * x * x + 0.75f;
        }
        else if (x < 2.5f / d1)
        {
            x -= 2.25f / d1;
            return n1 * x * x + 0.9375f;
        }
        else
        {
            x -= 2.625f / d1;
            return n1 * x * x + 0.984375f;
        }
    }

    private void OnDisable()
    {
        if (_winAnimCoroutine != null)
        {
            StopCoroutine(_winAnimCoroutine);
            _winAnimCoroutine = null;
        }

        if (_loseAnimCoroutine != null)
        {
            StopCoroutine(_loseAnimCoroutine);
            _loseAnimCoroutine = null;
        }

        // Reset scale về gốc khi disable để tránh lưu scale đang tween
        if (winTitle != null && _winBaseRecorded) winTitle.localScale = _winBaseScale;
        if (loseTitle != null && _loseBaseRecorded) loseTitle.localScale = _loseBaseScale;
        if (logo != null && _logoBaseRecorded) logo.localScale = _logoBaseScale;
        if (ctaButton != null && _ctaBaseRecorded) ctaButton.localScale = _ctaBaseScale;

        _winWasActive = false;
        _loseWasActive = false;
    }
}
