using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public class ListActionWithElement {
    public string elementName;
    public List<ElementAction> elementActions = new List<ElementAction>();
}

public class ReceiverPuzzleElementAndAction : ReceiverPuzzleElement {
    [SerializeField] private List<ListActionWithElement> actionsWithNameElements = new List<ListActionWithElement>();
    [SerializeField] private List<ListActionWithElement> actionsExceptNameElements = new List<ListActionWithElement>();
    private int currentIndexExceptNameElements = 0;

    public bool HasActionForElement(string targetName) {
        if (string.IsNullOrEmpty(targetName) || actionsWithNameElements == null) return false;
        for (int i = 0; i < actionsWithNameElements.Count; i++) {
            if (actionsWithNameElements[i] != null && string.Equals(actionsWithNameElements[i].elementName, targetName, StringComparison.OrdinalIgnoreCase)) {
                return true;
            }
        }
        return false;
    }

    public override bool CanReceive(BaseDraggableElement element) {
        if (_isCompleted || element == null) return false;
        if (HasActionForElement(element.ElementName)) return true;
        return base.CanReceive(element);
    }

    public override void OnReceive(BaseDraggableElement element) {
        base.OnReceive(element);
        if (element == null) return;

        Debug.Log($"[{gameObject.name}] OnReceive element: {element.ElementName}");

        if (actionsWithNameElements != null) {
            for (int i = 0; i < actionsWithNameElements.Count; i++) {
                var actionList = actionsWithNameElements[i];
                if (actionList != null && string.Equals(actionList.elementName, element.ElementName, StringComparison.OrdinalIgnoreCase)) {
                    ExecuteActionList(actionList);
                }
            }
        }

        if (actionsExceptNameElements != null) {
            for (int i = currentIndexExceptNameElements; i < actionsExceptNameElements.Count; i++) {
                var actionList = actionsExceptNameElements[i];
                if (actionList != null && !string.Equals(actionList.elementName, element.ElementName, StringComparison.OrdinalIgnoreCase)) {
                    currentIndexExceptNameElements++;
                    ExecuteActionList(actionList);
                    break;
                }
            }
        }
    }

    private void ExecuteActionList(ListActionWithElement actionList) {
        if (actionList.elementActions != null) {
            for (int j = 0; j < actionList.elementActions.Count; j++) {
                var action = actionList.elementActions[j];
                if (action != null) {
                    StartCoroutine(action.Execute(this));
                }
            }
        }
    }
}
