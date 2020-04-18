import { cards } from './cards.js';

export class Card {
    constructor(word, translation, imageSrc, audioSrc) {
        this.word = word;
        this.translation = translation;
        this.imageSrc = imageSrc;
        this.audioSrc = audioSrc;

        this.card = null;
        this.cardText;
        this.cardTranslation;
        this.cardFlip;
    }

    createCard() {
        let card = document.createElement('div');
        card.classList.add('cards__card', 'card');
        card.setAttribute('data-word', this.word);
        card.style.backgroundImage = `url("${this.imageSrc}")`

        this.cardText = document.createElement('p');
        this.cardText.classList.add('card__word');
        this.cardText.innerHTML = this.word;
        this.cardText.setAttribute('data-word', this.word);
        card.append(this.cardText)

        this.cardTranslation = document.createElement('p');
        this.cardTranslation.classList.add('card__translation');
        this.cardTranslation.innerHTML = this.translation;
        this.cardTranslation.setAttribute('data-word', this.word);
        card.append(this.cardTranslation)

        this.cardFlip = document.createElement('img');
        this.cardFlip.classList.add('card__flip');
        this.cardFlip.setAttribute('src', './img/rotate.svg');
        this.cardFlip.setAttribute('data-word', this.word);
        card.append(this.cardFlip)

        this.card = card;

        return this.card;
    }
}