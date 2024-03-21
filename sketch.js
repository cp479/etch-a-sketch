let gridSize = 16;

const boardCont = document.querySelector('#board-cont');
const newGridBtn = document.querySelector('#new-board');

createGrid();

newGridBtn.addEventListener('click', function() {
    while (boardCont.firstChild){
        boardCont.removeChild(boardCont.lastChild):
    }

    gridSize = prompt("Please enter a number between 1 and 100.");
    while (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
        gridSize = prompt("Invalid entry. Please enter a number between 1 and 100.");
    }
    createGrid();
});