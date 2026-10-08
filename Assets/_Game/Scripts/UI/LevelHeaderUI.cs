using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

namespace EscapeBigHead
{
    /// <summary>
    /// LevelHeaderUI: Quan ly ProgressBar (chay theo step) va Clock (dem nguoc tu TextClock).
    /// Toi uu cho Luna Playable Ads, zero-GC, tuong thich ca Text (Legacy) lan TextMeshPro.
    /// </summary>
    public class LevelHeaderUI : MonoBehaviour
    {
        public static LevelHeaderUI Instance { get; private set; }
        public int ShowCTAStep { get; set; }
        public Image ProgressFill => fillImage;

        [Header("Progress Bar Settings")]
        [SerializeField] private RectTransform fillRect;
        [SerializeField] private Image fillImage;
        [SerializeField] private TextMeshProUGUI textStepsTMP;
        [SerializeField] private Text textStepsLegacy;
        [SerializeField] private float fillAnimSpeed = 3.0f;

        [Header("Clock / Timer Settings")]
        [SerializeField] private Text textClockLegacy;
        [SerializeField] private TextMeshProUGUI textClockTMP;
        [SerializeField] private float initialDuration = 30f;

        private float currentTime;
        private bool isTimerRunning = false;
        private float targetProgress = 0f;
        private float currentProgress = 0f;
        private Coroutine fillCoroutine;

        private void Awake()
        {
            Instance = this;

            // Tu dong tim components neu chua keo tha
            if (fillRect == null)
            {
                var fillTr = transform.Find("ProgressBar/FillArea/Fill");
                if (fillTr != null) fillRect = fillTr.GetComponent<RectTransform>();
            }

            if (fillImage == null && fillRect != null)
            {
                fillImage = fillRect.GetComponent<Image>();
            }

            if (textStepsTMP == null)
            {
                var stepsTr = transform.Find("ProgressBar/TextSteps");
                if (stepsTr != null) textStepsTMP = stepsTr.GetComponent<TextMeshProUGUI>();
            }

            if (textStepsLegacy == null)
            {
                var stepsTr = transform.Find("ProgressBar/TextSteps");
                if (stepsTr != null) textStepsLegacy = stepsTr.GetComponent<Text>();
            }

            if (textClockLegacy == null)
            {
                var clockTr = transform.Find("Clock_Object/TextClock") ?? transform.Find("Clock_Object/Text (Legacy)");
                if (clockTr != null) textClockLegacy = clockTr.GetComponent<Text>();
            }

            if (textClockTMP == null)
            {
                var clockTr = transform.Find("Clock_Object/TextClock") ?? transform.Find("Clock_Object/Text (TMP)");
                if (clockTr != null) textClockTMP = clockTr.GetComponent<TextMeshProUGUI>();
            }
        }

        private void Start()
        {
            // 1. Khoi tao thoi gian dem nguoc tu TextClock
            InitializeTimerFromText();

            // 2. Dang ky su kien voi GameController
            if (Level49GameController.Instance != null)
            {
                Level49GameController.Instance.OnStepUpdated += HandleStepUpdated;
                UpdateStepDisplay(Level49GameController.Instance.CompletedSteps, Level49GameController.Instance.RequiredStepsToWin, false);
            }
            else
            {
                UpdateStepDisplay(0, 7, false);
            }

            isTimerRunning = true;
        }

        private void OnDestroy()
        {
            if (Level49GameController.Instance != null)
            {
                Level49GameController.Instance.OnStepUpdated -= HandleStepUpdated;
            }
        }

        private void InitializeTimerFromText()
        {
            string clockString = "";
            if (textClockLegacy != null && !string.IsNullOrEmpty(textClockLegacy.text))
            {
                clockString = textClockLegacy.text.Trim();
            }
            else if (textClockTMP != null && !string.IsNullOrEmpty(textClockTMP.text))
            {
                clockString = textClockTMP.text.Trim();
            }

            if (!string.IsNullOrEmpty(clockString) && float.TryParse(clockString, out float parsedSeconds))
            {
                initialDuration = parsedSeconds;
            }

            currentTime = initialDuration;
            UpdateClockText(Mathf.CeilToInt(currentTime));
        }

        private void Update()
        {
            if (!isTimerRunning) return;

            // Kiem tra trang thai game
            if (Level49GameController.Instance != null && Level49GameController.Instance.CurrentState != GameState.Playing)
            {
                isTimerRunning = false;
                return;
            }

            // Dem nguoc thoi gian
            if (currentTime > 0f)
            {
                currentTime -= Time.deltaTime;
                if (currentTime < 0f) currentTime = 0f;

                UpdateClockText(Mathf.CeilToInt(currentTime));

                if (currentTime <= 0f)
                {
                    isTimerRunning = false;
                    OnTimeOut();
                }
            }
        }

        private void UpdateClockText(int seconds)
        {
            string display = seconds.ToString("00");
            if (textClockLegacy != null) textClockLegacy.text = display;
            if (textClockTMP != null) textClockTMP.text = display;
        }

        private void OnTimeOut()
        {
            Debug.Log("[HeaderUI] Het gio!");
            if (Level49GameController.Instance != null && Level49GameController.Instance.CurrentState == GameState.Playing)
            {
                Level49GameController.Instance.TriggerTimeoutLose();
            }
        }

        private void HandleStepUpdated(int completed, int total)
        {
            UpdateStepDisplay(completed, total, true);
        }

        public void UpdateStepDisplay(int completed, int total, bool animate)
        {
            if (total <= 0) total = 7;
            targetProgress = Mathf.Clamp01((float)completed / total);

            // Cap nhat chu text steps (vi du: 0/7, 1/7, ..., 7/7)
            string stepStr = $"{completed}/{total}";
            if (textStepsTMP != null) textStepsTMP.text = stepStr;
            if (textStepsLegacy != null) textStepsLegacy.text = stepStr;

            if (animate)
            {
                if (fillCoroutine != null) StopCoroutine(fillCoroutine);
                fillCoroutine = StartCoroutine(AnimateProgressRoutine(targetProgress));
            }
            else
            {
                currentProgress = targetProgress;
                ApplyProgress(currentProgress);
            }
        }

        private IEnumerator AnimateProgressRoutine(float target)
        {
            while (Mathf.Abs(currentProgress - target) > 0.005f)
            {
                currentProgress = Mathf.MoveTowards(currentProgress, target, Time.deltaTime * fillAnimSpeed);
                ApplyProgress(currentProgress);
                yield return null;
            }
            currentProgress = target;
            ApplyProgress(currentProgress);
            fillCoroutine = null;
        }

        private void ApplyProgress(float p)
        {
            if (fillRect != null)
            {
                fillRect.anchorMin = new Vector2(0f, 0f);
                fillRect.anchorMax = new Vector2(p, 1f);
                fillRect.offsetMin = Vector2.zero;
                fillRect.offsetMax = Vector2.zero;
            }

            if (fillImage != null)
            {
                fillImage.fillAmount = p;
            }
        }
    }
}
