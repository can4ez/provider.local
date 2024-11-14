document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll('.footer__accordion');

    // Функция для активации аккордеонов только на мобильной версии
    const initAccordion = () => {
        if (window.innerWidth <= 480) {
            accordions.forEach((accordion) => {
                const content = accordion.nextElementSibling;

                // Скрываем содержимое по умолчанию
                content.style.display = 'none';

                // Обработчик клика для аккордеона
                accordion.addEventListener('click', () => {
                    // Переключаем видимость содержимого
                    const isVisible = content.style.display === 'block';
                    document.querySelectorAll('.footer__accordion-content').forEach((section) => {
                        section.style.display = 'none';
                    });

                    // Если содержимое было скрыто, показываем его
                    if (!isVisible) {
                        content.style.display = 'block';
                    }
                });
            });
        }
    };

    // Инициализируем аккордеоны при загрузке и изменении размера окна
    initAccordion();
    window.addEventListener('resize', initAccordion);
});