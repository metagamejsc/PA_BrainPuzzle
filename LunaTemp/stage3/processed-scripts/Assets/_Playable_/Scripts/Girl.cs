using System;
using System.Collections.Generic;
using DG.Tweening;
using Playable;
using Spine;
using Spine.Unity;
using UnityEngine;
using UnityEngine.EventSystems;

public class Girl : MonoBehaviour, IPointerClickHandler
{
    [Header("Debug")] [SerializeField] private bool _enableDebugLogs = true;

    [Header("State")] [SerializeField] private GirlStatus _status;

    [Header("State skins")] [SerializeField]
    private List<BodyShapeSkins> _bodyShapeSkins;

    [SerializeField] private List<OutfitSkins> _outfitSkins;
    [SerializeField] private List<RestraintSkins> _restraintSkins;

    [Header("Spine")] [SerializeField] private SkeletonGraphic _skeletonGraphic;

    [SpineSkin(dataField: nameof(_skeletonGraphic))] [SerializeField]
    private string[] _defaultSkins;

    [SerializeField] private Target.GirlAnimation _defaultAnimation;

    [Header("Start interaction")] [SerializeField]
    private List<Target.GirlAnimation> _removeGlassesAnimations;


    [Min(0f)] [SerializeField] private float _endGameDelay = 2f;
    [SerializeField] private BoyAnimationData _boy1;
    [SerializeField] private BoyAnimationData _boy2;

    private readonly List<string> _activeSkins = new List<string>();
    private Skin _combinedSkin;
    private bool _isReady;
    private bool _isGameEnded;

    public static Girl Instance { get; private set; }

    public GirlStatus Status => _status;
    public bool CanReceiveItem => _isReady && !_isGameEnded;

    private void Awake()
    {
        Instance = this;
    }

    public string GetActiveSkinDebugInfo()
    {
        List<string> skinNames = new List<string>();
        AddUniqueSkinNames(skinNames, FindBodyShapeSkins(_status.bodyShape));
        AddUniqueSkinNames(skinNames, FindOutfitSkins(_status.outfit));
        AddUniqueSkinNames(skinNames, FindRestraintSkins(_status.restraint));
        AddUniqueSkinNames(skinNames, _activeSkins);
        return skinNames.Count > 0 ? string.Join(", ", skinNames) : "None";
    }

    private void Start()
    {
        AddSkins(_defaultSkins);
        PlayAnimations(new List<Target.GirlAnimation> { _defaultAnimation });

        if (_skeletonGraphic != null)
        {
            _skeletonGraphic.raycastTarget = true;
        }
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        if (_isReady || _isGameEnded) return;

        _isReady = true;
        GameManager.Instance?.CountEvent();
        GameController.Instance?.StopTutorialHand();
        PlayAnimations(_removeGlassesAnimations);

        if (_skeletonGraphic != null)
        {
            _skeletonGraphic.raycastTarget = false;
        }
    }

    public void ApplyItem([Bridge.Ref] Item.ItemData itemData, Target.ItemReaction reaction)
    {
        if (_isGameEnded || reaction == null) return;

        GirlStatus statusBeforeChange = _status;
        ApplyStateChange(itemData.stateChange);

        RemoveSkins(reaction.skinRemoved);
        AddSkins(reaction.skinAdded);
        ApplyCombinedSkin();

        GirlStatus animationStatus = itemData.animationStateTiming == AnimationStateTiming.BeforeStateChange
            ? statusBeforeChange
            : _status;
        Target.AnimationRule animationRule = reaction.FindBestRule(animationStatus);
        if (animationRule != null)
        {
            PlayAnimations(animationRule.animations);
        }
        AudioManager.Instance?.PlaySound(reaction.audioClip);
        ResolveResult(itemData.result);
    }

    private void ApplyStateChange([Bridge.Ref] Item.GirlStateChange stateChange)
    {
        _status = GetStatusAfterChange(_status, stateChange);
    }

    private static GirlStatus GetStatusAfterChange(GirlStatus currentStatus, [Bridge.Ref] Item.GirlStateChange stateChange)
    {
        if (stateChange.changeBodyShape) currentStatus.bodyShape = stateChange.bodyShape;
        if (stateChange.changeOutfit) currentStatus.outfit = stateChange.outfit;
        if (stateChange.changeRestraint) currentStatus.restraint = stateChange.restraint;
        return currentStatus;
    }

    private void PlayAnimations(List<Target.GirlAnimation> animations)
    {
        if (_skeletonGraphic == null || animations == null || animations.Count == 0) return;

        _skeletonGraphic.Initialize(false);
        bool hasAnimation = false;

        for (int i = 0; i < animations.Count; i++)
        {
            Target.GirlAnimation animation = animations[i];
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

    private void ResolveResult(ItemResult result)
    {
        GameManager.Instance?.CountEvent();
        switch (result)
        {
            case ItemResult.Win:
                PlayBoys(false);
                break;
            case ItemResult.Lose:
                PlayBoys(true);
                EndGameAfterDelay();
                break;
        }
    }

  


    private void PlayBoys(bool girlWins)
    {
        PlayBoy(_boy1, girlWins);
        PlayBoy(_boy2, girlWins);
    }

    private static void PlayBoy([Bridge.Ref] BoyAnimationData data, bool girlWins)
    {
        if (data.skeletonGraphic == null) return;

        string animation = girlWins ? data.loseAnimation : data.winAnimation;
        if (string.IsNullOrEmpty(animation)) return;

        data.skeletonGraphic.Initialize(false);
        data.skeletonGraphic.AnimationState.SetAnimation(0, animation, true);
        if (girlWins) return;
        DOVirtual.DelayedCall(1.5f, () =>
        {
            data.skeletonGraphic.Initialize(false);
            data.skeletonGraphic.AnimationState.SetAnimation(0, data.idleAnimation, true);
        });
    }

    private void EndGameAfterDelay()
    {
        if (_isGameEnded) return;

        _isGameEnded = true;
        DOVirtual.DelayedCall(_endGameDelay, () => GameManager.Instance?.ShowLose());
    }

    private void AddSkins(string[] skinNames)
    {
        if (skinNames == null) return;

        bool changed = false;
        foreach (string skinName in skinNames)
        {
            if (string.IsNullOrEmpty(skinName) || _activeSkins.Contains(skinName)) continue;
            _activeSkins.Add(skinName);
            changed = true;
        }

        if (changed) ApplyCombinedSkin();
    }

    private void RemoveSkins(string[] skinNames)
    {
        if (skinNames == null) return;

        bool changed = false;
        foreach (string skinName in skinNames)
        {
            if (string.IsNullOrEmpty(skinName)) continue;
            changed |= _activeSkins.Remove(skinName);
        }

        if (changed) ApplyCombinedSkin();
    }

    private void ApplyCombinedSkin()
    {
        if (_skeletonGraphic == null) return;

        _skeletonGraphic.Initialize(false);
        Skeleton skeleton = _skeletonGraphic.Skeleton;
        if (skeleton == null) return;

        _combinedSkin = _combinedSkin ?? new Skin("girl-combined");
        _combinedSkin.Clear();

        if (skeleton.Data.DefaultSkin != null) _combinedSkin.AddSkin(skeleton.Data.DefaultSkin);
        AddSkinSetToCombined(skeleton, FindBodyShapeSkins(_status.bodyShape));
        AddSkinSetToCombined(skeleton, FindOutfitSkins(_status.outfit));
        AddSkinSetToCombined(skeleton, FindRestraintSkins(_status.restraint));

        foreach (string skinName in _activeSkins)
        {
            AddSkinToCombined(skeleton, skinName);
        }

        skeleton.SetSkin(_combinedSkin);
        skeleton.SetSlotsToSetupPose();
        _skeletonGraphic.AnimationState.Apply(skeleton);
        _skeletonGraphic.Update(0f);
        _skeletonGraphic.UpdateMesh();
    }

    private string[] FindBodyShapeSkins(BodyShape bodyShape)
    {
        if (_bodyShapeSkins == null) return null;
        for (int i = 0; i < _bodyShapeSkins.Count; i++)
        {
            if (_bodyShapeSkins[i].bodyShape == bodyShape) return _bodyShapeSkins[i].skins;
        }

        return null;
    }

    private string[] FindOutfitSkins(Outfit outfit)
    {
        if (_outfitSkins == null) return null;
        for (int i = 0; i < _outfitSkins.Count; i++)
        {
            if (_outfitSkins[i].outfit == outfit) return _outfitSkins[i].skins;
        }

        return null;
    }

    private string[] FindRestraintSkins(Restraint restraint)
    {
        if (_restraintSkins == null) return null;
        for (int i = 0; i < _restraintSkins.Count; i++)
        {
            if (_restraintSkins[i].restraint == restraint) return _restraintSkins[i].skins;
        }

        return null;
    }

    private void AddSkinSetToCombined(Skeleton skeleton, string[] skinNames)
    {
        if (skinNames == null) return;
        for (int i = 0; i < skinNames.Length; i++) AddSkinToCombined(skeleton, skinNames[i]);
    }

    private static void AddUniqueSkinNames(List<string> destination, IEnumerable<string> skinNames)
    {
        if (skinNames == null) return;

        foreach (string skinName in skinNames)
        {
            if (string.IsNullOrEmpty(skinName) || destination.Contains(skinName)) continue;
            destination.Add(skinName);
        }
    }

    private void AddSkinToCombined(Skeleton skeleton, string skinName)
    {
        if (string.IsNullOrEmpty(skinName)) return;

        Skin skin = skeleton.Data.FindSkin(skinName);
        if (skin != null) _combinedSkin.AddSkin(skin);
        else Debug.LogWarning($"[Girl] Cannot find skin '{skinName}' in {_skeletonGraphic.name}.", this);
    }

    [Serializable]
    public struct BoyAnimationData
    {
        public SkeletonGraphic skeletonGraphic;

        [SpineAnimation(dataField: nameof(skeletonGraphic))]
        public string idleAnimation;

        [SpineAnimation(dataField: nameof(skeletonGraphic))]
        public string winAnimation;

        [SpineAnimation(dataField: nameof(skeletonGraphic))]
        public string loseAnimation;
    }

    [Serializable]
    public struct BodyShapeSkins
    {
        public BodyShape bodyShape;

        [SpineSkin(dataField: nameof(_skeletonGraphic))]
        public string[] skins;
    }

    [Serializable]
    public struct OutfitSkins
    {
        public Outfit outfit;

        [SpineSkin(dataField: nameof(_skeletonGraphic))]
        public string[] skins;
    }

    [Serializable]
    public struct RestraintSkins
    {
        public Restraint restraint;

        [SpineSkin(dataField: nameof(_skeletonGraphic))]
        public string[] skins;
    }
}

public enum BodyShape
{
    Normal,
    Fat,
    Thin
}

public enum Outfit
{
    Normal,
    Dress
}

public enum Restraint
{
    None,
    Rope
}

[Serializable]
public struct GirlStatus
{
    public BodyShape bodyShape;
    public Outfit outfit;
    public Restraint restraint;
}
