using System;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;

[RequireComponent(typeof(AudioSource))]
public class SpineEventSoundPlayer : MonoBehaviour
{
    [SerializeField] private SkeletonAnimation skeletonAnimation;
    [SerializeField] private SkeletonGraphic skeletonGraphic;
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private List<AudioClip> audioClips;
    
    private IAnimationStateComponent animationStateComponent;

    private void Awake()
    {
        if (skeletonAnimation != null) animationStateComponent = skeletonAnimation;
        else if (skeletonGraphic != null) animationStateComponent = skeletonGraphic;
    }

    private void Reset()
    {
        if (skeletonAnimation == null)
        {
            skeletonAnimation = GetComponent<SkeletonAnimation>();
        }
        
        if (audioSource == null)
        {
            audioSource = GetComponent<AudioSource>();
        }
    }
    
    private void OnEnable()
    {
        if (animationStateComponent == null) Awake();

        if (animationStateComponent != null && animationStateComponent.AnimationState != null)
        {
            animationStateComponent.AnimationState.Event += HandleSpineEvent;
        }
    }

    private void HandleSpineEvent(TrackEntry trackEntry, Spine.Event e)
    {
        if (audioClips == null || audioClips.Count == 0 || audioSource == null) return;
        if (e == null || e.Data == null) return;

        string eventName = e.Data.Name;
        
        var clip = audioClips.Find(c => c != null && c.name == eventName);
    
        if (clip != null)
        {
            audioSource.PlayOneShot(clip);
        }
    }
    
    private void OnDisable()
    {
        if (animationStateComponent != null && animationStateComponent.AnimationState != null)
            animationStateComponent.AnimationState.Event -= HandleSpineEvent;
    }
    
    public void SyncAudioClips(List<AudioClip> foundClips)
    {
        audioClips = foundClips;
    }

    public SkeletonAnimation GetSkeletonAnimation() => skeletonAnimation;
}