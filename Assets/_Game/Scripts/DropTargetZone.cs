using UnityEngine;

public enum TargetZoneType
{
    Wolf,
    Mop,
    Hammer
}

public class DropTargetZone : MonoBehaviour
{
    public TargetZoneType zoneType;
    [SerializeField] private Vector2 areaSize = new Vector2(2f, 2f);

    // areaSize is authored in design units; scale with the parent Canvas so hit areas stay correct on any aspect ratio.
    public bool ContainsPoint(Vector2 worldPos)
    {
        Vector2 center = (Vector2)transform.position;
        Vector3 s = transform.lossyScale;
        float halfX = areaSize.x * Mathf.Abs(s.x) * 0.5f;
        float halfY = areaSize.y * Mathf.Abs(s.y) * 0.5f;

        return worldPos.x >= center.x - halfX && worldPos.x <= center.x + halfX &&
               worldPos.y >= center.y - halfY && worldPos.y <= center.y + halfY;
    }

    public Rect WorldRect
    {
        get
        {
            Vector3 s = transform.lossyScale;
            Vector2 size = new Vector2(areaSize.x * Mathf.Abs(s.x), areaSize.y * Mathf.Abs(s.y));
            return new Rect((Vector2)transform.position - size * 0.5f, size);
        }
    }

    /// <summary>Fraction (0..1) of the given bounds' area that lies inside this zone.</summary>
    public float OverlapFraction(Bounds b)
    {
        Rect z = WorldRect;
        float w = Mathf.Min(z.xMax, b.max.x) - Mathf.Max(z.xMin, b.min.x);
        float h = Mathf.Min(z.yMax, b.max.y) - Mathf.Max(z.yMin, b.min.y);
        if (w <= 0f || h <= 0f) return 0f;
        float area = b.size.x * b.size.y;
        return area > 0f ? (w * h) / area : 0f;
    }


    // Always visible in the Scene view so the drop area is easy to see and tune.
    private void OnDrawGizmos()
    {
        Rect r = WorldRect;
        Vector3 c = new Vector3(r.center.x, r.center.y, transform.position.z);
        Vector3 sz = new Vector3(r.width, r.height, 0.01f);
        Color col = zoneType == TargetZoneType.Wolf ? new Color(0.2f, 1f, 0.2f) : zoneType == TargetZoneType.Mop ? new Color(1f, 0.3f, 0.3f) : new Color(0.3f, 0.7f, 1f);
        Gizmos.color = new Color(col.r, col.g, col.b, 0.15f);
        Gizmos.DrawCube(c, sz);
        Gizmos.color = col;
        Gizmos.DrawWireCube(c, sz);
    }
}
