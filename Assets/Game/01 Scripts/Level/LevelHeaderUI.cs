using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class LevelHeaderUI : MonoBehaviour {
    public static LevelHeaderUI Instance { get; private set; }

    [Header("Banner / Header Settings")]
    [SerializeField] private Image bannerBg;
    [SerializeField] private Text titleText;
    [SerializeField] private Text instructionText;
    [SerializeField] private string levelTitleString = "";

    [Header("Progress Bar")]
    [SerializeField] private Image progressBg;
    [SerializeField] private Image progressFill;
    [SerializeField] private Text progressText;

    [Header("Timer / Clock")]
    [SerializeField] private Image clockIcon;
    [SerializeField] private Text clockText;
    [SerializeField] private float countdownDuration;

    [Header("Result GameObjects")]
    [SerializeField] private GameObject winObject;
    [SerializeField] private GameObject loseObject;
    [Tooltip("Thời gian delay (giây) sau khi hoàn thành tất cả các bước trước khi hiện panel Win (mặc định 2.5s)")]
    [SerializeField] private float winDelay = 2.5f;

    [Header("CTA Trigger")]
    [Tooltip("Step number that triggers CTA to appear (e.g. 3). Set to -1 or 0 to disable.")]
    [SerializeField] private int showCtaAtStep = -1;
    [SerializeField] private GameObject ctaObject;

    private float remainingTime;
    private bool isTimerRunning = false;
    private bool isGameOver = false;
    private Coroutine winDelayCoroutine;

    public float CountdownDuration {
        get => countdownDuration;
        set {
            countdownDuration = value;
            remainingTime = value;
            UpdateClockDisplay(Mathf.CeilToInt(remainingTime));
        }
    }

    public int ShowCtaAtStep {
        get => showCtaAtStep;
        set => showCtaAtStep = value;
    }

    public int ShowCTAStep {
        get => showCtaAtStep;
        set => showCtaAtStep = value;
    }

    private int GetCurrentStep() {
        return LevelConfig.Instance != null ? LevelConfig.Instance.CurrentStep : 0;
    }

    public int GetTargetTotalSteps() {
        return LevelConfig.Instance != null ? LevelConfig.Instance.TotalSteps : 10;
    }

    public Image ProgressFill => progressFill;

    void Awake() {
        Instance = this;
    }

    void Start() {
        InitReferences();
        InitUI();
        StartTimer();
    }

    private void InitReferences() {
        if (winObject == null) {
            var winTrans = transform.parent != null ? transform.parent.Find("Win") : null;
            if (winTrans != null) winObject = winTrans.gameObject;
        }

        if (loseObject == null) {
            var loseTrans = transform.parent != null ? transform.parent.Find("Lose") : null;
            if (loseTrans != null) loseObject = loseTrans.gameObject;
        }

        if (ctaObject == null) {
            var cta = GameObject.Find("CTA");
            if (cta != null) ctaObject = cta;
            else {
                var rootCanvas = GetComponentInParent<Canvas>();
                if (rootCanvas != null) {
                    var ctaT = rootCanvas.transform.Find("CTA");
                    if (ctaT != null) ctaObject = ctaT.gameObject;
                }
            }
        }
    }

    private void InitUI() {
        var luna = FindObjectOfType<LunaController>();
        if (luna != null) {
            if (luna.TimePlay > 0) {
                countdownDuration = luna.TimePlay;
            }
            if (luna.CountPlay > 0) {
                showCtaAtStep = luna.CountPlay;
            }
        }

        if (titleText != null) {
            if (!string.IsNullOrEmpty(levelTitleString)) {
                titleText.text = levelTitleString;
            }
            titleText.horizontalOverflow = HorizontalWrapMode.Overflow;
            titleText.verticalOverflow = VerticalWrapMode.Overflow;
        }


        remainingTime = countdownDuration > 0 ? countdownDuration : 99f;
        UpdateClockDisplay(Mathf.CeilToInt(remainingTime));

        int current = GetCurrentStep();
        int total = GetTargetTotalSteps();
        UpdateProgress(current, total);
    }

    public void SetInstruction(string text) {
        if (instructionText != null) {
            instructionText.text = text;
        }
    }

    public void StartTimer() {
        remainingTime = countdownDuration;
        isTimerRunning = true;
        isGameOver = false;
    }

    public void StopTimer() {
        isTimerRunning = false;
    }

    void Update() {
        if (!isTimerRunning || isGameOver) return;

        remainingTime -= Time.deltaTime;
        if (remainingTime <= 0f) {
            remainingTime = 0f;
            isTimerRunning = false;
            UpdateClockDisplay(0);
            TriggerLose();
            return;
        }

        UpdateClockDisplay(Mathf.CeilToInt(remainingTime));
    }

    private void UpdateClockDisplay(int seconds) {
        if (clockText != null) {
            clockText.text = seconds.ToString();
        }
    }

    public void OnStepProgress(int currentStep, int totalSteps) {
        if (isGameOver) return;

        int total = totalSteps > 0 ? totalSteps : GetTargetTotalSteps();
        UpdateProgress(currentStep, total);

        // Check if CTA should appear at this specific step
        if (showCtaAtStep > 0 && currentStep >= showCtaAtStep) {
            Debug.Log($"[LevelHeaderUI] Step {currentStep} reached showCtaAtStep {showCtaAtStep}. Showing CTA!");
            if (ctaObject != null) {
                ctaObject.SetActive(true);
            }
        }

        // Check Win condition when all steps completed
        if (currentStep >= total && total > 0) {
            GamePlayManager.DisableInteraction();
            Debug.Log($"[LevelHeaderUI] All steps completed ({currentStep}/{total}). Waiting {winDelay}s before triggering Win...");
            if (winDelay > 0f) {
                if (winDelayCoroutine != null) StopCoroutine(winDelayCoroutine);
                winDelayCoroutine = StartCoroutine(DelayedWinRoutine(winDelay));
            } else {
                TriggerWin();
            }
        }
    }

    private IEnumerator DelayedWinRoutine(float delay) {
        yield return new WaitForSeconds(delay);
        TriggerWin();
        winDelayCoroutine = null;
    }

    public void UpdateProgress(int current, int total) {
        if (total <= 0) total = GetTargetTotalSteps();
        if (total <= 0) total = 1;
        float ratio = Mathf.Clamp01((float)current / total);

        if (progressFill != null) {
            progressFill.fillAmount = ratio;
        }
        if (progressText != null) {
            progressText.text = $"{current}/{total}";
        }
    }

    public void TriggerWin() {
        if (isGameOver) return;
        isGameOver = true;
        isTimerRunning = false;

        Debug.Log("[LevelHeaderUI] WIN triggered! Showing Win object.");

        if (winObject != null) {
            winObject.SetActive(true);
        }

        if (LevelConfig.Instance != null) {
            LevelConfig.Instance.TriggerWin();
        }
    }

    public void TriggerLose() {
        if (isGameOver) return;
        isGameOver = true;
        isTimerRunning = false;

        Debug.Log("[LevelHeaderUI] LOSE triggered (Time out)! Showing Lose object.");

        if (loseObject != null) {
            loseObject.SetActive(true);
        }

        // Lock gameplay interactions
        if (LevelConfig.Instance != null) {
            LevelConfig.Instance.SetAllElementsInteractable(false);
        }
        GamePlayManager.SetAnimationState(true);
    }

    void OnDestroy() {
        if (Instance == this) Instance = null;
    }
}
