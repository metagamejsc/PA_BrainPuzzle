using System.Collections;
using UnityEngine;
using UnityEngine.UI;

namespace EscapeBigHead
{
    /// <summary>
    /// UIResultPanel: Quan ly hien thi cua Win Panel va Lose Panel.
    /// - Day len tren cung Canvas khi hien thi (SetAsLastSibling).
    /// - Hieu ung Title: Win scale tu 0.3 -> 1.0; Lose scale tu 1.8 -> 1.0.
    /// - Gan su kien CTA download game.
    /// </summary>
    public class UIResultPanel : MonoBehaviour
    {
        public enum PanelType
        {
            Win,
            Lose
        }

        [Header("Panel Configuration")]
        [SerializeField] private PanelType panelType = PanelType.Win;
        [SerializeField] private RectTransform titleTransform;
        [SerializeField] private Button ctaButton;

        [Header("Animation Settings")]
        [SerializeField] private float animDuration = 0.5f;
        [Tooltip("Title start scale when the panel appears (Win pops up, Lose slams down).")]
        [SerializeField] private float winTitleStartScale = 0.3f;
        [SerializeField] private float loseTitleStartScale = 3f;

        [Header("Auto CTA")]
        [Tooltip("If the player doesn't tap the screen within this time, jump to the CTA / end card. 0 = off.")]
        [SerializeField] private float autoCtaDelay = 3f;

        private Coroutine autoCtaCoroutine;

        private Vector3 targetScale = Vector3.one;
        private Coroutine animCoroutine;

        private void Awake()
        {
            // Tu dong tim Title neu chua keo
            if (titleTransform == null)
            {
                var titleTr = transform.Find("Title");
                if (titleTr != null) titleTransform = titleTr.GetComponent<RectTransform>();
            }

            // Tu dong tim ButtonCTA neu chua keo
            if (ctaButton == null)
            {
                var btnTr = transform.Find("ButtonCTA");
                if (btnTr != null)
                {
                    ctaButton = btnTr.GetComponent<Button>();
                    if (ctaButton == null)
                    {
                        ctaButton = btnTr.gameObject.AddComponent<Button>();
                    }
                }
            }

            // Dam bao panel co Canvas overrideSorting de luon de len tren 2D Sprite/Spine
            var canvas = GetComponent<Canvas>();
            if (canvas == null) canvas = gameObject.AddComponent<Canvas>();
            canvas.overrideSorting = true;
            canvas.sortingOrder = 100;

            var gr = GetComponent<GraphicRaycaster>();
            if (gr == null) gameObject.AddComponent<GraphicRaycaster>();

            // Gan su kien CTA
            if (ctaButton != null)
            {
                ctaButton.onClick.AddListener(HandleCTAClick);
            }
        }

        private void OnEnable()
        {
            // Day len tren cung trong Hierarchy cua Canvas
            transform.SetAsLastSibling();

            // Kich hoat hieu ung Title
            if (titleTransform != null)
            {
                if (animCoroutine != null) StopCoroutine(animCoroutine);
                animCoroutine = StartCoroutine(AnimateTitleRoutine());
            }

            // Tu dong nhay ra CTA neu user khong cham man hinh
            if (autoCtaCoroutine != null) StopCoroutine(autoCtaCoroutine);
            if (autoCtaDelay > 0f) autoCtaCoroutine = StartCoroutine(AutoCtaRoutine());
        }

        private void OnDisable()
        {
            if (autoCtaCoroutine != null) StopCoroutine(autoCtaCoroutine);
            autoCtaCoroutine = null;
        }

        private IEnumerator AutoCtaRoutine()
        {
            float elapsed = 0f;
            while (elapsed < autoCtaDelay)
            {
                // Any tap = the player acted (the tap itself already triggers the CTA) -> cancel auto CTA
                if (Input.GetMouseButtonDown(0) || (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began))
                {
                    autoCtaCoroutine = null;
                    yield break;
                }
                elapsed += Time.unscaledDeltaTime;
                yield return null;
            }

            autoCtaCoroutine = null;
            var luna = FindObjectOfType<LunaController>();
            if (luna != null)
            {
                luna.ShowEndCard(); // shows the end card + Luna "Click on CTA"
            }
            else
            {
                HandleCTAClick();
            }
        }

        private IEnumerator AnimateTitleRoutine()
        {
            float startScale = (panelType == PanelType.Win) ? winTitleStartScale : loseTitleStartScale;
            float endScale = 1.0f;

            // Lose: keep the title hidden while the claws scratch, then slam it in.
            var loseFx = GetComponent<UILoseFx>();
            if (loseFx != null && loseFx.enabled)
            {
                titleTransform.localScale = Vector3.zero;
                float wait = 0f;
                while (wait < loseFx.ScratchEndTime)
                {
                    wait += Time.unscaledDeltaTime;
                    yield return null;
                }
            }

            titleTransform.localScale = Vector3.one * startScale;

            float elapsed = 0f;
            while (elapsed < animDuration)
            {
                elapsed += Time.unscaledDeltaTime;
                float t = Mathf.Clamp01(elapsed / animDuration);

                float current;
                if (panelType == PanelType.Win)
                {
                    // EaseOutBack: scale tu 0.3 len hoi overshoot 1.1 roi ve 1.0
                    float c1 = 1.70158f;
                    float c3 = c1 + 1f;
                    float p = 1f + c3 * Mathf.Pow(t - 1f, 3f) + c1 * Mathf.Pow(t - 1f, 2f);
                    current = Mathf.LerpUnclamped(startScale, endScale, p);
                }
                else
                {
                    // EaseOutCubic: dap manh tu 1.8 xuong 1.0
                    float p = 1f - Mathf.Pow(1f - t, 3f);
                    current = Mathf.Lerp(startScale, endScale, p);
                }

                titleTransform.localScale = Vector3.one * current;
                yield return null;
            }

            titleTransform.localScale = Vector3.one * endScale;
            animCoroutine = null;
        }

        private void HandleCTAClick()
        {
            if (Level49GameController.Instance != null)
            {
                Level49GameController.Instance.OnCTAButtonClicked();
            }
            else
            {
                LunaPlayableAdapter.InstallFullGame();
            }
        }
    }
}
