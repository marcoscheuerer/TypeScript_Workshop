export class Shape {

    constructor(private _posX: number, private _posY: number) {
    }

    public set posX(value: number) {
        this._posX = value;
    }

    public get posX(): number {
        return this._posX;
    }

    public set poxY(value: number) {
        this._posY = value;
    }

    public get posY(): number {
        return this._posY;
    }

    public getInfo(): string {
        return `x=${this._posX}, y=${this._posY}`;
    }

}