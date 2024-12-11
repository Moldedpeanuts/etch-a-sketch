
const button = document.querySelector("#prompt");

button.addEventListener('click', () => {
    let userInput = parseInt(prompt("Please input a grid number"));
});


const square = document.createElement("div");
const container = document.querySelector(".container");

square.style.width = "100px";
square.style.height = "100px";
square.style.background = "white";
square.style.border = "1px solid black";

container.appendChild(square);
