using System.Collections.Generic;
using UnityEngine;

public class ActiveObjectOnDisable : MonoBehaviour
{
    [SerializeField] private List<GameObject> objects;

    private void OnDisable()
    {
        objects.ForEach(obj => obj.SetActive(true));
    }
    private void OnEnable()
    {
        objects.ForEach(obj => obj.SetActive(false));
    }
}
