document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tabs-wrapper');
    const sections = document.querySelectorAll('.swiper-container');
    const mobileTitle = document.querySelector('.tarif-wrapper-mobile p');
    const modal = document.getElementById("serviceModal");
    const openModalButton = document.getElementById("openServiceModal");
    const closeModalButton = document.getElementById("closeModalButton-servise");
    const selectServiceButton = document.getElementById("selectServiceButton");
    const radioButtons = document.querySelectorAll('.modal-form-servise input[type="radio"]');

    // Явный маппинг вкладок и соответствующих секций
    const tabMapping = {
        'home-internet': 'home-internet-slider',
        'home-tv': 'home-tv-slider',
        'home-telephone': 'home-telephone-slider',
        'home-sput-tv': 'home-sput-tv-slider'
    };

    // Функция для переключения вкладок
    const switchTab = (targetTab) => {
        const sectionId = tabMapping[targetTab];

        // Проверка, существует ли секция
        if (!sectionId) {
            console.error(`Неизвестная вкладка: ${targetTab}`);
            return;
        }

        // Скрываем все секции
        sections.forEach((section) => {
            section.style.display = 'none';
        });

        // Убираем активные классы со всех вкладок
        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
        });

        // Находим активную вкладку и соответствующую секцию
        const activeTab = document.querySelector(`.tabs-wrapper[data-target="${targetTab}"]`);
        const activeSection = document.getElementById(sectionId);

        if (activeTab && activeSection) {
            activeSection.style.display = 'block';
            activeTab.classList.add('active-tab');
            mobileTitle.textContent = activeTab.textContent;
        } else {
            console.error(`Не найдены элементы для вкладки: ${targetTab}`);
        }
    };

    // Обработчик кнопки "Выбрать услугу"
    selectServiceButton.addEventListener("click", () => {
        const selectedRadio = Array.from(radioButtons).find((radio) => radio.checked);
    
        if (selectedRadio) {
            const selectedService = selectedRadio.value;
            console.log(`Выбрана услуга: ${selectedService}`);
            switchTab(selectedService);
            closeModal();
        } else {
            alert("Пожалуйста, выберите услугу перед подтверждением.");
        }
    });

    // Обработчики для открытия и закрытия модального окна
    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
    });
    const closeModal = () => {
        const modal = document.getElementById("serviceModal");
        if (modal) {
            modal.style.display = "none";
        }
    };

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Инициализация: отображаем первую вкладку по умолчанию
    switchTab('home-internet');
});