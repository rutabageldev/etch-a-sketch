/* 
function createGrid(width, height)
    squareWidth = gridWidth / width
    squareHeight = gridHeight / height
    createSquares(height * width) => create DOM elements
*/

function createGrid(width, height) {
    let totalSquares = width * height;
    const gridSquare = document.createElement("div");
    gridSquare.classList.add(grid-square);
}