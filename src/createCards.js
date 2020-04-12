import {cards} from './cards.js';

export class Card {
    constructor(word, translation, imageSrc, audioSrc) {
        this.word = word;
        this.translation = translation;
        this.imageSrc = imageSrc;
        this.audioSrc = audioSrc;
        this.card = null;
    }

    createCard() {
        let card = document.createElement('div');
        card.classList.add('cards__card', 'card');
        card.setAttribute('data-word', this.word);
        
        let cardImage = document.createElement('img');
        cardImage.classList.add('card__image');
        cardImage.setAttribute('src', this.imageSrc);
        cardImage.setAttribute('data-word', this.word);
        card.append(cardImage);

        let cardText = document.createElement('p');
        cardText.classList.add('card__word');
        cardText.innerHTML = this.word;
        cardText.setAttribute('data-word', this.word);
        card.append(cardText)

        let cardTranslation = document.createElement('p');
        cardTranslation.classList.add('card__translation');
        cardTranslation.innerHTML = this.translation;
        cardTranslation.setAttribute('data-word', this.word);
        card.append(cardTranslation)

        let cardFlip = document.createElement('img');
        cardFlip.classList.add('card__flip');
        cardFlip.setAttribute('src', './img/rotate.svg');
        cardFlip.setAttribute('data-word', this.word);
        card.append(cardFlip)

        this.card = card;

        return this.card;
    }
}





// {/* <div class="cards__container">
// <div class="cards__card card">
//     <img src="" alt="" class="card__image">
//     <p class="card__text"></p>
//     <img src="" alt="" class="card__flip">
// </div> */}