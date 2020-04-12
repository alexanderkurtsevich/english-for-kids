export function createTrainPlayToggle() {
    let toggle = document.createElement('div');
    toggle.classList.add('toggle');

    let toggleButton = document.createElement('div');
    toggleButton.classList.add('toggle__button');
    toggle.append(toggleButton);

    let toggleTextPlay = document.createElement('p');
    toggleTextPlay.classList.add('toggle__text', 'toggle__text-play');
    toggleTextPlay.innerHTML = "PLAY";
    toggle.append(toggleTextPlay);

    let toggleTextTrain = document.createElement('p');
    toggleTextTrain.classList.add('toggle__text', 'toggle__text-train', 'active');
    toggleTextTrain.innerHTML = "TRAIN";
    toggle.append(toggleTextTrain);

    toggle.addEventListener('click', (event) => {
        toggle.classList.toggle('toggle-active');
        toggleTextTrain.classList.toggle('active');
        toggleTextPlay.classList.toggle('active');
        
        toggleButton.style.left = (toggleButton.style.left === "") ? '73px' : ""
    })

    return toggle
}