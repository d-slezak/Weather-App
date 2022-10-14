import { renderSearchBar } from "../components/searchbar";

const renderNav = () => {
    const navBar = document.createElement('nav');

    const title = document.createElement('div');

    const logo = document.createElement('img');
    logo.src = '../dist/images/weather.svg'

    const header = document.createElement('h1');
    header.textContent = 'What\'s The Weather'

    title.appendChild(logo);
    title.appendChild(header);
    navBar.appendChild(title);
    navBar.appendChild(renderSearchBar());

    return navBar;
}

export { renderNav }