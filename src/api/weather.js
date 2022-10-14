
async function getWeatherByCoordinates(key, lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${key}`, {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
}

async function getWeatherByCityName(key, cityName) {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${key}` , { mode: 'cors'});
        const weatherData = await response.json();
        return await getWeatherByCoordinates(key, weatherData.coord.lat, weatherData.coord.lon);
        
}

export { getWeatherByCityName };