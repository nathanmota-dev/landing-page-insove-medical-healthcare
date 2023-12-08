const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
    if (mobileNav.classList.contains(navOpenedClass)) {
        mobileNav.classList.remove(navOpenedClass);
        mobileNav.classList.add(navClosedClass);
        closeBtnIcon.classList.remove(arrowLeftClass);
        closeBtnIcon.classList.add(arrowRightClass);
    } else {
        mobileNav.classList.remove(navClosedClass);
        mobileNav.classList.add(navOpenedClass);
        closeBtnIcon.classList.remove(arrowRightClass);
        closeBtnIcon.classList.add(arrowLeftClass);
    }
});