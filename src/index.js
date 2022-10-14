import { getWeatherByCityName, getWeatherByCoordinates } from "../src/api/weather";
import { renderNav } from "./views/NavBar";
import { renderTodaysWeather } from "./views/TodaysWeather";

const key = 'a5ad458465c46d33c6696067d8f8a347';
const city = 'Alliston';


getWeatherByCityName(key, city).then(response => {
    const currentWeather = response.current;
    const dailyWeather = response.daily;
    const hourlyWeather = response.hourly;

    const container = document.createElement('div');
    container.appendChild(renderNav());
    container.appendChild(renderTodaysWeather(city, hourlyWeather));

    document.body.appendChild(container);


    console.log(currentWeather);
    console.log(dailyWeather);
    console.log(hourlyWeather);
});