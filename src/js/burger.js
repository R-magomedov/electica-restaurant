export function burgerToggle() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});