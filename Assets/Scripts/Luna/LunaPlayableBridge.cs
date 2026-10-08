using UnityEngine;

public class LunaPlayableBridge : MonoBehaviour
{
    public static LunaPlayableBridge Instance { get; private set; }

    private void Awake()
    {
        if (Instance == null) Instance = this;
    }

    public void OnGameWin()
    {
#if LUNA
        Luna.Unity.LifeCycle.GameEnded();
#else
        Debug.Log("[LunaPlayableBridge] GameEnded called!");
#endif
    }

    public void OnGameLose()
    {
#if LUNA
        Luna.Unity.LifeCycle.GameEnded();
#else
        Debug.Log("[LunaPlayableBridge] GameEnded (Lose) called!");
#endif
    }

    public void OnCTAClicked()
    {
#if LUNA
        Luna.Unity.Playable.InstallFullGame();
#else
        Debug.Log("[LunaPlayableBridge] InstallFullGame clicked!");
#endif
    }
}
