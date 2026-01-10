import reviewIgor from '../../assets/reviews/reviewIgor.png';
import reviewMarina from '../../assets/reviews/reviewMarina.png';
import reviewAleksandr from '../../assets/reviews/reviewAleksandr.png';
import reviewNatalya from '../../assets/reviews/reviewNatalya.png';
const starIcon = './svg/star.svg';

// Массив с данными отзывов
const reviewsData = [
    {
        photo: reviewIgor,
        name: "Игорь Ковалев",
        rating: 5,
        text: "Провели здесь день рождения - атмосфера просто великолепная. Персонал веселый и отзывчивый, кухня порадовала. Особенно понравились закуски к пиву! Обязательно будем возвращаться, чтобы попробовать все блюда из меню.",
    },        
    {
        photo: reviewMarina,
        name: "Марина Соколова",
        rating: 4,
        text: "Посетили семейный ресторан с подругами на девичнике, и это был наш лучший выбор! У нас был волшебный вечер - вкусная еда, отличные коктейли и веселая атмосфера. Обязательно вернемся сюда с мужьями! Очень рекомендую для дружеских посиделок и праздников.",
    },        
    {
        photo: reviewAleksandr,
        name: "Александр Петров",
        rating: 5,
        text: "Этот ресторан - настоящая находка! Проводил здесь деловой ужин с партнерами, и все остались в восторге. Обслуживание на высшем уровне, персонал внимателен к каждой детали. Кухня порадовала своим разнообразием. Отличное место для деловых встреч и ужинов в уютной обстановке. Рекомендую!",
    },        
    {
        photo: reviewNatalya,
        name: "Наталья Иванова",
        rating: 5,
        text: "Посетили семейный ресторан вместе с мужем и детьми - отличное место для семейного ужина! Обстановка очень уютная, а обслуживание выше всяких похвал. Наши дети в восторге от детского меню, которое оказалось не только вкусным, но и заботливо подготовленным с учетом детских предпочтений. Будем рекомендовать всем друзьям и обязательно вернемся.",
    },
];

export function initReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const template = document.getElementById('reviewTemplate');

    for (let reviewInfo of reviewsData) {
        let reviewCard = template.content.cloneNode(true);
        reviewCard.querySelector('.reviews__photo').setAttribute('src', reviewInfo.photo);
        reviewCard.querySelector('.reviews__name').textContent = reviewInfo.name;
        reviewCard.querySelector('.reviews__text').textContent = reviewInfo.text;
        
        const starsContainer = reviewCard.querySelector('.reviews__starts');

        for (let i = 0; i < reviewInfo.rating; i++) {
            let star = document.createElement('img');
            star.src = starIcon;
            starsContainer.appendChild(star);
        }
        reviewsContainer.appendChild(reviewCard);
    }
}
