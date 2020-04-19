import '../style/main.css';
import cards from './cards';
import createCategorie from './categorie';
import createTrainPlayToggle from './trainPlayToggle';
import BurgerMenu from './burgerMenu';
import createHeader from './header';
import createStats from './createStats';

if (localStorage.mode === undefined || localStorage.mode === 'train') {
  localStorage.mode = 'train';
} else {
  document.body.classList.add('body-playmode');
}

const header = createHeader();
document.body.append(header);

const burgerMenu = new BurgerMenu(cards[0]);
const burgerIcon = burgerMenu.createBurgerIcon();
header.append(burgerIcon);
const burgerWindow = burgerMenu.createBurgerWindow();
document.body.append(burgerWindow);

const logo = document.createElement('p');
logo.classList.add('logo');
logo.innerHTML = 'English For Kids';
header.append(logo);

const toggle = createTrainPlayToggle(); // Для тоггла
header.append(toggle);

toggle.addEventListener('click', () => {
  document.body.classList.toggle('body-playmode');
});

const categoriesContainer = document.createElement('div');
categoriesContainer.classList.add('english__categories-container');
document.body.append(categoriesContainer);

categoriesContainer.append(createCategorie());

categoriesContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('categorie__link')) {
    localStorage.lastClick = event.target.id;
  }
});

const links = document.querySelectorAll('.burger-menu__link');
links.forEach((elem) => elem.classList.remove('burger-menu__link-active'));
links[0].classList.add('burger-menu__link-active');

createStats();
