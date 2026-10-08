using System.Collections;
using UnityEngine;
public class LevelWin : VisualAction {
    protected override IEnumerator OnExecuting() {
        Level1002Controller.Instance?.TriggerWin();
        yield return null;
    }
}