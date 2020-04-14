export class BurgerMenu {
    constructor(categoriesArray) {

        this.categories = categoriesArray;
        this.burgerIcon = null;
        this.links = [];
    }




    createBurgerIcon() {
        this.burgerIcon = document.createElement('div');
        this.burgerIcon.classList.add('burger-menu__icon', 'burger-icon');

        let line = document.createElement('div');
        line.classList.add('burger-icon__line');
        this.burgerIcon.append(line);

        let cloneLine1 = line.cloneNode();
        this.burgerIcon.append(cloneLine1);
        let cloneLine2 = line.cloneNode();
        this.burgerIcon.append(cloneLine2);

        this.burgerIcon.addEventListener('click', (event) => {
            event.currentTarget.classList.toggle('burger-icon-rotate');
            this.burgerWindow.classList.toggle('burger-menu__window-active')
        })

        return this.burgerIcon
    }

    createBurgerWindow() {
        this.burgerWindow = document.createElement('div');
        this.burgerWindow.classList.add('burger-menu__window');

        let mainPageLink = document.createElement('a');
        mainPageLink.classList.add('burger-menu__link');
        mainPageLink.setAttribute('href', './index.html');
        mainPageLink.setAttribute('data-link', 'Main Page');
        mainPageLink.innerHTML = 'Main Page';
        this.links.push(mainPageLink);
        this.burgerWindow.append(mainPageLink);

        this.categories.forEach(element => {
            let pageLink = document.createElement('a');
            pageLink.classList.add('burger-menu__link');
            pageLink.setAttribute('href', './cards.html');
            pageLink.setAttribute('data-link', element)
            pageLink.innerHTML = element;
            this.links.push(pageLink)
            this.burgerWindow.append(pageLink);
        });

        this.links.forEach(element => {
            if (element.matches(`[data-link = "${localStorage.lastClick}"]`)) {
                element.classList.add('burger-menu__link-active');
            }
        })

        this.burgerWindow.addEventListener('click', (event) => {
            if (event.target.classList.contains('burger-menu__link')) {
                localStorage.lastClick = event.target.getAttribute('data-link')
            }
        })

        return this.burgerWindow;
    }
}