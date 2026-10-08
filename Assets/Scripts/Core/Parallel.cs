using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace VisualFlow.Flow
{
    public class Parallel : VisualAction
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
            int remaining = 0;
            foreach (var act in actions)
            {
                if (act == null || !act.gameObject.activeSelf) continue;
                remaining++;
                act.Execute(() => remaining--);
            }

            while (remaining > 0) yield return null;
        }
    }
}
