import '../../style/fonts.css';
import '../../style/common.css';
import '../../style/menu.css';

import { burgerToggle } from '../../js/burger.js';
import { menuData } from '../menu/menuData.js';

$(function () {
burgerToggle();

async function initMenu() {
  const category =
    new URL(document.location).searchParams.get('cat') ?? 'mainCourse';

  document
    .querySelector(`.menu__category-link[data-cat="${category}"]`)
    ?.setAttribute('aria-disabled', 'true');

  const data = menuData[category];

  if (!data) {
    document.location.href = './index.html';
    return;
  }

  const content = document.getElementById('content');

  data.forEach(item => {
    const card = document
      .getElementById('menuItemCard')
      .content.cloneNode(true);

    card.querySelector('.card-img').src = item.pic;
    card.querySelector('.card__name').textContent = item.name;
    card.querySelector('.card__price').textContent = item.price;
    card.querySelector('.button_menu').dataset.details = item.details;
    card.querySelector('.button_menu').dataset.kcal = item.kcal;

    content.appendChild(card);
  });

  $('.button_menu').on('click', function (event) {
    $('#detailsWindow').slideDown();

    const card = $(event.target).closest('.card');

    $('#detailsTitle').text(card.find('.card__name').text());
    $('#detailsPrice').text(card.find('.card__price').text());
    $('#detailsKcal').text(`${$(this).data('kcal')} ккал`);
    $('#detailsInfo').text($(this).data('details'));
  });

  $('#detailsClose').on('click', () => {
    $('#detailsWindow').slideUp();
  });
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