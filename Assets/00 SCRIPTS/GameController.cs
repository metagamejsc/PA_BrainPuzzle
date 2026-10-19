using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Skeleton")]
    [SerializeField] private List<AnimationController> skeletons;

    [Header("Progress")]
    [SerializeField] private GameObject winScene;
    [SerializeField] private GameObject failScene;

    [SerializeField] private AudioClip stepSound;
    [SerializeField] private bool complete;
    [SerializeField] private int currentStep;
    [SerializeField] private int maxStep;
    [SerializeField] private Text currentStepText;
    [SerializeField] private Text maxStepText;
    [SerializeField] private Slider slider;
    [SerializeField] private float DelayComplete;

    [Header("Sub")]
    [SerializeField] private float subTime;
    [SerializeField] private string startSub;
    [SerializeField] private List<Sub> subs;
    [SerializeField] private RectTransform sub;
    [SerializeField] private Text subText;
    private Dictionary<GameObject, Sub> subMap;
    private Coroutine subCoroutine;

    public static GameController Ins;
    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }
    private void InitSubMap()
    {
        subMap = new Dictionary<GameObject, Sub>();
        foreach (Sub sub in subs)
        {
            subMap.Add(sub.Item, sub);
        }
    }
    private void Awake()
    {
        currentStep = 0;
        CreateIns();
        InitSubMap();
        currentStepText.text = currentStep.ToString();
        maxStepText.text = maxStep.ToString();
        slider.value = (float)currentStep / maxStep;
    }
    public bool PlayAnimation(GameObject item)
    {
        LockPlay(true);
        bool check = false;
        foreach (AnimationController skeleton in skeletons)
        {
            if (skeleton && skeleton.StartAction(item))
            {
                check = true;
            }
        }
        if (subMap.ContainsKey(item)) ShowSub(subMap[item].SubText, subMap[item].Delay);

        if (!check)
        {
            LockPlay(false);
            return false;
        }
        UpdateStep();
        return true;
    }
    public void UpdateStep()
    {
        if (currentStep >= maxStep) return;
        currentStep++;
        currentStepText.text = currentStep.ToString();
        slider.value = (float)currentStep / maxStep;
        CompleteStep?.Invoke();
        AudioController.Ins.PlaySFX(stepSound);
        if (!complete && currentStep >= maxStep) Complete(DelayComplete);
    }

    public void LockPlay(bool isLock)
    {
        SetLockPlay?.Invoke(isLock);
    }
    public void Complete(float delay)
    {
        if (complete) return;
        complete = true;
        CompleteEvent?.Invoke();
        StartCoroutine(CompleteAfterTime(delay));
    }
    private void Start()
    {
        AudioController.Ins.PlayMusic();
        ShowSub(startSub, 0);
    }
    public void ShowSub(string text, float delay)
    {
        if (subCoroutine != null) StopCoroutine(subCoroutine);

        subCoroutine = StartCoroutine(ActiveSub(text, delay));
    }
    public Action OnEnd;
    public Action OnComplete;
    public UnityEvent CompleteEvent;
    public Action CompleteStep;
    public Action<bool> SetLockPlay;
    private IEnumerator ActiveSub(string text, float delay)
    {
        yield return new WaitForSeconds(delay);
        subText.text = text;
        sub.gameObject.SetActive(true);
        yield return new WaitForSeconds(subTime);
        sub.gameObject.SetActive(false);
    }
    private IEnumerator CompleteAfterTime(float delay)
    {
        OnEnd?.Invoke();
        yield return new WaitForSeconds(delay);
        End(currentStep >= maxStep);
        OnComplete?.Invoke();
    }
    private void End(bool isDone)
    {
        if (isDone) winScene.SetActive(true);
        else failScene.SetActive(true);
    }
}
[System.Serializable]
public struct Sub
{
    public GameObject Item;
    public float Delay;
    public string SubText;
}




