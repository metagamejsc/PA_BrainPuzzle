using Spine.Unity;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Playable
{
    public class Window : MonoBehaviour, IPointerClickHandler
    {
        [SerializeField] private SkeletonGraphic _skeletonWindow;

        [SpineAnimation(dataField: "_skeletonWindow")]
        public string _animWindow;

        [SerializeField] private SkeletonGraphic _skeletonGhost;

        [SpineAnimation(dataField: "_skeletonGhost")]
        public string _animGhost;

        public void OnPointerClick(PointerEventData eventData)
        {
            bool isCheck = GameController.Instance.PlayRandomTarget(ItemType.Window);
            if (!isCheck) return;
            _skeletonGhost.gameObject.SetActive(true);
            _skeletonWindow.AnimationState.AddAnimation(0, _animWindow, false, 0f);
            _skeletonGhost.AnimationState.AddAnimation(0, _animGhost, false, 0f);
        }
    }
}