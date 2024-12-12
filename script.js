// Creating a 16 x 16 grid of squares
function startingGrid(squaresPerSide) {
    const container = document.querySelector(".container");
    container.textContent = ''; // Clear the previous grid

    for(let i = 0; i < squaresPerSide* squaresPerSide; i++) {
        const square = document.createElement("div");
    
        square.style.width = `${400 / squaresPerSide}px`;
        square.style.height = `${400 / squaresPerSide}px`;
        square.style.background = "white";
        square.style.border = "1px solid black";
    
        container.appendChild(square);
    
    
        const marker = document.querySelector("#marker");
    
        marker.addEventListener('click', () => {
            square.addEventListener('mouseover', () => {
                square.style.background = "red";
            });
        });
    
        const eraser = document.querySelector("#eraser");
    
        eraser.addEventListener('click', () => {
            square.addEventListener('mouseover', () => {
                square.style.background = "white";
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    startingGrid(16);
});


// Getting user input

const buttonGrid = document.querySelector("#prompt");

buttonGrid.addEventListener('click', () => {
    let userInput = Number(prompt('Please enter a number to change squares per side'));

    switch(true) {
        case (userInput < 0):
        case (userInput > 100):
        case (isNaN(userInput)):
        case (typeof userInput === "number" && !Number.isInteger(userInput)):
            alert("Please input a valid integer number from 0 to 100");
            break;
        case (userInput > 0 && userInput < 100 && Number.isInteger(userInput)):
            startingGrid(userInput);
    }
});

