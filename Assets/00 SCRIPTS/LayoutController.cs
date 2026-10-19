using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private GameObject CTA;
    [SerializeField] private bool hide;
    void Start()
    {
        Fit();
    }


    void Update()
    {
        Fit();
    }
    private void Fit()
    {
        float ratio = (float)Screen.width / Screen.height;
        if (ratio > 1.35f)
        {
            if (!hide) return;
            hide = false;
            CTA.SetActive(true);
        }
        else
        {
            if (hide) return;
            hide = true;
            CTA.SetActive(false);
        }
    }
}
