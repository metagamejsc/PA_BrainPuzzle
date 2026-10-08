using System.Collections.Generic;
using UnityEngine;

namespace EscapeBigHead
{
    /// <summary>
    /// UIIdleEffect: Tao hieu ung nhip tho (idle pulse/breath) cho danh sach cac button / image.
    /// Cho phep keo tha danh sach cac object vao trong Inspector.
    /// Toi uu cho Luna Playable Ads, zero-GC, hoat dong lien tuc mượt ma.
    /// </summary>
    public class UIIdleEffect : MonoBehaviour
    {
        [Header("Target Elements List")]
        [Tooltip("Keo tha cac Button hoac Image can tao hieu ung idle vao day")]
        [SerializeField] private List<RectTransform> targetElements = new List<RectTransform>();

        [Header("Animation Settings")]
        [SerializeField] private float minScale = 0.94f;
        [SerializeField] private float maxScale = 1.06f;
        [SerializeField] private float speed = 2.5f;

        private float timer = 0f;

        private void Update()
        {
            if (targetElements == null || targetElements.Count == 0) return;

            timer += Time.unscaledDeltaTime * speed;
            // Ham sin tao nhip tho deu dan tu 0 den 1
            float wave = (Mathf.Sin(timer) + 1f) * 0.5f;
            float currentScale = Mathf.Lerp(minScale, maxScale, wave);
            Vector3 scaleVec = new Vector3(currentScale, currentScale, 1f);

            for (int i = 0; i < targetElements.Count; i++)
            {
                var element = targetElements[i];
                if (element != null && element.gameObject.activeInHierarchy)
                {
                    element.localScale = scaleVec;
                }
            }
        }

        /// <summary>
        /// Ham tien ich de them element qua code neu can
        /// </summary>
        public void AddTarget(RectTransform element)
        {
            if (element != null && !targetElements.Contains(element))
            {
                targetElements.Add(element);
            }
        }

        public void RemoveTarget(RectTransform element)
        {
            if (element != null)
            {
                targetElements.Remove(element);
            }
        }
    }
}
