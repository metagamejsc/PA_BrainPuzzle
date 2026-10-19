using UnityEngine;

public class ActiveDefaultSkin : MonoBehaviour
{
    [SerializeField] private SkinController anim;
    private void OnEnable()
    {
        anim.SetDefaultSkin();
    }
}
