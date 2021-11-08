import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle"

let shape = new Shape(2, 4);
let circle = new Circle(2, 4, 7);
let rectangle = new Rectangle(3, 6, 9, 12);

let allShapes: Shape[] = [];
allShapes.push(shape, circle, rectangle);
console.log(allShapes);
for (let shape of allShapes) {
    console.log(shape.getInfo());
}


