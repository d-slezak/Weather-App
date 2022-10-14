import { getWeatherImg } from "../utilities/getWeatherImg";
import { isDay } from "../utilities/isDay";

const renderCurrentWeather = (weather, sunrise, sunset) => {
    const container = document.createElement('div');
    container.classList.add('currentWeather');

    const weatherHeader = document.createElement('h2');
    weatherHeader.textContent = 'Current Weather';

    const weatherImg = document.createElement('img');
    weatherImg.src = getWeatherImg(weather.weather[0].main, isDay(sunrise, sunset, weather.dt));
    weatherImg.classList.add('weatherImg');

    const weatherDesc = document.createElement('p');
    weatherDesc.textContent = weather.weather[0].description.toUpperCase();

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${Math.round(weather.temp - 273.15)}°C`;

    const feelsLike = document.createElement('p');
    feelsLike.textContent = `Feels Like: ${Math.round(weather.feels_like - 273.15)}°C`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${weather.humidity}%`;

    const pop = document.createElement('p');
    pop.textContent = `Chance of Rain: ${weather.pop*100}%`;

    const wind_speed = document.createElement('p');
    wind_speed.textContent = `Wind Speed: ${weather.wind_speed}km/h`;

    container.appendChild(weatherHeader);
    container.appendChild(weatherImg);
    container.appendChild(weatherDesc);
    container.appendChild(temperature);
    container.appendChild(feelsLike);
    container.appendChild(humidity);
    container.appendChild(pop);
    container.appendChild(wind_speed);


    return container;

}

export { renderCurrentWeather }