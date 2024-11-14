document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModalButton');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModalButton');

    // Show modal with slide-in effect
    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show'); // Add the 'show' class after display is set
        }, 10); // Slight delay to trigger the transition
    });

    // Hide modal with slide-out effect
    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('show'); // Remove the 'show' class to slide out
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Wait for the slide-out transition to complete before hiding
    });

    // Hide modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });
});