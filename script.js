import { cards } from "./data.js";
console.log(cards);
const containerList=document.querySelector(".header__list");
const printList=(container)=>{
  container.innerHTML="";
 container.innerHTML += `
 <ul><li><button  data-category="music">Música</button>
 <li><button  data-category="entertaiment">Entretenimiento</button></li>
 <li><button data-category="favorites">Favoritos</button></li>
 <li><button  data-category="all">Todos</button></li>
 </ul>`
}
 document.addEventListener("DOMContentLoaded", () => {
  printList( containerList);})

const containerCards = document.querySelector(".main__cards");
console.log(containerCards);
const printCards = (container, cards) => {
    container.innerHTML = "";
    cards.forEach((element) => {
        container.innerHTML += `
    <article class="cards">
    <figure class="cards__figure">
    <img data-card="${element.id}" src=${element.thumbnail} alt=${element.name}>
    </figure>
    <section class="cards__figure__section">
    <div class="cards__figure__section__details">
     <img data-card="${element.id}"name=src${element.id} src=${element.userImage} alt=${element.user}><h3 data-card="name" >${element.name}</h3>
     </div>
    <span  class="cards__figure__section__details__span">
    <h3 >${element.user}</h3>
    <h3 >${element.views}</h3></span>
    </section>
    </article>
    `;
    });
   
};
document.addEventListener("DOMContentLoaded", () => {
    printCards(containerCards, cards);
    
});

document.addEventListener("click", (event) => {
  const category = event.target.getAttribute("data-category");
  if (category === "all") {
    printCards(containerCards, cards);
  } else {
    printCards(containerCards, cards.filter(card => card.category === category));
  }
  const dataCardAttribute = event.target.getAttribute("data-card");
  if (dataCardAttribute !== null) {
    const cardIndex = parseInt(dataCardAttribute, 10);
    sessionStorage.setItem("selectedCardIndex", cardIndex);
    window.location.href = "../pages/details.html"
  }
  console.log(dataCardAttribute);
});