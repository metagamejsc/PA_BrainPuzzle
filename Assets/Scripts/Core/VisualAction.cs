using System;
using System.Collections;
using UnityEngine;
using UnityEngine.Events;

public abstract class VisualAction : MonoBehaviour
{
    [SerializeField] private UnityEvent onEnter = new UnityEvent();
    [SerializeField] private UnityEvent onExit = new UnityEvent();

    public bool IsExecuting { get; protected set; }

    public void Execute(Action onComplete = null)
    {
        StartCoroutine(ExecuteRoutine(onComplete));
    }

    private IEnumerator ExecuteRoutine(Action onComplete)
    {
        IsExecuting = true;
        onEnter?.Invoke();
        yield return OnExecuting();
        onExit?.Invoke();
        IsExecuting = false;
        onComplete?.Invoke();
    }

    protected abstract IEnumerator OnExecuting();
}
