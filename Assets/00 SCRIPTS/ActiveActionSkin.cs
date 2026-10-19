using UnityEngine;

public class ActiveActionSkin : MonoBehaviour
{
    [SerializeField] private SkinController anim;
    private void OnEnable()
    {
        anim.SetActionSkin();
    }
}
