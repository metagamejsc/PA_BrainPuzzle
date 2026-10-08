using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[Serializable]
public class LevelAudio {
    public AudioClip clip;
    public int channel;
    public float volume = 0.5f;
    public bool loop = true;
    public float delay = 0f;
}

public class LevelConfig : MonoBehaviour {
    public static LevelConfig Instance { get; private set; }

    [Header("Level Animation")]
    [SerializeField] private BaseLevelWinAnimation levelWinAnimation;

    [Header("Level Settings")]
    [SerializeField] private List<BasePuzzleElement> listStepElements = new List<BasePuzzleElement>();
    [SerializeField] private LevelAudio levelMusicBackground;

    [Header("Level Info")]
    [SerializeField] private string levelTitle;
    [SerializeField] private Sprite levelIconDefault;
    [SerializeField] private Sprite levelIconWin;
    [SerializeField] private Sprite levelIconLose;
    [SerializeField] private bool hasProgressBar = false;
    [SerializeField] private int totalSteps = 10;
    [SerializeField] private bool notUseHintLevel = false;

    private int currentStep = 0;
    private AudioSource bgmSource;

    public int CurrentStep => currentStep;
    public int TotalSteps => totalSteps;
    public List<BasePuzzleElement> ListStepElements => listStepElements;
    public BaseLevelWinAnimation LevelWinAnimation => levelWinAnimation;

    void Awake() {
        Instance = this;
        PlayBGM();
        if (levelWinAnimation == null) {
            levelWinAnimation = GetComponentInChildren<BaseLevelWinAnimation>();
        }
        var block = transform.Find("RootElement/BlockImage");
        if (block != null) block.gameObject.SetActive(false);
        else {
            var blockGo = GameObject.Find("BlockImage");
            if (blockGo != null) blockGo.SetActive(false);
        }
    }

    void Start() {
        if (bgmSource == null || !bgmSource.isPlaying) {
            PlayBGM();
        }
        CalculateSteps();
    }

    private bool bgmStarted = false;

    private void PlayBGM() {
        if (levelMusicBackground != null && levelMusicBackground.clip != null) {
            if (bgmSource == null) {
                bgmSource = GetComponent<AudioSource>();
                if (bgmSource == null) {
                    bgmSource = gameObject.AddComponent<AudioSource>();
                }
            }
            bgmSource.clip = levelMusicBackground.clip;
            bgmSource.volume = levelMusicBackground.volume;
            bgmSource.loop = levelMusicBackground.loop;
            bgmSource.playOnAwake = true;
            bgmSource.Play();
        }
    }

    void Update() {
        if (bgmSource != null && !bgmStarted) {
            if (Input.GetMouseButtonDown(0) || Input.touchCount > 0) {
                bgmStarted = true;
                bgmSource.Play();
            }
        }
    }

    public void EnsureBGMPlaying() {
        if (bgmSource != null && !bgmStarted) {
            bgmStarted = true;
            bgmSource.Play();
        }
    }

    public void CalculateSteps() {
        listStepElements.Clear();
        int hintStepCount = 0;

        var roots = UnityEngine.SceneManagement.SceneManager.GetActiveScene().GetRootGameObjects();
        var allElements = new List<BasePuzzleElement>();
        for (int r = 0; r < roots.Length; r++) {
            allElements.AddRange(roots[r].GetComponentsInChildren<BasePuzzleElement>(true));
        }

        for (int i = 0; i < allElements.Count; i++) {
            var element = allElements[i];
            if (element != null) {
                listStepElements.Add(element);
                if (element.Hints != null) {
                    for (int h = 0; h < element.Hints.Length; h++) {
                        if (!string.IsNullOrEmpty(element.Hints[h])) {
                            hintStepCount++;
                        }
                    }
                }
            }
        }

        if (hintStepCount > 0) {
            totalSteps = hintStepCount;
        } else {
            int draggableCount = 0;
            int touchableCount = 0;
            for (int i = 0; i < listStepElements.Count; i++) {
                if (listStepElements[i] is BaseDraggableElement) draggableCount++;
                else if (listStepElements[i] is TouchablePuzzleElement) touchableCount++;
            }
            totalSteps = draggableCount + touchableCount;
        }

        Debug.Log($"[LevelConfig] Started Level 86 - Total steps: {totalSteps} (From hints: {hintStepCount}, Elements: {listStepElements.Count})");
    }

    [Header("Level Win Delay")]
    [Tooltip("Thời gian delay (giây) trước khi gọi win (mặc định 2.5s)")]
    [SerializeField] private float winDelay = 2.5f;
    private Coroutine winDelayCoroutine;

    public void OnStepCompleted() {
        currentStep++;
        Debug.Log($"[LevelConfig] Step completed: {currentStep}/{totalSteps}");

        if (LevelHeaderUI.Instance != null) {
            LevelHeaderUI.Instance.OnStepProgress(currentStep, totalSteps);
        } else if (currentStep >= totalSteps) {
            if (winDelay > 0f) {
                if (winDelayCoroutine != null) StopCoroutine(winDelayCoroutine);
                winDelayCoroutine = StartCoroutine(DelayedWinRoutine(winDelay));
            } else {
                TriggerWin();
            }
        }
    }

    private IEnumerator DelayedWinRoutine(float delay) {
        GamePlayManager.DisableInteraction();
        yield return new WaitForSeconds(delay);
        TriggerWin();
        winDelayCoroutine = null;
    }

    public void TriggerWin() {
        Debug.Log("[LevelConfig] Level 86 WON!");
        if (bgmSource != null) bgmSource.volume = 0.2f;
        GamePlayManager.TriggerWin();
        if (levelWinAnimation != null) {
            levelWinAnimation.HandleLevelComplete();
        }
    }

    public void SetAllElementsInteractable(bool interactable) {
        for (int i = 0; i < listStepElements.Count; i++) {
            if (listStepElements[i] != null) listStepElements[i].ForceSetInteractable(interactable);
        }
    }

    void OnDestroy() {
        if (Instance == this) Instance = null;
    }
}
