const playerDiv = document.querySelector('.player');
const resetDiv = document.querySelector('.reset');
const gridDivs = document.querySelectorAll('.grid');

let xIsNext = true;
let isGameRunning = true;


const resetFun = (e) => {
    xIsNext = true;
    isGameRunning = true;
    playerDiv.innerHTML = `<div>X is next</div>`;
    for (const gridDiv of gridDivs) {
        gridDiv.classList.remove('X');
        gridDiv.classList.remove('O');

    }

};

const winnerPerson = (winner) => {
    isGameRunning = false;
    if (winner == 'X') {
        playerDiv.innerHTML = `<div>${winner} is the winner</div>`;
    }
    else {
        playerDiv.innerHTML = `<span>${winner} is the winner</span>`;
    }
};

const checkGameStatus = (classList) => {
    const pos1 = gridDivs[0].classList[1];
    const pos2 = gridDivs[1].classList[1];
    const pos3 = gridDivs[2].classList[1];
    const pos4 = gridDivs[3].classList[1];
    const pos5 = gridDivs[4].classList[1];
    const pos6 = gridDivs[5].classList[1];
    const pos7 = gridDivs[6].classList[1];
    const pos8 = gridDivs[7].classList[1];
    const pos9 = gridDivs[8].classList[1];

    if (pos1 && pos1 === pos2 && pos3 === pos1) {
        winnerPerson(pos1);

    }
    else if (pos1 && pos1 === pos4 && pos1 === pos7) {
        winnerPerson(pos1);
    }
    else if (pos1 && pos1 === pos5 && pos1 === pos9) {
        winnerPerson(pos1);
    }
    else if (pos2 && pos2 === pos5 && pos2 === pos8) {
        winnerPerson(pos2);
    }
    else if (pos4 && pos4 === pos5 && pos4 === pos6) {
        winnerPerson(pos4);
    }
    else if (pos3 && pos3 === pos5 && pos3 === pos7) {
        winnerPerson(pos3);
    }
    else if (pos7 && pos7 === pos8 && pos7 === pos9) {
        winnerPerson(pos7);
    }
    else if (pos3 && pos3 === pos6 && pos3 === pos9) {
        winnerPerson(pos3);
    }
    else if (pos1 && pos2 && pos3 && pos4 && pos5 && pos6 && pos7 && pos8 && pos9) {
        isGameRunning = false;
        playerDiv.innerHTML = `<div>Game is tie</div>`;
    }
    else {
        if (classList[1] === 'X') {
            playerDiv.innerHTML = `<span>O is next</span>`;
        }
        else {
            playerDiv.innerHTML = `<div>X is next</div>`;
        }

    }

};

const gridClick = (e) => {
    const classList = e.target.classList;
    if (!isGameRunning || classList[1] === 'X' || classList[1] === 'O') {
        return;
    }

    if (xIsNext === true) {
        classList.add('X');
        xIsNext = !xIsNext;
    }
    else {
        classList.add('O');
        xIsNext = !xIsNext;
    }


    checkGameStatus(classList);
};

for (const gridDiv of gridDivs) {
    //  if (isGameRunning) {
    gridDiv.addEventListener('click', gridClick);
    //  }
}

resetDiv.addEventListener('click', resetFun);