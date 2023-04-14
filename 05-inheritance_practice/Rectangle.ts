import { Shape } from './Shape';

export class Rectangle extends Shape {

    constructor(posX: number, posY: number, private _width: number, private _height: number) {
        super(posX, posY);
    }

    public set width(value: number) {
        this._width = value;
    }

    public get width(): number {
        return this._width;
    }

    public set height(value: number) {
        this._height = value;
    }

    public get height(): number {
        return this._height;
    }

    public getInfo(): string {
        return super.getInfo() + `, width=${this._width}, height=${this._height}`;
    }

}