import { cards } from './cards.js'
import { BurgerMenu } from './burgerMenu.js';
import { createHeader } from './header.js';
import { createStats } from './createStats.js'

class Stats {
    constructor() {
        this.tHeads = [];
        this.statsObj = {};
        this.statsArray = [];
        this.difficultWords = [];
        this.statsObj = JSON.parse(localStorage.stats);
        this.sortEvent = this.sortEvent.bind(this);

        this.rows = []
    }

    createTable() {
        let header = createHeader();
        document.body.append(header);

        this.burgerMenu = new BurgerMenu(cards[0]);
        this.burgerIcon = this.burgerMenu.createBurgerIcon();
        header.append(this.burgerIcon);
        this.burgerWindow = this.burgerMenu.createBurgerWindow();
        document.body.append(this.burgerWindow);


        for (let key in this.statsObj) {
            let difficult = this.statsObj[key]['errors'] - this.statsObj[key]['correct'];
            this.statsObj[key]['difficult'] = difficult;

            if (difficult > 0) {
                this.difficultWords.push(this.statsObj[key]);
            }

            this.statsArray.push(this.statsObj[key]);
        }
        this.difficultWords.sort((a, b) => b['difficult'] - a['difficult']);

        localStorage.setItem('difficultWords', JSON.stringify(this.difficultWords.slice(0, 8)));



        header.append(this.createRepeatWordsButton())
        header.append(this.createResetButton())

        let tableWrap = document.createElement('div');
        tableWrap.classList.add('table-wrap');
        document.body.append(tableWrap)

        this.table = document.createElement('table');
        this.table.classList.add('stats__table', 'table');
        tableWrap.append(this.table);

        let headRow = document.createElement('tr');
        headRow.classList.add('table__head-row');
        this.table.append(headRow);

        let tHeads = ['Word', 'Translation', 'Categorie', 'Train-Clicks', 'Correct', 'Errors'];
        tHeads.forEach((headWord) => {
            let tHead = document.createElement('th');
            tHead.classList.add('table__t-head');
            tHead.setAttribute('data-head', headWord.toLowerCase())
            tHead.innerHTML = headWord;
            this.tHeads.push(tHead);
            headRow.append(tHead);
        });
        this.tHeads[0].classList.add('sort-forward');
        this.sortFunction('word');
        this.createWordsRows();

        this.tHeads.forEach(tHead => {
            tHead.addEventListener('click', this.sortEvent)
        })

        let links = document.querySelectorAll('.burger-menu__link');
        links.forEach(elem => elem.classList.remove('burger-menu__link-active'));
        links[links.length - 1].classList.add('burger-menu__link-active')

    }

    createWordsRows() {
        this.statsArray.forEach((card) => {
            let row = document.createElement('tr');
            this.table.append(row);
            this.rows.push(row)

            row.innerHTML =
                `<tr>
                    <td>${card['word']}</td>
                    <td>${card['translation']}</td>
                    <td>${card['categorie']}</td>
                    <td>${card['train-clicks']}</td>
                    <td>${card['correct']}</td>
                    <td>${card['errors']}</td>
                </tr>`;
        })
    }

    sortEvent(event) {
        this.sortFunction(event.target.getAttribute('data-head'));
        if (event.target.matches('.sort-forward')) {
            event.target.classList.remove('sort-forward');
            event.target.classList.add('sort-reverse');
            this.statsArray.reverse()
            console.log('yes')
        }
        else if (event.target.matches('.sort-reverse')) {
            event.target.classList.add('sort-forward');
            event.target.classList.remove('sort-reverse');
        }
        else {
            this.tHeads.forEach(thead => thead.classList.remove('sort-forward', 'sort-reverse'));
            event.target.classList.add('sort-forward');
        }


        this.rows.forEach(row => row.remove());
        this.createWordsRows();
    }

    sortFunction(parameter) {
        this.statsArray.sort((a, b) => a[parameter] > b[parameter] ? 1 : -1);
    }

    createRepeatWordsButton() {
        this.repeatWordsButton = document.createElement('a');
        this.repeatWordsButton.classList.add('repeat-words-button');
        this.repeatWordsButton.innerHTML = "Repeat difficult words"
        this.repeatWordsButton.setAttribute('href', './statsTrain.html')
        return this.repeatWordsButton;
    }

    createResetButton() {
        this.resetButton = document.createElement('a');
        this.resetButton.classList.add('reset-button');
        this.resetButton.innerHTML = 'Reset';
        this.resetButton.setAttribute('href', './stats.html')

        this.resetButton.addEventListener('click', (event) => {
            localStorage.removeItem('stats');
            createStats()
        })

        return this.resetButton;

    }
}

let stats = new Stats();
stats.createTable()


