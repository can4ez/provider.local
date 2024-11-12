document.addEventListener('DOMContentLoaded', () => {
    // Function to update speed and price for a specific card
    function updateSpeedAndPrice(sliderId, speedDisplayId, priceDisplayId, priceMap) {
        const slider = document.getElementById(sliderId);
        const speedDisplay = document.getElementById(speedDisplayId);
        const priceDisplay = document.getElementById(priceDisplayId);

        // Check if elements exist before adding event listener
        if (slider && speedDisplay && priceDisplay) {
            slider.addEventListener('input', () => {
                const speed = slider.value;
                speedDisplay.textContent = speed;

                // Update the price based on speed using the provided price map
                const price = priceMap[speed] || priceMap.default;
                priceDisplay.textContent = price;
            });
        } else {
            console.error(`Element not found: sliderId=${sliderId}, speedDisplayId=${speedDisplayId}, priceDisplayId=${priceDisplayId}`);
        }
    }

    // Price mappings for different speeds for each card
    const priceMap1 = { '100': 700, '200': 900, '300': 1100, '400': 1300, '500': 1500, default: 900 };
    const priceMap1_7 = { '100': 700, '200': 900, '300': 1100, '400': 1300, '500': 1500, default: 900 };
    const priceMap3 = { '100': 600, '200': 650, '300': 750, '400': 850, '500': 950, default: 650 };

    // Apply to each card with correct IDs
    updateSpeedAndPrice('speedSlider1', 'speedValue1', 'priceValue1', priceMap1);
    updateSpeedAndPrice('speedSlider1_7', 'speedValue1_7', 'priceValue1_7', priceMap1_7);
    updateSpeedAndPrice('speedSlider3', 'speedValue3', 'priceValue3', priceMap3);
});