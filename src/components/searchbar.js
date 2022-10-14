const renderSearchBar = () => {
    const searchBar = document.createElement('div');
    searchBar.classList.add('search_bar')

    const input = document.createElement('input');
    input.placeholder = 'Enter a City';

    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';

    searchBar.appendChild(input);
    searchBar.appendChild(searchButton);

    return searchBar;
}

export {renderSearchBar }