using UnityEngine;
using UnityEngine.UI;

namespace Level44
{
    public class TMProBatteryTracker : MonoBehaviour
    {
        [SerializeField]
        private Battery battery;
        [SerializeField]
        private Text text;

        private void OnEnable()
        {
            this.battery.OnPercentageChanged += OnPercentageChangedHandler;
        }

        private void OnDisable()
        {
            this.battery.OnPercentageChanged -= OnPercentageChangedHandler;
        }

        private void OnPercentageChangedHandler(int percentage)
        {
            percentage *= 10;
            text.text = string.Format($"{percentage}%");
        }
    }
}