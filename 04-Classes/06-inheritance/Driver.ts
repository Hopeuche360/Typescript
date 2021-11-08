import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle"

let shape = new Shape(2, 4);
console.log(shape.getInfo());

let circle = new Circle(2, 4, 7);
console.log(circle.getInfo());

let rectangle = new Rectangle(3, 6, 9, 12);
console.log(rectangle.getInfo());
