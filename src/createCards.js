import {cards} from './cards.js';

export class Card {
    constructor(word, translation, imageSrc, audioSrc) {
        this.word = word;
        this.translation = translation;
        this.imageSrc = imageSrc;
        this.audioSrc = audioSrc;
    }

    createCard() {
        let card = document.createElement('div');
        card.classList.add('cards__card', 'card');
        
        let cardImage = document.createElement('img');
        cardImage.classList.add('card__image');
        cardImage.setAttribute('src', this.imageSrc);
        card.append(cardImage);

        let cardText = document.createElement('p');
        cardText.classList.add('card__text');
        cardText.innerHTML = this.word;
        card.append(cardText)

        let cardFlip = document.createElement('img');
        cardFlip.classList.add('card__flip');
        cardFlip.setAttribute('src', './img/rotate.svg');
        card.append(cardFlip)

        return card;
    }
}





// {/* <div class="cards__container">
// <div class="cards__card card">
//     <img src="" alt="" class="card__image">
//     <p class="card__text"></p>
//     <img src="" alt="" class="card__flip">
// </div> */}