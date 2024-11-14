document.addEventListener("DOMContentLoaded", () => {
    // Находим все вкладки и контейнеры с карточками
    const tabs = document.querySelectorAll(".tabs-wrapper");
    const containers = {
        "home-internet": document.getElementById("home-internet-slider"),
        "home-tv": document.getElementById("home-tv-slider"), // Исправлено с "TV"
        "home-telephone": document.getElementById("home-telephone-slider"),
        "home-sput-tv": document.getElementById("home-sput-tv-slider"), // Исправлено с "TV-packages"
    };

    // Функция для показа карточек
    function showContainer(targetId) {
        // Скрываем все контейнеры
        Object.values(containers).forEach((container) => {
            container.style.display = "none";
        });

        // Показываем только соответствующий контейнер
        if (containers[targetId]) {
            containers[targetId].style.display = "block";
        }
    }

    // Назначаем обработчики кликов для вкладок
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Убираем класс активной вкладки у всех
            tabs.forEach((t) => t.classList.remove("active-tab"));
            // Добавляем класс активной вкладки к текущей
            tab.classList.add("active-tab");

            // Получаем ID целевой вкладки из data-target и показываем соответствующий контейнер
            const targetId = tab.dataset.target;
            showContainer(targetId);
        });
    });

    // Показываем карточки первой вкладки по умолчанию
    if (tabs.length > 0) {
        tabs[0].classList.add("active-tab");
        showContainer(tabs[0].dataset.target);
    }
});