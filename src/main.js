import { cards } from './cards.js';
import { createCategorie } from './categorie.js';
import { createTrainPlayToggle } from './trainPlayToggle.js';
import { BurgerMenu } from './burgerMenu.js';
import { createHeader } from './header.js';

if (localStorage.mode === undefined || localStorage.mode === 'train') {
    localStorage.mode = 'train';
}
else {
    document.body.classList.add('body-playmode')
}

let header = createHeader();
document.body.append(header);

let burgerMenu = new BurgerMenu(cards[0]);
let burgerIcon = burgerMenu.createBurgerIcon();
header.append(burgerIcon);
let burgerWindow = burgerMenu.createBurgerWindow();
document.body.append(burgerWindow);

let logo = document.createElement('p');
logo.classList.add('logo');
logo.innerHTML = "English For Kids";
header.append(logo)

let toggle = createTrainPlayToggle(); // Для тоггла
header.append(toggle);

toggle.addEventListener('click', (event) => {
    document.body.classList.toggle('body-playmode')
})

const categoriesContainer = document.createElement('div');
categoriesContainer.classList.add('english__categories-container');
document.body.append(categoriesContainer);

categoriesContainer.append(createCategorie());

categoriesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('categorie__link')) {
        localStorage.lastClick = event.target.id
    }
})

function toStats() {
    if (localStorage.stats === undefined) {
        localStorage.setItem('stats', '{}');
        
        cards[1].forEach((subArray, index) => {

            subArray.forEach((card) => {
                let obj = {
                    word: card.word,
                    translation: card.translation,
                    image: card.image,
                    audioSrc: card.audioSrc,
                    categorie: cards[0][index],
                    trainClicks: 0,
                    correct: 0,
                    errors: 0
                }
                let stats = JSON.parse(localStorage.stats);
                stats[card.word] = obj;
    
                localStorage.setItem('stats', JSON.stringify(stats))
            })
    
        })
    }

    


}

toStats()

