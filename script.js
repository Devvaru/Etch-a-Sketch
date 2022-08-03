//to calculate grid size

// let squared = (button selection) ;
// let grid = (squared)
// let num (pixel width and height ) = (square * 100) / grid;

const body = document.querySelectorAll('body');

const resetCanvas = document.createElement('button');
resetCanvas.textContent = "Reset Canvas";
resetCanvas.className = "button"
resetCanvas.id = "resetButton"
document.body.appendChild(resetCanvas);

let sixteen = 256; //temp until math implemented

const container = document.getElementById("container");
const div = document.createElement("div");
div.className = "pixel";

let num = prompt("Size of grid?")
let squared = (num * 100 / (num * num))
let gridSize = document.getElementByClassName(pixel).style.height = squared;

for (let i = 0; i < sixteen; i++) {
 container.appendChild(div.cloneNode(true));
}
