const visit = document.querySelector('.visit');
const visitDate = getLastVisit() || null;


if (visitDate) {
    timeSinceVisit = Date.now() - visitDate;
    daysSinceVisit = Math.floor(timeSinceVisit / 86400000)
    if (daysSinceVisit <= 1) {
        visit.textContent = "Back so soon! Awesome!"
    } else {
        visit.textContent = `You last visited ${daysSinceVisit}`
    }
} else {
    visit.textContent = "Welcome! Let us know if you have any questions.";
    setVisit();
}

function getLastVisit() {
    return JSON.parse(localStorage.getItem('visitDate'));
}

function setVisit() {
    localStorage.setItem('visitDate', Date.now())
}