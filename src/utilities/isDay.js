function isDay(sunrise, sunset, time) {
    console.log(`${sunrise}, ${sunset}, ${time}`);
    if (new Date(time*1000).getHours() > new Date(sunrise*1000).getHours() && new Date(time*1000).getHours() < new Date(sunset*1000).getHours())
    {
        return true;
    }
    else {
        return false
    }
}

export {isDay}