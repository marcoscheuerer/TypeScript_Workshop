import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(5, 3, 80, 120);

// declare an array of shapes ... initially empty
let shapes: Shape[] = [];

// add the shapes to the array
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

// add an anonymous object to the array
shapes.push(new Rectangle(1,2,3,4));

// Simplified for-loop (foreach-loop)
for (let tmpShape of shapes) {
    console.log(tmpShape.getInfo());
}
