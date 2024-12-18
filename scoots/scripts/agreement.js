const agreementBtn = document.querySelector('#open-agreement')
const agreement = document.querySelector('#agreement')

agreementBtn.addEventListener('click', () => {
    agreement.classList.toggle("closed")
})