"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var shape = new Shape_1.Shape(2, 4);
console.log(shape.getInfo());
var circle = new Circle_1.Circle(2, 4, 7);
console.log(circle.getInfo());
var rectangle = new Rectangle_1.Rectangle(3, 6, 9, 12);
console.log(rectangle.getInfo());
