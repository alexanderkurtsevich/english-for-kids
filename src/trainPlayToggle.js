import '../style/train-play-toggle.css';

export default function createTrainPlayToggle() {
  const toggle = document.createElement('div');
  toggle.classList.add('toggle');

  const toggleButton = document.createElement('div');
  toggleButton.classList.add('toggle__button');
  toggle.append(toggleButton);

  const toggleTextPlay = document.createElement('p');
  toggleTextPlay.classList.add('toggle__text', 'toggle__text-play');
  toggleTextPlay.innerHTML = 'PLAY';
  toggle.append(toggleTextPlay);

  const toggleTextTrain = document.createElement('p');
  toggleTextTrain.classList.add('toggle__text', 'toggle__text-train', 'active');
  toggleTextTrain.innerHTML = 'TRAIN';
  toggle.append(toggleTextTrain);

  if (localStorage.mode === 'play') {
    toggle.classList.add('toggle-active');
    toggleTextTrain.classList.remove('active');
    toggleTextPlay.classList.add('active');

    toggleButton.style.left = '74px';
  }

  toggle.addEventListener('click', () => {
    setTimeout(() => {
      localStorage.mode = localStorage.mode === 'train' ? 'play' : 'train';
    }, 0);

    toggle.classList.toggle('toggle-active');
    toggleTextTrain.classList.toggle('active');
    toggleTextPlay.classList.toggle('active');

    toggleButton.style.left = (toggleButton.style.left === '') ? '74px' : '';
  });

  return toggle;
}
