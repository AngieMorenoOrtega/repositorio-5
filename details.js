import {cards} from "./data.js";
console.log(cards);

const logo = document.querySelector(".header__figure");
logo.addEventListener('click', () => {
  window.location.href = "../index.html";
});

const idCharacterStg = JSON.parse(sessionStorage.getItem("selectedCardIndex")) || 0;
const idCharacter = Number(idCharacterStg);
console.log(idCharacter);

const character = cards.find((person) => person.id === idCharacter);
console.log(character);

if (character) {
  const showCharacterInfo = (contenedor, character) => {
    // Crea el elemento figure
    const figureContainer = document.createElement("div");
    const figure = document.createElement("figure");
    figure.classList.add("main__figure");
    figure.innerHTML = `<iframe src=${character.iframe} alt=${character.name}></iframe>`;

    // Crea el div para la información del personaje
    const infoDiv = document.createElement("h1");
    infoDiv.innerHTML=character.name;

    const viewsValue = document.createElement("strong");
    viewsValue.innerHTML = character.views;

    figureContainer.appendChild(figure);
   figure.appendChild(infoDiv);
   figure.appendChild(viewsValue);
    contenedor.appendChild(figure);
  };

  const infoCharacterContainer = document.querySelector(".main__cards");
  console.log(infoCharacterContainer);

  showCharacterInfo(infoCharacterContainer, character);
}

let html = '';
cards.forEach(element => {
  if (element !== character) {
    html += `
    <article class="cards">
    <figure class="cards__figure">
    <img  src=${element.thumbnail} alt=${element.name}>
    </figure>
    <section class="cards__figure__section">
    <div class="cards__figure__section__details">
     <h3 data-card="name" >${element.name}</h3>
     </div>
    <span  class="cards__figure__section__details__span">
    <h3 >${element.user}</h3>
    <h3 >${element.views}</h3></span>
    </section>
    </article>
    `;
  }
});

// Muestra el código HTML en la página
const container = document.getElementById('videos-container');
container.innerHTML = html;
console.log(container);