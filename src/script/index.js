const list = document.getElementById('items');
let items = [];
let isSorted = false;
for (let i = 5; i > 0; i--) {
  const listItem = new ListItem(`${i}Exterminador do futuro`, '⭐ 5.0', 'Longa metragem', 'Ação', '1984', 'Canal+', 'James Cameron');
  listItem.addEventListener('click', () => onListItemClick(i));
  items.push(listItem);
  list.appendChild(listItem);
}
let filteredItems = [...items];


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