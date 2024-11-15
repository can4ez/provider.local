document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs-wrapper");
    const containers = {
        "home-internet": document.getElementById("home-internet-slider"),
        "home-tv": document.getElementById("home-tv-slider"),
        "home-telephone": document.getElementById("home-telephone-slider"),
        "home-sput-tv": document.getElementById("home-sput-tv-slider"),
    };
    const btnContainer = document.querySelector('.swiper-container-btn');

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

        // Отображаем кнопки навигации только для "Домашний телефон"
        if (targetId === "home-telephone") {
            btnContainer.style.display = "flex";
        } else {
            btnContainer.style.display = "none";
        }
    }

    // Назначаем обработчики кликов для вкладок
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active-tab"));
            tab.classList.add("active-tab");

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