using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ExecuteIfCondition : VisualAction
{
    [SerializeField] private MonoBehaviour condition;
    [SerializeField] private VisualAction actionOnTrue;

    private void Awake()
    {
        if (actionOnTrue == null)
        {
            foreach (Transform child in transform)
            {
                var a = child.GetComponent<VisualAction>();
                if (a != null && a != this)
                {
                    actionOnTrue = a;
                    break;
                }
            }
        }
    }

    protected override IEnumerator OnExecuting()
    {
        bool result = false;
        if (condition is HasSkin hs) result = hs.Evaluate();
        else if (condition is HasSkins hss) result = hss.Evaluate();
        else result = true;

        if (result && actionOnTrue != null)
        {
            bool done = false;
            actionOnTrue.Execute(() => done = true);
            while (!done) yield return null;
        }
    }
}
