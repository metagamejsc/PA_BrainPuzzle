using UnityEngine;

public class HasSkin : MonoBehaviour
{
    [SerializeField] private SpineSkinMixer skinMixer;
    [SerializeField] private string skinName;

    public bool Evaluate()
    {
        return skinMixer != null && skinMixer.HasSkin(skinName);
    }
}
