using UnityEngine;

public class ActiveActionAnim : MonoBehaviour
{
    [SerializeField] private AnimationController anim;
    [SerializeField] private string key;
    [SerializeField] private bool loop;

    private void OnEnable()
    {
        anim.PlayAnimation(key, loop);
    }
}
