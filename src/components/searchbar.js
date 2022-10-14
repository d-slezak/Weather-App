import { setCity } from "../utilities/setCity";

const renderSearchBar = () => {
    const searchBar = document.createElement('div');
    searchBar.classList.add('search_bar')

    const input = document.createElement('input');
    input.placeholder = 'Enter a City';
    input.id = 'search'

    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.onclick = ((e) => setCity());

    searchBar.appendChild(input);
    searchBar.appendChild(searchButton);

    return searchBar;
}

export {renderSearchBar }