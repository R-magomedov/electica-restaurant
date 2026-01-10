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
;// ./src/assets/gallery/menu/m/1.png
const _1_namespaceObject = __webpack_require__.p + "img/1.6d26dd189e500adcff56.png";
;// ./src/assets/gallery/menu/m/2.png
const _2_namespaceObject = __webpack_require__.p + "img/2.fc0afe28b93ec807281b.png";
;// ./src/assets/gallery/menu/m/3.png
const _3_namespaceObject = __webpack_require__.p + "img/3.c04a1e18e84af5cf1c5d.png";
;// ./src/assets/gallery/menu/m/4.png
const _4_namespaceObject = __webpack_require__.p + "img/4.01a07f2547fabb6e38fd.png";
;// ./src/assets/gallery/menu/m/5.png
const _5_namespaceObject = __webpack_require__.p + "img/5.6999d10bb2c1e9a530bb.png";
;// ./src/assets/gallery/menu/m/6.png
const _6_namespaceObject = __webpack_require__.p + "img/6.9aa3c81530effd8b37a9.png";
;// ./src/assets/gallery/menu/d/17.png
const _17_namespaceObject = __webpack_require__.p + "img/17.83178626a64de5242e89.png";
;// ./src/assets/gallery/menu/d/16.png
const _16_namespaceObject = __webpack_require__.p + "img/16.757548b01838fc7cc73b.png";
;// ./src/assets/gallery/menu/d/15.png
const _15_namespaceObject = __webpack_require__.p + "img/15.b978308309b599cd9a11.png";
;// ./src/assets/gallery/menu/d/14.png
const _14_namespaceObject = __webpack_require__.p + "img/14.dd754d06bf6e7441dd8d.png";
;// ./src/assets/gallery/menu/d/33.png
const _33_namespaceObject = __webpack_require__.p + "img/33.d7803a80cc61cf366e0c.png";
;// ./src/assets/gallery/menu/s/1.png
const s_1_namespaceObject = __webpack_require__.p + "img/1.9fafc261718884f1ff39.png";
;// ./src/assets/gallery/menu/s/2.png
const s_2_namespaceObject = __webpack_require__.p + "img/2.6b47d65b6637996b443d.png";
;// ./src/assets/gallery/menu/s/3.png
const s_3_namespaceObject = __webpack_require__.p + "img/3.d5958906488ca5c51bfe.png";
;// ./src/assets/gallery/menu/s/4.png
const s_4_namespaceObject = __webpack_require__.p + "img/4.0260db5f74f0d47a1f35.png";
;// ./src/assets/gallery/menu/s/5.png
const s_5_namespaceObject = __webpack_require__.p + "img/5.a78a31bebc854af4a870.png";
;// ./src/assets/gallery/menu/s/6.png
const s_6_namespaceObject = __webpack_require__.p + "img/6.482ea7ba905fa61923b8.png";
;// ./src/pages/menu/menuData.js


















var menuData = {
  mainCourse: [{
    "name": "Дорадо с овощами грилль",
    "price": "1500",
    "pic": _1_namespaceObject,
    "details": "Очень вкусная рыба.",
    "kcal": "1050"
  }, {
    "name": "Стейк из премиальной вырезки с брокколи и горчичным соусом",
    "price": "2350",
    "pic": _2_namespaceObject,
    "details": "Подробное описание стейка",
    "kcal": "550"
  }, {
    "name": "Тушёная козлятина на кости с картофельным пюре на сливках",
    "price": "2500",
    "pic": _3_namespaceObject,
    "details": "Подробное описание тушёной козлятины",
    "kcal": "420"
  }, {
    "name": "Итальянская классическая лазанья с говядиной в свежих томатах",
    "price": "1450",
    "pic": _4_namespaceObject,
    "details": "Подробное описание итальянской классической лазаньи",
    "kcal": "380"
  }, {
    "name": "Вок с рисом и курицей под соусом терияки",
    "price": "1000",
    "pic": _5_namespaceObject,
    "details": "Подробное описание вока с рисом и курицей под соусом терияки",
    "kcal": "380"
  }, {
    "name": "Хинкали с говядиной, калакури и аджарским соусом",
    "price": "1250",
    "pic": _6_namespaceObject,
    "details": "Подробное описание хинкали с говядиной, калакури и аджарским соусом",
    "kcal": "380"
  }],
  salad: [{
    "name": "Тыквенное наслаждение",
    "price": "500",
    "pic": s_1_namespaceObject,
    "details": "Утонченный торт, гелато, эспрессо, пряные семечки и свежая земляника в гармонии в каждом кусочке.",
    "kcal": "450"
  }, {
    "name": "Шоколадная симфония",
    "price": "350",
    "pic": s_2_namespaceObject,
    "details": "Насладитесь роскошью шоколадного оливкового торта, смешанного с нежным лавандовым семифреддо, карамелизированным медом и взбитым кремом с оливковым маслом.",
    "kcal": "550"
  }, {
    "name": "Тарт с кешью и карамелью",
    "price": "500",
    "pic": s_3_namespaceObject,
    "details": "Роскошный тарт с кешью в карамельном масле, сопровождаемый свежестью цитрусового варенья, гелато с маслом из козьего молока и нежными маринованными кумкватами. В каждой порции - идеальное сочетание сладкого и освежающего.",
    "kcal": "420"
  }, {
    "name": "Кокосовый крем-карамель с сливами и манго",
    "price": "450",
    "pic": s_4_namespaceObject,
    "details": "Нежный кокосовый крем-карамель, дополненный сочными сливами и ароматным манго, завершается карамелизованным кокосовым хрустом. Это блюдо - путешествие в тропический рай, где каждый вкус - настоящее наслаждение.",
    "kcal": "380"
  }, {
    "name": "Жареное мороженое с мусом из свежих ягод",
    "price": "400",
    "pic": s_5_namespaceObject,
    "details": "Насладитесь уникальным десертом - жареным мороженым с мусом из свежих ягод, который мы создали для настоящих гурманов. Каждый кусочек хрустящей оболочки мороженого, сливается с ароматным мусом из отборных ягод, придают этому блюду невероятный вкусовой аккорд.",
    "kcal": "380"
  }, {
    "name": "Медовая пахлава с грецкими орехами",
    "price": "550",
    "pic": s_6_namespaceObject,
    "details": "Погрузитесь в восточные вкусы с нашей медовой пахлавой, усыпанной ароматными грецкими орехами. Каждый слой тонкого теста пропитан натуральным медом, а щедрая порция орехов добавляет этому десерту особый вкус и хрустящую текстуру.",
    "kcal": "380"
  }],
  dessert: [{
    "name": "Индийские лепёшки с зелёным горошком в сливочном соусе",
    "price": "750",
    "pic": _17_namespaceObject,
    "details": "Детали про индийские лепёшки",
    "kcal": "450"
  }, {
    "name": "Жгучие грилль-перцы",
    "price": "850",
    "pic": _16_namespaceObject,
    "details": "Детали про жгучие грилль-перцы",
    "kcal": "550"
  }, {
    "name": "Греческий салат",
    "price": "550",
    "pic": _15_namespaceObject,
    "details": "Детали про греческий салат",
    "kcal": "420"
  }, {
    "name": "Брускетта с томатами и оливковым маслом",
    "price": "450",
    "pic": _14_namespaceObject,
    "details": "Детали про брускетту с томатами и оливковым маслом",
    "kcal": "380"
  }, {
    "name": "Морской коктейль",
    "price": "850",
    "pic": _33_namespaceObject,
    "details": "Детали про морской коктейль",
    "kcal": "380"
  }, {
    "name": "Сырные палочки из моцареллы с клюквенным соусом",
    "price": "850",
    "pic": _14_namespaceObject,
    "details": "Детали про сырные палочки из моцареллы с клюквенным соусом",
    "kcal": "380"
  }]
};
;// ./src/pages/menu/index.js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





$(function () {
  burgerToggle();
  function initMenu() {
    return _initMenu.apply(this, arguments);
  }
  function _initMenu() {
    _initMenu = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _URL$searchParams$get, _document$querySelect;
      var category, data, content;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            category = (_URL$searchParams$get = new URL(document.location).searchParams.get('cat')) !== null && _URL$searchParams$get !== void 0 ? _URL$searchParams$get : 'mainCourse';
            (_document$querySelect = document.querySelector(".menu__category-link[data-cat=\"".concat(category, "\"]"))) === null || _document$querySelect === void 0 || _document$querySelect.setAttribute('aria-disabled', 'true');
            data = menuData[category];
            if (data) {
              _context.n = 1;
              break;
            }
            document.location.href = './index.html';
            return _context.a(2);
          case 1:
            content = document.getElementById('content');
            data.forEach(function (item) {
              var card = document.getElementById('menuItemCard').content.cloneNode(true);
              card.querySelector('.card-img').src = item.pic;
              card.querySelector('.card__name').textContent = item.name;
              card.querySelector('.card__price').textContent = item.price;
              card.querySelector('.button_menu').dataset.details = item.details;
              card.querySelector('.button_menu').dataset.kcal = item.kcal;
              content.appendChild(card);
            });
            $('.button_menu').on('click', function (event) {
              $('#detailsWindow').slideDown();
              var card = $(event.target).closest('.card');
              $('#detailsTitle').text(card.find('.card__name').text());
              $('#detailsPrice').text(card.find('.card__price').text());
              $('#detailsKcal').text("".concat($(this).data('kcal'), " \u043A\u043A\u0430\u043B"));
              $('#detailsInfo').text($(this).data('details'));
            });
            $('#detailsClose').on('click', function () {
              $('#detailsWindow').slideUp();
            });
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _initMenu.apply(this, arguments);
  }
  initMenu();

  // async function initMenu() {
  //     const category =
  //         new URL(document.location).searchParams.get('cat') ?? 'mainCourse';

  //     document
  //         .querySelector(`.menu__category-link[data-cat="${category}"]`)
  //         ?.setAttribute('aria-disabled', 'true');

  //     const response = await fetch(`./${category}.json`);

  //     if (response.ok) {
  //         const data = await response.json();
  //         const content = document.getElementById('content');

  //         data.forEach(item => {
  //             const card = document
  //                 .getElementById('menuItemCard')
  //                 .content.cloneNode(true);

  //             card.querySelector('.card-img').src = item.pic;
  //             card.querySelector('.card__name').textContent = item.name;
  //             card.querySelector('.card__price').textContent = item.price;
  //             card.querySelector('.button_menu').dataset.details = item.details;
  //             card.querySelector('.button_menu').dataset.kcal = item.kcal;

  //             content.appendChild(card);
  //         });
  //     } else {
  //         document.location.href = './index.html';
  //     }

  //     $('.button_menu').on('click', function(event) {
  //         $('#detailsWindow').slideDown();

  //         const name = $(event.target).closest('.card').find('.card__name').text();
  //         const price = $(event.target).closest('.card').find('.card__price').text();
  //         const kcal = $(event.target).data('kcal');
  //         const info = $(event.target).data('details');

  //         $('#detailsTitle').text(name);
  //         $('#detailsPrice').text(price);
  //         $('#detailsKcal').text(`${kcal} ккал`);
  //         $('#detailsInfo').text(info);
  //     });

  //     $('#detailsClose').on('click', () => {
  //         $('#detailsWindow').slideUp();
  //     });

  // }
  // initMenu();

  if (window.innerWidth < 480) {
    $('.button_medium').text('онлайн-бронь');
  }
});
/******/ })()
;