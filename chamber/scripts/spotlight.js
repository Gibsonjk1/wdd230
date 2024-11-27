const spotlight = document.querySelector('#spotlight');
const memberData = "data/members.json"

async function getMembertData() {
    const response = await fetch(memberData);
    const data = await response.json();
    // console.table(data.members);
    displaySpotlights(data.members);
};

function displaySpotlights(data) {
    let spotlightArr = [];
    let randArr = []

    for (let i = 0; i < data.length; i++) {
        randArr.push(i);
    }

    while (spotlightArr.length < 3) {
        let memberIndex = Math.floor((Math.random() * randArr.length));
        let random = randArr[memberIndex];
        if (data[random].membership_level.toLowerCase() == "silver" || data[random].membership_level.toLowerCase() == "gold") {
            spotlightArr.push(data[random]);
            randArr.splice(memberIndex, 1);
        }
    }

    spotlightArr.forEach((member) => {
        // Create Card Elements
        let card = document.createElement("div")
        let name = document.createElement("h3");
        let icon = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        // Generate Data
        card.classList.add("spotlight-card");
        name.textContent = member.name;
        icon.setAttribute("src", member.image_icon_filename);
        icon.setAttribute("loading", "lazy");
        icon.setAttribute("alt", `An icon for ${name}`);
        icon.setAttribute("width", "auto");
        icon.setAttribute("height", "250px");
        address.textContent = member.address;
        phone.textContent = member.phone_number;
        website.setAttribute("href", member.website_url)
        website.textContent = `${member.name} website`

        // Add Elements to Card
        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);


        spotlight.appendChild(card);
    })
}

getMembertData();