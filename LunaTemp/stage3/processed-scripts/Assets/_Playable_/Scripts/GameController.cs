using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public static GameController Instance { get; private set; }

    [Header("Tutorial Hand")] [SerializeField]
    private Transform _tutorialHand;

    [SerializeField] private Transform _tutorialFrom;
    [SerializeField] private Transform _tutorialTo;
    [SerializeField] private float _tutorialScaleDuration = 0.4f;
    [SerializeField] private float _tutorialMoveDuration = 0.6f;
    [SerializeField] private float _tutorialStartDelay = 0.2f;

    private Tween _tutorialTween;
    private Vector3 _tutorialHandInitialScale;
    [SerializeField] private List<Target> _targets = new List<Target>();

    private void Awake()
    {
        Instance = this;
        if (_tutorialHand != null)
        {
            _tutorialHandInitialScale = _tutorialHand.localScale;
        }
    }

    private void Start()
    {
        PlayTutorialHand();
    }


    private void OnDestroy()
    {
        _tutorialTween?.Kill();
    }


    public void PlayTutorialHand()
    {
        if (_tutorialHand == null || _tutorialFrom == null || _tutorialTo == null)
        {
            return;
        }


        _tutorialTween?.Kill();
        _tutorialHand.gameObject.SetActive(true);
        _tutorialHand.position = _tutorialFrom.position;
        _tutorialHand.localScale = _tutorialHandInitialScale;

        _tutorialTween = _tutorialHand
            .DOMove(_tutorialTo.position, _tutorialMoveDuration)
            .SetDelay(_tutorialStartDelay)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Restart);
    }

    public void StopTutorialHand()
    {
        _tutorialTween?.Kill();
        _tutorialTween = null;

        if (_tutorialHand != null)
        {
            _tutorialHand.gameObject.SetActive(false);
        }
    }

    public bool PlayRandomTarget(ItemType itemType)
    {
        List<Target> validTargets = new List<Target>();
        for (int i = 0; i < _targets.Count; i++)
        {
            if (_targets[i] != null && !_targets[i].IsComplete) validTargets.Add(_targets[i]);
        }

        while (validTargets.Count > 0)
        {
            int index = UnityEngine.Random.Range(0, validTargets.Count);
            Target target = validTargets[index];
            validTargets.RemoveAt(index);
            if (target.TryAccept(itemType)) return true;
        }

        return false;
    }


    public bool TryDropOnTarget(ItemType itemType, RectTransform itemRectTransform, [Bridge.Ref] Vector2 pointerPosition,
        Camera eventCamera, float padding)
    {
        if (itemRectTransform == null) return false;

        Rect itemRect = GetScreenRect(itemRectTransform, eventCamera);
        Target bestTarget = null;
        float bestDistance = float.MaxValue;

        for (int i = 0; i < _targets.Count; i++)
        {
            Target target = _targets[i];
            if (target == null || !target.isActiveAndEnabled || !target.CanAccept(itemType)) continue;

            Rect targetRect = target.GetScreenRect(eventCamera);
            float itemRadius = Mathf.Max(itemRect.width, itemRect.height) * 0.5f;
            float targetRadius = Mathf.Max(60f, targetRect.width * 0.5f);
            float receiveRadius = itemRadius + targetRadius + padding;
            float distance = (target.GetScreenAnchor(eventCamera) - pointerPosition).sqrMagnitude;
            if (distance > receiveRadius * receiveRadius || distance >= bestDistance) continue;

            bestDistance = distance;
            bestTarget = target;
        }

        return bestTarget != null && bestTarget.TryAccept(itemType);
    }

    private static Rect GetScreenRect(RectTransform rectTransform, Camera eventCamera)
    {
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

    private static Rect GetIntersection([Bridge.Ref] Rect first, [Bridge.Ref] Rect second)
    {
        float xMin = Mathf.Max(first.xMin, second.xMin);
        float yMin = Mathf.Max(first.yMin, second.yMin);
        float xMax = Mathf.Min(first.xMax, second.xMax);
        float yMax = Mathf.Min(first.yMax, second.yMax);
        return xMax > xMin && yMax > yMin ? Rect.MinMaxRect(xMin, yMin, xMax, yMax) : Rect.zero;
    }
}