/*
 *HTML elements
 */
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("size-input");
const toolSelect = document.getElementById("tool-select");
console.log(toolSelect);

/*
 *Graffiti style.
 */
surface.lineJoin = "round";

function changeColor() {
    surface.strokeStyle = colorInput.value;
}
changeColor();
colorInput.addEventListener("change", changeColor);

function changeSize() {
    surface.lineWidth = sizeInput.value;
}
changeSize();
sizeInput.addEventListener("change", changeSize);

let tool;

function changeTool() {
    tool = toolSelect.value;
    console.log(tool);
}
changeTool();
toolSelect.addEventListener("change", changeTool);


/*
 * Graffiti
 */

let oldX = 0;
let oldY = 0;


function graffiti(event) {
    console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y, event.buttons);


    if (event.buttons > 0) {
        if (tool === "eraser") {
            const width = sizeInput.value;
            surface.clearRect(x - (width / 2), y - (width / 2), width, width);
        } else {
            surface.beginPath();
            surface.moveTo(oldX, oldY);
            surface.lineTo(x, y);
            surface.closePath();
            surface.stroke();
        }
    }
    oldX = x;
    oldY = y;


}
graffitiCanvas.addEventListener("mousemove", graffiti);