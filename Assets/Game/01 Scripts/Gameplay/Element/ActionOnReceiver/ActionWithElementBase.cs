using System;
using System.Collections;
using UnityEngine;

[Serializable]
public abstract class ActionWithElementBase {
    public float delay;

    public enum ActionType {
        DisableObject,
        EnableObject,
        RunSpineSkeletonAnimation,
        UnityEvent,
        MoveObject,
        DOTweenBasic,
        ConditionalStep,
        AdvancedConditionalStep,
        SetSkeletonSkin
    }

    public abstract ActionType GetActionType();
    public abstract IEnumerator Execute(MonoBehaviour runner = null);
}
