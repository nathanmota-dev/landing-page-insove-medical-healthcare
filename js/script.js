//Mobile menu
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

//swiper.js - depoiments
const swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

//FAQ
const faqItems = document.querySelectorAll('.faqItem');

faqItems.forEach((item) => {
    const faqBtn = item.querySelector('.faqBtn');
    const faqText = item.querySelector('.faqText');

    item.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
        const iconElement = faqBtn.querySelector('i');
        iconElement.classList = `${iconClass} text-2xl`;

        if (isOpen) {
            faqText.style.height = `${faqText.scrollHeight}px`;
        } else {
            faqText.style.height = '0px';
        }
    });
});