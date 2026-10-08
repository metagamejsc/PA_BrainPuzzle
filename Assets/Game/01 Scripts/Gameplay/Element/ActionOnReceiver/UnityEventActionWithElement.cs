using System;
using System.Collections;
using UnityEngine;
using UnityEngine.Events;

[Serializable]
public class UnityEventActionWithElement : ActionWithElementBase {
    public UnityEvent eventAction;

    public override ActionType GetActionType() => ActionType.UnityEvent;

    public override IEnumerator Execute(MonoBehaviour runner = null) {
        if (delay > 0) yield return new WaitForSeconds(delay);
        eventAction?.Invoke();
    }
}
