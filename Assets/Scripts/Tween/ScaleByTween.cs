using System.Collections;
using UnityEngine;
public class ScaleByTween : VisualAction {
    [SerializeField] private float duration = 0.5f;
    protected override IEnumerator OnExecuting() { yield return new UnityEngine.WaitForSeconds(duration); }
}