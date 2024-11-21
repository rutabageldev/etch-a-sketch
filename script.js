const clearButton = document.querySelector(".button-clear");
const gridButton = document.querySelector(".button-grid");
const gridContainer = document.querySelector(".grid-container");

clearButton.addEventListener("click", clearGrid);
gridButton.addEventListener("click", sizeGrid);

gridContainer.addEventListener("click", activateGridSquare);

let isMouseDown = false;

gridContainer.addEventListener("mousedown", () => {
    isMouseDown = true;
});

gridContainer.addEventListener("mouseup", () => {
    isMouseDown = false;
});

gridContainer.addEventListener("mouseleave", () => {
    isMouseDown = false;
});

gridContainer.addEventListener("mouseover", (event) => {
    if(isMouseDown && event.target.classList.contains("grid-square")) {
        activateGridSquare(event);
    }
});

createGrid(16);


function activateGridSquare(event) {
    if(event.target.classList.contains("grid-square")){
        event.target.style.backgroundColor = "#595856";
        console.log("You got me!");
    }
}

function createGrid(width) {
    gridContainer.innerHTML = "";

    for(let i = 0; i < width * width; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");

        gridSquare.style.width = `${100 / width}%`;
        gridSquare.style.height = `${100 / width}%`;

        gridContainer.appendChild(gridSquare);
    }    
}

function clearGrid() {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(square => {
        square.style.backgroundColor = "";
    });
}

function sizeGrid(e) {
    let valid = false;
    console.log(e);
    let input = prompt('Enter a grid width between 1 and 100');
    let width = parseInt(input, 10);
    console.log(width);
   
    while (!valid) {
        if(Number.isInteger(width)){
             if(width >= 1 && width <= 100) {
                console.log('Good!');
                valid = true;
            }
            else {
                console.log('Out of range...');
                input = prompt('Sorry, your entry is invalid. Please enter a grid width between 1 and 100');
                width = parseInt(input, 10);
            }
        } else {
            console.log('Not an integer');
            input = prompt('Sorry, your entry is invalid. Please enter a grid width between 1 and 100');
            width = parseInt(input, 10);
        }
    }

    const gridContainer = document.querySelector(".grid-container");
    
    createGrid(width);

}