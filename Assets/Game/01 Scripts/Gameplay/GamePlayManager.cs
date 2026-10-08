using System;
using System.Collections;
using UnityEngine;

public enum GameState {
    None = 0,
    Playing = 1,
    Win = 2,
    Lose = 3,
    Timeout = 4
}

public class GamePlayManager : MonoBehaviour {
    public static GamePlayManager Instance { get; private set; }

    private static bool _interactionDisabled = false;
    private static bool _isAnimationRunning = false;
    private static bool _hardLocked = false;

    public static bool CanInteract => !_interactionDisabled && !_isAnimationRunning && !_hardLocked;
    public static bool IsInteractionDisabled => _interactionDisabled;
    public static bool IsAnimationRunning => _isAnimationRunning;
    public static bool IsHardLocked => _hardLocked;

    public static bool IsWin() => Instance != null && Instance.currentState == GameState.Win;
    public static bool IsLose() => Instance != null && Instance.currentState == GameState.Lose;
    public static bool IsTimeout() => Instance != null && Instance.currentState == GameState.Timeout;

    private static event Action<bool> _onInteractionStateChanged;
    public static event Action<bool> OnInteractionStateChanged {
        add { _onInteractionStateChanged += value; }
        remove { _onInteractionStateChanged -= value; }
    }

    public GameState currentState = GameState.Playing;
    private bool winEventProcessed = false;

    void Awake() {
        if (Instance == null) {
            Instance = this;
        } else {
            Destroy(gameObject);
        }
        ResetInteractionState();
    }

    public static void DisableInteraction() {
        _interactionDisabled = true;
        _onInteractionStateChanged?.Invoke(false);
    }

    public static void EnableInteraction() {
        if (!_hardLocked) {
            _interactionDisabled = false;
            _onInteractionStateChanged?.Invoke(CanInteract);
        }
    }

    public static void SetHardLock(bool locked) {
        _hardLocked = locked;
        _onInteractionStateChanged?.Invoke(CanInteract);
    }

    public static void SetAnimationRunning(bool running) {
        _isAnimationRunning = running;
        _onInteractionStateChanged?.Invoke(CanInteract);
    }

    public static void SetAnimationState(bool running) {
        SetAnimationRunning(running);
    }

    public static void ResetInteractionState() {
        _interactionDisabled = false;
        _isAnimationRunning = false;
        _hardLocked = false;
        _onInteractionStateChanged?.Invoke(true);
    }

    public static void MarkLevelCompleted() {
        DisableInteraction();
        Debug.Log("[GamePlayManager] Level marked as completed!");

        if (Instance == null) return;
        if (Instance.winEventProcessed) return;

        Instance.winEventProcessed = true;

        if (LevelConfig.Instance == null || LevelConfig.Instance.LevelWinAnimation == null) {
            TriggerWin();
        }
    }

    public static void TriggerWin() {
        Debug.Log("[GamePlayManager] WIN LEVEL!");
        if (Instance == null) return;

        Instance.currentState = GameState.Win;
        SetHardLock(true);
        LevelSoundFX.PlayWinSound();
        ActionEvent.OnWin?.Invoke();
        Instance.HandleWinPanelShow();
#if UNITY_LUNA
        Luna.Unity.Analytics.LogEvent("game_win", 1);
        Luna.Unity.LifeCycle.GameEnded();
#endif
    }

    public static void TriggerLose() {
        Debug.Log("[GamePlayManager] LOSE LEVEL!");
        if (Instance == null) return;

        Instance.currentState = GameState.Lose;
        SetHardLock(true);
        ActionEvent.OnLose?.Invoke();
#if UNITY_LUNA
        Luna.Unity.Analytics.LogEvent("game_lose", 1);
        Luna.Unity.LifeCycle.GameEnded();
#endif
    }

    public static void InstallFullGame() {
#if UNITY_LUNA
        Luna.Unity.Analytics.LogEvent("cta_clicked", 1);
        Luna.Unity.Playable.InstallFullGame();
#else
        Debug.Log("[Playable] InstallFullGame clicked!");
#endif
    }

    public static void HandleTimeout() {
        TriggerLose();
    }

    public static void DirectTimeoutToLoseTransition() {
        TriggerLose();
    }

    public static void TriggerTimeoutPanelShow() {
    }

    public void HandleWinPanelShow() {
        Debug.Log("<color=green>========================================</color>");
        Debug.Log("<color=green>WIN! LEVEL 86 COMPLETED!</color>");
        Debug.Log("<color=green>========================================</color>");
    }

    public void HandleLosePanelShow() {
        Debug.Log("<color=red>LEVEL FAILED!</color>");
    }
}