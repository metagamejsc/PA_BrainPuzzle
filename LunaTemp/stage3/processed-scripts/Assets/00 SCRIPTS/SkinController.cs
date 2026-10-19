using Spine.Unity;
using UnityEngine;

public class SkinController : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic skeleton;
    [SerializeField, SpineSkin(dataField = "skeletonSkin")] private string defaultSkin;
    [SerializeField, SpineSkin(dataField = "skeletonSkin")] private string actionSkin;

    public void SetActionSkin()
    {
        skeleton.Skeleton.SetSkin(actionSkin);
        skeleton.Skeleton.SetToSetupPose();
    }
    public void SetDefaultSkin()
    {
        skeleton.Skeleton.SetSkin(defaultSkin);
        skeleton.Skeleton.SetToSetupPose();
    }
}