using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace VisualFlow.Flow
{
    public class Sequence : VisualAction
    {
        [SerializeField] private List<VisualAction> actions = new List<VisualAction>();

        private void Awake()
        {
            if (actions.Count == 0)
            {
                foreach (Transform child in transform)
                {
                    var act = child.GetComponent<VisualAction>();
                    if (act != null && act != this)
                    {
                        actions.Add(act);
                    }
                }
            }
        }

        protected override IEnumerator OnExecuting()
        {
            foreach (var act in actions)
            {
                if (act == null || !act.gameObject.activeSelf) continue;
                bool done = false;
                act.Execute(() => done = true);
                while (!done) yield return null;
            }
        }
    }
}
