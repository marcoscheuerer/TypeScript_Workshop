"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(5, 3, 80, 120);
// declare an array of shapes ... initially empty
var shapes = [];
// add the shapes to the array
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
shapes.push(new Rectangle_1.Rectangle(1, 2, 3, 4));
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var tmpShape = shapes_1[_i];
    console.log(tmpShape.getInfo());
}
