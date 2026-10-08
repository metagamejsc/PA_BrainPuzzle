using UnityEngine;

namespace EscapeBigHead
{
    public enum TargetType
    {
        Girl,
        Closet,
        Demon,
        Custom
    }

    /// <summary>
    /// DropTargetArea: Dinh nghia vung tiep nhan cac vat pham keo tha.
    /// Toi uu voi Collider2D hoac khoang cach ban kinh (Radius Check).
    /// </summary>
    public class DropTargetArea : MonoBehaviour
    {
        [Header("Target Configuration")]
        [SerializeField] private TargetType targetType = TargetType.Girl;
        [SerializeField] private float customRadius = 1.2f;

        private Collider2D col2d;

        private void Awake()
        {
            col2d = GetComponent<Collider2D>();
        }

        public TargetType GetTargetType() => targetType;

        public bool ContainsPoint(Vector3 worldPoint)
        {
            if (col2d != null && col2d.enabled)
            {
                if (col2d is BoxCollider2D box)
                {
                    Vector2 localPoint = transform.InverseTransformPoint(worldPoint) - (Vector3)box.offset;
                    Vector2 halfSize = box.size * 0.5f;
                    return Mathf.Abs(localPoint.x) <= halfSize.x &&
                           Mathf.Abs(localPoint.y) <= halfSize.y;
                }

                Bounds b = col2d.bounds;
                return worldPoint.x >= b.min.x && worldPoint.x <= b.max.x &&
                       worldPoint.y >= b.min.y && worldPoint.y <= b.max.y;
            }

            // Fallback dung khoang cach neu khong co collider
            return Vector2.Distance(transform.position, worldPoint) <= customRadius;
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.green;
            if (col2d == null)
            {
                Gizmos.DrawWireSphere(transform.position, customRadius);
            }
        }
    }
}
