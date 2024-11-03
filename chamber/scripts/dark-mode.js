const switcher = document.querySelector('.slider');
const mainer = document.querySelector('main');
const cardList = document.querySelectorAll('.spotlight-card') || [];
const card2 = document.querySelectorAll('.card-2') || [];
const body = document.querySelector('body');

switcher.addEventListener('click', () => {
    mainer.classList.toggle('dark');
    for (let i = 0; i < cardList.length; i++) {
        cardList[i].classList.toggle('dark');
    }
    for (let i = 0; i < card2.length; i++) {
        card2[i].classList.toggle('dark');
    }
    body.classList.toggle('dark')
})