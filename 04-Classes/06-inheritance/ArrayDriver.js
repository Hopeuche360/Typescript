"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var shape = new Shape_1.Shape(2, 4);
var circle = new Circle_1.Circle(2, 4, 7);
var rectangle = new Rectangle_1.Rectangle(3, 6, 9, 12);
var allShapes = [];
allShapes.push(shape, circle, rectangle);
console.log(allShapes);
for (var _i = 0, allShapes_1 = allShapes; _i < allShapes_1.length; _i++) {
    var shape_1 = allShapes_1[_i];
    console.log(shape_1.getInfo());
}
