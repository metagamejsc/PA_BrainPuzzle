using System.Collections;
using UnityEngine;

/// <summary>
/// Hiệu ứng xuất hiện (Scale Entrance) cho UI element.
/// Có thể gắn trực tiếp lên Title Win (scale từ 0.3 lên 1) hoặc Title Lose (scale từ 1.8 về 1).
/// Tự động chạy khi GameObject được SetActive(true).
/// </summary>
public class UIEntranceScale : MonoBehaviour
{
    public enum PresetType
    {
        Custom,
        WinTitle_03_to_1,
        LoseTitle_18_to_1
    }

    [SerializeField] private PresetType preset = PresetType.Custom;

    [Tooltip("Tỷ lệ scale bắt đầu (so với scale gốc)")]
    [SerializeField] private float startScale = 0.3f;

    [Tooltip("Tỷ lệ scale kết thúc (so với scale gốc)")]
    [SerializeField] private float targetScale = 1.0f;

    [Tooltip("Thời gian hiệu ứng diễn ra (giây)")]
    [SerializeField] private float duration = 0.45f;

    [Tooltip("Sử dụng Unscaled Time để không bị ảnh hưởng bởi timeScale")]
    [SerializeField] private bool useUnscaledTime = true;

    [SerializeField] private UIEffectsController.EaseType ease = UIEffectsController.EaseType.EaseOutBack;

    private Vector3 _baseScale = Vector3.one;
    private bool _baseScaleRecorded = false;
    private Coroutine _animCoroutine;

    private void Awake()
    {
        ApplyPreset();
        RecordBaseScale();
    }

    private void OnValidate()
    {
        ApplyPreset();
    }

    private void ApplyPreset()
    {
        if (preset == PresetType.WinTitle_03_to_1)
        {
            startScale = 0.3f;
            targetScale = 1.0f;
            ease = UIEffectsController.EaseType.EaseOutBack;
        }
        else if (preset == PresetType.LoseTitle_18_to_1)
        {
            startScale = 1.8f;
            targetScale = 1.0f;
            ease = UIEffectsController.EaseType.EaseOutBack;
        }
    }

    private void RecordBaseScale()
    {
        if (!_baseScaleRecorded)
        {
            _baseScale = transform.localScale == Vector3.zero ? Vector3.one : transform.localScale;
            _baseScaleRecorded = true;
        }
    }

    private void OnEnable()
    {
        RecordBaseScale();
        Play();
    }

    public void Play()
    {
        if (_animCoroutine != null) StopCoroutine(_animCoroutine);
        _animCoroutine = StartCoroutine(AnimateEntrance());
    }

    private IEnumerator AnimateEntrance()
    {
        transform.localScale = _baseScale * startScale;

        if (duration <= 0f)
        {
            transform.localScale = _baseScale * targetScale;
            yield break;
        }

        float elapsed = 0f;
        while (elapsed < duration)
        {
            elapsed += useUnscaledTime ? Time.unscaledDeltaTime : Time.deltaTime;
            float progress = Mathf.Clamp01(elapsed / duration);
            float eased = EvaluateEase(ease, progress);

            transform.localScale = _baseScale * Mathf.LerpUnclamped(startScale, targetScale, eased);
            yield return null;
        }

        transform.localScale = _baseScale * targetScale;
        _animCoroutine = null;
    }

    private float EvaluateEase(UIEffectsController.EaseType easeType, float t)
    {
        switch (easeType)
        {
            case UIEffectsController.EaseType.EaseOutBack:
                float c1 = 1.70158f;
                float c3 = c1 + 1f;
                float p = t - 1f;
                return 1f + c3 * p * p * p + c1 * p * p;

            case UIEffectsController.EaseType.EaseOutCubic:
                return 1f - Mathf.Pow(1f - t, 3f);

            case UIEffectsController.EaseType.SmoothStep:
                return Mathf.SmoothStep(0f, 1f, t);

            case UIEffectsController.EaseType.Linear:
            default:
                return t;
        }
    }

    private void OnDisable()
    {
        if (_animCoroutine != null)
        {
            StopCoroutine(_animCoroutine);
            _animCoroutine = null;
        }

        if (_baseScaleRecorded)
        {
            transform.localScale = _baseScale;
        }
    }
}
