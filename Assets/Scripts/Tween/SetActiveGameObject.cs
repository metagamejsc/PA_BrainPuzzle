using System.Collections;
using UnityEngine;
public class SetActiveGameObject : VisualAction {
    [SerializeField] private GameObject target;
    [SerializeField] private bool active = true;
    protected override IEnumerator OnExecuting() {
        if (target != null) target.SetActive(active);
        yield return null;
    }
}