using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;

public class SpineSkinMixer : MonoBehaviour
{
    public static SpineSkinMixer Instance { get; private set; }

    [SerializeField] private SkeletonAnimation skeletonAnimation;

    // Appearance State Flags
    public bool isSkinny { get; private set; } = false;
    public bool hasPinkShirt { get; private set; } = false;
    public bool hasSmoothHair { get; private set; } = false;
    public bool hasShavedLegs { get; private set; } = false;
    public bool hasGlasses { get; private set; } = true;
    public bool hasGoodSmell { get; private set; } = false;
    public bool hasMakeup { get; private set; } = false;
    public bool isWinEnding { get; private set; } = false;

    private readonly HashSet<string> activeSkinNames = new HashSet<string>();
    private bool initialized = false;

    private void Awake()
    {
        if (Instance == null) Instance = this;
        EnsureInit();
    }

    private void OnEnable()
    {
        EnsureInit();
        UpdateAppearance();
    }

    private void EnsureInit()
    {
        if (initialized) return;

        if (skeletonAnimation == null)
            skeletonAnimation = GetComponent<SkeletonAnimation>();

        if (skeletonAnimation != null && skeletonAnimation.Skeleton == null)
        {
            skeletonAnimation.Initialize(false);
        }

        initialized = true;
    }

    public void SetCroptop()
    {
        hasPinkShirt = true;
        UpdateAppearance();
        Debug.Log("[SpineSkinMixer] Applied Croptop!");
    }

    public void SetShavedLegs()
    {
        hasShavedLegs = true;
        UpdateAppearance();
        Debug.Log("[SpineSkinMixer] Applied Shaved Legs!");
    }

    public void SetSmoothHair()
    {
        hasSmoothHair = true;
        UpdateAppearance();
        Debug.Log("[SpineSkinMixer] Applied Smooth Hair!");
    }

    public void SetGoodSmell()
    {
        hasGoodSmell = true;
        UpdateAppearance();
        Debug.Log("[SpineSkinMixer] Applied Good Smell!");
    }

    public void RemoveGlasses()
    {
        hasGlasses = false;
        UpdateAppearance();
        Debug.Log("[SpineSkinMixer] Removed Glasses!");
    }

    public void RestoreGlasses()
    {
        hasGlasses = true;
        UpdateAppearance();
        Debug.Log("[SpineSkinMixer] Restored Glasses!");
    }

    public void SetSkinny()
    {
        isSkinny = true;
        UpdateAppearance();
        Debug.Log("[SpineSkinMixer] Transformed to Skinny!");
    }

    public void SetMakeup()
    {
        hasMakeup = true;
        UpdateAppearance();
        Debug.Log("[SpineSkinMixer] Applied Makeup (Ugly face -> Pretty face)!");
    }

    public void SetWinEnding()
    {
        isWinEnding = true;
        UpdateAppearance();
        Debug.Log("[SpineSkinMixer] Applied Win Ending!");
    }

    public void SetSkin(string skinName)
    {
        if (skinName == "Girl_Trang Gay")
        {
            SetWinEnding();
            return;
        }

        EnsureInit();
        activeSkinNames.Clear();
        if (!string.IsNullOrEmpty(skinName))
        {
            activeSkinNames.Add(skinName);
        }
        ApplySkinsToSkeleton();
    }

    public void AddSkin(string skinName)
    {
        if (string.IsNullOrEmpty(skinName)) return;

        EnsureInit();
        if (skinName.Contains("Hong") || skinName.Contains("Croptop")) hasPinkShirt = true;
        if (skinName.Contains("Muot")) hasSmoothHair = true;
        if (skinName.Contains("Mui Thom")) hasGoodSmell = true;
        if (skinName.Contains("Kinh")) hasGlasses = true;
        if (skinName.Contains("Trang")) hasMakeup = true;

        if (!activeSkinNames.Contains(skinName))
        {
            activeSkinNames.Add(skinName);
            ApplySkinsToSkeleton();
        }
    }

    public void RemoveSkin(string skinName)
    {
        if (string.IsNullOrEmpty(skinName)) return;

        EnsureInit();
        if (skinName.Contains("Kinh")) hasGlasses = false;
        if (skinName.Contains("Long Chan")) hasShavedLegs = true;
        if (skinName.Contains("Toc Roi")) hasSmoothHair = true;
        if (skinName.Contains("Mui Thoi")) hasGoodSmell = true;
        if (skinName.Contains("Ao Xanh")) hasPinkShirt = true;
        if (skinName.Contains("Mat Xau")) hasMakeup = true;

        if (activeSkinNames.Contains(skinName))
        {
            activeSkinNames.Remove(skinName);
            ApplySkinsToSkeleton();
        }
    }

    public bool HasSkin(string skinName)
    {
        if (string.IsNullOrEmpty(skinName)) return false;
        EnsureInit();
        if (activeSkinNames.Count == 0)
        {
            UpdateAppearance();
        }
        if (activeSkinNames.Contains(skinName)) return true;
        if (skeletonAnimation != null && skeletonAnimation.Skeleton != null && skeletonAnimation.Skeleton.Skin != null)
        {
            if (skeletonAnimation.Skeleton.Skin.Name == skinName) return true;
        }
        return false;
    }

    public void UpdateAppearance()
    {
        EnsureInit();
        if (skeletonAnimation == null || skeletonAnimation.Skeleton == null) return;

        activeSkinNames.Clear();

        if (isWinEnding)
        {
            activeSkinNames.Add("Girl_Trang Gay");
        }
        else if (isSkinny)
        {
            // SKINNY GIRL:
            if (hasMakeup)
            {
                // Pretty face
                if (hasPinkShirt)
                {
                    activeSkinNames.Add(hasSmoothHair ? "Girl_Trang Gay Ao Hong Toc Muot" : "Girl_Trang Gay Ao Hong Toc Xu");
                }
                else
                {
                    activeSkinNames.Add(hasSmoothHair ? "Girl_Trang Gay Ao Xanh Toc Muot" : "Girl_Trang Gay Ao Xanh Toc Xu");
                }
            }
            else
            {
                // Ugly face (before makeup)
                if (hasPinkShirt)
                {
                    activeSkinNames.Add(hasSmoothHair ? "Girl_Mat Xau Ao Hong Toc Muot" : "Girl_Mat Xau Ao Hong Toc Xu");
                }
                else
                {
                    activeSkinNames.Add(hasSmoothHair ? "Girl_Mat Xau Ao Xanh Toc Muot" : "Girl_Mat Xau Ao Xanh Toc Xu");
                }
            }

            if (!hasShavedLegs)
            {
                activeSkinNames.Add("Girl_Long Chan Gay");
            }
            if (hasGlasses)
            {
                activeSkinNames.Add("Girl_Cai Kinh");
            }
            if (hasGoodSmell)
            {
                activeSkinNames.Add("Girl_Mui Thom");
            }
        }
        else
        {
            // CHUBBY GIRL: Fat base body (fair skin)
            activeSkinNames.Add("Girl_Trang Beo");

            // Ugly face overlay: only present before makeup!
            if (!hasMakeup)
            {
                activeSkinNames.Add("Girl_Beo Mat Xau");
            }

            if (!hasPinkShirt)
            {
                activeSkinNames.Add("Girl_ Beo Ao Xanh"); // Blue fat shirt
            }

            if (!hasSmoothHair)
            {
                activeSkinNames.Add("Girl_Toc Roi");      // Messy hair
            }

            if (!hasShavedLegs)
            {
                activeSkinNames.Add("Girl_Long Chan Beo"); // Hairy legs
            }

            if (hasGlasses)
            {
                activeSkinNames.Add("Girl_Cai Kinh");     // Glasses
            }

            if (hasGoodSmell)
            {
                activeSkinNames.Add("Girl_Mui Thom");
            }
            else
            {
                activeSkinNames.Add("Girl_Mui Thoi");     // Bad smell
            }
        }

        ApplySkinsToSkeleton();
    }

    private void ApplySkinsToSkeleton()
    {
        var skeleton = skeletonAnimation.Skeleton;
        var skeletonData = skeleton.Data;
        var newSkin = new Skin("Combined");

        if (skeletonData.DefaultSkin != null)
        {
            newSkin.AddSkin(skeletonData.DefaultSkin);
        }

        foreach (var s in activeSkinNames)
        {
            var skin = skeletonData.FindSkin(s);
            if (skin != null)
            {
                newSkin.AddSkin(skin);
            }
        }

        skeleton.SetSkin(newSkin);
        skeleton.SetSlotsToSetupPose();
        skeletonAnimation.AnimationState.Apply(skeleton);
        skeletonAnimation.Update(0);
    }
}
