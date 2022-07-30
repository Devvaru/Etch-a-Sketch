//to calculate grid size

// let squared = (button selection) ;
// let grid = (squared)
// let num (pixel width and height ) = (square * 100) / grid;

let sixteen = 256; //temp until math implemented
const div = document.createElement("div");
div.className = "pixel";
const container = document.getElementById("container");

for (let i = 0; i < sixteen; i++) {
 container.appendChild(div.cloneNode(true));
}
