using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RunListActions : MonoBehaviour {
    [SerializeField] private bool isRunOnEnable = false;
    [SerializeField] private bool isRunOnStart = true;
    [SerializeField] private List<ListActionWithElement> listActions = new List<ListActionWithElement>();

    void OnEnable() {
        if (isRunOnEnable) {
            RunAction();
        }
    }

    void Start() {
        if (isRunOnStart) {
            RunAction();
        }
    }

    public void RunAction() {
        for (int i = 0; i < listActions.Count; i++) {
            var actionList = listActions[i];
            if (actionList == null || actionList.elementActions == null) continue;
            for (int j = 0; j < actionList.elementActions.Count; j++) {
                var action = actionList.elementActions[j];
                if (action != null) StartCoroutine(action.Execute(this));
            }
        }
    }
}
