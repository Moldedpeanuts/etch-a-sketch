// Creating a 16 x 16 grid of squares

for (let i = 0; i < 256; i++) {
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


// Getting user input

const buttonGrid = document.querySelector("#prompt");

let userInput;

buttonGrid.addEventListener('click', () => {
    userInput = parseInt(prompt("Please input a grid number"));
    if (userInput < 0 || userInput > 100) {
        userInput = parseInt(prompt("Please enter an integer between 0 and 100"));
    }
});