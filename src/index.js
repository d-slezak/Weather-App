import { getWeatherByCityName, getWeatherByCoordinates } from "../src/api/weather";
import { renderLocationInfo } from "./components/locationInfo";
import { renderNav } from "./views/NavBar";
import { renderTodaysWeather } from "./views/TodaysWeather";

const key = 'a5ad458465c46d33c6696067d8f8a347';
const city = 'Oakville';


getWeatherByCityName(key, city).then(response => {
    const currentWeather = response.current;
    const dailyWeather = response.daily;
    const hourlyWeather = response.hourly;

    const sunrise = dailyWeather[0].sunrise;
    const sunset = dailyWeather[0].sunset;
    
    const container = document.createElement('div');
    container.appendChild(renderNav());
    container.appendChild(renderLocationInfo(city, hourlyWeather[0].dt));
    container.appendChild(renderTodaysWeather(hourlyWeather, sunrise, sunset));

    document.body.appendChild(container);
});