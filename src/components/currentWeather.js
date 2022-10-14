const renderCurrentWeather = (location, weather) => {
    const container = document.createElement('div');

    const locationHeader = document.createElement('h1');
    locationHeader.textContent = location;

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

    const date = document.createElement('p');
    const currentdate = new Date(weather.dt * 1000)
    date.textContent = currentdate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });

    container.appendChild(locationHeader);
    container.appendChild(weatherDesc);
    container.appendChild(temperature);
    container.appendChild(feelsLike);
    container.appendChild(humidity);
    container.appendChild(pop);
    container.appendChild(wind_speed);
    container.appendChild(date);

    return container;

}

export { renderCurrentWeather }