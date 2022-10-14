import { renderCurrentWeather } from "../components/currentWeather";

const renderTodaysWeather = (location, hourlyWeather ) => {

    const container = document.createElement('div');
    container.classList.add('todays_weather');

    container.appendChild(renderCurrentWeather(location, hourlyWeather[0]));

    return container;
}

export { renderTodaysWeather }