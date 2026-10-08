using System;
using System.Collections.Generic;
using UnityEngine;

public enum GiveElementType {
    Normal,
    Trap
}

public abstract class BasePuzzleElement : MonoBehaviour {
    [SerializeField] protected int elementId = 0;
    [SerializeField] protected bool allowAllIdInteraction = false;
    [SerializeField] protected string elementName = "";
    [SerializeField] protected bool requireSpecificElement = false;
    [SerializeField] protected List<string> specificTargetElementNames = new List<string>();
    [SerializeField] protected int layer = 1;
    [SerializeField] protected bool requirePreviousLayer = false;
    [SerializeField] protected bool playSoundOnComplete = true;
    [SerializeField] private string[] hints;

    protected bool _isCompleted = false;
    protected int _currentState = 1;

    public bool IsDone => _isCompleted;
    public string ElementName => elementName;
    public int ElementId => elementId;
    public bool AllowAllIdInteraction => allowAllIdInteraction;
    public bool RequireSpecificElement => requireSpecificElement;
    public List<string> SpecificTargetElementNames => specificTargetElementNames;
    public virtual bool IsInteractable => !_isCompleted && GamePlayManager.CanInteract;
    public string[] Hints => hints;
    public int CurrentState => _currentState;

    public virtual void ForceSetInteractable(bool interactable) {}

    public virtual void IncreaseState() {
        _currentState++;
        ActionEvent.OnElementStateChanged?.Invoke(this, _currentState);
    }
}
