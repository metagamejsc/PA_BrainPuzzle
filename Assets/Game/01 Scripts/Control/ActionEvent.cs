using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ActionEvent {
    #region GAME_PLAY
    public static Action OnPuzzleStepCompleted;
    public static Action OnPuzzleStepRolledBack;
    public static Action<BaseDraggablePuzzleElement> OnDragElementSuccess;
    public static Action<BaseDraggablePuzzleElement> OnDragElementTrap;
    public static Action<string> OnTouchElementSuccess;
    public static Action<BasePuzzleElement, int> OnElementStateChanged; // Current State

    public static Action OnWin;
    public static Action OnLose;
    public static Action OnGameFailed;
    public static Action<int> OnLayerCompleted;
    public static Action<bool> OnAnimationStateChanged; // true = animation running, false = animation stopped
    #endregion

    #region NOTI
    #endregion

    #region SCENE
    public static Action OnEnterGame;
    public static Action OnEnterHome;
    #endregion

    #region Home
    public static Action OnUnLockAllLevel;
    public static Action OnUnlockAllLevelsViaAds;
    #endregion

    #region Pack
    public static Action OnPurchaseRemoveAdsSuccess;
    public static Action OnPurchasePremiumPackSuccess;
    public static Action OnPurchaseSuperPremiumPackSuccess;
    public static Action OnPurchaseStarterPackSuccess;
    public static Action<string> OnPurchaseSuccess; // Added for IAPPurchaseComponent
    public static Action OnRemoveAdsPurchased; // Added for IAPPurchaseComponent
    #endregion

    public static Action<int> OnTotalStepsCalculated;

}