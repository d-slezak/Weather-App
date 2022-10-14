function getWeatherImg(weather, isDay) {
    let img = '../dist/images/weather.svg'

    switch (weather) {
        case 'Clear':
            img = isDay ? '../dist/images/day.svg' : '../dist/images/night.svg';
            break;
        case 'Clouds':
            img = '../dist/images/cloudy.svg';
            break;
        case 'Rain':
            img = '../dist/images/rainy.svg';
            break;
        case 'Snow':
            img = '../dist/images/snowy.svg';
            break;
    }

    return img;
}

export { getWeatherImg }