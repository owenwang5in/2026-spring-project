import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "/images/Duck.glb";
const scale = 2;
const position = {
    x: 6,
    y: 5,
    z: -5,
};

//dog.loadCube();
dog.cameraPosition(position);
dog.loadFloor();   
dog.load(model, scale);


dog.animate();
