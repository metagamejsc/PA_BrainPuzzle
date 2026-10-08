using System;
using System.Collections;
using UnityEngine;

[Serializable]
public class DisableObjectActionWithElement : ActionWithElementBase {
    public GameObject[] targetObject = new GameObject[0];

    public override ActionType GetActionType() => ActionType.DisableObject;

    public override IEnumerator Execute(MonoBehaviour runner = null) {
        if (delay > 0) yield return new WaitForSeconds(delay);
        for (int i = 0; i < targetObject.Length; i++) {
            if (targetObject[i] != null) {
                targetObject[i].SetActive(false);
            }
        }
    }
}
