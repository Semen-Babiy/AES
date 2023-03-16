// Инициализируем Swiper
new Swiper ('.swiper',{
    // Стрелки
    navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
        // Динамические буллеты
        dynamicBullets: true,
        // Пронумерованные буллеты
       // renderBullet: function(index, className) {
       //     return '<span class="' + className + '">' + (index + 1) + '</span>'; },
        // Скролл
        
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перемещать скролл
        draggable: true
    },

    // //Включение/отключение
    // // Перетаскивание на ПК
    // simulateTouch: true,
    // // Чувствительность свайпа
    // touchRatio: 1.5,
    // // Угол срабатывания свайпа/перетаскивания
    // touchAngle: 45,
    // // Курсор перетаскивания
    // grabCursor: true,
    // // Переключение при клике на слайд
    // slideToClickedSlide: true,
    // // Навигация по хешу
    // hashNavigation: {
    //     // Отслеживать состояние
    //     watchState: true,
    // },
    // // Управление клавиатурой
    // keyboard: {
    //     // Включить/выключить
    //     enabled: true,
    //     // Работаспособность переключения, когда слайдер в видимом окне
    //     onlyInViewport: true,
    //     // Переключение клавишами
    //     pageUpDown: true,
    // },

    // autoHeight: false,

    // // Количество слайдов для показа
    slidesPerView: 1,

    // // Отключение функционала если слайдов меньше чем нужно
    // warchOverflow: true,

    // // Отступ между слайдами
    // spaceBetween: 30,

    // // Количество пролистываемых слайдов
    // slidesPerGroup: 1,
    
    // // Активный слайд по центру
    // // centeredSlides: true,

    // //Стартовый слайд
    // initialSlide: 0,

    // // Бесконечный прокрутка слайдера
    // loop: false,
    // //Количество дублирующих слайдов
    // loopedSlides: 0,

    // // Свободный режим
    // freeMode: true,
    
    // // Скорость прокрутки слайда
    // speed: 1000,

    // Адаптив (Ширина экрана)
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 1,
    //     },
    //     992:{
    //         slidesPerView: 2,
    //     },
    //     1200:{
    //         slidesPerView: 3,
    //     }
    // },
    
    // Зум картинки
    zoom: {
        // Максимальное увеличение
        maxRattio: 5,
        //Минимальное увеличение
        minRation: 1,
    },
    
});