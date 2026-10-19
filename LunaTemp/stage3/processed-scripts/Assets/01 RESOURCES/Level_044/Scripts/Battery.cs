using System;
using System.Collections.Generic;
using UnityEngine;

public class Battery : MonoBehaviour
{
    [SerializeField]
    private List<GameObject> greenCells;
    private int percentage;

    public event Action<int> OnPercentageChanged;

    public void Charge()
    {
        this.percentage++;
        OnPercentageChanged?.Invoke(this.percentage);
        if (this.percentage % 2 == 0)
        {
            this.greenCells[this.percentage / 2 - 1].SetActive(true);
        }
    }
}