import { cards } from './cards.js'
import { Card } from './createCards.js'
import { createTrainPlayToggle } from './trainPlayToggle.js';
import { StartButton } from './StartButton.js';
import { BurgerMenu } from './burgerMenu.js';
import { createHeader } from './header.js';

class English {
    constructor() {
        this.cardsClassesObj = {};

        this.wordsList = [];
        this.randomizedWordList = []
        this.audios = {};


        this.englishWords = [];
        this.flipImages = [];
        this.translations = [];

        this.count = 0;
        this.errorCount = 0;
    }

    init() {
        this.playAudioEvent = this.playAudioEvent.bind(this);
        this.startGameEvent = this.startGameEvent.bind(this);
        this.rotateCardClickEvent = this.rotateCardClickEvent.bind(this)
        this.rotateCardMouseOverEvent = this.rotateCardMouseOverEvent.bind(this)
        this.toggleEvent = this.toggleEvent.bind(this);

        let header = createHeader();
        document.body.append(header);

        this.burgerMenu = new BurgerMenu(cards[0]);
        this.burgerIcon = this.burgerMenu.createBurgerIcon();
        header.append(this.burgerIcon);
        this.burgerWindow = this.burgerMenu.createBurgerWindow();
        document.body.append(this.burgerWindow);


        this.createStarsWrap()

        this.startButtonInstance = new StartButton();
        this.startButton = this.startButtonInstance.create();
        header.append(this.startButton);

        this.toggle = createTrainPlayToggle(); // Для тоггла
        header.append(this.toggle);

        this.createCardContainer()
        this.createCards()
        this.randomizeWords()

        if (localStorage.mode === 'play') {
            this.toPlayMode()
        }

        this.cardsContainer.addEventListener('click', this.playAudioEvent)
        this.cardsContainer.addEventListener('click', this.rotateCardClickEvent)
        this.cardsContainer.addEventListener('mouseover', this.rotateCardMouseOverEvent)
        this.toggle.addEventListener('click', this.toggleEvent);

    }

    toggleEvent(event) {
        if (localStorage.mode === 'train') {
            this.toPlayMode();
        }
        else {
            this.toTrainMode();
        }

        this.startButtonInstance.toStartGameButton()
        this.game = false
    }

    toPlayMode() {
        this.englishWords.forEach(eachWord => {
            eachWord.classList.add('card-playmode');
        })
        this.flipImages.forEach(eachImg => {
            eachImg.classList.add('card-playmode')
        })
        this.translations.forEach(eachTranslation => {
            eachTranslation.classList.add('card-playmode')
        })
        this.startButton.classList.remove('start-button-hidden');

        document.body.classList.add('body-playmode')

        this.cardsContainer.removeEventListener('click', this.playAudioEvent);
        document.body.addEventListener('click', this.startGameEvent);
    }

    toTrainMode() {
        this.englishWords.forEach(eachWord => {
            eachWord.classList.remove('card-playmode');
        })
        this.flipImages.forEach(eachImg => {
            eachImg.classList.remove('card-playmode')
        })
        this.translations.forEach(eachTranslation => {
            eachTranslation.classList.remove('card-playmode')
        })
        this.startButton.classList.add('start-button-hidden');

        document.body.classList.remove('body-playmode');

        this.cardsContainer.addEventListener('click', this.playAudioEvent);
        document.body.removeEventListener('click', this.startGameEvent);

        let stars = document.querySelectorAll('.star');
        stars.forEach(star => star.remove())

        let blockWindows = document.querySelectorAll('.block-window');
        blockWindows.forEach(blockWindow => blockWindow.remove());

        this.count = 0;
        this.errorCount = 0;

        this.randomizeWords()
    }

    rotateCardClickEvent(event) {
        if (event.target.classList.contains('card__flip')) {
            this.rotatedWord = event.target.getAttribute('data-word');
            let elements = document.querySelectorAll(`[data-word = "${this.rotatedWord}"]`)
            elements.forEach(elem => elem.classList.add('card-rotate'))
        }
    }
    rotateCardMouseOverEvent(event) {
        let elements = document.querySelectorAll(`[data-word = "${this.rotatedWord}"]`)
        if (event.target.getAttribute('data-word') !== this.rotatedWord) {
            elements.forEach(elem => elem.classList.remove('card-rotate'))
        }
    }

    createStarsWrap() {
        this.starsWrap = document.createElement('div');
        this.starsWrap.classList.add('stars__wrap');
        document.body.append(this.starsWrap);
    }

    createCardContainer() {
        this.cardsContainer = document.createElement('div'); // контейнер для карт
        this.cardsContainer.classList.add('cards__container');
        document.body.append(this.cardsContainer);
    }

    randomizeWords() {
        this.randomizedWordList.sort((a, b) => Math.random() - 0.5)
    }

    createCards() {
        let indexOfCategorie = cards[0].indexOf(localStorage.lastClick); // какая тема была выбрана
        let cardsArray = cards[1][indexOfCategorie]; // выбранная категория
        cardsArray.forEach(cardElem => {
            let card = new Card(cardElem['word'], cardElem['translation'], cardElem['image'], cardElem['audioSrc']);
            this.cardsContainer.append(card.createCard())
            this.cardsClassesObj[cardElem['word']] = card;

            this.wordsList.push(cardElem['word']);
            this.randomizedWordList.push(cardElem['word'])

            this.englishWords.push(card.cardText);
            this.translations.push(card.cardTranslation)
            this.flipImages.push(card.cardFlip);
            this.audios[cardElem['word']] = card.audioSrc
        })
    }

    playAudioEvent(event) {
        if (localStorage.mode === 'train' && event.target.hasAttribute('data-word') && !event.target.classList.contains('card__flip')) {
            let word = event.target.getAttribute('data-word');
            let audio = new Audio(this.audios[word]);
            audio.play()
        }
    }

    startGameEvent(event) {

        if (event.target.classList.contains('start-button') && !this.game) {
            this.game = true;
            this.startButtonInstance.toRepeatButton()
            this.playSound(this.audios[this.randomizedWordList[this.count]])
        }

        if (event.target.getAttribute('data-button') === 'start' && this.game) {
            this.playSound(this.audios[this.randomizedWordList[this.count]])
            console.log('hey')
        }

        if (this.game && event.target.classList.contains('card')) {
            if (event.target.getAttribute('data-word') === this.randomizedWordList[this.count]) {
                let blockWindow = document.createElement('div');
                blockWindow.classList.add('block-window');
                event.target.append(blockWindow);

                this.count += 1;
                this.playSound('audio/correct.mp3');

                let star = document.createElement('img');
                star.classList.add('star');
                star.setAttribute('src', 'img/star-win.svg');
                this.starsWrap.append(star)

                if (this.count === 8) {
                    this.winGame()
                }

                setTimeout(() => {
                    this.playSound(this.audios[this.randomizedWordList[this.count]])
                }, 700);
            }
            else {
                this.errorCount += 1;

                let star = document.createElement('img');
                star.classList.add('star');
                star.setAttribute('src', 'img/star.svg');
                this.starsWrap.append(star)

                this.playSound('audio/error.mp3')
            }
        }
    }

    playSound(src) {
        let audio = new Audio(src);
        audio.play()
    }

    winGame() {
        let winWindow = document.createElement('div');
        winWindow.classList.add('win-window');
        document.body.append(winWindow);
        if (this.errorCount === 0) {
            let winText = document.createElement('p');
            winText.classList.add('win-window__text');
            winText.innerHTML = "WIN!"
            winWindow.append(winText)

            let winImage = document.createElement('img');
            winImage.classList.add('win-window__image');
            winImage.setAttribute('src', 'img/success.jpg');
            winWindow.append(winImage);

            this.playSound('audio/success.mp3')
            setTimeout(() => {
                window.location.href = "./index.html"
            }, 3500);
        }

        else {
            let looseText = document.createElement('p');
            looseText.classList.add('win-window__loose-text');
            looseText.innerHTML = `${this.errorCount} errors`
            winWindow.append(looseText)

            let looseImage = document.createElement('img');
            looseImage.classList.add('win-window__image');
            looseImage.setAttribute('src', 'img/failure.jpg');
            winWindow.append(looseImage);

            this.playSound('audio/failure.mp3')
            setTimeout(() => {
                window.location.href = "./index.html"
            }, 3500);
        }

    }
}

let english = new English();
english.init()







