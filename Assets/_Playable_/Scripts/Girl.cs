using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

public class Girl : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic _skeletonGraphic;
    [SerializeField] private SpineAnimationData _defaultAnimation;

    private void Start()
    {
        PlayAnimation(_defaultAnimation);
    }

    public void PlayAnimation(SpineAnimationData animation)
    {
        if (_skeletonGraphic == null || string.IsNullOrEmpty(animation.animationName)) return;

        _skeletonGraphic.Initialize(false);
        _skeletonGraphic.AnimationState.SetAnimation(0, animation.animationName, animation.loop);
    }

    /// <summary>Tên skin đang mặc, null nếu đang dùng skin mặc định của skeleton.</summary>
    public string CurrentSkinName
    {
        get
        {
            Spine.Skeleton skeleton = GetSkeleton();
            return skeleton != null && skeleton.Skin != null ? skeleton.Skin.Name : null;
        }
    }

    public bool SetSkin(string skinName)
    {
        Spine.Skeleton skeleton = GetSkeleton();
        if (skeleton == null || string.IsNullOrEmpty(skinName)) return false;

        Spine.Skin skin = skeleton.Data.FindSkin(skinName);
        if (skin == null) return false;

        ApplySkin(skeleton, skin);
        return true;
    }

    /// <summary>Trả về skin trước đó, truyền null/rỗng để quay lại skin mặc định.</summary>
    public void RestoreSkin(string skinName)
    {
        Spine.Skeleton skeleton = GetSkeleton();
        if (skeleton == null) return;

        ApplySkin(skeleton, string.IsNullOrEmpty(skinName) ? null : skeleton.Data.FindSkin(skinName));
    }

    private Spine.Skeleton GetSkeleton()
    {
        if (_skeletonGraphic == null) return null;

        _skeletonGraphic.Initialize(false);
        return _skeletonGraphic.Skeleton;
    }

    private void ApplySkin(Spine.Skeleton skeleton, Spine.Skin skin)
    {
        skeleton.SetSkin(skin);
        skeleton.SetSlotsToSetupPose();
        _skeletonGraphic.AnimationState.Apply(skeleton);
        _skeletonGraphic.UpdateMesh();
    }

    public void PlayAnimations(List<SpineAnimationData> animations)
    {
        if (_skeletonGraphic == null || animations == null || animations.Count == 0) return;

        _skeletonGraphic.Initialize(false);
        bool hasAnimation = false;

        for (int i = 0; i < animations.Count; i++)
        {
            SpineAnimationData animation = animations[i];
            if (string.IsNullOrEmpty(animation.animationName)) continue;

            if (!hasAnimation)
            {
                _skeletonGraphic.AnimationState.SetAnimation(0, animation.animationName, animation.loop);
                hasAnimation = true;
            }
            else
            {
                _skeletonGraphic.AnimationState.AddAnimation(0, animation.animationName, animation.loop, 0f);
            }
        }
    }
}
