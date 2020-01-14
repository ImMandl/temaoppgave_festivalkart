// Weather API
const api = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Hamar,no&appid=2b18293103131feeab5e88a90d5f14ef'

// Reference to HTML-elements
const weatherIcon = document.querySelector("#weather-icon");
const weatherTemp = document.querySelector("#weather-temp");
const weatherDescription = document.querySelector("#weather-description");

// Math.round(tmpe)

const getWeather = async () => {

    const response = await fetch(api);
    const json = await response.json();

    // The temperature
    const temp = json.main.temp;
    weatherTemp.innerText = temp;

    // Description of weather
    const description = json.weather[0].description;
    weatherDescription.innerText = description;

    // Icon for the weather
    const icon = json.weather[0].icon;
    const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.src = iconURL;

}

getWeather();

