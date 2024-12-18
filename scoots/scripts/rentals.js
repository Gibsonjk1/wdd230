const rentals = document.querySelector('.rental-info');


async function getRentals() {
    try {
        const response = await fetch('data/rentals.json');
        if (response.ok) {
            const data = await response.json();
            // console.log(data.Rentals);
            return data.Rentals;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

async function populateTable() {
    const data = await getRentals();

    // create elements
    const title = document.createElement('h2')
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')

    const headtr1 = document.createElement('tr')
    const head1th1 = document.createElement('th')
    const head1th2 = document.createElement('th')
    const head1th3 = document.createElement('th')

    const headtr2 = document.createElement('tr')
    const head2th1 = document.createElement('th')
    const head2th2 = document.createElement('th')
    const head2th3 = document.createElement('th')
    const head2th4 = document.createElement('th')
    const head2th5 = document.createElement('th')
    const head2th6 = document.createElement('th')

    // assign values
    title.textContent = "Max Rental Pricing"
    head1th1.setAttribute('scope', "col");
    head1th1.setAttribute('colspan', "2");
    head1th2.setAttribute('scope', "col");
    head1th2.setAttribute('colspan', "2");
    head1th2.textContent = "Reservations";
    head1th3.setAttribute('scope', "col");
    head1th3.setAttribute('colspan', "2");
    head1th3.textContent = "Walk-In";

    head2th1.setAttribute('scope', 'col')
    head2th1.textContent = "Rental Type";
    head2th2.setAttribute('scope', 'col')
    head2th2.textContent = "Max. Persons";
    head2th3.setAttribute('scope', 'col')
    head2th3.textContent = "Half Day (3 hrs)";
    head2th4.setAttribute('scope', 'col')
    head2th4.textContent = "Full Day";
    head2th5.setAttribute('scope', 'col')
    head2th5.textContent = "Half Day (3 hrs)";
    head2th6.setAttribute('scope', 'col')
    head2th6.textContent = "Full Day";

    //generate table info
    // console.log(data)
    data.forEach(vehicles => {
        const vehicle = document.createElement("tr")
        const title = document.createElement("td")
        const maxPerson = document.createElement("td")
        const rHalf = document.createElement("td")
        const rFull = document.createElement("td")
        const wHalf = document.createElement("td")
        const wFull = document.createElement("td")

        title.textContent = vehicles.vehicleName
        maxPerson.textContent = vehicles.maxPersons
        rHalf.textContent = vehicles.prices[0].halfDay
        rFull.textContent = vehicles.prices[0].fullDay
        wHalf.textContent = vehicles.prices[1].halfDay
        wFull.textContent = vehicles.prices[1].fullDay

        vehicle.appendChild(title)
        vehicle.appendChild(maxPerson)
        vehicle.appendChild(rHalf)
        vehicle.appendChild(rFull)
        vehicle.appendChild(wHalf)
        vehicle.appendChild(wFull)

        tbody.appendChild(vehicle)

    });

    //compile table
    headtr1.appendChild(head1th1)
    headtr1.appendChild(head1th2)
    headtr1.appendChild(head1th3)


    headtr2.appendChild(head2th1)
    headtr2.appendChild(head2th2)
    headtr2.appendChild(head2th3)
    headtr2.appendChild(head2th4)
    headtr2.appendChild(head2th5)
    headtr2.appendChild(head2th6)

    thead.appendChild(headtr1)
    thead.appendChild(headtr2)
    table.appendChild(thead)
    table.appendChild(tbody)

    rentals.appendChild(title)
    rentals.appendChild(table)
}

populateTable();