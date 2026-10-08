using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class TouchablePuzzleElementAndAction : TouchablePuzzleElement {
    [SerializeField] private List<ListActionWithElement> actionsWithNameElements = new List<ListActionWithElement>();

    public override void HandleTouch() {
        if (!IsInteractable || _isCompleted) return;

        base.HandleTouch();

        if (actionsWithNameElements != null) {
            for (int i = 0; i < actionsWithNameElements.Count; i++) {
                var actionList = actionsWithNameElements[i];
                if (actionList == null || actionList.elementActions == null) continue;
                for (int j = 0; j < actionList.elementActions.Count; j++) {
                    var action = actionList.elementActions[j];
                    if (action != null) StartCoroutine(action.Execute(this));
                }
            }
        }
    }
}
