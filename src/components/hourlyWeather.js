import { getWeatherImg } from "../utilities/getWeatherImg";
import { isDay } from "../utilities/isDay"

const renderHourlyWeather = (hourlyWeather, sunrise, sunset) => {
    const container = document.createElement('div');
    container.classList.add('hourlyWeather');
    
    for (let i=1; i < 24; i++)
    {
        let dt = new Date(hourlyWeather[i].dt * 1000);
        let time = dt.toLocaleTimeString('en-US', {hour:'numeric'});
        let temp = Math.round(hourlyWeather[i].temp - 273.15);
        let weather = hourlyWeather[i].weather[0].main;
        let pop = hourlyWeather[i].pop;
        
        const card = document.createElement('div');
        card.classList.add('hourlyWeatherCard');

        const timeHeader = document.createElement('h3');
        timeHeader.textContent = time;

        const weatherHeader = document.createElement('img');
        weatherHeader.src = getWeatherImg(weather, isDay(sunrise, sunset, hourlyWeather[i].dt));
        weatherHeader.classList.add('weatherImg')

        const lowerCard = document.createElement('div');
        lowerCard.classList.add('lowerCard');

        const tempHeader = document.createElement('p');
        tempHeader.textContent = temp + '°C';

        const popHeader = document.createElement('p');
        popHeader.textContent = pop*100 + '% Chance of Rain';

        lowerCard.appendChild(tempHeader);
        lowerCard.appendChild(popHeader);

        card.appendChild(timeHeader);
        card.appendChild(weatherHeader);
        card.appendChild(lowerCard);

        container.appendChild(card);
    }

    return container
}

export { renderHourlyWeather }