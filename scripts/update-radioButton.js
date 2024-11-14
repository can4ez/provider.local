document.addEventListener('DOMContentLoaded', () => {
    // Function to update price display based on radio button selection
    function setupRadioButtons(name, priceDisplayId, priceMap) {
        const options = document.querySelectorAll(`input[name="${name}"]`);
        const priceDisplay = document.getElementById(priceDisplayId);

        options.forEach(option => {
            option.addEventListener('change', () => {
                if (option.checked) {
                    const price = priceMap[option.value];
                    priceDisplay.textContent = price;
                }
            });
        });
    }

    // Define price mappings for "Тариф №7" in both tabs
    const priceMapInternet = { '500': 1090, '1000': 1500 };
    const priceMapTV = { '500': 1200, '1000': 1700 };

    // Apply the function for each tab
    setupRadioButtons('speed7_internet', 'priceDisplay7_internet', priceMapInternet);
    setupRadioButtons('speed7_tv', 'priceDisplay7_tv', priceMapTV);
});