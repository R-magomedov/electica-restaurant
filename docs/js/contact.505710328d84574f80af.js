/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

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
;// ./src/pages/contact/index.js
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




$(function () {
  burgerToggle();

  // Увеличение/уменьшение количества гостей

  $('#num-guests-dec').on('click', function () {
    var currentNumGuest = Number($('#num-guests').val());
    $('#num-guests').val(Math.max(currentNumGuest - 1, 1));
  });
  $('#num-guests-inc').on('click', function () {
    var currentNumGuest = Number($('#num-guests').val());
    $('#num-guests').val(currentNumGuest + 1);
  });

  // Всплывающий календарь
  /***************************
  * НАЗВАНИЯ МЕСЯЦЕВ
  * Используются для кнопок сверху календаря
  ***************************/
  var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  /***************************
   * СЕГОДНЯШНЯЯ ДАТА
   * Обнуляем время, чтобы сравнивать ТОЛЬКО даты
   ***************************/
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  /*************************************************
   * ГЛАВНАЯ ФУНКЦИЯ КАЛЕНДАРЯ
   * Генерирует массив дней для выбранного месяца
   *
   * monthIndex:
   * 0 — текущий месяц
   * 1 — следующий
   * 2 — через месяц
   * 
   * → функция возвращает список дней с нужными флагами
   *************************************************/
  function makeCalendar(monthIndex) {
    // Первый день нужного месяца
    var firstDayOfMonth = new Date(today.getFullYear() + Math.floor((today.getMonth() + monthIndex) / 12), (today.getMonth() + monthIndex) % 12, 1);

    // Смещение, чтобы неделя начиналась с понедельника
    var dayShift = (firstDayOfMonth.getDay() - 1 + 7) % 7;

    // Первая дата, которая попадёт в таблицу календаря
    var firstDayOfCalendar = new Date(firstDayOfMonth);
    firstDayOfCalendar.setDate(1 - dayShift);
    var calendar = [];
    var date = new Date(firstDayOfCalendar);

    // Календарь максимум на 6 недель
    for (var weekIndex = 0; weekIndex < 6; weekIndex += 1) {
      for (var dayIndex = 0; dayIndex < 7; dayIndex += 1) {
        // День недели: Пн = 0, Вс = 6
        var weekDay = (date.getDay() + 6) % 7;

        // Добавляем день в массив
        calendar.push({
          day: date.getDate(),
          // число
          month: date.getMonth() + 1,
          // месяц
          year: date.getFullYear(),
          // год
          weekDay: weekDay,
          // день недели
          disabled: date < today,
          // нельзя выбрать прошлые даты
          isToday: date <= today && today <= date // сегодня
        });

        // Переходим к следующему дню
        date.setDate(date.getDate() + 1);

        // Если дошли до следующего месяца и это понедельник — останавливаемся
        if (date.getMonth() > firstDayOfMonth.getMonth() && weekDay === 0) {
          break;
        }
      }
    }

    // Возвращаем готовый массив дней
    return calendar;
  }

  /*************************************************
   * СОЗДАНИЕ КНОПОК МЕСЯЦЕВ
   * (текущий + 2 следующих)
   *************************************************/
  function fillMonthNames() {
    for (var monthIndex = 0; monthIndex < 3; monthIndex += 1) {
      // Берём название месяца
      var monthName = monthNames[(today.getMonth() + monthIndex) % 12];

      // Создаём кнопку
      var button = document.createElement('button');
      button.innerText = monthName;

      // Сохраняем индекс месяца в data-атрибут
      button.dataset['monthIndex'] = monthIndex;

      // Первый месяц делаем активным
      if (monthIndex == 0) {
        button.classList.add('selected');
      }
      $('#calendar .month-selector').append(button);
    }
  }

  /*************************************************
   * ОТРИСОВКА ДНЕЙ В ТАБЛИЦЕ
   *************************************************/
  function fillCalendar(currentMonthIndex) {
    // Получаем массив дней
    var calendar = makeCalendar(currentMonthIndex);
    var calendarDayContainer = $('#calendar table.day-selector tbody');
    calendarDayContainer.empty();
    var row = [];
    var _iterator = _createForOfIteratorHelper(calendar),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var day = _step.value;
        // Классы для дня
        var classNames = day.disabled ? ["disabled"] : [];
        if (day.isToday) {
          classNames.push('selected');
        }
        var className = classNames.join(" ");

        // Формируем HTML ячейку дня
        row.push("\n        <td>\n          <div class=\"".concat(className, "\"\n               data-year=\"").concat(day.year, "\"\n               data-month=\"").concat(day.month, "\"\n               data-day=\"").concat(day.day, "\">\n            ").concat(day.day, "\n          </div>\n        </td>\n      "));

        // Если конец недели — добавляем строку
        if (day.weekDay == 6) {
          var rowHtml = '<tr>' + row.join('') + '</tr>';
          calendarDayContainer.append($(rowHtml));
          row = [];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  /*************************************************
   * ПОЛУЧЕНИЕ ВРЕМЕНИ
   * Сейчас — заглушка
   * В будущем будет запрос к серверу
   *************************************************/
  function obtainTimeSlots(year, month, day) {
    return [{
      time: '17:00',
      occupied: false
    }, {
      time: '17:30',
      occupied: true
    }, {
      time: '18:00',
      occupied: false
    }, {
      time: '18:15',
      occupied: false
    }, {
      time: '18:30',
      occupied: false
    }, {
      time: '18:45',
      occupied: false
    }];
  }

  /*************************************************
   * ОТРИСОВКА КНОПОК ВРЕМЕНИ
   *************************************************/
  function fillTimeSlots(year, month, day) {
    var timeslots = obtainTimeSlots(year, month, day);
    var container = $('#calendar .time-selector');
    container.empty();
    var _iterator2 = _createForOfIteratorHelper(timeslots),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var slot = _step2.value;
        // Если слот занят — добавляем класс
        var className = slot.occupied ? 'occupied' : '';
        container.append("\n        <button class=\"".concat(className, "\" data-time=\"").concat(slot.time, "\">\n          ").concat(slot.time, "\n        </button>\n      "));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  /*************************************************
   * НАЧАЛЬНЫЙ ЗАПУСК
   *************************************************/
  fillMonthNames();
  fillCalendar(0);
  fillTimeSlots(today.getFullYear(), today.getMonth() + 1, today.getDate());

  /*************************************************
   * ПЕРЕМЕННЫЕ ВЫБРАННОЙ ДАТЫ
   *************************************************/
  var selectedDay = null;
  var selectedMonth = null;
  var selectedYear = null;

  /*************************************************
   * ВЫБОР МЕСЯЦА
   *************************************************/
  $('#calendar .month-selector button').on('click', function (event) {
    var button = $(event.target);
    fillCalendar(button.data('monthIndex'));
    $('#calendar .month-selector button.selected').removeClass('selected');
    button.addClass('selected');
  });

  /*************************************************
   * ВЫБОР ДНЯ
   *************************************************/
  $('#calendar .day-selector').on('click', 'td', function (event) {
    var cell = $(event.target).closest('td');
    var cellDiv = cell.find('div');

    // Нельзя выбрать прошедшие даты
    if (cellDiv.hasClass('disabled')) return;
    $('#calendar .day-selector td .selected').removeClass('selected');
    cellDiv.addClass('selected');

    // Сохраняем выбранную дату
    selectedDay = cellDiv.data('day');
    selectedMonth = cellDiv.data('month');
    selectedYear = cellDiv.data('year');

    // Формируем строку даты
    var dayString = String(selectedDay).padStart(2, "0");
    var monthString = String(selectedMonth).padStart(2, "0");
    var selectedDate = "".concat(dayString, ".").concat(monthString, ".").concat(selectedYear);

    // Загружаем время для выбранного дня
    fillTimeSlots(selectedYear, selectedMonth, selectedDay);

    // Записываем дату в input
    $('#datetimepicker').val(selectedDate);
  });

  /*************************************************
   * ВЫБОР ВРЕМЕНИ
   *************************************************/
  $('#calendar .time-selector').on('click', 'button', function (event) {
    var button = $(event.target);
    var dayString = String(selectedDay).padStart(2, "0");
    var monthString = String(selectedMonth).padStart(2, "0");
    var selectedDate = "".concat(dayString, ".").concat(monthString, ".").concat(selectedYear);
    var selectedTime = button.data("time");
    $('#calendar .time-selector button.selected').removeClass('selected');
    button.addClass('selected');

    // Записываем дату + время в input
    $('#datetimepicker').val("".concat(selectedDate, " ").concat(selectedTime));
  });

  /*************************************************
   * ОТКРЫТИЕ / ЗАКРЫТИЕ КАЛЕНДАРЯ
   *************************************************/

  $('#datetimepicker').on('click', function () {
    var calendar = $('#calendar');
    if (window.innerWidth <= 480) {
      calendar.addClass('fullscreen-mobile');
      document.body.classList.add('no-scroll');
    }
    calendar.fadeIn(200);
  });
  $('#calendar .close').on('click', function () {
    $('#calendar').removeClass('fullscreen-mobile').fadeOut(200);
    document.body.classList.remove('no-scroll');
  });
});
/******/ })()
;