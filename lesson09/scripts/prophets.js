const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
};

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birth = document.createElement("p")
        const birthPlace = document.createElement("p")

        fullName.textContent = `${prophet.name} ${prophet.lastname}`

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `A portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "90%");
        portrait.setAttribute("height", "auto");

        birth.textContent = `Date of Birth: ${prophet.birthdate}`
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`

        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(birthPlace);
        card.appendChild(portrait);


        cards.appendChild(card)
    });
}
getProphetData();