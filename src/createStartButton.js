export function createStartButton () {
let button = document.createElement('button');
button.classList.add('start-button');
button.innerHTML = 'Start game';
return button;
}