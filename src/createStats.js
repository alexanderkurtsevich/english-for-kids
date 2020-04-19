import { cards } from './cards.js'

export function createStats() {
    if (localStorage.stats === undefined) {
        localStorage.setItem('stats', '{}');

        cards[1].forEach((subArray, index) => {

            subArray.forEach((card) => {
                let obj = {
                    'word': card.word,
                    'translation': card.translation,
                    'image': card.image,
                    'audioSrc': card.audioSrc,
                    'categorie': cards[0][index],
                    'train-clicks': 0,
                    'correct': 0,
                    'errors': 0,
                }
                let stats = JSON.parse(localStorage.stats);
                stats[card.word] = obj;

                localStorage.setItem('stats', JSON.stringify(stats))
            })
        })
    }
}
