import {cards} from './cards.js'
import {Card} from './createCards.js'
let cardsContainer = document.createElement('div');
cardsContainer.classList.add('cards__container');
document.body.append(cardsContainer);

let indexOfCategorie = cards[0].indexOf(localStorage.lastClick);
let cardsArray = cards[1][indexOfCategorie];

cardsArray.forEach(cardElem => {
let card = new Card (cardElem['word'], cardElem['translation'], cardElem['image'], cardElem['audioSrc'])
cardsContainer.append(card.createCard())
})
