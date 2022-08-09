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
grayscaleButton.id = "greyScaleButton";
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

function createPixels() { //creates pixels in canvas

    for (let i = 0; i < sixteen; i++) {
       
        const pixels = document.createElement("div");
        pixels.className = "pixels";
        canvas.appendChild(pixels);

        //starts drawing while mousedown
        canvas.addEventListener("mousedown", () => {

            pixels.onmousedown = () => {
                pixels.style.backgroundColor = "gray";
            }
            pixels.onmousemove = () => {
                pixels.style.backgroundColor = "gray";
            }
        });
        
        //stops drawing on mouseup (if mouseup is within background)
        background.addEventListener("mouseup", () => {
            pixels.onmousemove = () => {
                pixels.style.backgroundColor = "null";
            }
        })
    };
};

createPixels()


//Buttons on the right (column)
const buttonsRight = document.createElement("div");
buttonsRight.id = "buttonsRight";
main.appendChild(buttonsRight);

const sliderContainer = document.createElement("div");
sliderContainer.className = "sliderContainer";
sliderContainer.id = "sliderContainer";
buttonsRight.appendChild(sliderContainer);

//Slider slider.value()
const slider = document.createElement("input");
slider.setAttribute("type", "range");
slider.min = "1";
slider.max = "100";
slider.value = "16";
slider.className = "slider";
slider.id = "slider";
sliderContainer.appendChild(slider);

const defaultValue = document.getElementById("slider").value;
const sliderText = document.createElement("p");
sliderText.id = "sliderText";
sliderText.className = "sliderText"
sliderText.textContent = "Grid size: " + defaultValue + " x " + defaultValue;
sliderContainer.appendChild(sliderText);

slider.addEventListener("change", () => {
    const newValue = document.getElementById("slider").value;
    sliderText.textContent = "Grid size: " + newValue + " x " + newValue;
    sliderContainer.appendChild(sliderText);
});

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