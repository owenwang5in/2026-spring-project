/*
* HTML Elements
*/
const graffitiCanvas = document.getElementById("my-graffiti");
const surface = graffitiCanvas.getContext("2d");
const cleanButton = document.getElementById("clean");


/*
*  Graffiti Styles
*/
surface.lineWidth = 13;
surface.lineJoin = "round";
surface.strokeStyle = "red";




/*
* Shapes
*/

function shapes() {
    surface.rect(150, 200, 100, 100);
    surface.stroke();
    surface.beginPath();
    surface.moveTo(200,50);
    surface.lineTo(150,200);
    surface.moveTo(250, 50);
    surface.lineTo(350,50);
    surface.lineTo(300,300); 
    surface.stroke();

}

shapes();

/*
* Clean Up
*/

function cleanCanvas() {
    surface.clearRect(0,0,400,400);
    console.log("Clean");
}

cleanButton.addEventListener("click", cleanCanvas);