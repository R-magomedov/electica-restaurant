import '../../style/fonts.css';
import '../../style/common.css';
import '../../style/contact.css';

import { burgerToggle } from '../../js/burger.js';

$(function () {
    burgerToggle();

    // Увеличение/уменьшение количества гостей

    $('#num-guests-dec').on('click', function () {
        let currentNumGuest = Number($('#num-guests').val());
        $('#num-guests').val(Math.max(currentNumGuest - 1, 1));
    });
    $('#num-guests-inc').on('click', function () {
        let currentNumGuest = Number($('#num-guests').val());
        $('#num-guests').val(currentNumGuest + 1);
    });

    // Всплывающий календарь
    /***************************
 * НАЗВАНИЯ МЕСЯЦЕВ
 * Используются для кнопок сверху календаря
 ***************************/
const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  
  /***************************
   * СЕГОДНЯШНЯЯ ДАТА
   * Обнуляем время, чтобы сравнивать ТОЛЬКО даты
   ***************************/
  const today = new Date();
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
    const firstDayOfMonth = new Date(
      today.getFullYear() + Math.floor((today.getMonth() + monthIndex) / 12),
      (today.getMonth() + monthIndex) % 12,
      1
    );
  
    // Смещение, чтобы неделя начиналась с понедельника
    const dayShift = (firstDayOfMonth.getDay() - 1 + 7) % 7;
  
    // Первая дата, которая попадёт в таблицу календаря
    const firstDayOfCalendar = new Date(firstDayOfMonth);
    firstDayOfCalendar.setDate(1 - dayShift);
  
    let calendar = [];
    let date = new Date(firstDayOfCalendar);
  
    // Календарь максимум на 6 недель
    for (let weekIndex = 0; weekIndex < 6; weekIndex += 1) {
      for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
  
        // День недели: Пн = 0, Вс = 6
        const weekDay = (date.getDay() + 6) % 7;
  
        // Добавляем день в массив
        calendar.push({
          day: date.getDate(),              // число
          month: date.getMonth() + 1,       // месяц
          year: date.getFullYear(),         // год
          weekDay: weekDay,                 // день недели
          disabled: date < today,           // нельзя выбрать прошлые даты
          isToday: (date <= today) && (today <= date), // сегодня
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
    for (let monthIndex = 0; monthIndex < 3; monthIndex += 1) {
  
      // Берём название месяца
      const monthName = monthNames[(today.getMonth() + monthIndex) % 12];
  
      // Создаём кнопку
      let button = document.createElement('button');
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
    let calendar = makeCalendar(currentMonthIndex);
  
    const calendarDayContainer = $('#calendar table.day-selector tbody');
    calendarDayContainer.empty();
  
    let row = [];
  
    for (let day of calendar) {
  
      // Классы для дня
      let classNames = day.disabled ? ["disabled"] : [];
  
      if (day.isToday) {
        classNames.push('selected');
      }
  
      const className = classNames.join(" ");
  
      // Формируем HTML ячейку дня
      row.push(`
        <td>
          <div class="${className}"
               data-year="${day.year}"
               data-month="${day.month}"
               data-day="${day.day}">
            ${day.day}
          </div>
        </td>
      `);
  
      // Если конец недели — добавляем строку
      if (day.weekDay == 6) {
        const rowHtml = '<tr>' + row.join('') + '</tr>';
        calendarDayContainer.append($(rowHtml));
        row = [];
      }
    }
  }
  
  
  /*************************************************
   * ПОЛУЧЕНИЕ ВРЕМЕНИ
   * Сейчас — заглушка
   * В будущем будет запрос к серверу
   *************************************************/
  function obtainTimeSlots(year, month, day) {
    return [
      { time: '17:00', occupied: false },
      { time: '17:30', occupied: true },
      { time: '18:00', occupied: false },
      { time: '18:15', occupied: false },
      { time: '18:30', occupied: false },
      { time: '18:45', occupied: false },
    ]
  }
  
  
  /*************************************************
   * ОТРИСОВКА КНОПОК ВРЕМЕНИ
   *************************************************/
  function fillTimeSlots(year, month, day) {
  
    const timeslots = obtainTimeSlots(year, month, day);
    const container = $('#calendar .time-selector');
  
    container.empty();
  
    for (let slot of timeslots) {
  
      // Если слот занят — добавляем класс
      let className = slot.occupied ? 'occupied' : '';
  
      container.append(`
        <button class="${className}" data-time="${slot.time}">
          ${slot.time}
        </button>
      `);
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
  let selectedDay = null;
  let selectedMonth = null;
  let selectedYear = null;
  
  
  /*************************************************
   * ВЫБОР МЕСЯЦА
   *************************************************/
  $('#calendar .month-selector button').on('click', function (event) {
  
    const button = $(event.target);
  
    fillCalendar(button.data('monthIndex'));
  
    $('#calendar .month-selector button.selected').removeClass('selected');
    button.addClass('selected');
  });
  
  
  /*************************************************
   * ВЫБОР ДНЯ
   *************************************************/
  $('#calendar .day-selector').on('click', 'td', function (event) {
  
    const cell = $(event.target).closest('td');
    const cellDiv = cell.find('div');
  
    // Нельзя выбрать прошедшие даты
    if (cellDiv.hasClass('disabled')) return;
  
    $('#calendar .day-selector td .selected').removeClass('selected');
    cellDiv.addClass('selected');
  
    // Сохраняем выбранную дату
    selectedDay = cellDiv.data('day');
    selectedMonth = cellDiv.data('month');
    selectedYear = cellDiv.data('year');
  
    // Формируем строку даты
    const dayString = String(selectedDay).padStart(2, "0");
    const monthString = String(selectedMonth).padStart(2, "0");
    const selectedDate = `${dayString}.${monthString}.${selectedYear}`;
  
    // Загружаем время для выбранного дня
    fillTimeSlots(selectedYear, selectedMonth, selectedDay);
  
    // Записываем дату в input
    $('#datetimepicker').val(selectedDate);
  });
  
  
  /*************************************************
   * ВЫБОР ВРЕМЕНИ
   *************************************************/
  $('#calendar .time-selector').on('click', 'button', function (event) {
  
    const button = $(event.target);
  
    const dayString = String(selectedDay).padStart(2, "0");
    const monthString = String(selectedMonth).padStart(2, "0");
    const selectedDate = `${dayString}.${monthString}.${selectedYear}`;
  
    const selectedTime = button.data("time");
  
    $('#calendar .time-selector button.selected').removeClass('selected');
    button.addClass('selected');
  
    // Записываем дату + время в input
    $('#datetimepicker').val(`${selectedDate} ${selectedTime}`);
  });
  
  
  /*************************************************
   * ОТКРЫТИЕ / ЗАКРЫТИЕ КАЛЕНДАРЯ
   *************************************************/

  $('#datetimepicker').on('click', function () {
    const calendar = $('#calendar');
  
    if (window.innerWidth <= 480) {
      calendar.addClass('fullscreen-mobile');
      document.body.classList.add('no-scroll');
    }
  
    calendar.fadeIn(200);
  });
  
  $('#calendar .close').on('click', function () {
    $('#calendar')
      .removeClass('fullscreen-mobile')
      .fadeOut(200);
  
    document.body.classList.remove('no-scroll');
  });
  
})



