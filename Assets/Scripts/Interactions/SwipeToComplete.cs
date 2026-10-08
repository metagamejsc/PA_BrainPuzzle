using System.Collections;
using Spine.Unity;
using UnityEngine;

public class SwipeToComplete : VisualAction
{
    private bool doorOpened = false;
    private Vector2 startMouse;
    private GameObject toiletMakeupItem;

    private void Start()
    {
        // Find the makeup/item inside the toilet and hide it initially until door opens
        var wcSeq = transform.parent;
        if (wcSeq != null)
        {
            var dragIn = wcSeq.Find("DragIn");
            if (dragIn != null)
            {
                toiletMakeupItem = dragIn.gameObject;
                toiletMakeupItem.SetActive(false); // Hide until door is opened
            }
        }
    }

    private void Update()
    {
        if (doorOpened) return;

        Vector2 mouseWorld = GetWorldMousePos();

        // Check if mouse is over toilet door (x: 0.0 to 1.8, y: 0.5 to 3.5)
        bool overDoor = (mouseWorld.x >= 0.0f && mouseWorld.x <= 1.8f && mouseWorld.y >= 0.5f && mouseWorld.y <= 3.5f);

        if (Input.GetMouseButtonDown(0) && overDoor)
        {
            startMouse = mouseWorld;
        }
        else if (Input.GetMouseButtonUp(0) && overDoor)
        {
            OpenToiletDoor();
        }
    }

    private void OpenToiletDoor()
    {
        doorOpened = true;
        Debug.Log("[SwipeToComplete] Opened toilet door!");

        AudioManager.Instance?.PlaySFX(AudioManager.Instance?.TapClip);
        AudioManager.Instance?.UnlockWebAudio();

        // Play open door animation on Girl 4
        var girl4 = GameObject.Find("Spine GameObject (Girl 4)");
        if (girl4 != null)
        {
            var sa = girl4.GetComponent<SkeletonAnimation>();
            if (sa != null)
            {
                sa.AnimationState.SetAnimation(0, "4_Tap_Cua", false);
                sa.AnimationState.AddAnimation(0, "4_Tap_Cua_Loop", true, 0f);
            }
        }

        // Reveal the makeup item inside the toilet
        if (toiletMakeupItem != null)
        {
            toiletMakeupItem.SetActive(true);
        }
    }

    private Vector2 GetWorldMousePos()
    {
        Camera cam = Camera.main;
        if (cam == null) cam = FindObjectOfType<Camera>();
        if (cam == null) return Vector2.zero;

        Vector3 screenPos = Input.mousePosition;
        if (Input.touchCount > 0)
        {
            screenPos = Input.GetTouch(0).position;
        }
        screenPos.z = Mathf.Abs(cam.transform.position.z);
        return cam.ScreenToWorldPoint(screenPos);
    }

    protected override IEnumerator OnExecuting()
    {
        while (!doorOpened)
        {
            yield return null;
        }
    }
}
