using System;
using System.Collections;
using System.Collections.Generic;
using Spine.Unity;
using UnityEngine;

namespace EscapeBigHead
{
    /// <summary>
    /// CharacterEscaper: Dieu khien hang doi cac co gai bo (Girl 2).
    /// Toi uu cho Luna Playable Ads:
    /// - Chi kich hoat toi da 2 co gai tren man hinh (Lead Girl tai 0,0 va Follower Girl tai 3.4).
    /// - An toan bo cac co gai con lai trong hang doi (SetActive false) de khong bi lo ra ngoai phong tren man hinh ngang (iPad/Desktop),
    ///   dong thoi tiet kiem 70%+ CPU/GPU cho xu ly Spine mesh.
    /// - Khi tien hang: Co gai tiep theo chi xuat hien tu mep ong (maxSpawnX = 4.6f) bo vao vi tri 3.4f.
    /// </summary>
    public class CharacterEscaper : MonoBehaviour
    {
        [Header("Crawling Girls In Queue")]
        [SerializeField] private List<SkeletonAnimation> crawlingGirls = new List<SkeletonAnimation>();

        [Header("Movement Settings")]
        [SerializeField] private float stepDistanceX = 3.4f;
        [SerializeField] private float moveDuration = 0.8f;
        [SerializeField] private float maxSpawnX = 4.6f;

        private int currentEscapedIndex = 0;
        private Coroutine moveCoroutine;

        public int CurrentEscapedIndex => currentEscapedIndex;
        public int TotalGirls => crawlingGirls.Count;

        private void Awake()
        {
            InitializeQueue();
        }

        public void InitializeQueue()
        {
            currentEscapedIndex = 0;
            UpdateVisibleGirls();
        }

        /// <summary>
        /// Chi bat toi da 2 co gai: Co gai dan dau va co gai di sau.
        /// Tat ca cac co gai khac duoc SetActive(false) de toi uu hieu nang va khong bi lo ra ngoai.
        /// </summary>
        public void UpdateVisibleGirls()
        {
            int count = crawlingGirls.Count;
            for (int i = 0; i < count; i++)
            {
                if (crawlingGirls[i] == null) continue;

                if (i == currentEscapedIndex)
                {
                    crawlingGirls[i].transform.localPosition = Vector3.zero;
                    crawlingGirls[i].gameObject.SetActive(true);
                    PlayAct1Animation(crawlingGirls[i]);
                }
                else if (i == currentEscapedIndex + 1)
                {
                    crawlingGirls[i].transform.localPosition = new Vector3(stepDistanceX, 0f, 0f);
                    crawlingGirls[i].gameObject.SetActive(true);
                    PlayAct1Animation(crawlingGirls[i]);
                }
                else
                {
                    crawlingGirls[i].gameObject.SetActive(false);
                }
            }
        }

        private void PlayAct1Animation(SkeletonAnimation spine)
        {
            if (spine != null && spine.AnimationState != null)
            {
                try
                {
                    spine.AnimationState.SetAnimation(0, "Act 1", true);
                }
                catch { }
            }
        }

        public SkeletonAnimation GetCurrentLeadGirl()
        {
            if (currentEscapedIndex >= 0 && currentEscapedIndex < crawlingGirls.Count)
            {
                return crawlingGirls[currentEscapedIndex];
            }
            return null;
        }

        public void HideCurrentLeadGirl()
        {
            if (currentEscapedIndex >= 0 && currentEscapedIndex < crawlingGirls.Count)
            {
                if (crawlingGirls[currentEscapedIndex] != null)
                {
                    crawlingGirls[currentEscapedIndex].gameObject.SetActive(false);
                }
            }
        }

        public void AdvanceQueue(Action onComplete = null)
        {
            currentEscapedIndex++;

            if (moveCoroutine != null) StopCoroutine(moveCoroutine);
            moveCoroutine = StartCoroutine(MoveQueueRoutine(moveDuration, onComplete));
        }

        private IEnumerator MoveQueueRoutine(float duration, Action onComplete)
        {
            SkeletonAnimation newLeadGirl = (currentEscapedIndex < crawlingGirls.Count) ? crawlingGirls[currentEscapedIndex] : null;
            Vector3 leadStartPos = newLeadGirl != null ? newLeadGirl.transform.localPosition : new Vector3(stepDistanceX, 0f, 0f);
            Vector3 leadTargetPos = Vector3.zero;

            int nextFollowerIndex = currentEscapedIndex + 1;
            SkeletonAnimation newFollowerGirl = (nextFollowerIndex < crawlingGirls.Count) ? crawlingGirls[nextFollowerIndex] : null;

            Vector3 followerStartPos = new Vector3(Mathf.Min(stepDistanceX * 2, maxSpawnX), 0f, 0f);
            Vector3 followerTargetPos = new Vector3(stepDistanceX, 0f, 0f);

            if (newLeadGirl != null)
            {
                newLeadGirl.gameObject.SetActive(true);
                PlayAct1Animation(newLeadGirl);
            }

            if (newFollowerGirl != null)
            {
                newFollowerGirl.transform.localPosition = followerStartPos;
                newFollowerGirl.gameObject.SetActive(true);
                PlayAct1Animation(newFollowerGirl);
            }

            for (int i = 0; i < crawlingGirls.Count; i++)
            {
                if (i != currentEscapedIndex && i != nextFollowerIndex && crawlingGirls[i] != null)
                {
                    crawlingGirls[i].gameObject.SetActive(false);
                }
            }

            float elapsed = 0f;
            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float t = Mathf.Clamp01(elapsed / duration);
                float smoothT = t * t * (3f - 2f * t);

                if (newLeadGirl != null)
                {
                    newLeadGirl.transform.localPosition = Vector3.Lerp(leadStartPos, leadTargetPos, smoothT);
                }

                if (newFollowerGirl != null)
                {
                    newFollowerGirl.transform.localPosition = Vector3.Lerp(followerStartPos, followerTargetPos, smoothT);
                }

                yield return null;
            }

            if (newLeadGirl != null) newLeadGirl.transform.localPosition = leadTargetPos;
            if (newFollowerGirl != null) newFollowerGirl.transform.localPosition = followerTargetPos;

            UpdateVisibleGirls();

            moveCoroutine = null;
            onComplete?.Invoke();
        }

        public void PlayShockAnimation()
        {
            int maxIdx = Mathf.Min(currentEscapedIndex + 2, crawlingGirls.Count);
            for (int i = currentEscapedIndex; i < maxIdx; i++)
            {
                if (crawlingGirls[i] != null && crawlingGirls[i].gameObject.activeSelf)
                {
                    try
                    {
                        crawlingGirls[i].AnimationState.SetAnimation(0, "Thao Tac Sai", false);
                        crawlingGirls[i].AnimationState.AddAnimation(0, "Thao Tac Sai_Loop", true, 0f);
                    }
                    catch { }
                }
            }
        }
    }
}
