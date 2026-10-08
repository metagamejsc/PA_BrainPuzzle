using System.Collections;
using Spine.Unity;
using UnityEngine;

namespace VisualFlow.Animations.Spine
{
    public class PlaySpineAnim : VisualAction
    {
        [SerializeField] private SkeletonAnimation skeletonAnimation;
        [SerializeField] private string animationName;
        [SerializeField] private bool loop = false;

        protected override IEnumerator OnExecuting()
        {
            if (skeletonAnimation != null && !string.IsNullOrEmpty(animationName))
            {
                skeletonAnimation.AnimationState.SetAnimation(0, animationName, loop);
            }
            yield return null;
        }
    }
}
