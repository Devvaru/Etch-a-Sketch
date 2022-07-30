let sixteen = 256;

const div = document.createElement("div");
div.className = "pixel";
const container = document.getElementById("container");

for (let i = 0; i < sixteen; i++) {
 container.appendChild(div.cloneNode(true));
}
