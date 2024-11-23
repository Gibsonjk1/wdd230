const weatherIcon = document.querySelector("#weather-icon");
const weather = document.querySelector("#weather");
const url = `https://api.openweathermap.org/data/2.5/weather?lat=43.38172956305847&lon=-112.12269997862118&appid=6abb07fe3579e18bd052380bbf880933&units=imperial`


async function getAPIData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

async function getWeather() {
    const data = await getAPIData();
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', data.weather[0].description)
    weather.textContent = `${Math.round(data.main.temp)}°F - ${data.weather[0].description}`
}

getWeather();