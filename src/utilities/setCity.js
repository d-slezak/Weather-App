import { getWeatherByCityName } from "../api/weather";
import { renderLocationInfo } from "../components/locationInfo";
import { renderNav } from "../views/NavBar";
import { renderTodaysWeather } from "../views/TodaysWeather";

const key = 'a5ad458465c46d33c6696067d8f8a347';

function setCity() {
   const input =  document.getElementById('search').value;
   console.log(input);

   getWeatherByCityName(key, input).then(response => {

    document.body.innerHTML = "";

    const currentWeather = response.current;
    const dailyWeather = response.daily;
    const hourlyWeather = response.hourly;

    const sunrise = dailyWeather[0].sunrise;
    const sunset = dailyWeather[0].sunset;

    const container = document.createElement('div');
    container.appendChild(renderNav());
    container.appendChild(renderLocationInfo(input, hourlyWeather[0].dt));
    container.appendChild(renderTodaysWeather(hourlyWeather, sunrise, sunset));

    document.body.appendChild(container);

   });
}

export { setCity }