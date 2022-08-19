const renderNav = () => {
    const navBar = document.createElement('nav');

    const header = document.createElement('h1');
    header.textContent = 'What\'s The Weather'

    navBar.appendChild(header);

    return navBar;
}

export { renderNav }