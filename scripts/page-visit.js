const pageVisits = document.querySelector('.page-visits')
let visitNbr = localStorage.getItem('visitNbr') || 1;

pageVisits.textContent = `Page Visits : ${visitNbr}`

visitNbr++;

console.log(visitNbr);

localStorage.setItem('visitNbr', visitNbr)