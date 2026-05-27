/*Html elements*/



const graffitiCanvas = document.getElementById('my-graffiti');

const surface = graffitiCanvas.getContext("2d")

const cleanButton = document.getElementById("clean")

console.log(graffitiCanvas);

/*sty;e*/
surface.lineWidth = 13;
surface.lineJoin = "round";
surface.strokeStyle = "red";
surface.beginPath();
surface.moveTo(200, 50);
surface.lineTo(150, 200);
surface.closePath();
surface.stroke();

surface.moveTo(250, 50);
surface.lineTo(350, 50);
surface.moveTo(350, 50);
surface.lineTo(270, 300);


/*shapes*/

function shapes (){
    surface.rect(150, 200, 100 ,100);
    surface.stroke();

}
shapes();

/*Clean*/
function Clean(){
    console.log('Clean');
surface.clearRect(0, 0, 400, 400);
}
cleanButton.addEventListener("click", Clean);