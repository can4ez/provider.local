document.addEventListener("DOMContentLoaded", () => {
    let swiperInstances = [];

    // Функция для инициализации слайдеров
    function initMobileSwiper() {
        if (window.innerWidth < 768) {
            // Проверяем, если слайдеры уже инициализированы, пропускаем
            if (swiperInstances.length > 0) return;

            // Инициализация слайдера для "Домашний интернет"
            swiperInstances.push(
                new Swiper('#home-internet-slider', {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    pagination: {
                        el: '#home-internet-slider .swiper-pagination',
                        clickable: true,
                    },
                    loop: true,
                })
            );

            // Инициализация слайдера для "ТВ"
            swiperInstances.push(
                new Swiper('#home-tv-slider', {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    pagination: {
                        el: '#home-tv-slider .swiper-pagination',
                        clickable: true,
                    },
                    loop: true,
                })
            );

            // Инициализация слайдера для "Домашний телефон"
            swiperInstances.push(
                new Swiper('#home-telephone-slider', {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    pagination: {
                        el: '#home-telephone-slider .swiper-pagination',
                        clickable: true,
                    },
                    loop: true,
                })
            );

            // Инициализация слайдера для "Спутниковое ТВ"
            swiperInstances.push(
                new Swiper('#home-sput-tv-slider', {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    pagination: {
                        el: '#home-sput-tv-slider .swiper-pagination',
                        clickable: true,
                    },
                    loop: true,
                })
            );
        }
    }

    // Функция для уничтожения слайдеров
    function destroySwiper() {
        if (window.innerWidth >= 768 && swiperInstances.length > 0) {
            swiperInstances.forEach(swiper => swiper.destroy(true, true));
            swiperInstances = [];
        }
    }

    // Инициализация при загрузке страницы
    initMobileSwiper();
    destroySwiper();

    // Перезапуск при изменении размера окна
    window.addEventListener('resize', () => {
        destroySwiper();
        initMobileSwiper();
    });
});