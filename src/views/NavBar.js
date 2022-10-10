import { renderSearchBar } from "../components/searchbar";

const renderNav = () => {
    const navBar = document.createElement('nav');

    const header = document.createElement('h1');
    header.textContent = 'What\'s The Weather'

    navBar.appendChild(header);
    navBar.appendChild(renderSearchBar());

    return navBar;
}

export { renderNav }