using UnityEngine;

/// <summary>
/// Hiệu ứng Idle nhấp nháy / breathing pulse cho UI element (như Logo hoặc Button CTA).
/// Có thể gắn trực tiếp lên Logo hoặc Button CTA.
/// </summary>
public class UIIdlePulse : MonoBehaviour
{
    [Tooltip("Scale nhỏ nhất trong chu kỳ pulse")]
    [SerializeField] private float minScale = 0.95f;

    [Tooltip("Scale lớn nhất trong chu kỳ pulse (khuyên dùng 1.05 cho Logo, 1.08 cho CTA)")]
    [SerializeField] private float maxScale = 1.08f;

    [Tooltip("Tốc độ lặp lại của nhịp pulse")]
    [SerializeField] private float speed = 2.5f;

    [Tooltip("Sử dụng Unscaled Time để animation không bị dừng khi timeScale = 0")]
    [SerializeField] private bool useUnscaledTime = true;

    private Vector3 _baseScale = Vector3.one;
    private bool _baseScaleRecorded = false;

    private void Awake()
    {
        RecordBaseScale();
    }

    private void OnEnable()
    {
        RecordBaseScale();
    }

    private void RecordBaseScale()
    {
        if (!_baseScaleRecorded)
        {
            _baseScale = transform.localScale == Vector3.zero ? Vector3.one : transform.localScale;
            _baseScaleRecorded = true;
        }
    }

    private void Update()
    {
        if (!_baseScaleRecorded) RecordBaseScale();

        float time = useUnscaledTime ? Time.unscaledTime : Time.time;
        float sine = (Mathf.Sin(time * speed) + 1f) * 0.5f;
        float factor = Mathf.Lerp(minScale, maxScale, sine);

        transform.localScale = _baseScale * factor;
    }

    private void OnDisable()
    {
        if (_baseScaleRecorded)
        {
            transform.localScale = _baseScale;
        }
    }
}
