import { cards } from './cards.js'
import { Card } from './createCards.js'
import { createTrainPlayToggle } from './trainPlayToggle.js'



let header = document.createElement('header');
header.classList.add('header');
document.body.append(header);
header.append(createTrainPlayToggle())



let cardsContainer = document.createElement('div');
cardsContainer.classList.add('cards__container');
document.body.append(cardsContainer);


let indexOfCategorie = cards[0].indexOf(localStorage.lastClick);
let cardsArray = cards[1][indexOfCategorie];

let cardsClassesObj = {} // соеденение классов и дом элементов
cardsArray.forEach(cardElem => { 
    let card = new Card(cardElem['word'], cardElem['translation'], cardElem['image'], cardElem['audioSrc']);
    cardsContainer.append(card.createCard())
    cardsClassesObj[cardElem['word']] = card;
})

cardsContainer.addEventListener('click', (event) => { // Воспроизведение аудио
    if (event.target.hasAttribute('data-word') && !event.target.classList.contains('card__flip')){
    let word = event.target.getAttribute('data-word');
    let audio = new Audio(cardsClassesObj[word].audioSrc);
    audio.play()
    }
});





