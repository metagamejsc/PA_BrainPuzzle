using System.Collections;
using UnityEngine;

public class TutorialHand : MonoBehaviour
{
    [SerializeField] private SpriteRenderer handRenderer;
    [SerializeField] private float moveDuration = 1.2f;
    [SerializeField] private float pauseDuration = 0.3f;

    private Coroutine animRoutine;

    public void PlayGuide(Vector3 startWorldPos, Vector3 endWorldPos)
    {
        gameObject.SetActive(true);
        if (handRenderer != null) handRenderer.enabled = true;
        if (animRoutine != null) StopCoroutine(animRoutine);
        animRoutine = StartCoroutine(GuideLoop(startWorldPos, endWorldPos));
    }

    // Follows live transforms so the guide stays correct when the parent Canvas rescales.
    public void PlayGuide(Transform startTarget, Transform endTarget)
    {
        if (startTarget == null || endTarget == null) return;
        gameObject.SetActive(true);
        if (handRenderer != null) handRenderer.enabled = true;
        if (animRoutine != null) StopCoroutine(animRoutine);
        animRoutine = StartCoroutine(GuideLoop(startTarget, endTarget));
    }


    public void HideGuide()
    {
        if (animRoutine != null)
        {
            StopCoroutine(animRoutine);
            animRoutine = null;
        }
        gameObject.SetActive(false);
    }

    private IEnumerator GuideLoop(Transform start, Transform end)
    {
        while (true)
        {
            transform.position = start.position;
            yield return new WaitForSeconds(pauseDuration);

            float t = 0f;
            while (t < moveDuration)
            {
                t += Time.deltaTime;
                float progress = Mathf.SmoothStep(0f, 1f, t / moveDuration);
                transform.position = Vector3.Lerp(start.position, end.position, progress);
                yield return null;
            }

            yield return new WaitForSeconds(pauseDuration);
        }
    }


    private IEnumerator GuideLoop(Vector3 start, Vector3 end)
    {
        while (true)
        {
            transform.position = start;
            yield return new WaitForSeconds(pauseDuration);

            float t = 0f;
            while (t < moveDuration)
            {
                t += Time.deltaTime;
                float progress = Mathf.SmoothStep(0f, 1f, t / moveDuration);
                transform.position = Vector3.Lerp(start, end, progress);
                yield return null;
            }

            yield return new WaitForSeconds(pauseDuration);
        }
    }
}
