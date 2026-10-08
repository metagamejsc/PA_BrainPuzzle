using System.Collections;
using Spine.Unity;
using UnityEngine;

namespace VisualFlow.Animations.Spine
{
    public class WaitSpineAnim : VisualAction
    {
        [SerializeField] private SkeletonAnimation skeletonAnimation;
        [SerializeField] private string animationName;

        protected override IEnumerator OnExecuting()
        {
            if (skeletonAnimation != null)
            {
                var anim = skeletonAnimation.Skeleton.Data.FindAnimation(animationName);
                if (anim != null)
                {
                    yield return new UnityEngine.WaitForSeconds(anim.Duration);
                }
                else
                {
                    yield return new UnityEngine.WaitForSeconds(0.5f);
                }
            }
            else
            {
                yield return null;
            }
        }
    }
}
