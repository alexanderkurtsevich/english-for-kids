function stats() {
    let table = document.createElement('table');
    table.classList.add('stats__table', 'table');
    document.body.append(table);

    let headRow = document.createElement('tr');
    headRow.classList.add('table__head-row');
    table.append(headRow);

    let tHeads = ['Word', 'Translation', 'Categorie', 'Train-Clicks', 'Correct', 'Errors'];
    tHeads.forEach((headWord) => {
        let tHead = document.createElement('th');
        tHead.classList.add(`table__${headWord.toLowerCase()}`, 'table__t-head');
        tHead.innerHTML = headWord;
        headRow.append(tHead);
    });

    let statsObj = JSON.parse(localStorage.stats);


    for (let key in statsObj) {
        let row = document.createElement('tr');
        table.append(row);
    
        row.innerHTML =
            `<tr>
                <td>${statsObj[key]['word']}</td>
                <td>${statsObj[key]['translation']}</td>
                <td>${statsObj[key]['categorie']}</td>
                <td>${statsObj[key]['trainClicks']}</td>
                <td>${statsObj[key]['correct']}</td>
                <td>${statsObj[key]['errors']}</td>
            </tr>`;
    }
}

stats();

