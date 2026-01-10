/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/electica-restaurant/";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/js/burger.js
function burgerToggle() {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.header__menu');
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });
}
var header = document.querySelector('.header');
var headerHeight = header.offsetHeight;
window.addEventListener('scroll', function () {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});
;// ./src/assets/reviews/reviewIgor.png
const reviewIgor_namespaceObject = __webpack_require__.p + "img/reviewIgor.b3282ee01f697d6a520e.png";
;// ./src/assets/reviews/reviewMarina.png
const reviewMarina_namespaceObject = __webpack_require__.p + "img/reviewMarina.6545989394b243779a05.png";
;// ./src/assets/reviews/reviewAleksandr.png
const reviewAleksandr_namespaceObject = __webpack_require__.p + "img/reviewAleksandr.ff561071c375cd3a22de.png";
;// ./src/assets/reviews/reviewNatalya.png
const reviewNatalya_namespaceObject = __webpack_require__.p + "img/reviewNatalya.66ec80436bfd6b6f9e44.png";
;// ./src/pages/home/reviews.js
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




var starIcon = './svg/star.svg';

// Массив с данными отзывов
var reviewsData = [{
  photo: reviewIgor_namespaceObject,
  name: "Игорь Ковалев",
  rating: 5,
  text: "Провели здесь день рождения - атмосфера просто великолепная. Персонал веселый и отзывчивый, кухня порадовала. Особенно понравились закуски к пиву! Обязательно будем возвращаться, чтобы попробовать все блюда из меню."
}, {
  photo: reviewMarina_namespaceObject,
  name: "Марина Соколова",
  rating: 4,
  text: "Посетили семейный ресторан с подругами на девичнике, и это был наш лучший выбор! У нас был волшебный вечер - вкусная еда, отличные коктейли и веселая атмосфера. Обязательно вернемся сюда с мужьями! Очень рекомендую для дружеских посиделок и праздников."
}, {
  photo: reviewAleksandr_namespaceObject,
  name: "Александр Петров",
  rating: 5,
  text: "Этот ресторан - настоящая находка! Проводил здесь деловой ужин с партнерами, и все остались в восторге. Обслуживание на высшем уровне, персонал внимателен к каждой детали. Кухня порадовала своим разнообразием. Отличное место для деловых встреч и ужинов в уютной обстановке. Рекомендую!"
}, {
  photo: reviewNatalya_namespaceObject,
  name: "Наталья Иванова",
  rating: 5,
  text: "Посетили семейный ресторан вместе с мужем и детьми - отличное место для семейного ужина! Обстановка очень уютная, а обслуживание выше всяких похвал. Наши дети в восторге от детского меню, которое оказалось не только вкусным, но и заботливо подготовленным с учетом детских предпочтений. Будем рекомендовать всем друзьям и обязательно вернемся."
}];
function initReviews() {
  var reviewsContainer = document.getElementById('reviewsContainer');
  var template = document.getElementById('reviewTemplate');
  var _iterator = _createForOfIteratorHelper(reviewsData),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var reviewInfo = _step.value;
      var reviewCard = template.content.cloneNode(true);
      reviewCard.querySelector('.reviews__photo').setAttribute('src', reviewInfo.photo);
      reviewCard.querySelector('.reviews__name').textContent = reviewInfo.name;
      reviewCard.querySelector('.reviews__text').textContent = reviewInfo.text;
      var starsContainer = reviewCard.querySelector('.reviews__starts');
      for (var i = 0; i < reviewInfo.rating; i++) {
        var star = document.createElement('img');
        star.src = starIcon;
        starsContainer.appendChild(star);
      }
      reviewsContainer.appendChild(reviewCard);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
;// ./src/pages/home/index.js





$(function () {
  burgerToggle();
  initReviews();
  // переключение слайдов в галерее------------------

  $('.rightArrow').on('click', function () {
    $('.gallery').removeClass('about').addClass('values');
  });
  $('.leftArrow').on('click', function () {
    $('.gallery').removeClass('values').addClass('about');
  });
  // ------------------------------------------------

  // переключение слайдов в отзывах------------------

  $('#rightReviewArrow').on('click', function (event) {
    if (event.target.classList.contains('inactive')) return;
    var reviewsContainer = document.getElementById('reviewsContainer');
    var cardWidth = reviewsContainer.querySelector('.reviews__card').offsetWidth;
    reviewsContainer.scrollLeft += cardWidth + 30;
    $('#leftReviewArrow').removeClass('inactive');
  });
  $('#leftReviewArrow').on('click', function (event) {
    if (event.target.classList.contains('inactive')) return;
    var reviewsContainer = document.getElementById('reviewsContainer');
    var cardWidth = reviewsContainer.querySelector('.reviews__card').offsetWidth;
    reviewsContainer.scrollLeft -= cardWidth + 30;
    $('#rightReviewArrow').removeClass('inactive');
  });
  // ------------------------------------------------

  // Обсервер для скрытия стрелок--------------------

  var reviewsContainer = document.getElementById('reviewsContainer');
  var firstCard = reviewsContainer.firstElementChild;
  var lastCard = reviewsContainer.lastElementChild;
  var options = {
    root: reviewsContainer,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.3
  };
  var callback = function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (entry.target === firstCard) {
          $('#leftReviewArrow').addClass('inactive');
        } else if (entry.target === lastCard) {
          $('#rightReviewArrow').addClass('inactive');
        }
      }
    });
  };
  var observer = new IntersectionObserver(callback, options);
  observer.observe(firstCard);
  observer.observe(lastCard);
  // ------------------------------------------------

  // показ всех отзывов на мобильном экране---------------------------

  var container = $('#reviewsContainer');
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
  });
  // ---------------------------------------------

  // показать кнопку "акция" на мобильном экране--------------------------------
  var offerButton = document.getElementById('offer_open');
  if (window.innerWidth <= 480) {
    document.getElementById('button_mob').classList.add('is-visible');
  }
  //  ---------------------------------------------

  // показываем кнопку "акция" при скролле

  // если экран маленький — вообще ничего не делаем
  if (window.innerWidth > 800) {
    var bookingButtons = [document.querySelector('.intro .button'), document.querySelector('.contact .button')];
    var visibleButtons = new Set();
    var _observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visibleButtons.add(entry.target);
        } else {
          visibleButtons["delete"](entry.target);
        }
      });
      offerButton.classList.toggle('is-visible', visibleButtons.size === 0);
    }, {
      threshold: 0.3
    });
    bookingButtons.forEach(function (btn) {
      return _observer.observe(btn);
    });
  }
  // ---------------------------------------------

  // открытие модального окна "Акция"

  $(document).on('click', '#offer_open, #button_mob', function () {
    $('#offer').fadeIn(200);
    if (window.innerWidth <= 480) {
      document.body.classList.add('no-scroll');
    }
  });
  $(document).on('click', '#offer .close', function () {
    $('#offer').fadeOut(200);
    document.body.classList.remove('no-scroll');
  });
});
/******/ })()
;