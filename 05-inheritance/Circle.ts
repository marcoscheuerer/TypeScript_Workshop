import { Shape } from './Shape';

export class Circle extends Shape {

    constructor(valueX: number, valueY: number, private _radius: number) {
        super(valueX, valueY);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(value: number) {
        this._radius = value;
    }

    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}