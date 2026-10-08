using System.Collections;
using Spine.Unity;
using UnityEngine;

namespace VisualFlow.Animations.Spine
{
    public class MixSkinAdditive : VisualAction
    {
        [SerializeField] private SpineSkinMixer skinMixer;
        [SerializeField] private SkeletonAnimation skeletonAnimation;
        [SerializeField] private string skinName;

        protected override IEnumerator OnExecuting()
        {
            if (skinMixer != null)
            {
                skinMixer.AddSkin(skinName);
            }
            yield return null;
        }
    }
}
