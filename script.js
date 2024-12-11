// Getting user input

const button = document.querySelector("#prompt");

let userInput;

button.addEventListener('click', () => {
    userInput = parseInt(prompt("Please input a grid number"));
});


// Creating a 16 x 16 grid of squares

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    const container = document.querySelector(".container");

    square.style.width = "100px";
    square.style.height = "100px";
    square.style.background = "white";
    square.style.border = "1px solid black";

    container.appendChild(square);
}

