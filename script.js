//to calculate grid size

// let squared = (button selection) ;
// let grid = (squared)
// let num (pixel width and height ) = (square * 100) / grid;

const body = document.querySelectorAll('body');
const background = document.getElementById('background');

const container = document.createElement('div');
container.id = "container";
background.appendChild(container);

const header = document.createElement('div');
header.id = "header";
container.appendChild(header);

const title = document.createElement("h1");
title.id = "title";
title.textContent = "Etch-A-Sketch";
header.appendChild(title);

const main = document.createElement("div");
main.id = "main"
container.appendChild(main);

//Buttons on the left (column)
const buttonsLeft = document.createElement("div");
buttonsLeft.id = "buttonsLeft";
main.appendChild(buttonsLeft);

const defaultButton = document.createElement("button");
defaultButton.textContent = "Default";
defaultButton.className = "button";
defaultButton.id = "defaultButton";
buttonsLeft.appendChild(defaultButton);

const grayscaleButton = document.createElement("button");
grayscaleButton.textContent = "Grayscale";
grayscaleButton.className = "button";
grayscaleButton.id  = "greyScaleButton";
buttonsLeft.appendChild(grayscaleButton);

const rainbowButton = document.createElement("button");
rainbowButton.textContent = "Rainbow";
rainbowButton.className = "button";
rainbowButton.id = "rainbowButton";
buttonsLeft.appendChild(rainbowButton);

const scratchButton = document.createElement("button");
scratchButton.textContent = "Scratch";
scratchButton.className = "button";
scratchButton.id = "scratch";
buttonsLeft.appendChild(scratchButton);

//Drawing area
const canvas = document.createElement("div");
canvas.id = "canvas";
main.appendChild(canvas);

const pixel = document.createElement("div");
pixel.className = "pixel";

//Buttons on the right (column)
const buttonsRight = document.createElement("div");
buttonsRight.id = "buttonsRight";
main.appendChild(buttonsRight);

const eraseButton = document.createElement("button");
eraseButton.textContent = "Eraser";
eraseButton.className = "button";
eraseButton.id = "eraseButton";
buttonsRight.appendChild(eraseButton);

const resetCanvas = document.createElement('button');
resetCanvas.textContent = "Reset";
resetCanvas.className = "button"
resetCanvas.id = "resetButton"
buttonsRight.appendChild(resetCanvas);

let sixteen = 256; //temp until math implemented

// let num = prompt("Size of grid?")
// let squared = (num * 100 / (num * num))
// let gridSize = document.getElementByClassName(pixel).style.height = squared;

for (let i = 0; i < sixteen; i++) {
 canvas.appendChild(pixel.cloneNode(true));
}
