import {cards} from './cards.js';

export function createCategorie() {
    let fragment = document.createDocumentFragment();
    cards[0].forEach((categorieName, index) => {
        let categorie = document.createElement('div');
        categorie.classList.add('english__categorie', 'categorie');

        let categorieImage = document.createElement('img');
        categorieImage.classList.add('categorie__image');
        categorieImage.setAttribute('src', `./img/${cards[1][index][0].word}.jpg`)
        categorie.append(categorieImage)

        let categorieText = document.createElement('p');
        categorieText.classList.add('categorie__text');
        categorieText.innerHTML = categorieName;
        categorie.append(categorieText)

        let categorieLink = document.createElement('a');
        categorieLink.classList.add('categorie__link');
        categorieLink.setAttribute('href', './cards.html')
        categorieLink.id = categorieName;
        categorie.append(categorieLink);

        fragment.append(categorie);
    })
    return fragment;
}





