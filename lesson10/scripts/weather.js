const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.664&appid=6abb07fe3579e18bd052380bbf880933&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}



async function displayResults() {
    const data = await apiFetch();
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    currentTemp.textContent = await `${data.main.temp}°F`
    let weatherDescription = data.weather[0].description;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', weatherDescription)
    captionDesc.textContent = `${weatherDescription}`
}

displayResults();