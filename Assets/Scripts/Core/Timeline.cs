using System.Collections;
using UnityEngine;

public class Timeline : MonoBehaviour
{
    [SerializeField] private VisualAction startingAction;

    private void Start()
    {
        if (startingAction != null)
        {
            startingAction.Execute();
        }
    }

    public void Play()
    {
        if (startingAction != null)
        {
            startingAction.Execute();
        }
    }
}
