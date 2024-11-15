document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('#openModalButton, #openModalButton-fixed');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModalButton');

    // Функция для показа модального окна
    const openModal = () => {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show'); // Добавляем класс 'show' для анимации
        }, 10);
    };

    // Функция для скрытия модального окна
    const closeModal = () => {
        modal.classList.remove('show'); // Убираем класс 'show' для анимации закрытия
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    };

    // Добавляем обработчики событий на обе кнопки
    openModalButtons.forEach((button) => {
        button.addEventListener('click', openModal);
    });

    // Закрытие модального окна при нажатии на кнопку закрытия
    closeModalButton.addEventListener('click', closeModal);

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
