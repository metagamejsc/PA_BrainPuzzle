using System;
using System.Collections;
using System.Collections.Generic;
using Spine;
using Spine.Unity;
using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(SkeletonGraphic))]
public class AnimationController : MonoBehaviour
{
    [SerializeField] private SkeletonGraphic skeleton;
    [SerializeField] private List<DropAction> actions;
    private Dictionary<GameObject, DropAction> actionsMap;
    private void Awake()
    {
        actionsMap = new Dictionary<GameObject, DropAction>();
        foreach (DropAction action in actions)
        {
            actionsMap.Add(action.Item, action);
        }
    }
    public bool StartAction(GameObject item)
    {
        if (!actionsMap.TryGetValue(item, out DropAction action) || action.IsEmpty) return false;
        Delay(action.DelayTime, () => Action(action.Anim, 0));

        return true;
    }
    public void PlayFirstAnim()
    {
        Delay(actions[0].DelayTime, () => Action(actions[0].Anim, 0));
    }

    public void Action(List<Anim> anims, int currentIndex)
    {
        if (currentIndex >= anims.Count) return;

        Anim anim = anims[currentIndex];

        TrackEntry animation = PlayAnimation(anim.KeyAnim, true);
        if (anim.Sounds.Count > 0)
        {
            foreach (Sound sound in anim.Sounds)
            {
                Delay(sound.TimeDelay, () => AudioController.Ins.PlaySFX(sound.Clip));
            }
        }

        if (anim.Next)
        {
            currentIndex++;
            animation.Complete += (en) => Action(anims, currentIndex);
        }
        animation.Complete += (en) => anim.OnAnimDone?.Invoke();
    }
    private void ActionOnEndFirstLoop(TrackEntry entry, Action action)
    {
        entry.Complete -= (en) => ActionOnEndFirstLoop(en, action);
        action?.Invoke();
    }
    public TrackEntry PlayAnimation(string key, bool loop)
    {
        return skeleton.AnimationState.SetAnimation(0, key, loop);
    }
    private void Delay(float time, Action action)
    {
        if (time <= 0)
        {
            action();
            return;
        }
        StartCoroutine(WaitToAct(time, action));
    }
    private IEnumerator WaitToAct(float time, Action action)
    {
        yield return new WaitForSeconds(time);
        action?.Invoke();
    }
}
[System.Serializable]
public struct Anim
{
    public bool IsEmpty => KeyAnim == null || KeyAnim == string.Empty;
    [SpineAnimation(dataField = "skeletonAnimation")] public string KeyAnim;
    public List<Sound> Sounds;
    public bool Next;
    public UnityEvent OnAnimDone;

}
[System.Serializable]
public struct Sound
{
    public float TimeDelay;
    public AudioClip Clip;
}
[System.Serializable]
public struct DropAction
{
    public GameObject Item;
    public float DelayTime;
    public List<Anim> Anim;
    public bool IsEmpty => !Item;
}
