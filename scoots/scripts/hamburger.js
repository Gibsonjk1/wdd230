const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
const greyed = document.querySelector('#greyed')


hamburger.addEventListener('click', () => {

    greyed.classList.toggle('closed');
    hamburger.classList.toggle('open')
    hamburger.classList.toggle('notopen')
    nav.classList.toggle('open')
    nav.classList.toggle('notopen')


})