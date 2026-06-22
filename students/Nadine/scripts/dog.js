import { ModelRotator } from "../../../scripts/model-rotator.js";

const dog = new ModelRotator('dog-3d');
const model = "/images/Duck.glb";
const scale = 2;
const position ={
    x:3,
    y:3,
    z:-5,
};
dog.load(model, scale);
dog.cameraPosition(position);

dog.loadFloor();

dog.animate();