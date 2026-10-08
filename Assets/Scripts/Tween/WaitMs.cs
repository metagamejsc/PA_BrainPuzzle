using System.Collections;
using UnityEngine;
public class WaitMs : VisualAction {
    [SerializeField] private float waitTimeMs = 500f;
    protected override IEnumerator OnExecuting() { yield return new UnityEngine.WaitForSeconds(waitTimeMs / 1000f); }
}