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

const grayscaleButton = document.createElement("button");
grayscaleButton.textContent = "Grayscale";
grayscaleButton.className = "button";
grayscaleButton.id = "greyScaleButton";

const rainbowButton = document.createElement("button");
rainbowButton.textContent = "Rainbow";
rainbowButton.className = "button";
rainbowButton.id = "rainbowButton";

const scratchButton = document.createElement("button");
scratchButton.textContent = "Scratch";
scratchButton.className = "button";
scratchButton.id = "scratch";

//Append buttonsLeft
main.appendChild(buttonsLeft);
buttonsLeft.appendChild(defaultButton);
buttonsLeft.appendChild(grayscaleButton);
buttonsLeft.appendChild(rainbowButton);
buttonsLeft.appendChild(scratchButton);


//Buttons on the right (column)
const buttonsRight = document.createElement("div");
buttonsRight.id = "buttonsRight";

const sliderContainer = document.createElement("div");
sliderContainer.className = "sliderContainer";
sliderContainer.id = "sliderContainer";

//Slider slider.value()
const slider = document.createElement("input");
slider.setAttribute("type", "range");
slider.min = "1";
slider.max = "100";
slider.value = "16";
slider.className = "slider";
slider.id = "slider";

const eraseButton = document.createElement("button");
eraseButton.textContent = "Eraser";
eraseButton.className = "button";
eraseButton.id = "eraseButton";

const resetCanvas = document.createElement("button");
resetCanvas.textContent = "Reset";
resetCanvas.className = "button";
resetCanvas.id = "resetButton";

//Drawing area
const canvas = document.createElement("div");
canvas.id = "canvas";
main.appendChild(canvas);

let squared = 256;

function createPixels() { //creates pixels in canvas

    for (let i = 0; i < squared; i++) {
       
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

        // document.getElementsByClassName("pixels")[i].style.height = gridPercent;
    };
};

createPixels()

//Resets canvas by removing pixels as children
function clearCanvas() {
    canvas.replaceChildren();
}

//Append buttonsRight, declared earlier than canvas but appended after
main.appendChild(buttonsRight);
buttonsRight.appendChild(sliderContainer);
sliderContainer.appendChild(slider);
buttonsRight.appendChild(eraseButton);
buttonsRight.appendChild(resetCanvas);

//Display numbers below slider
const defaultValue = document.getElementById("slider").value;
const sliderText = document.createElement("p");
sliderText.id = "sliderText";
sliderText.className = "sliderText"
sliderText.textContent = "Grid size: " + defaultValue + " x " + defaultValue;
sliderContainer.appendChild(sliderText);


//Function for changing grid size
const allPixels  = document.getElementsByClassName("pixels");

function newGrid() {
    const newValue = document.getElementById("slider").value;
    sliderText.textContent = "Grid size: " + newValue + " x " + newValue;
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

//Slider listener
slider.addEventListener("change", () => {
    newGrid()
});

//Reset button listener
resetCanvas.onclick = () => {
    clearCanvas();
    newGrid();
};