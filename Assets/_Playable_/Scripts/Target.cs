using System;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

public class Target : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic _skeletonGraphic;
    [SerializeField] private RectTransform _dropArea;
    [SerializeField] private List<TargetReaction> _reactions;
    private bool _isComplete;

    public bool IsComplete => _isComplete;


    public bool TryAccept(ItemType itemType)
    {
        if (_isComplete) return false;
        TargetReaction reaction = FindReaction(itemType);
        if (_skeletonGraphic == null || reaction == null || reaction.animations == null ||
            reaction.animations.Count == 0) return false;

        PlayAnimations(reaction.animations);
        Playable.GameManager.Instance?.CountEvent();
        _isComplete = true;
        return true;
    }

    public bool CanAccept(ItemType itemType)
    {
        return FindReaction(itemType) != null;
    }

    public Rect GetScreenRect(Camera eventCamera)
    {
        RectTransform rectTransform = _dropArea;
        if (rectTransform == null && _skeletonGraphic != null)
        {
            rectTransform = _skeletonGraphic.rectTransform;
        }

        if (rectTransform == null)
        {
            rectTransform = transform as RectTransform;
        }

        if (rectTransform == null) return Rect.zero;

        Vector3[] corners = new Vector3[4];
        rectTransform.GetWorldCorners(corners);
        Vector2 min = RectTransformUtility.WorldToScreenPoint(eventCamera, corners[0]);
        Vector2 max = min;

        for (int i = 1; i < corners.Length; i++)
        {
            Vector2 point = RectTransformUtility.WorldToScreenPoint(eventCamera, corners[i]);
            min = Vector2.Min(min, point);
            max = Vector2.Max(max, point);
        }

        return Rect.MinMaxRect(min.x, min.y, max.x, max.y);
    }

    public Vector2 GetScreenAnchor(Camera eventCamera)
    {
        RectTransform rectTransform = _dropArea;
        if (rectTransform == null && _skeletonGraphic != null)
        {
            rectTransform = _skeletonGraphic.rectTransform;
        }

        if (rectTransform == null)
        {
            rectTransform = transform as RectTransform;
        }

        return rectTransform != null
            ? RectTransformUtility.WorldToScreenPoint(eventCamera, rectTransform.position)
            : Vector2.zero;
    }

    private TargetReaction FindReaction(ItemType itemType)
    {
        if (_reactions == null) return null;

        for (int i = 0; i < _reactions.Count; i++)
        {
            TargetReaction reaction = _reactions[i];
            if (reaction != null && reaction.itemType == itemType) return reaction;
        }

        return null;
    }

    private void PlayAnimations(List<SpineAnimationData> animations)
    {
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

    [Serializable]
    public class TargetReaction
    {
        public ItemType itemType;
        public List<SpineAnimationData> animations;
    }
}

[Serializable]
public struct SpineAnimationData
{
    [SpineAnimation(dataField: "_skeletonGraphic")]
    public string animationName;

    public bool loop;
}