import { getWeatherImg } from "../utilities/getWeatherImg";

const renderCurrentWeather = (weather) => {
    const container = document.createElement('div');
    container.classList.add('currentWeather');

    const weatherHeader = document.createElement('h2');
    weatherHeader.textContent = 'Current Weather';

    const weatherImg = document.createElement('img');
    weatherImg.src = getWeatherImg(weather.weather[0].main);

    const weatherDesc = document.createElement('p');
    weatherDesc.textContent = weather.weather[0].description;

    const temperature = document.createElement('p');
    temperature.textContent = `${Math.round(weather.temp - 273.15)}°C`;

    const feelsLike = document.createElement('p');
    feelsLike.textContent = `${Math.round(weather.feels_like - 273.15)}°C`;

    const humidity = document.createElement('p');
    humidity.textContent = `${weather.humidity}%`;

    const pop = document.createElement('p');
    pop.textContent = `${weather.pop}%`;

    const wind_speed = document.createElement('p');
    wind_speed.textContent = `${weather.wind_speed}km/h`;

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