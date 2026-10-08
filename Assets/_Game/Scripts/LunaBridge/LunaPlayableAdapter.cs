using UnityEngine;

namespace EscapeBigHead
{
    /// <summary>
    /// LunaPlayableAdapter: Cau noi giua game va Luna Playable Ads SDK.
    /// Giup game hoat dong binh thuong trong ca Unity Editor lan khi build ra Luna HTML5.
    /// </summary>
    public class LunaPlayableAdapter : MonoBehaviour
    {
        public static LunaPlayableAdapter Instance { get; private set; }

        [Header("Store URL (Fallback khi khong chay trong Luna SDK)")]
        [SerializeField] private string fallbackStoreUrl = "https://play.google.com";

        private bool hasGameStarted = false;
        private bool hasGameEnded = false;

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
            }
            else
            {
                Destroy(gameObject);
            }
        }

        private void Start()
        {
            NotifyGameStarted();
        }

        public void NotifyGameStarted()
        {
            if (hasGameStarted) return;
            hasGameStarted = true;

#if LUNA
            try
            {
                Luna.Unity.LifeCycle.GameStarted();
                Debug.Log("[Luna] LifeCycle.GameStarted() called.");
            }
            catch (System.Exception e)
            {
                Debug.LogWarning("[Luna] Error calling GameStarted: " + e.Message);
            }
#else
            Debug.Log("[Playable] Game Started (Standalone/Editor)");
#endif
        }

        public void NotifyGameEnded(bool isWin)
        {
            if (hasGameEnded) return;
            hasGameEnded = true;

#if LUNA
            try
            {
                Luna.Unity.LifeCycle.GameEnded();
                Debug.Log("[Luna] LifeCycle.GameEnded() called. Result: " + (isWin ? "WIN" : "LOSE"));
            }
            catch (System.Exception e)
            {
                Debug.LogWarning("[Luna] Error calling GameEnded: " + e.Message);
            }
#else
            Debug.Log("[Playable] Game Ended. Result: " + (isWin ? "WIN" : "LOSE"));
#endif
        }

        public void InstallFullGame()
        {
            try
            {
                Debug.Log("[Luna] Playable.InstallFullGame() called: " + fallbackStoreUrl);
                Luna.Unity.Playable.InstallFullGame();
            }
            catch (System.Exception e)
            {
                Debug.LogWarning("[Luna] Error calling InstallFullGame: " + e.Message);
            }
        }
    }
}
