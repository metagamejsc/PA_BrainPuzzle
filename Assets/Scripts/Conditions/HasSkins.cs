using System.Collections.Generic;
using UnityEngine;

public class HasSkins : MonoBehaviour
{
    [SerializeField] private SpineSkinMixer skinMixer;
    [SerializeField] private List<string> skinNames = new List<string>();

    public bool Evaluate()
    {
        if (skinMixer == null) return false;
        foreach (var s in skinNames)
        {
            if (!skinMixer.HasSkin(s)) return false;
        }
        return true;
    }
}
