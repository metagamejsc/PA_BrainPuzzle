using System.Collections;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Lose screen FX (plays every time the Lose panel is enabled):
///  1. Scratch: the claw-mark image is revealed left -> right very fast (the marks run
///     top-left -> bottom-right, so it reads like claws dragging across the screen),
///     with a small scale punch and a screen shake.
///  2. Red border: strong flash on impact, then keeps pulsing its alpha (blinking red edges).
/// Uses unscaled time.
/// </summary>
public class UILoseFx : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private Image scratch;          // "effect"
    [SerializeField] private Image redBorder;        // "redd"
    [Tooltip("What gets shaken on impact (defaults to this panel).")]
    [SerializeField] private RectTransform shakeTarget;

    [Header("Scratch")]
    [SerializeField] private float scratchDelay = 0.05f;
    [SerializeField] private float scratchDuration = 0.18f;
    [SerializeField] private float scratchPunchScale = 1.12f;
    [SerializeField] private float punchDuration = 0.25f;

    [Header("Shake")]
    [SerializeField] private float shakeDuration = 0.3f;
    [SerializeField] private float shakeStrength = 28f;

    [Header("Red border blink")]
    [SerializeField] private float blinkMinAlpha = 0.25f;
    [SerializeField] private float blinkMaxAlpha = 1f;
    [SerializeField] private float blinkPeriod = 0.8f;

    /// <summary>Time (from panel enable) when the claws finish revealing. Other anims (title) start after this.</summary>
    public float ScratchEndTime => scratchDelay + scratchDuration;

    
private Vector2 shakeBasePos;
    private Vector3 scratchBaseScale = Vector3.one;
    private Coroutine scratchRoutine, blinkRoutine, shakeRoutine;

    private void Awake()
    {
        if (scratch == null) { var t = transform.Find("effect"); if (t) scratch = t.GetComponent<Image>(); }
        if (redBorder == null) { var t = transform.Find("redd"); if (t) redBorder = t.GetComponent<Image>(); }
        if (shakeTarget == null) shakeTarget = (RectTransform)transform;

        shakeBasePos = shakeTarget.anchoredPosition;
        if (scratch != null)
        {
            scratchBaseScale = scratch.rectTransform.localScale;
            scratch.type = Image.Type.Filled;
            scratch.fillMethod = Image.FillMethod.Horizontal;
            scratch.fillOrigin = 0; // 0 = Left for Horizontal fill (Luna doesn't support Image.OriginHorizontal)
            scratch.raycastTarget = false;
        }
        if (redBorder != null) redBorder.raycastTarget = false;
    }

    private void OnEnable()
    {
        StopAll();
        if (scratch != null) { scratch.fillAmount = 0f; scratch.rectTransform.localScale = scratchBaseScale; }
        SetAlpha(redBorder, 0f);

        scratchRoutine = StartCoroutine(ScratchIn());
    }

    private void OnDisable()
    {
        StopAll();
        if (shakeTarget != null) shakeTarget.anchoredPosition = shakeBasePos;
    }

    private void StopAll()
    {
        if (scratchRoutine != null) StopCoroutine(scratchRoutine);
        if (blinkRoutine != null) StopCoroutine(blinkRoutine);
        if (shakeRoutine != null) StopCoroutine(shakeRoutine);
        scratchRoutine = blinkRoutine = shakeRoutine = null;
    }

    private IEnumerator ScratchIn()
    {
        yield return Wait(scratchDelay);

        // Impact: shake + red flash start together with the claws.
        shakeRoutine = StartCoroutine(Shake());
        blinkRoutine = StartCoroutine(BlinkRed());

        // Claws drag across the screen (fast, ease-out) with a small scale punch.
        float t = 0f;
        float total = Mathf.Max(scratchDuration, punchDuration);
        while (t < total)
        {
            t += Time.unscaledDeltaTime;
            if (scratch != null)
            {
                float f = Mathf.Clamp01(t / scratchDuration);
                scratch.fillAmount = 1f - (1f - f) * (1f - f); // ease-out

                float p = Mathf.Clamp01(t / punchDuration);
                float s = Mathf.Lerp(scratchPunchScale, 1f, 1f - Mathf.Pow(1f - p, 3f));
                scratch.rectTransform.localScale = scratchBaseScale * s;
            }
            yield return null;
        }

        if (scratch != null)
        {
            scratch.fillAmount = 1f;
            scratch.rectTransform.localScale = scratchBaseScale;
        }
        scratchRoutine = null;
    }

    private IEnumerator Shake()
    {
        float t = 0f;
        while (t < shakeDuration)
        {
            t += Time.unscaledDeltaTime;
            float damper = 1f - Mathf.Clamp01(t / shakeDuration);
            shakeTarget.anchoredPosition = shakeBasePos + Random.insideUnitCircle * shakeStrength * damper;
            yield return null;
        }
        shakeTarget.anchoredPosition = shakeBasePos;
        shakeRoutine = null;
    }

    private IEnumerator BlinkRed()
    {
        // Hard flash on impact, then fade into the steady pulse.
        SetAlpha(redBorder, 1f);
        float t = 0f;
        while (true)
        {
            t += Time.unscaledDeltaTime;
            float wave = 0.5f + 0.5f * Mathf.Cos(t * Mathf.PI * 2f / Mathf.Max(0.05f, blinkPeriod)); // starts at 1
            SetAlpha(redBorder, Mathf.Lerp(blinkMinAlpha, blinkMaxAlpha, wave));
            yield return null;
        }
    }

    private static void SetAlpha(Graphic g, float a)
    {
        if (g == null) return;
        Color c = g.color;
        c.a = a;
        g.color = c;
    }

    private static IEnumerator Wait(float seconds)
    {
        float t = 0f;
        while (t < seconds)
        {
            t += Time.unscaledDeltaTime;
            yield return null;
        }
    }
}
