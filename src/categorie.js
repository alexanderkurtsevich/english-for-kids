import cards from './cards';

export default function createCategorie() {
  const fragment = document.createDocumentFragment();
  cards[0].forEach((categorieName, index) => {
    const categorie = document.createElement('div');
    categorie.classList.add('english__categorie', 'categorie');

    const categorieImage = document.createElement('img');
    categorieImage.classList.add('categorie__image');
    categorieImage.setAttribute('src', `./img/${cards[1][index][0].word}.jpg`);
    categorie.append(categorieImage);

    const categorieText = document.createElement('p');
    categorieText.classList.add('categorie__text');
    categorieText.innerHTML = categorieName;
    categorie.append(categorieText);

    const categorieLink = document.createElement('a');
    categorieLink.classList.add('categorie__link');
    categorieLink.setAttribute('href', './cards.html');
    categorieLink.id = categorieName;
    categorie.append(categorieLink);

    fragment.append(categorie);
  });
  return fragment;
}
