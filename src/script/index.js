const list = document.getElementById('items');
let isSorted = false;
let items = [];
let filteredItems = [];

getAllMovies().then(({ movies }) => {
  movies.forEach(({ id, name, reviewAverage, category, type, year, producer, director }) => {
    const listItem = new ListItem(
      name, 
      `⭐ ${reviewAverage || 'Não avaliado'}`, 
      type, 
      category, 
      year, 
      producer, 
      director);
    listItem.addEventListener('click', () => onListItemClick(id));
    items.push(listItem);
    list.appendChild(listItem);
  })

  filteredItems = [...items];
})




const onListItemClick = (name) => {
  window.location.href = `./details.html?movie=${name}`;
}

const onSortButtonClick = () => {
  list.innerHTML = '';
  filteredItems.sort((a, b) => {
    if (a.name > b.name) {
      return isSorted ? -1 : 1;
    }
    if (a.name < b.name) {
      return isSorted ? 1 : -1;
    }
    return 0;
  })
  isSorted = !isSorted;
  appendItemsToList();
}

const onFilterChange = (value) => {
  list.innerHTML = '';
  filteredItems = items.filter((item) => {
    const movieName = item.name.toLowerCase();
    const searchParam = value.toLowerCase();

    return movieName.includes(searchParam);
  })
  appendItemsToList();
}

const appendItemsToList = () => {
  filteredItems.forEach((item) => {
    list.appendChild(item);
  })
}