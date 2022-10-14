import { renderCurrentWeather } from "../components/currentWeather";
import { renderHourlyWeather } from "../components/hourlyWeather";
import { renderLocationInfo } from "../components/locationInfo";

const renderTodaysWeather = (hourlyWeather, sunrise, sunset ) => {

    const container = document.createElement('div');
    container.classList.add('todays_weather');
    container.id = 'todaysWeather'

    container.appendChild(renderCurrentWeather(hourlyWeather[0]));
    container.appendChild(renderHourlyWeather(hourlyWeather, sunrise, sunset));

    return container;
}

export { renderTodaysWeather }