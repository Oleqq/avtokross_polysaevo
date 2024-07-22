//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 0,
    watchOverflow: true,
    pagination: {
      el: '.promo-swiper-pagination',
      clickable: 'true',
    },
});


const complexMarketingSwiper = new Swiper(".complex-marketing-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 1000,
    simulateTouch: false,
    spaceBetween: 30,
    watchOverflow: true,
    watchSlidesProgress: 'true',
    navigation: {
        nextEl: ".complex-marketing-swiper-button-next",
        prevEl: ".complex-marketing-swiper-button-prev",
    },
    pagination: {
      el: '.complex-marketing-swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
        // when window width is >= 1200px
        1500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            simulateTouch: false,
            // autoHeight: false,
        },
        768: {
            slidesPerView: 2.4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            simulateTouch: true,
        },
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            // autoHeight: true,
        },
    },
});

const otherServicesSwiper = new Swiper(".other-services-swiper", {
    speed: 1000,
    simulateTouch: "false",
    watchOverflow: "true",
    spaceBetween: 32,
    pagination: {
        el: ".other-services-swiper-pagination",
        clickable: "true",
    },
    watchSlidesProgress: "true",
    breakpoints: {
        // when window width is >= 1200px
        1200: {

            slidesPerView: 3,
            spaceBetween: 32,
        },
        768: {

            slidesPerView: 2,
            spaceBetween: 26,
        },
        576: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },
        300: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 32,
        },
    },
});


