using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[Serializable]
public class SpecialElementReaction {
    public string elementName;
    public UnityEvent onReaction;
}

public class ReceiverPuzzleElement : BaseReceiverElement {
    [SerializeField] private UnityEvent onReceiveElement;
    [SerializeField] private UnityEvent onCompletedReceiver;
    [SerializeField] private UnityEvent<int> onStateChanged;
    [SerializeField] private UnityEvent onReceiveSpecialElementSuccess;
    [SerializeField] private UnityEvent onReceiveSpecialElementFail;
    [SerializeField] private bool playSoundOnReceive = true;
    [SerializeField] private GiveElementType giveElementType = GiveElementType.Normal;
    [SerializeField] private ParticleSystem receiveEffect;
    [SerializeField] private ParticleSystem specialElementFailEffect;
    [SerializeField] private List<SpecialElementReaction> specialElementReactions = new List<SpecialElementReaction>();

    public bool IsTrap => giveElementType == GiveElementType.Trap;
    public bool HasTriggeredGameOver => false;

    public override void OnReceive(BaseDraggableElement element) {
        base.OnReceive(element);
        onReceiveElement?.Invoke();
        if (receiveEffect != null) receiveEffect.Play();
    }
}
