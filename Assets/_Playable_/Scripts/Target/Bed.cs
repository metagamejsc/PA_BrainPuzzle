using Spine.Unity;
using UnityEngine;

namespace Playable
{
    public class Bed : Target
    {
        [SerializeField] private SkeletonGraphic _skeleton;

        [SpineAnimation(dataField: nameof(_skeleton))] [SerializeField]
        private string _animName;

        [SerializeField] private GameObject _bed;
        [SerializeField] private GameObject _bedOld;
        [SerializeField] private AudioClip _clip;

        public override void Play()
        {
            base.Play();
            _skeleton.gameObject.SetActive(true);
            _bedOld.SetActive(false);
            _bed.SetActive(false);
            _skeleton.AnimationState.SetAnimation(0, _animName, true);
            AudioManager.Instance.PlaySound(_clip);
        }

        public override void Stop()
        {
            base.Stop();
            if (IsCompleted)
            {
                _skeleton.gameObject.SetActive(false);
                _bedOld.SetActive(false);
                _bed.SetActive(true);
            }
            else
            {
                _skeleton.gameObject.SetActive(false);
                _bedOld.SetActive(true);
            }
        }
    }
}