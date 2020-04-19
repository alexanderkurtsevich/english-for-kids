import '../style/burger-menu.css';

export default class BurgerMenu {
  constructor(categoriesArray) {
    this.categories = categoriesArray;

    this.burgerIcon = null;
    this.burgerWindow = null;

    this.links = [];
  }

  createBurgerIcon() {
    this.burgerIcon = document.createElement('div');
    this.burgerIcon.classList.add('burger-menu__icon', 'burger-icon', 'burger-menu-element');

    const line = document.createElement('div');
    line.classList.add('burger-icon__line', 'burger-menu-element');
    this.burgerIcon.append(line);

    const cloneLine1 = line.cloneNode();
    this.burgerIcon.append(cloneLine1);
    const cloneLine2 = line.cloneNode();
    this.burgerIcon.append(cloneLine2);

    this.burgerIcon.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('burger-icon-rotate');
      this.burgerWindow.classList.toggle('burger-menu__window-active');
    });

    return this.burgerIcon;
  }

  createBurgerWindow() {
    this.burgerWindow = document.createElement('div');
    this.burgerWindow.classList.add('burger-menu__window', 'burger-menu-element');

    const mainPageLink = document.createElement('a');
    mainPageLink.classList.add('burger-menu__link');
    mainPageLink.setAttribute('href', './index.html');
    mainPageLink.setAttribute('data-link', 'Main Page');
    mainPageLink.innerHTML = 'Main Page';
    this.links.push(mainPageLink);
    this.burgerWindow.append(mainPageLink);

    this.categories.forEach((element) => {
      const pageLink = document.createElement('a');
      pageLink.classList.add('burger-menu__link', 'link-categorie');
      pageLink.setAttribute('href', './cards.html');
      pageLink.setAttribute('data-link', element);
      pageLink.innerHTML = element;
      this.links.push(pageLink);
      this.burgerWindow.append(pageLink);
    });

    const stats = document.createElement('a');
    stats.classList.add('burger-menu__link');
    stats.setAttribute('href', './stats.html');
    stats.setAttribute('data-link', 'Statistics');
    stats.innerHTML = 'Statistics';
    this.links.push(stats);
    this.burgerWindow.append(stats);

    this.burgerWindow.addEventListener('click', (event) => {
      if (event.target.classList.contains('link-categorie')) {
        localStorage.lastClick = event.target.getAttribute('data-link');
      }
    });

    this.links.forEach((element) => {
      if (element.matches(`[data-link = "${localStorage.lastClick}"]`)) {
        element.classList.add('burger-menu__link-active');
      }
    });

    document.body.addEventListener('click', (event) => {
      if (!event.target.matches('.burger-menu-element')) {
        this.burgerIcon.classList.remove('burger-icon-rotate');
        this.burgerWindow.classList.remove('burger-menu__window-active');
      }
    });

    return this.burgerWindow;
  }
}
