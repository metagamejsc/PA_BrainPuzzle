using UnityEngine;

namespace Dt.Area
{
    public class BaseArea : MonoBehaviour
    {
        public virtual bool Contains(Vector2 point) => false;
        public virtual void Activate() {}
        public virtual void Deactivate() {}
    }

    public class BoxArea : BaseArea
    {
        [SerializeField] private Collider2D col2D;
        [SerializeField] private Vector2 size = Vector2.one;

        private void Awake()
        {
            if (col2D == null) col2D = GetComponent<Collider2D>();
        }

        public override bool Contains(Vector2 point)
        {
            if (col2D == null) col2D = GetComponent<Collider2D>();
            if (col2D != null && col2D.enabled)
            {
                return col2D.OverlapPoint(point);
            }
            return Vector2.Distance(transform.position, point) < 1.5f;
        }

        public override void Activate()
        {
            if (col2D == null) col2D = GetComponent<Collider2D>();
            if (col2D != null) col2D.enabled = true;
        }

        public override void Deactivate()
        {
            if (col2D == null) col2D = GetComponent<Collider2D>();
            if (col2D != null) col2D.enabled = false;
        }
    }
}

// Global alias for compatibility
public class BoxArea : Dt.Area.BoxArea {}
