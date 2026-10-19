using Spine.Unity;
using UnityEngine;

public class PlayAnimation : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic skeleton;
    [SerializeField, SpineAnimation(dataField = "skeletonAnimation")] private string keyAnim;
    public void PlayAnim()
    {
        skeleton.AnimationState.SetAnimation(0, keyAnim, true);
    }
}
