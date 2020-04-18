export class StartButton {
    constructor() {
        this.button = null;
        this.buttonText = null;
        this.buttonImage = null;
     }

    create() {
        this.button = document.createElement('div');
        this.button.classList.add('start-button', 'start-button-hidden');
        this.button.setAttribute('data-button', 'start');

        this.buttonText = document.createElement('p');
        this.buttonText.classList.add('start-button__text');
        this.buttonText.innerHTML = 'Start game';
        this.button.append(this.buttonText)

        this.buttonImage = document.createElement('img');
        this.buttonImage.classList.add('start-button-image', 'hidden');
        this.buttonImage.setAttribute('src', 'img/repeat.svg');
        this.buttonImage.setAttribute('data-button', 'start');
        this.button.append(this.buttonImage)

        return this.button;
    }

    toRepeatButton(){
        this.button.classList.add('start-button-repeat');
        this.buttonText.classList.add('hidden');
        this.buttonImage.classList.remove('hidden')
    }

    toStartGameButton() {
        this.button.classList.remove('start-button-repeat');
        this.buttonText.classList.remove('hidden');
        this.buttonImage.classList.add('hidden')
    }
}
