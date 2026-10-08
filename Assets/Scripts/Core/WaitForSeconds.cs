using System.Collections;
using UnityEngine;

namespace VisualFlow.Animations.Common
{
    public class WaitForSeconds : VisualAction
    {
        [SerializeField] private float duration = 1.0f;

        protected override IEnumerator OnExecuting()
        {
            yield return new UnityEngine.WaitForSeconds(duration);
        }
    }
}
