import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle"

let circle = new Circle(2, 4, 7);
let rectangle = new Rectangle(3, 6, 9, 12);

let allShapes: Shape[] = [];
allShapes.push(circle, rectangle);
console.log(allShapes);
for (let shape of allShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea())
    console.log();
}


