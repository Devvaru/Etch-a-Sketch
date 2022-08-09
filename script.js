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

// let num = prompt("Size of grid?")
// let squared = (num * 100 / (num * num))
// let gridSize = document.getElementByClassName(pixels).style.height = squared;

let sixteen = 256; //temp until math implemented

for (let i = 0; i < sixteen; i++) {
    const pixels = document.createElement("div");
    pixels.className = "pixels";
    canvas.appendChild(pixels);

    canvas.addEventListener("mousedown", () => {

        pixels.onmousedown = () => {
            pixels.style.backgroundColor = "gray";
        }

        pixels.onmousemove = () => {
            pixels.style.backgroundColor = "gray";
        }
    });

    canvas.addEventListener("mouseup", () =>  {
        pixels.onmousemove = () => {
            pixels.style.backgroundColor = "null";
        }
    })
   
};

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
resetCanvas.className = "button";
resetCanvas.id = "resetButton";
buttonsRight.appendChild(resetCanvas);


// Drawing on the canvas
// pixels.addEventListener('click', function onClick(event) {
//     console.log(event.target)
//    event.target.style.backgroundColor = "coral";
// });

// let allPixels = document.getElementsByClassName("pixels");

// allPixels.forEach((pixel) => {
//     pixel.addEventListener("click", () => {
//         pixel.style.backgroundColor = "coral";
//     })
// })

// main.onclick = function(event) {
//     let canvas = event.target.closest("canvas");
//     if (!canvas) return;
//     if (!main.contains(canvas)) return;
//     highlight(canvas);

//     console.log(div)
// }


// function clickHandler (e) {
//     if (e.target.matches("pixels")) {
//         console.log (e.target.innerHTML);
//     }
// }

// const canvas_ = document.querySelector(".canvas");

// canvas.addEventListener("click", clickHandler, () => {
//     pixels.style.backgroundColor = "coral";
// });