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
        }

        private IEnumerator AnimateTitleRoutine()
        {
            float startScale = (panelType == PanelType.Win) ? 0.3f : 1.8f;
            float endScale = 1.0f;

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
            if (EscapeBigHeadGameController.Instance != null)
            {
                EscapeBigHeadGameController.Instance.OnCTAButtonClicked();
            }
            else if (LunaPlayableAdapter.Instance != null)
            {
                LunaPlayableAdapter.Instance.InstallFullGame();
            }
        }
    }
}
