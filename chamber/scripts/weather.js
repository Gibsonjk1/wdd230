const currentTemp = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const forecast = document.querySelector('#forecast');
const forecast1 = document.querySelector('#forecast1');
const forecast2 = document.querySelector('#forecast2');
const forecast3 = document.querySelector('#forecast3');
const forecast4 = document.querySelector('#forecast4');
const forecast5 = document.querySelector('#forecast5');
const forecast6 = document.querySelector('#forecast6');
const forecast7 = document.querySelector('#forecast7');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=43.38172956305847&lon=-112.12269997862118&appid=6abb07fe3579e18bd052380bbf880933&units=imperial`
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
    currentTemp.textContent = await `${Math.round(data.main.temp)}°F`
    let weatherDescription = data.weather[0].description;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', weatherDescription)
    captionDesc.textContent = `${weatherDescription}`
}

displayResults();

async function getWeather() {
    let response = await fetch('https://api.weather.gov/gridpoints/PIH/121,70/forecast');
    let data = await response.json();
    return data
}

getWeather().then(data => {
    forecast1.innerHTML = `<p>${data.properties.periods[0].name}</p> <img src="${data.properties.periods[0].icon}" alt="${data.properties.periods[0].shortForecast}"> <p>${data.properties.periods[0].temperature}&deg;${data.properties.periods[0].temperatureUnit}</p>`
    forecast2.innerHTML = `<p>${data.properties.periods[1].name}</p> <img src="${data.properties.periods[1].icon}" alt="${data.properties.periods[1].shortForecast}"> <p>${data.properties.periods[1].temperature}&deg;${data.properties.periods[1].temperatureUnit}</p>`
    forecast3.innerHTML = `<p>${data.properties.periods[2].name}</p> <img src="${data.properties.periods[2].icon}" alt="${data.properties.periods[2].shortForecast}"> <p>${data.properties.periods[2].temperature}&deg;${data.properties.periods[2].temperatureUnit}</p>`
    forecast4.innerHTML = `<p>${data.properties.periods[3].name}</p> <img src="${data.properties.periods[3].icon}" alt="${data.properties.periods[3].shortForecast}"> <p>${data.properties.periods[3].temperature}&deg;${data.properties.periods[3].temperatureUnit}</p>`
    forecast5.innerHTML = `<p>${data.properties.periods[4].name}</p> <img src="${data.properties.periods[4].icon}" alt="${data.properties.periods[4].shortForecast}"> <p>${data.properties.periods[4].temperature}&deg;${data.properties.periods[4].temperatureUnit}</p>`
    forecast6.innerHTML = `<p>${data.properties.periods[5].name}</p> <img src="${data.properties.periods[5].icon}" alt="${data.properties.periods[5].shortForecast}"> <p>${data.properties.periods[5].temperature}&deg;${data.properties.periods[5].temperatureUnit}</p>`
    forecast7.innerHTML = `<p>${data.properties.periods[6].name}</p> <img src="${data.properties.periods[6].icon}" alt="${data.properties.periods[6].shortForecast}"> <p>${data.properties.periods[6].temperature}&deg;${data.properties.periods[6].temperatureUnit}</p>`

})