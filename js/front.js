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
    slidesPerView: 5,
    pagination: {
        el: ".other-services-swiper-pagination",
        clickable: "true",
    },
    watchSlidesProgress: "true",
    breakpoints: {
        // when window width is >= 1200px
        1660: {

            slidesPerView: 4,
            spaceBetween: 32,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
        991: {
            slidesPerView: 3,
        },
        768: {

            slidesPerView: 2,
            spaceBetween: 26,
        },
        576: {
            slidesPerView: 2,
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



// скрипт бургера
document.querySelector(".header__burger").addEventListener("click", function () {
	document.querySelector(".header__menu--mobile").classList.toggle("visible");
	document.querySelector(".header__burger").classList.toggle("active");
});



// скрипт модалки с видео
document.addEventListener("DOMContentLoaded", function() {
    var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    var videoPlayer = document.getElementById('videoPlayer');
    var videoSource = document.getElementById('videoSource');
    
    document.querySelector('.hero__video-link').addEventListener('click', function(e) {
      e.preventDefault();
      var videoUrl = this.getAttribute('data-video-url');
      videoSource.src = videoUrl;
      videoPlayer.load(); // Загружаем новое видео
      videoModal.show(); // Показываем модальное окно
    });

    // Очищаем видео источник при закрытии модального окна
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', function() {
      videoPlayer.pause(); // Останавливаем воспроизведение видео
      videoSource.src = ''; // Очищаем источник видео
    });
});


// скрипт модалки с новостью
document.addEventListener('DOMContentLoaded', function() {
    var newsItems = document.querySelectorAll('.swiper-slide');
    var newsContent = document.getElementById('newsContent');
    var newsImage = document.getElementById('newsImage');
    var newsModalLabel = document.getElementById('newsModalLabel');

    newsItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var content = this.querySelector('.news-index__slider__text p').textContent;
            var imageSrc = this.querySelector('.news-index__slider__img img').src;
            var title = this.querySelector('.news-index__slider__img--title h5').textContent;

            newsContent.textContent = content;
            newsImage.src = imageSrc;
            newsModalLabel.textContent = title;
        });
    });
});

// скрипт показать фото
document.addEventListener('DOMContentLoaded', function() {
    var visibleCount = window.innerWidth < 767 ? 4 : 3; // Начальное количество видимых элементов
    var increment = window.innerWidth < 767 ? 2 : 3; // Начальное количество видимых элементов;
  
    var items = document.querySelectorAll('.gallery-index__gallery--img');
  
    // Делаем видимыми первые элементы в зависимости от visibleCount
    for (var i = 0; i < visibleCount && i < items.length; i++) {
      items[i].classList.add('visible');
    }
  
    var button = document.querySelector('.ui-button.red.gallery-button-more');
    button.addEventListener('click', function() {
      for (var i = visibleCount; i < visibleCount + increment && i < items.length; i++) {
        items[i].classList.add('visible');
      }
      visibleCount += increment;
    });
  });
  

  // faq js
  document.addEventListener('DOMContentLoaded', function () {
    const questionItems = document.querySelectorAll('.faq-question__list--item');
    const answerItems = document.querySelectorAll('.faq-question__answer > div');

    questionItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            // Удаляем класс active у всех вопросов
            questionItems.forEach(q => q.classList.remove('active'));
            // Устанавливаем класс active у текущего вопроса
            this.classList.add('active');

            // Скрываем все ответы
            answerItems.forEach(answer => answer.classList.remove('active'));

            // Показываем соответствующий ответ
            answerItems[index].classList.add('active');
        });
    });
});