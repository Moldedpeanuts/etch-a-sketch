// Creating a 16 x 16 grid of squares

const startingGrid = () => {
    for(let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        const container = document.querySelector(".container");
    
        square.style.width = "20px";
        square.style.height = "20px";
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
};

document.addEventListener("DOMContentLoaded", () => {
    startingGrid();
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
    }
});