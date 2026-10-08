using UnityEngine;

/// <summary>
/// Single entry point for all Luna playable lifecycle / CTA calls.
/// Always calls the Luna API (no custom define needed) and never opens a URL itself:
/// store redirection is handled by Luna / the ad network. In Luna Playground the calls
/// only show up in the Events panel ("Click on CTA", "End of game").
/// </summary>
public static class LunaPlayableAdapter
{
    private static bool gameEndedSent;

    public static void GameStarted()
    {
        gameEndedSent = false;
        Luna.Unity.LifeCycle.GameStarted();
#if UNITY_EDITOR
        Debug.Log("[Luna] GameStarted");
#endif
    }

    public static void GameEnded()
    {
        // Luna expects a single "End of game" per session.
        if (gameEndedSent) return;
        gameEndedSent = true;
        Luna.Unity.LifeCycle.GameEnded();
#if UNITY_EDITOR
        Debug.Log("[Luna] GameEnded");
#endif
    }

    public static void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
#if UNITY_EDITOR
        Debug.Log("[Luna] InstallFullGame (Click on CTA)");
#endif
    }
}
