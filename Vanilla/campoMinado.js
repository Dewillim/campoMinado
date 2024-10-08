let jogo = {};
const col = 9, lin = 9;
const bombN = 5;

Square = {
    row: 0,
    column: 0,
    state: "closed", //Pode ser: closed, opened, flagged
    hasMine: false,
    nearMines: 0, //Número de minas em volta
}

jogo.campo = (l, c) => {
    for (let i = 0; i < l; i++){
        jogo.campo[i] = [];
        for (j = 0; j < c; j++) {
            jogo.campo[i][j] = structuredClone(Square);
            jogo.campo[i][j].row = i;
            jogo.campo[i][j].column = j;
        }
    }
    return jogo.campo;
}

const campoMinado = jogo.campo(col, lin);

jogo.random = (campo, n) => {
    let bombs = 0;

    while (bombs < n){
        const randLin = Math.round(Math.random() * ( lin - 1 ));
        const randCol = Math.round(Math.random() * ( col - 1 ));

        if (campo[randLin][randCol].hasMine == false){
            campo[randLin][randCol].hasMine = true;
            bombs++;
        }
    }
}

jogo.random(campoMinado, bombN);

jogo.countNearMines = (campo, linI, colI) => {
    let proxBomb = 0;

    for (let i = -1; i < 2; i++){
        for (let j = -1; j < 2; j++){
            if (i == 0 && j == 0){
                j++;
            }
            const testLin = linI + i;
            const testCol = colI + j;

            if (testLin >= 0 && testLin < lin && testCol >= 0 && testCol < col){
                if (campo[testLin][testCol].hasMine) {
                    proxBomb++;
                }
            }
        }
    }

    campo[linI][colI].nearMines = proxBomb;
}

jogo.countTotalBombs = (campo) => {
    for (let i = 0; i < lin; i++){
        for (let j = 0; j < col; j++){
            jogo.countNearMines(campoMinado, i, j);
        }
    }
}

jogo.ver = (campo) => {
    for (let i = 0; i < lin; i++) {
        let linha = '';
        for (let j = 0; j < col; j++){
            if (campo[i][j].hasMine){
                linha += "[*]";
            } else {
                linha += "[ ]";
            }
        }
        console.log(linha);
    }
}

jogo.ver(campoMinado);
console.log("");
jogo.countTotalBombs(campoMinado);

// Juntando JS e HTML
const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
    block.addEventListener('click', (e) => {
        const row = e.target.getAttribute('row');
        const col = e.target.getAttribute('col');

        handleClick(row, col, e.target);
    });
});

function handleClick(row, col, e) {
    const block = campoMinado[row][col];

    if (block.state === 'closed') {
        block.state = 'opened';

        if (block.hasMine) {
            e.textContent = '💥';
            alert('Game Over!');
        } else {
            e.textContent = block.nearMines > 0 ? block.nearMines : ' ';
        }

        e.classList.add('open');
    }
}