const renderLocationInfo = (location, date, ) => {

    const container = document.createElement('div');
    container.classList.add('locationInfo')

    const locationHeader = document.createElement('h1');
    locationHeader.textContent = location;

    const dateHeader = document.createElement('p');
    const currentdate = new Date(date * 1000);
    dateHeader.textContent = currentdate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });

    container.appendChild(locationHeader);
    container.appendChild(dateHeader);

    return container;

}

export { renderLocationInfo }