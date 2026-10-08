using UnityEngine;

/// <summary>
/// Tappable area over the door (the door art lives in the Girl Spine).
/// Tapping it before the wolf is fully prepared opens the door and triggers the lose flow.
/// </summary>
public class DoorTapZone : MonoBehaviour
{
    // Design units (1080x1920 reference); scaled with the parent Canvas like DropTargetZone.
    [SerializeField] private Vector2 areaSize = new Vector2(0.9f, 5f);

    public bool ContainsPoint(Vector2 worldPos)
    {
        Vector2 center = (Vector2)transform.position;
        Vector3 s = transform.lossyScale;
        float halfX = areaSize.x * Mathf.Abs(s.x) * 0.5f;
        float halfY = areaSize.y * Mathf.Abs(s.y) * 0.5f;

        return worldPos.x >= center.x - halfX && worldPos.x <= center.x + halfX &&
               worldPos.y >= center.y - halfY && worldPos.y <= center.y + halfY;
    }

    private void OnDrawGizmosSelected()
    {
        Vector3 s = transform.lossyScale;
        Gizmos.color = Color.red;
        Gizmos.DrawWireCube(transform.position, new Vector3(areaSize.x * Mathf.Abs(s.x), areaSize.y * Mathf.Abs(s.y), 0.1f));
    }
}
