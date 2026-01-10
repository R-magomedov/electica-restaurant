import '../../style/fonts.css';
import '../../style/common.css';
import '../../style/home.css';

import { burgerToggle } from '../../js/burger.js';
import { initReviews } from '../home/reviews.js';
$(function () {
  burgerToggle();
  initReviews()
  // переключение слайдов в галерее------------------

  $('.rightArrow').on('click', function () {
    $('.gallery').removeClass('about').addClass('values');
  })


  $('.leftArrow').on('click', function () {
    $('.gallery').removeClass('values').addClass('about');
  })
  // ------------------------------------------------

  // переключение слайдов в отзывах------------------

  $('#rightReviewArrow').on('click', function (event) {
    if (event.target.classList.contains('inactive')) return
    const reviewsContainer = document.getElementById('reviewsContainer');
    const cardWidth = reviewsContainer.querySelector('.reviews__card').offsetWidth
    reviewsContainer.scrollLeft += cardWidth + 30
    $('#leftReviewArrow').removeClass('inactive')
  })

  $('#leftReviewArrow').on('click', function (event) {
    if (event.target.classList.contains('inactive')) return
    const reviewsContainer = document.getElementById('reviewsContainer');
    const cardWidth = reviewsContainer.querySelector('.reviews__card').offsetWidth
    reviewsContainer.scrollLeft -= cardWidth + 30
    $('#rightReviewArrow').removeClass('inactive')
  })
  // ------------------------------------------------

  // Обсервер для скрытия стрелок--------------------

  const reviewsContainer = document.getElementById('reviewsContainer');
  const firstCard = reviewsContainer.firstElementChild;
  const lastCard = reviewsContainer.lastElementChild;

  const options = {
    root: reviewsContainer,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.3,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === firstCard) {
          $('#leftReviewArrow').addClass('inactive')
        } else if (entry.target === lastCard) {
          $('#rightReviewArrow').addClass('inactive')
        }
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(firstCard);
  observer.observe(lastCard);
  // ------------------------------------------------

  // показ всех отзывов на мобильном экране---------------------------

  const container = $('#reviewsContainer');
  container.addClass('reviews--collapsed');

  $('#showMore').on('click', function () {
    container.toggleClass('reviews--collapsed');

    if (container.hasClass('reviews--collapsed')) {
      $(this).text('Показать ещё');
      $('html, body').animate({
        scrollTop: container.offset().top
      }, 300);
    } else {
      $(this).text('Скрыть');
    }
  })
  // ---------------------------------------------


  // показать кнопку "акция" на мобильном экране--------------------------------
  const offerButton = document.getElementById('offer_open');

  if (window.innerWidth <= 480) {
    document.getElementById('button_mob').classList.add('is-visible');
  }
  //  ---------------------------------------------

  // показываем кнопку "акция" при скролле

  // если экран маленький — вообще ничего не делаем
  if (window.innerWidth > 800) {

    const bookingButtons = [
      document.querySelector('.intro .button'),
      document.querySelector('.contact .button')
    ];

    let visibleButtons = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleButtons.add(entry.target);
        } else {
          visibleButtons.delete(entry.target);
        }
      });

      offerButton.classList.toggle('is-visible', visibleButtons.size === 0);
    }, {
      threshold: 0.3
    });
    bookingButtons.forEach(btn => observer.observe(btn));
  }
  // ---------------------------------------------

  // открытие модального окна "Акция"

  $(document).on('click', '#offer_open, #button_mob', function () {
    $('#offer').fadeIn(200);
    if (window.innerWidth <= 480) {
      document.body.classList.add('no-scroll');
    }
  })

  $(document).on('click', '#offer .close', function () {
    $('#offer').fadeOut(200);
    document.body.classList.remove('no-scroll');
  })
})

