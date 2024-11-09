const memDisplay = document.querySelector(".member-level-display")
const rangeSet = document.querySelector("#memlev")
const formDate = document.querySelector("#form-date")

function membershipLevel(membership) {
    let level
    switch (membership) {
        case "1":
            level = "NP";
            break;
        case "2":
            level = "BRONZE";
            break;
        case "3":
            level = "SILVER";
            break;
        case "4":
            level = "GOLD";
            break;
    }
    memDisplay.innerHTML = `<p> ${level} Membership </p>`;
}

rangeSet.addEventListener("change", function() { membershipLevel(rangeSet.value) })

formDate.value = Date.now();