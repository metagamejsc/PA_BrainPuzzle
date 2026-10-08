using Spine.Unity;
using UnityEngine;

namespace EscapeBigHead
{
    /// <summary>
    /// ClosetDoorTrigger: Xu ly thao tac tap / click vao canh tu do (Slot 6),
    /// phat Spine animation mo cua va hien thi vat pham ben trong.
    /// </summary>
    [RequireComponent(typeof(Collider2D))]
    public class ClosetDoorTrigger : MonoBehaviour
    {
        [Header("Spine Door")]
        [SerializeField] private SkeletonAnimation doorSkeleton;
        [SerializeField] private string openAnimName = "Act 1";

        [Header("Hidden Item Inside Closet")]
        [SerializeField] private GameObject hiddenItem;

        private bool isOpened = false;

        private void Start()
        {
            if (hiddenItem != null)
            {
                hiddenItem.SetActive(false);
            }
        }

        private void OnMouseDown()
        {
            OpenDoor();
        }

        public void OpenDoor()
        {
            if (isOpened) return;
            isOpened = true;

            if (SoundManager.Instance != null)
            {
                SoundManager.Instance.PlayClosetOpen();
            }

            if (doorSkeleton != null)
            {
                doorSkeleton.AnimationState.SetAnimation(0, openAnimName, false);
            }

            if (hiddenItem != null)
            {
                hiddenItem.SetActive(true);
            }

            // Vo hieu hoa collider sau khi mo cua de khong chan click cac item sau do
            Collider2D col = GetComponent<Collider2D>();
            if (col != null) col.enabled = false;
        }
    }
}
