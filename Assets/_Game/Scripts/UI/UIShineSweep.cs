using System.Collections;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Shine sweep for a CTA button: moves a light streak across its parent from left to right,
/// waits, then repeats. The parent (button) should have a Mask so the streak is clipped
/// to the button's shape. Uses unscaled time so it keeps running if the game is paused.
/// </summary>
[RequireComponent(typeof(RectTransform))]
public class UIShineSweep : MonoBehaviour
{
    [Header("Motion")]
    [SerializeField] private float sweepDuration = 0.55f;
    [SerializeField] private float interval = 1.2f;
    [SerializeField] private float startDelay = 0.3f;
    [Tooltip("Tilt of the streak in degrees (diagonal shine looks more natural).")]
    [SerializeField] private float tiltAngle = -20f;

    [Header("Shape")]
    [Tooltip("Streak width in UI units.")]
    [SerializeField] private float streakWidth = 70f;
    [Tooltip("Streak height relative to the parent's height (>1 so the tilted streak covers the button).")]
    [SerializeField] private float heightMultiplier = 1.4f;
    [Range(0f, 1f)] [SerializeField] private float maxAlpha = 0.85f;

    private RectTransform rect;
    private RectTransform parentRect;
    private Graphic graphic;
    private Coroutine routine;

    private void Awake()
    {
        rect = (RectTransform)transform;
        parentRect = transform.parent as RectTransform;
        graphic = GetComponent<Graphic>();
        if (graphic != null) graphic.raycastTarget = false; // never block the button click
    }

    private void OnEnable()
    {
        if (routine != null) StopCoroutine(routine);
        routine = StartCoroutine(SweepLoop());
    }

    private void OnDisable()
    {
        if (routine != null) StopCoroutine(routine);
        routine = null;
    }

    private IEnumerator SweepLoop()
    {
        SetupShape();
        SetX(StartX());
        SetAlpha(0f);

        if (startDelay > 0f) yield return Wait(startDelay);

        while (true)
        {
            SetupShape(); // parent may be scaled/resized by its own pop-in animation
            float from = StartX();
            float to = -from;
            float t = 0f;

            while (t < sweepDuration)
            {
                t += Time.unscaledDeltaTime;
                float p = Mathf.Clamp01(t / sweepDuration);
                float eased = p * p * (3f - 2f * p); // smoothstep
                SetX(Mathf.Lerp(from, to, eased));
                SetAlpha(maxAlpha * Mathf.Sin(p * Mathf.PI)); // fade in/out at the edges
                yield return null;
            }

            SetAlpha(0f);
            yield return Wait(interval);
        }
    }

    private IEnumerator Wait(float seconds)
    {
        float t = 0f;
        while (t < seconds)
        {
            t += Time.unscaledDeltaTime;
            yield return null;
        }
    }

    private void SetupShape()
    {
        if (parentRect == null) return;
        rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
        rect.pivot = new Vector2(0.5f, 0.5f);
        rect.sizeDelta = new Vector2(streakWidth, parentRect.rect.height * heightMultiplier);
        rect.localRotation = Quaternion.Euler(0f, 0f, tiltAngle);
    }

    private float StartX()
    {
        float halfParent = parentRect != null ? parentRect.rect.width * 0.5f : 300f;
        // Extra margin so the tilted streak is fully outside the button at both ends.
        float tiltExtra = Mathf.Abs(Mathf.Tan(tiltAngle * Mathf.Deg2Rad)) * rect.sizeDelta.y * 0.5f;
        return -(halfParent + streakWidth + tiltExtra);
    }

    private void SetX(float x)
    {
        Vector2 p = rect.anchoredPosition;
        p.x = x;
        rect.anchoredPosition = p;
    }

    private void SetAlpha(float a)
    {
        if (graphic == null) return;
        Color c = graphic.color;
        c.a = a;
        graphic.color = c;
    }
}
