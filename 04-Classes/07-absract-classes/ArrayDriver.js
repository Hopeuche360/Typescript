"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var circle = new Circle_1.Circle(2, 4, 7);
var rectangle = new Rectangle_1.Rectangle(3, 6, 9, 12);
var allShapes = [];
allShapes.push(circle, rectangle);
console.log(allShapes);
for (var _i = 0, allShapes_1 = allShapes; _i < allShapes_1.length; _i++) {
    var shape = allShapes_1[_i];
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}
