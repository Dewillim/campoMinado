type stateType = "closed" | "opened" | "flagged";

interface Square {
    row: number,
    column: number,
    state: stateType, //Pode ser: closed, opened, flagged
    hasMine: boolean,
    nearMines: number, //Número de minas em volta
}

let jogo = {};
const col: number = 5, lin: number = 5;
const bombN: number = 10;

jogo.campo = (l: number, c: number): Square[][] => {
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

const campoMinado: Square[][] = jogo.campo(col, lin);

jogo.random = (campo: Square[][], n: number): void => {
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

jogo.countNearMines = (campo: Square[][], linI: number, colI: number) => {
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

jogo.countTotalBombs = (campo: Square[][]): void => {
    for (let i = 0; i < lin; i++){
        for (let j = 0; j < col; j++){
            jogo.countNearMines(campoMinado, i, j);
        }
    }
}

jogo.ver = (campo: Square[][]): void => {
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