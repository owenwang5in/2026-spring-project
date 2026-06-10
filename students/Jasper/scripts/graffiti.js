/*
 * HTML elements
 */
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const colorInput = document.getElementById("color-input");
const sizeInput = document.getElementById("size-input");
const toolSelect = document.getElementById("tool-select");
console.log(toolSelect);

/*
 * Graffiti style.
 */
surface.lineWidth = 13;
surface.lineJoin = "round";

changeColor()
function changeColor() {
  surface.strokeStyle = colorInput.value;
  console.log(colorInput.value);
}

changeSize()
function changeSize() {
  surface.lineWidth = sizeInput.value;
  console.log(sizeInput.value);
}

let tool;
function changeTool() {
  tool = toolSelect.value;
  console.log(tool);
}
changeTool();
colorInput.addEventListener("change", changeColor);
sizeInput.addEventListener("change", changeSize);
toolSelect.addEventListener("change", changeTool);

/*
 * Shapes
 */
function shapes() {
  surface.rect(150, 200, 100, 100);
  surface.stroke();

  surface.beginPath();
  surface.moveTo(200, 50);
  surface.lineTo(150, 200);
  // Add a 7.
  surface.moveTo(250, 50);
  surface.lineTo(350, 50);
  surface.moveTo(350, 50);
  surface.lineTo(270, 300);

  surface.closePath();
  surface.stroke();
}
shapes();

/*
 * Clean up
 */
function cleanCanvas() {
  surface.clearRect(0, 0, 400, 400);
}
oldX = 0
oldY = 0
function graffiti(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x, y, event.buttons)

  if (event.buttons === 1) {
    if (tool === "eraser") {
      width = sizeInput.value;
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