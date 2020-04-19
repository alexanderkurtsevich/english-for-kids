class Stats {
    constructor() {
        this.tHeads = [];
        this.statsObj = {};
        this.statsArray = [];

        this.rows = []
    }
    createTable() {
        this.statsObj = JSON.parse(localStorage.stats);
        this.sortEvent = this.sortEvent.bind(this)

        for (let key in this.statsObj) {
            this.statsArray.push(this.statsObj[key])
        }
        
        this.table = document.createElement('table');
        this.table.classList.add('stats__table', 'table');
        document.body.append(this.table);

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

    sortEvent(event){
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



}

let stats = new Stats();
stats.createTable()


