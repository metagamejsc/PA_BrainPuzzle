using System.Collections;
using UnityEngine;
using UnityEngine.UI;

namespace EscapeBigHead
{
    /// <summary>
    /// TutorialHandController: Huong dan choi (Tutorial Hand) cho Luna Playable Ads.
    /// Mo phong thao tac cham va keo vat pham tu vi tri A sang vi tri B.
    /// Tu dong day ban tay len layer cao nhat de khong bi che khuat,
    /// va tu dong bien mat ngay khi nguoi choi click / bat dau tuong tac.
    /// Toi uu WebGL / Luna, Zero-GC, khong dung thu vien ngoai.
    /// </summary>
    public class TutorialHandController : MonoBehaviour
    {
        [Header("Targets (Diem A va Diem B)")]
        [Tooltip("Diem bat dau keo (Vat pham can keo)")]
        [SerializeField] private Transform targetA;

        [Tooltip("Diem dich den (Noi can tha vat pham)")]
        [SerializeField] private Transform targetB;

        [Header("Hand Visual & Layer Settings")]
        [Tooltip("Tu dong day ban tay len layer cao nhat de khong bi che")]
        [SerializeField] private bool autoBringToFront = true;
        [SerializeField] private int sortingOrder = 200;
        [SerializeField] private Vector3 handOffset = new Vector3(0.2f, -0.3f, 0f);

        [Header("Animation Settings")]
        [SerializeField] private float moveDuration = 1.0f;
        [SerializeField] private float startDelay = 0.2f;
        [SerializeField] private float endDelay = 0.3f;
        [SerializeField] private bool usePressScaleEffect = true;
        [SerializeField] private float pressScaleMultiplier = 0.85f;

        [Header("Dismiss Settings")]
        [Tooltip("Bien mat ngay khi nguoi choi click/cham vao man hinh")]
        [SerializeField] private bool hideOnFirstClick = true;
        [SerializeField] private bool fadeOutOnHide = true;
        [SerializeField] private float fadeDuration = 0.25f;

        private Vector3 originalScale;
        private Coroutine tutorialCoroutine;
        private bool isDismissed = false;
        private CanvasGroup canvasGroup;
        private Graphic graphic;

        private void Awake()
        {
            originalScale = transform.localScale;

            if (autoBringToFront)
            {
                BringToFront();
            }

            // Dam bao hand khong chan click / raycastTarget de nguoi choi co the click xuyen qua
            var raw = GetComponent<RawImage>();
            if (raw != null) raw.raycastTarget = false;

            var img = GetComponent<Image>();
            if (img != null) img.raycastTarget = false;

            canvasGroup = GetComponent<CanvasGroup>();
            graphic = GetComponent<Graphic>();
        }

        private void Start()
        {
            if (targetA != null && targetB != null)
            {
                StartTutorial();
            }
        }

        private void Update()
        {
            if (isDismissed) return;

            // Kiem tra nguoi choi click / cham vao man hinh de tat tutorial
            if (hideOnFirstClick && (Input.GetMouseButtonDown(0) || Input.touchCount > 0))
            {
                DismissTutorial();
            }
        }

        public void SetTargets(Transform a, Transform b)
        {
            targetA = a;
            targetB = b;

            if (!isDismissed && gameObject.activeInHierarchy)
            {
                StartTutorial();
            }
        }

        public void StartTutorial()
        {
            if (isDismissed) return;

            if (tutorialCoroutine != null)
            {
                StopCoroutine(tutorialCoroutine);
            }

            gameObject.SetActive(true);
            tutorialCoroutine = StartCoroutine(TutorialLoopRoutine());
        }

        public void BringToFront()
        {
            // Neu la UI GameObject trong Canvas
            transform.SetAsLastSibling();

            var canvas = GetComponent<Canvas>();
            if (canvas == null && transform.parent != null && transform.parent.GetComponentInParent<Canvas>() != null)
            {
                canvas = gameObject.AddComponent<Canvas>();
            }

            if (canvas != null)
            {
                canvas.overrideSorting = true;
                canvas.sortingOrder = sortingOrder;
            }

            // Neu co SpriteRenderer (truong hop 2D World Space)
            var sr = GetComponent<SpriteRenderer>();
            if (sr != null)
            {
                sr.sortingOrder = sortingOrder;
            }
        }

        private IEnumerator TutorialLoopRoutine()
        {
            while (!isDismissed)
            {
                if (targetA == null || targetB == null)
                {
                    yield return null;
                    continue;
                }

                Vector3 startPos = GetTargetPosition(targetA) + handOffset;
                Vector3 endPos = GetTargetPosition(targetB) + handOffset;

                // 1. Dat vi tri tai A
                SetHandPosition(startPos);
                transform.localScale = originalScale;

                // Hien thi day du alpha neu co CanvasGroup
                SetAlpha(1.0f);

                yield return new WaitForSeconds(startDelay);
                if (isDismissed) yield break;

                // 2. Hieu ung nhan xuong (Press down)
                if (usePressScaleEffect)
                {
                    float scaleElapsed = 0f;
                    float scaleDuration = 0.15f;
                    Vector3 pressedScale = originalScale * pressScaleMultiplier;
                    while (scaleElapsed < scaleDuration)
                    {
                        scaleElapsed += Time.deltaTime;
                        float st = Mathf.Clamp01(scaleElapsed / scaleDuration);
                        transform.localScale = Vector3.Lerp(originalScale, pressedScale, st);
                        yield return null;
                        if (isDismissed) yield break;
                    }
                    transform.localScale = pressedScale;
                }

                // 3. Di chuyen tu A den B
                float moveElapsed = 0f;
                while (moveElapsed < moveDuration)
                {
                    moveElapsed += Time.deltaTime;
                    float t = Mathf.Clamp01(moveElapsed / moveDuration);

                    // SmoothStep de di chuyen muot ma tu nhien
                    float smoothT = Mathf.SmoothStep(0f, 1f, t);

                    // Cap nhat lai vi tri start/end phong truong hop vat the di chuyen
                    if (targetA != null) startPos = GetTargetPosition(targetA) + handOffset;
                    if (targetB != null) endPos = GetTargetPosition(targetB) + handOffset;

                    SetHandPosition(Vector3.Lerp(startPos, endPos, smoothT));
                    yield return null;
                    if (isDismissed) yield break;
                }

                SetHandPosition(endPos);

                // 4. Hieu ung nha tay (Release up)
                if (usePressScaleEffect)
                {
                    float scaleElapsed = 0f;
                    float scaleDuration = 0.15f;
                    Vector3 pressedScale = originalScale * pressScaleMultiplier;
                    while (scaleElapsed < scaleDuration)
                    {
                        scaleElapsed += Time.deltaTime;
                        float st = Mathf.Clamp01(scaleElapsed / scaleDuration);
                        transform.localScale = Vector3.Lerp(pressedScale, originalScale, st);
                        yield return null;
                        if (isDismissed) yield break;
                    }
                    transform.localScale = originalScale;
                }

                yield return new WaitForSeconds(endDelay);
                if (isDismissed) yield break;

                // 5. Fade out nhe truoc khi quay lai vi tri A
                float fadeOutElapsed = 0f;
                float fadeOutTime = 0.2f;
                while (fadeOutElapsed < fadeOutTime)
                {
                    fadeOutElapsed += Time.deltaTime;
                    float ft = 1f - Mathf.Clamp01(fadeOutElapsed / fadeOutTime);
                    SetAlpha(ft);
                    yield return null;
                    if (isDismissed) yield break;
                }

                yield return new WaitForSeconds(0.1f);
            }
        }

        private Vector3 GetTargetPosition(Transform target)
        {
            if (target == null) return transform.position;
            return target.position;
        }

        private void SetHandPosition(Vector3 worldPos)
        {
            // Giu nguyen truc Z cua ban tay de luon dung depth
            transform.position = new Vector3(worldPos.x, worldPos.y, transform.position.z);
        }

        private void SetAlpha(float alpha)
        {
            if (canvasGroup != null)
            {
                canvasGroup.alpha = alpha;
            }
            else if (graphic != null)
            {
                Color c = graphic.color;
                c.a = alpha;
                graphic.color = c;
            }
        }

        public void DismissTutorial()
        {
            if (isDismissed) return;
            isDismissed = true;

            if (tutorialCoroutine != null)
            {
                StopCoroutine(tutorialCoroutine);
                tutorialCoroutine = null;
            }

            if (fadeOutOnHide && gameObject.activeInHierarchy)
            {
                StartCoroutine(DismissFadeRoutine());
            }
            else
            {
                gameObject.SetActive(false);
            }
        }

        private IEnumerator DismissFadeRoutine()
        {
            float elapsed = 0f;
            while (elapsed < fadeDuration)
            {
                elapsed += Time.deltaTime;
                float alpha = 1f - Mathf.Clamp01(elapsed / fadeDuration);
                SetAlpha(alpha);
                yield return null;
            }

            gameObject.SetActive(false);
        }
    }
}
