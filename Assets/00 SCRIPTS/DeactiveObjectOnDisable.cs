using System.Collections.Generic;
using UnityEngine;

public class DeactiveObjectOnDisable : MonoBehaviour
{
    [SerializeField] private List<GameObject> objects;

    private void OnDisable()
    {
        objects.ForEach(obj => obj.SetActive(false));
    }
    private void OnEnable()
    {
        objects.ForEach(obj => obj.SetActive(true));
    }
}
