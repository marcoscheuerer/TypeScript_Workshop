import { Shape } from './Shape';

export class Circle extends Shape {

    constructor(posX: number, posY: number, private _radius: number) {
        super(posX, posY);
    }

    public set radius(value: number) {
        this._radius = value;
    }

    public get radius(): number {
        return this._radius;
    }

    public getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }

}