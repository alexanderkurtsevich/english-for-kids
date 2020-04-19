import { cards } from './cards.js';
import { createCategorie } from './categorie.js';
import { createTrainPlayToggle } from './trainPlayToggle.js';
import { BurgerMenu } from './burgerMenu.js';
import { createHeader } from './header.js';
import { createStats } from './createStats.js'

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

let links = document.querySelectorAll('.burger-menu__link');
links.forEach(elem => elem.classList.remove('burger-menu__link-active'));
links[0].classList.add('burger-menu__link-active');

createStats()


