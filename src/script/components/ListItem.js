class ListItem extends HTMLElement {

  constructor(name, rating, type, category, year, production, director) {
    super();
    this.name = name;
    this.rating = rating;
    this.type = type;
    this.category = category;
    this.year = year;
    this.production = production;
    this.director = director;
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="list-item">
        <div>
          <div class="name">${this.name}</div>
          <div class="rating">${this.rating}</div>
        </div>
        <div class="hide-md">${this.type}</div>
        <div class="hide-md">${this.category}</div>
        <div class="hide-md">${this.year}</div>
        <div class="hide-md">${this.production}</div>
        <div class="hide-md">${this.director}</div>
        <div class="arrow-container">
          <img src="../assets/right-arrow.png" alt=" Seta para a direita">
        </div>
      </div>
    `
  }
}

customElements.define('list-item', ListItem)