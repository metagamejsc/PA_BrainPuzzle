using UnityEngine;
using UnityEngine.UI;
using TMPro;

[ExecuteAlways]
public class LevelHeaderUI : MonoBehaviour
{
    public static LevelHeaderUI Instance { get; private set; }

    [Header("=== Text Components (Hỗ trợ cả UI.Text và TextMeshPro) ===")]
    [Tooltip("Text component hiển thị Level (UI.Text)")]
    [SerializeField] private Text levelText;
    [Tooltip("Text component hiển thị Level (TMP_Text dự phòng)")]
    [SerializeField] private TMP_Text levelTextTMP;

    [Tooltip("Text component hiển thị Tiêu đề / Mục tiêu (UI.Text)")]
    [SerializeField] private Text titleText;
    [Tooltip("Text component hiển thị Tiêu đề / Mục tiêu (TMP_Text dự phòng)")]
    [SerializeField] private TMP_Text titleTextTMP;

    [Header("=== Progress Bar (Steps) ===")]
    [Tooltip("Image fill của thanh progress bar")]
    [SerializeField] private Image progressFillImage;
    [Tooltip("Text component hiển thị số steps trên thanh progress (UI.Text)")]
    [SerializeField] private Text progressStepTextLegacy;
    [Tooltip("Text component hiển thị số steps trên thanh progress (TMP_Text)")]
    [SerializeField] private TMP_Text progressStepText;
    [Tooltip("Bước hiện tại (bắt đầu từ 0)")]
    [SerializeField] private int currentStep = 0;
    [Tooltip("Số bước tối đa (Max steps)")]
    [SerializeField] private int maxSteps = 7;
    [Tooltip("Format hiển thị steps. {0} = current, {1} = max")]
    [SerializeField] private string stepFormat = "{0}/{1}";
    [Tooltip("Hiển thị % thay vì dạng bước (ví dụ: 0%)")]
    [SerializeField] private bool showPercentageInstead = false;

    [Header("=== Clock / Timer ===")]
    [Tooltip("GameObject container của đồng hồ")]
    [SerializeField] private GameObject clockObject;
    [Tooltip("Text component hiển thị số giây trong mặt đồng hồ (UI.Text)")]
    [SerializeField] private Text clockSecondsText;
    [Tooltip("Text component hiển thị số giây trong mặt đồng hồ (TMP_Text dự phòng)")]
    [SerializeField] private TMP_Text clockSecondsTextTMP;
    [Tooltip("Thời gian còn lại (giây)")]
    [SerializeField] private int remainingSeconds = 0;
    [Tooltip("Format text hiển thị giây")]
    [SerializeField] private string clockFormat = "{0}";
    [Tooltip("Tự động đếm ngược khi Play")]
    [SerializeField] private bool runCountdown = true;

    [Header("=== Events ===")]
    [Tooltip("Sự kiện khi đồng hồ đếm ngược về 0")]
    [SerializeField] private UnityEngine.Events.UnityEvent onTimeUp;

    // Cache to detect whether user changed Text_Seconds or remainingSeconds in Inspector
    [SerializeField, HideInInspector] private string lastKnownClockText = "";
    [SerializeField, HideInInspector] private int lastKnownSeconds = -1;

    // Timer tracking
    private float timerAccumulator = 0f;
    private bool isTimerActive = false;
    private bool timerHasEnded = false;
    private System.Action onTimerCompleted;

    // Public events for external game controllers
    public event System.Action<int, int> OnStepChanged;
    public event System.Action OnTimeEnded;

    private void Awake()
    {
        if (Instance == null) Instance = this;
        AutoBindTextComponents();
        SyncTimeFromClockText();
    }

    private void Start()
    {
        SyncTimeFromClockText();
        UpdateProgressUI();

        if (Application.isPlaying && runCountdown && remainingSeconds > 0)
        {
            isTimerActive = true;
            timerHasEnded = false;
        }
    }

    private void Update()
    {
        if (!Application.isPlaying) return;

        // Tự động bắt đầu đếm ngược nếu có số giây > 0 và chưa kết thúc
        if (runCountdown && remainingSeconds > 0 && !isTimerActive && !timerHasEnded)
        {
            isTimerActive = true;
        }

        if (isTimerActive && remainingSeconds > 0)
        {
            timerAccumulator += Time.deltaTime;
            if (timerAccumulator >= 1f)
            {
                timerAccumulator -= 1f;
                remainingSeconds--;
                UpdateClockUI();

                if (remainingSeconds <= 0)
                {
                    isTimerActive = false;
                    timerHasEnded = true;
                    Debug.Log("[LevelHeaderUI] Time is up!");
                    onTimerCompleted?.Invoke();
                    OnTimeEnded?.Invoke();
                    onTimeUp?.Invoke();
                }
            }
        }
    }

    private void SetText(Text uiText, TMP_Text tmpText, string value)
    {
        if (uiText != null) uiText.text = value;
        if (tmpText != null) tmpText.text = value;
    }

    private string GetText(Text uiText, TMP_Text tmpText)
    {
        if (uiText != null && !string.IsNullOrEmpty(uiText.text)) return uiText.text;
        if (tmpText != null && !string.IsNullOrEmpty(tmpText.text)) return tmpText.text;
        if (uiText != null) return uiText.text;
        if (tmpText != null) return tmpText.text;
        return string.Empty;
    }

    public void AutoBindTextComponents()
    {
        if (clockSecondsText == null && clockSecondsTextTMP == null)
        {
            Transform t = transform.Find("Clock_Object/Text_Seconds") ?? transform.Find("Clock/Text_Seconds");
            if (t == null && clockObject != null) t = clockObject.transform.Find("Text_Seconds");
            if (t == null)
            {
                foreach (var tr in GetComponentsInChildren<Transform>(true))
                {
                    if (tr.name == "Text_Seconds") { t = tr; break; }
                }
            }
            if (t != null)
            {
                clockSecondsText = t.GetComponent<Text>();
                clockSecondsTextTMP = t.GetComponent<TMP_Text>();
            }
        }
        if (levelText == null && levelTextTMP == null)
        {
            var t = transform.Find("Title_Level");
            if (t != null)
            {
                levelText = t.GetComponent<Text>();
                levelTextTMP = t.GetComponent<TMP_Text>();
            }
        }
        if (titleText == null && titleTextTMP == null)
        {
            var t = transform.Find("Title_Objective");
            if (t != null)
            {
                titleText = t.GetComponent<Text>();
                titleTextTMP = t.GetComponent<TMP_Text>();
            }
        }
        if (progressStepText == null && progressStepTextLegacy == null)
        {
            var t = transform.Find("ProgressBar/Text_Steps");
            if (t != null)
            {
                progressStepText = t.GetComponent<TMP_Text>();
                progressStepTextLegacy = t.GetComponent<Text>();
            }
        }
    }

    private void OnValidate()
    {
        AutoBindTextComponents();
        UpdateProgressUI();

        string curClock = GetText(clockSecondsText, clockSecondsTextTMP);
        if (!string.IsNullOrEmpty(curClock) && curClock != lastKnownClockText)
        {
            SyncTimeFromClockText();
        }
        else if (remainingSeconds != lastKnownSeconds)
        {
            UpdateClockUI();
            lastKnownSeconds = remainingSeconds;
            lastKnownClockText = GetText(clockSecondsText, clockSecondsTextTMP);
        }
    }

    /// <summary>
    /// Tự động đọc số từ Text_Seconds và gán vào remainingSeconds
    /// </summary>
    public void SyncTimeFromClockText()
    {
        AutoBindTextComponents();
        string text = GetText(clockSecondsText, clockSecondsTextTMP);
        if (string.IsNullOrWhiteSpace(text)) return;

        // Parse số nguyên trực tiếp
        if (int.TryParse(text.Trim(), out int val))
        {
            remainingSeconds = val;
            lastKnownSeconds = val;
            lastKnownClockText = text;
        }
        else
        {
            // Trích xuất số nếu người dùng gõ có kèm ký tự (ví dụ: "15s", "0:30")
            string digits = System.Text.RegularExpressions.Regex.Match(text, @"\d+").Value;
            if (!string.IsNullOrEmpty(digits) && int.TryParse(digits, out int extracted))
            {
                remainingSeconds = extracted;
                lastKnownSeconds = extracted;
                lastKnownClockText = text;
            }
        }
    }

    public void UpdateProgressUI()
    {
        float ratio = maxSteps > 0 ? Mathf.Clamp01((float)currentStep / maxSteps) : 0f;

        if (progressFillImage != null)
        {
            progressFillImage.fillAmount = ratio;
        }

        string stepStr = showPercentageInstead
            ? $"{Mathf.RoundToInt(ratio * 100f)}%"
            : string.Format(stepFormat, currentStep, maxSteps);

        SetText(progressStepTextLegacy, progressStepText, stepStr);

        if (Application.isPlaying)
        {
            OnStepChanged?.Invoke(currentStep, maxSteps);
        }
    }

    public void UpdateClockUI()
    {
        if (remainingSeconds >= 0)
        {
            string formatted = string.Format(clockFormat, remainingSeconds);
            SetText(clockSecondsText, clockSecondsTextTMP, formatted);
        }
    }

    // --- Public API for external controllers / scripts ---

    public void SetLevel(int level)
    {
        SetText(levelText, levelTextTMP, $"Level {level}");
    }

    public void SetLevelText(string customText)
    {
        SetText(levelText, levelTextTMP, customText);
    }

    public void SetTitle(string newTitle)
    {
        SetText(titleText, titleTextTMP, newTitle);
    }

    public void SetSteps(int current, int max)
    {
        currentStep = current;
        maxSteps = max;
        UpdateProgressUI();
    }

    public void SetCurrentStep(int current)
    {
        currentStep = current;
        UpdateProgressUI();
    }

    public void SetMaxSteps(int max)
    {
        maxSteps = max;
        UpdateProgressUI();
    }

    public void IncrementStep(int amount = 1)
    {
        currentStep = Mathf.Clamp(currentStep + amount, 0, maxSteps);
        UpdateProgressUI();
    }

    public void SetTime(int seconds, bool autoStartCountdown = true)
    {
        remainingSeconds = seconds;
        timerHasEnded = false;
        timerAccumulator = 0f;
        UpdateClockUI();

        if (Application.isPlaying && autoStartCountdown && remainingSeconds > 0)
        {
            isTimerActive = true;
        }
    }

    public void StartTimer(int seconds, System.Action onComplete = null)
    {
        remainingSeconds = seconds;
        onTimerCompleted = onComplete;
        timerHasEnded = false;
        isTimerActive = true;
        timerAccumulator = 0f;
        UpdateClockUI();
    }

    public void PauseTimer() => isTimerActive = false;
    public void ResumeTimer() => isTimerActive = true;
    public void StopTimer()
    {
        isTimerActive = false;
        timerAccumulator = 0f;
    }

    public void SetClockVisible(bool visible)
    {
        if (clockObject != null)
        {
            clockObject.SetActive(visible);
        }
    }

    // Getters & Properties
    public int CurrentStep => currentStep;
    public int MaxSteps => maxSteps;
    public int RemainingSeconds => remainingSeconds;
    public Text LevelTextComponent => levelText;
    public TMP_Text LevelTextTMPComponent => levelTextTMP;
    public Text TitleTextComponent => titleText;
    public TMP_Text TitleTextTMPComponent => titleTextTMP;
    public Text ClockTextComponent => clockSecondsText;
    public TMP_Text ClockTextTMPComponent => clockSecondsTextTMP;
    public string ClockText => GetText(clockSecondsText, clockSecondsTextTMP);
    public Image ProgressFill => progressFillImage;

    public int ShowCTAStep
    {
        get => showCTAStep;
        set
        {
            showCTAStep = value;
            if (GameEndingAndCTAController.Instance != null)
            {
                GameEndingAndCTAController.Instance.ShowCTAAtStep = value;
            }
        }
    }
    private int showCTAStep;
}
