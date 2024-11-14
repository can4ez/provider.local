document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const closeMenu = document.getElementById('closeMenu');

    // Открытие бургер-меню
    burgerMenu.addEventListener('click', () => {
        navMenu.classList.add('open');
    });

    // Закрытие бургер-меню
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });

    // Закрытие меню при клике вне его области
    window.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && event.target !== burgerMenu) {
            navMenu.classList.remove('open');
        }
    });

    burgerMenu.addEventListener('click', () => {
        navMenu.classList.add('open');
        document.body.style.overflow = 'hidden'; // Блокируем скроллинг
    });
    
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('open');
        document.body.style.overflow = ''; // Возвращаем скроллинг
    });
});