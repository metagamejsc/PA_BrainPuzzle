using UnityEngine;

public class LevelPlayer : MonoBehaviour
{
    [SerializeField] private Timeline timeline;
    [SerializeField] private BoxArea captureArea;
    [SerializeField] private string titleVi;

    private void Start()
    {
        if (timeline != null)
        {
            timeline.Play();
        }
    }
}
