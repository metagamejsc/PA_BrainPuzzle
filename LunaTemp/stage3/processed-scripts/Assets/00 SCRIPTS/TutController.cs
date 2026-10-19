using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class TutController : MonoBehaviour
{
    [SerializeField] private GameObject icon;
    [SerializeField] private Transform tutObject;
    [SerializeField] private Vector3 toPos;
    [SerializeField] private float timeMove;
    [SerializeField] private float timeDelay;
    private Sequence sequence;
    private void Start()
    {
        sequence = DOTween.Sequence();
        sequence.AppendCallback(() =>
                {
                    tutObject.localScale = Vector3.one;
                    icon.SetActive(false);
                })
                .Append(transform.DOScale(0.8f, 0.5f))
                .AppendCallback(() =>
                {
                    tutObject.localScale = Vector3.zero;
                    icon.SetActive(true);
                })
                .Append(transform.DOLocalMove(toPos, timeMove))
                .AppendInterval(timeDelay)
                .SetLoops(-1, LoopType.Restart);
    }
    private void OnDisable()
    {
        StopTut();
    }
    public void StopTut()
    {
        tutObject.localScale = Vector3.one;
        sequence.Kill();
        Destroy(gameObject);
    }
}
