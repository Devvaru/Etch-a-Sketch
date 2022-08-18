const body = document.querySelectorAll("body");
const background = document.getElementById("background");

const container = document.createElement("div");
container.id = "container";
background.appendChild(container);

const header = document.createElement("div");
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

const defaultButton = document.createElement("button");
defaultButton.textContent = "Default";
defaultButton.className = "button";
defaultButton.id = "defaultButton";

const shadingButton = document.createElement("button");
shadingButton.textContent = "Toggle Shading";
shadingButton.className = "button";
shadingButton.id = "shadingButton";

const rainbowButton = document.createElement("button");
rainbowButton.textContent = "Toggle Rainbow";
rainbowButton.className = "button";
rainbowButton.id = "rainbowButton";

const randomButton = document.createElement("button");
randomButton.textContent = "Random";
randomButton.className = "button";
randomButton.id = "random";

//Append buttonsLeft
main.appendChild(buttonsLeft);
buttonsLeft.appendChild(defaultButton);
buttonsLeft.appendChild(shadingButton);
buttonsLeft.appendChild(rainbowButton);
buttonsLeft.appendChild(randomButton);


//Buttons on the right (column)
const buttonsRight = document.createElement("div");
buttonsRight.id = "buttonsRight";

const sliderContainer = document.createElement("div");
sliderContainer.className = "sliderContainer";
sliderContainer.id = "sliderContainer";

const slider = document.createElement("input");
slider.setAttribute("type", "range");
slider.min = "1";
slider.max = "100";
slider.value = "16";
slider.className = "slider";
slider.id = "slider";

const colorContainer = document.createElement("div");
colorContainer.className = "colorContainer";
colorContainer.id = "colorContainer";

const colorPicker = document.createElement("input");
colorPicker.setAttribute("type", "color");
colorPicker.className = "colorPicker";
colorPicker.id = "colorPicker";

const colorBox = document.createElement("button");
colorBox.className = "colorBox";
colorBox.id = "colorBox";

const eraseButton = document.createElement("button");
eraseButton.textContent = "Toggle Eraser";
eraseButton.className = "button";
eraseButton.id = "eraseButton";

const resetCanvas = document.createElement("button");
resetCanvas.textContent = "Reset";
resetCanvas.className = "button";
resetCanvas.id = "resetButton";


//Drawing area
const canvas = document.createElement("div");
canvas.id = "canvas";
canvas.className = "canvas canvas_bg";
main.appendChild(canvas);

let backgroundColor = "white";
let defaultColor = "black";
let brushColor = defaultColor;
let squared = 256;

function createPixels() { //creates pixels in canvas

    for (let i = 0; i < squared; i++) {

        const pixels = document.createElement("div");
        pixels.className = "pixels";
        canvas.appendChild(pixels);

        //starts drawing while mousedown
        canvas.addEventListener("mousedown", () => {

            pixels.onmousedown = () => {
                pixels.style.backgroundColor = brushColor;
            }
            pixels.onmousemove = () => {
                pixels.style.backgroundColor = brushColor;
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

//Resets canvas by removing pixels as children
function clearCanvas() {
    canvas.replaceChildren();
}

//Append buttonsRight, declared before canvas but appended after

main.appendChild(buttonsRight);
buttonsRight.appendChild(sliderContainer);
sliderContainer.appendChild(slider);
buttonsRight.appendChild(colorContainer);
colorContainer.appendChild(colorPicker);
buttonsRight.appendChild(eraseButton);
buttonsRight.appendChild(resetCanvas);

//Display numbers below slider
const defaultValue = document.getElementById("slider").value;
const sliderText = document.createElement("p");
sliderText.id = "sliderText";
sliderText.className = "sliderText"
sliderText.textContent = "Canvas size: " + defaultValue + " x " + defaultValue;
sliderContainer.appendChild(sliderText);


//Function for changing grid size
const allPixels = document.getElementsByClassName("pixels");

function newGrid() {
    const newValue = document.getElementById("slider").value;
    sliderText.textContent = "Canvas size: " + newValue + " x " + newValue;
    sliderContainer.appendChild(sliderText);
    clearCanvas();

    //used to create pixels
    squared = (newValue * newValue)
    console.log("newValue is = " + newValue);
    console.log("squared = " + squared);

    //calculate percentage for pixel size of canvas
    let gridPercent = (newValue * 100 / (newValue * newValue)) + "%";
    console.log("gridPercent is = " + gridPercent);

    //changes grid size in css
    createPixels();
    for (let i = 0; i < allPixels.length; i++) {
        allPixels[i].style.height = gridPercent;
        allPixels[i].style.width = gridPercent;
    };
};


//Button event listeners

//Slider listener
slider.addEventListener("change", () => {
    newGrid()
});

//Color listener
colorPicker.onchange = () => {
    brushColor = colorPicker.value;
}

//Eraser listener
eraseButton.onclick = () => {
    eraseButton.classList.toggle("active");
    if (eraseButton.classList.contains("active")) {
        brushColor = backgroundColor;
    } else brushColor = colorPicker.value; //change to current color
};

//Reset button listener
resetCanvas.onclick = () => {
    clearCanvas();
    newGrid();
};

// Default button listener
defaultButton.onclick = () => {
    brushColor = defaultColor;
};

//shading button listener -- unfinished
// shadingButton.onclick = () => {
//     shadingButton.classList.toggle("active");

//     if (shadingButton.classList.contains("active")) {
//         canvas.classList.add = "canvas_bg"
//         brushColor = "rgba(128,128,128, 0.1)"
//         //change color only by 10% opacity
//     };
// };

//Rainbow button listener
// rainbowButton.onclick = () => {
//     canvas.classList.remove("canvas_bg");
//     canvas.classList.add("canvas_rainbow");
//     brushColor = "transparent";
// };

rainbowButton.onclick = () => {
    rainbowButton.classList.toggle("active");
    console.log(brushColor);
    if (rainbowButton.classList.contains("active")) {
        canvas.classList.remove("canvas_bg");
        canvas.classList.add("canvas_rainbow");
        brushColor = "transparent";
        
    } else brushColor = colorPicker.value;
};