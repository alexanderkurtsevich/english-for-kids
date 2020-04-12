import { cards } from './cards.js'
import { Card } from './createCards.js'
import { createTrainPlayToggle } from './trainPlayToggle.js';
import { createStartButton } from './createStartButton.js';

class English {
    constructor() {
        this.cardsClassesObj = {};
        this.mode = 'train';

        this.wordsList = [];
        this.randomizedWordList = []
        this.audios = {};

        this.englishWords = [];
        this.flipImages = [];

        this.count = 0;
        this.errorCount = 0;
    }

    init() {
        this.playAudioEvent = this.playAudioEvent.bind(this);
        this.startGameEvent = this.startGameEvent.bind(this);


        let header = document.createElement('header'); // создание хэдера
        header.classList.add('header');
        document.body.append(header);

        this.createStarsWrap()
       



        let startButton = createStartButton();
        header.append(startButton);

        let toggle = createTrainPlayToggle(); // Для тоггла
        header.append(toggle);

        this.createCardContainer()
        this.createCards()
        this.randomizeWords()

        console.log(this.wordsList);
        console.log(this.randomizedWordList)

        toggle.addEventListener('click', (event) => {
            this.mode = (this.mode === 'train') ? 'play' : 'train';
            this.englishWords.forEach(eachWord => {
                eachWord.classList.toggle('card-playmode');
            })
            this.flipImages.forEach(eachImg => {
                eachImg.classList.toggle('card-playmode')
            })

            if (this.mode === 'play') {
                this.cardsContainer.removeEventListener('click', this.playAudioEvent);
                document.body.addEventListener('click',  this.startGameEvent);
            }
            else {
                this.cardsContainer.addEventListener('click', this.playAudioEvent);
                document.body.removeEventListener('click',  this.startGameEvent);

                let stars = document.querySelectorAll('.star');
                stars.forEach(star => star.remove())
            }
        })

        
        this.cardsContainer.addEventListener('click', this.playAudioEvent)

        
        
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
            this.flipImages.push(card.cardFlip)
            this.audios[cardElem['word']] = card.audioSrc
        })
    }

    playAudioEvent(event) {
        if (this.mode === 'train' && event.target.hasAttribute('data-word') && !event.target.classList.contains('card__flip')) {
            let word = event.target.getAttribute('data-word');
            let audio = new Audio(this.audios[word]);
            audio.play()
        }
    }

    startGameEvent(event) {

        if (event.target.classList.contains('start-button')) {
            this.game = true;
            event.target.style.display = "none";
            this.playSound(this.audios[this.randomizedWordList[this.count]])
        }

        if (this.game && event.target.classList.contains('card')) {
            if (event.target.getAttribute('data-word') === this.randomizedWordList[this.count]) {
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







