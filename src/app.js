import '../style/cards-style.css';

import cards from './cards';
import Card from './createCards';
import createTrainPlayToggle from './trainPlayToggle';
import StartButton from './StartButton';
import BurgerMenu from './burgerMenu';
import createHeader from './header';

export default class English {
  constructor(trainDifficultWords = false) {
    this.trainDifficultWords = trainDifficultWords;

    this.cardsClassesObj = {};

    this.wordsList = [];
    this.randomizedWordList = [];
    this.audios = {};


    this.englishWords = [];
    this.flipImages = [];
    this.translations = [];

    this.count = 0;
    this.errorCount = 0;

    this.playAudioEvent = this.playAudioEvent.bind(this);
    this.startGameEvent = this.startGameEvent.bind(this);
    this.rotateCardClickEvent = this.rotateCardClickEvent.bind(this);
    this.rotateCardMouseOverEvent = this.rotateCardMouseOverEvent.bind(this);
    this.toggleEvent = this.toggleEvent.bind(this);
  }

  init() {
    const header = createHeader();
    document.body.append(header);

    this.burgerMenu = new BurgerMenu(cards[0]);
    this.burgerIcon = this.burgerMenu.createBurgerIcon();
    header.append(this.burgerIcon);
    this.burgerWindow = this.burgerMenu.createBurgerWindow();
    document.body.append(this.burgerWindow);

    this.createStarsWrap();

    this.startButtonInstance = new StartButton();
    this.startButton = this.startButtonInstance.create();
    header.append(this.startButton);

    this.toggle = createTrainPlayToggle(); // Для тоггла
    header.append(this.toggle);

    this.createCardContainer();
    this.createCards();
    this.randomizeWords();

    if (localStorage.mode === 'play') {
      this.toPlayMode();
    }

    this.cardsContainer.addEventListener('click', this.playAudioEvent);
    this.cardsContainer.addEventListener('click', this.rotateCardClickEvent);
    this.cardsContainer.addEventListener('mouseover', this.rotateCardMouseOverEvent);
    this.toggle.addEventListener('click', this.toggleEvent);
  }

  createCards() {
    const indexOfCategorie = cards[0].indexOf(localStorage.lastClick);
    this.cardsArray = cards[1][indexOfCategorie];
    if (this.trainDifficultWords === true) {
      this.cardsArray = JSON.parse(localStorage.difficultWords);
    }
    if (this.cardsArray.length === 0) {
      const text = document.createElement('p');
      text.classList.add('warning-text');
      text.innerHTML = 'No words to train';
      document.body.append(text);
    }

    this.cardsArray.forEach((cardElem) => {
      const card = new Card(cardElem.word, cardElem.translation, cardElem.image, cardElem.audioSrc);
      this.cardsContainer.append(card.createCard());
      this.cardsClassesObj[cardElem.word] = card;

      this.wordsList.push(cardElem.word);
      this.randomizedWordList.push(cardElem.word);

      this.englishWords.push(card.cardText);
      this.translations.push(card.cardTranslation);
      this.flipImages.push(card.cardFlip);
      this.audios[cardElem.word] = card.audioSrc;
    });
  }

  toggleEvent() {
    if (localStorage.mode === 'train') {
      this.toPlayMode();
    } else {
      this.toTrainMode();
    }

    this.startButtonInstance.toStartGameButton();
    this.game = false;
  }

  toPlayMode() {
    this.englishWords.forEach((eachWord) => {
      eachWord.classList.add('card-playmode');
    });
    this.flipImages.forEach((eachImg) => {
      eachImg.classList.add('card-playmode');
    });
    this.translations.forEach((eachTranslation) => {
      eachTranslation.classList.add('card-playmode');
    });
    this.startButton.classList.remove('start-button-hidden');

    document.body.classList.add('body-playmode');

    this.cardsContainer.removeEventListener('click', this.playAudioEvent);
    document.body.addEventListener('click', this.startGameEvent);
  }

  toTrainMode() {
    this.englishWords.forEach((eachWord) => {
      eachWord.classList.remove('card-playmode');
    });
    this.flipImages.forEach((eachImg) => {
      eachImg.classList.remove('card-playmode');
    });
    this.translations.forEach((eachTranslation) => {
      eachTranslation.classList.remove('card-playmode');
    });
    this.startButton.classList.add('start-button-hidden');

    document.body.classList.remove('body-playmode');

    this.cardsContainer.addEventListener('click', this.playAudioEvent);
    document.body.removeEventListener('click', this.startGameEvent);

    const stars = document.querySelectorAll('.star');
    stars.forEach((star) => star.remove());

    const blockWindows = document.querySelectorAll('.block-window');
    blockWindows.forEach((blockWindow) => blockWindow.remove());

    this.count = 0;
    this.errorCount = 0;

    this.randomizeWords();
  }

  rotateCardClickEvent(event) {
    if (event.target.classList.contains('card__flip')) {
      this.rotatedWord = event.target.getAttribute('data-word');
      const elements = document.querySelectorAll(`[data-word = "${this.rotatedWord}"]`);
      elements.forEach((elem) => elem.classList.add('card-rotate'));
    }
  }

  rotateCardMouseOverEvent(event) {
    const elements = document.querySelectorAll(`[data-word = "${this.rotatedWord}"]`);
    if (event.target.getAttribute('data-word') !== this.rotatedWord) {
      elements.forEach((elem) => elem.classList.remove('card-rotate'));
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
    this.randomizedWordList.sort(() => Math.random() - 0.5);
  }

  playAudioEvent(event) {
    if (localStorage.mode === 'train' && event.target.hasAttribute('data-word') && !event.target.classList.contains('card__flip')) {
      const word = event.target.getAttribute('data-word');
      const audio = new Audio(this.audios[word]);
      audio.play();

      this.changeStats(word, 'train-clicks');
    }
  }

  startGameEvent(event) {
    if (event.target.getAttribute('data-button') === 'start' && !this.game) {
      this.game = true;
      this.startButtonInstance.toRepeatButton();
      this.playSound(this.audios[this.randomizedWordList[this.count]]);
    }

    if (event.target.getAttribute('data-button') === 'start' && this.game) {
      this.playSound(this.audios[this.randomizedWordList[this.count]]);
    }

    if (this.game && event.target.classList.contains('card')) {
      if (event.target.getAttribute('data-word') === this.randomizedWordList[this.count]) {
        const blockWindow = document.createElement('div');
        blockWindow.classList.add('block-window');
        event.target.append(blockWindow);

        this.count += 1;
        this.playSound('audio/correct.mp3');

        const star = document.createElement('img');
        star.classList.add('star');
        star.setAttribute('src', 'img/star-win.svg');
        this.starsWrap.append(star);

        if (this.count === this.cardsArray.length) {
          this.winGame();
        }

        setTimeout(() => {
          this.playSound(this.audios[this.randomizedWordList[this.count]]);
        }, 700);


        const word = event.target.getAttribute('data-word');
        this.changeStats(word, 'correct');
      } else {
        this.errorCount += 1;

        const star = document.createElement('img');
        star.classList.add('star');
        star.setAttribute('src', 'img/star.svg');
        this.starsWrap.append(star);

        this.playSound('audio/error.mp3');

        const word = this.randomizedWordList[this.count];
        this.changeStats(word, 'errors');
      }
    }
  }

  changeStats(word, element) {
    this.stats = JSON.parse(localStorage.stats);
    this.stats[word][`${element}`] += 1;
    localStorage.stats = JSON.stringify(this.stats);
  }

  playSound(src) {
    this.audio = new Audio(src);
    this.audio.play();
  }

  winGame() {
    const winWindow = document.createElement('div');
    winWindow.classList.add('win-window');
    document.body.append(winWindow);
    if (this.errorCount === 0) {
      const winText = document.createElement('p');
      winText.classList.add('win-window__text');
      winText.innerHTML = 'WIN!';
      winWindow.append(winText);

      const winImage = document.createElement('img');
      winImage.classList.add('win-window__image');
      winImage.setAttribute('src', 'img/success.jpg');
      winWindow.append(winImage);

      this.playSound('audio/success.mp3');
      setTimeout(() => {
        window.location.href = './index.html';
      }, 3500);
    } else {
      const looseText = document.createElement('p');
      looseText.classList.add('win-window__loose-text');
      looseText.innerHTML = `${this.errorCount} errors`;
      winWindow.append(looseText);

      const looseImage = document.createElement('img');
      looseImage.classList.add('win-window__image');
      looseImage.setAttribute('src', 'img/failure.jpg');
      winWindow.append(looseImage);

      this.playSound('audio/failure.mp3');
      setTimeout(() => {
        window.location.href = './index.html';
      }, 3500);
    }
  }
}
