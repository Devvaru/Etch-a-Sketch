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

const resetCanvas = document.createElement('button');
resetCanvas.textContent = "Reset Canvas";
resetCanvas.className = "button"
resetCanvas.id = "resetButton"
buttonsLeft.appendChild(resetCanvas);

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

const greyScale = document.createElement("button");
greyScale.textContent = "Greyscale";
greyScale.className = "button";
greyScale.id  = "greyScaleButton";
buttonsRight.appendChild(greyScale);



let sixteen = 256; //temp until math implemented

// let num = prompt("Size of grid?")
// let squared = (num * 100 / (num * num))
// let gridSize = document.getElementByClassName(pixel).style.height = squared;

for (let i = 0; i < sixteen; i++) {
 canvas.appendChild(pixel.cloneNode(true));
}
