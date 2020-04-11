import { createCategorie } from './categorie.js';

const categoriesContainer = document.createElement('div');
categoriesContainer.classList.add('english__categories-container');
document.body.append(categoriesContainer);

categoriesContainer.append(createCategorie());

categoriesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('categorie__link')) {
        localStorage.lastClick = event.target.id
    } 
})
