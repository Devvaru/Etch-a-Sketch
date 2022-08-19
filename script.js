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

const drawButton = document.createElement("button");
drawButton.textContent = "Draw";
drawButton.className = "button";
drawButton.id = "drawButton";

const shadingButton = document.createElement("button");
shadingButton.textContent = "Shading";
shadingButton.className = "button";
shadingButton.id = "shadingButton";

const randomButton = document.createElement("button");
randomButton.textContent = "Random";
randomButton.className = "button";
randomButton.id = "random";

//Append buttonsLeft
main.appendChild(buttonsLeft);
buttonsLeft.appendChild(drawButton);
buttonsLeft.appendChild(shadingButton);
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
eraseButton.textContent = "Erase";
eraseButton.className = "button";
eraseButton.id = "eraseButton";

const resetCanvas = document.createElement("button");
resetCanvas.textContent = "Reset";
resetCanvas.className = "button";
resetCanvas.id = "resetButton";


//Drawing area///////////////////////////////
const canvas = document.createElement("div");
canvas.id = "canvas";
canvas.className = "canvas";
main.appendChild(canvas);

let backgroundColor = "white";
let defaultColor = "black";
let brushColor = defaultColor;
let colorArr = [0, 0, 0, 0.1];
let grayscale = "rgba(" + colorArr.toString() + ")"
let squared = 256;

function createPixels() { //creates pixels in canvas

    for (let i = 0; i < squared; i++) {

        const pixels = document.createElement("div");
        pixels.className = "pixels";
        canvas.appendChild(pixels);

        function changeOpacity() {
            pixels.style.backgroundColor = "rgba(0, 0, 0, 0)";
            if (colorArr[3] < 1) {
                colorArr[3] = colorArr[3] + (1 / 10);
                grayscale = "rgba(" + colorArr.toString() + ")";
            };
        
            switch(pixels.style.backgroundColor) {
                case "rgba(0, 0, 0, 0)":
                    "rgba(0, 0, 0, 0.1)";
                    break;
                case "rgba(0, 0, 0, 0.1)":
                    "rgba(0, 0, 0, 0.2)";
                    break;
                case "rgba(0, 0, 0, 0.2)":
                    "rgba(0, 0, 0, 0.3)";
                    break;
                // default: "rgba(0, 0, 0, 0)";
            };
            console.log(pixels.style.backgroundColor);
            return pixels.style.backgroundColor;
        };

        //starts drawing while mousedown
        canvas.addEventListener("mousedown", () => {

            pixels.onmousedown = () => {

                if (randomButton.classList.contains("active")) {
                    pixels.style.backgroundColor = makeRainbow();
                } else if (shadingButton.classList.contains("active")) {
                   changeOpacity();
                } else
                    pixels.style.backgroundColor = brushColor;
            };
            pixels.onmousemove = () => {

                if (randomButton.classList.contains("active")) {
                    pixels.style.backgroundColor = makeRainbow();
                } else if (shadingButton.classList.contains("active")) {
                    changeOpacity();
                } else
                    pixels.style.backgroundColor = brushColor;
            };
        });

        //stops drawing on mouseup (if mouseup is within background)
        background.addEventListener("mouseup", () => {
            pixels.onmousemove = () => {
                pixels.style.backgroundColor = "null";
            };
        });
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


//Button event listeners__________________________________________
slider.addEventListener("change", () => {
    newGrid()
});

colorPicker.onchange = () => {
    shadingButton.classList.remove("active");
    randomButton.classList.remove("active");
    eraseButton.classList.remove("active");

    brushColor = colorPicker.value;
};

eraseButton.onclick = () => {
    eraseButton.classList.add("active");
    shadingButton.classList.remove("active");
    randomButton.classList.remove("active");

    brushColor = backgroundColor;
};

resetCanvas.onclick = () => {
    clearCanvas();
    newGrid();
};

drawButton.onclick = () => {
    shadingButton.classList.remove("active");
    randomButton.classList.remove("active");
    eraseButton.classList.remove("active");

    brushColor = colorPicker.value
};

shadingButton.onclick = () => {
    shadingButton.classList.add("active");
    randomButton.classList.remove("active");
    eraseButton.classList.remove("active");
};

function makeRainbow() {
    let rainbowColors = ["#B924FF", "#6DA0FF", "#6ECED2", "#87E598", "#F2E27C", "#FFBB55", "#FE8327", "#FF5839", "#FF0084"];

    let rainbow = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    return rainbow;
};

randomButton.onclick = () => {
    randomButton.classList.add("active");
    shadingButton.classList.remove("active");
    eraseButton.classList.remove("active");
};