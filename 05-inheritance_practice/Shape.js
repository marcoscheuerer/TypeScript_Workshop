"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(_posX, _posY) {
        this._posX = _posX;
        this._posY = _posY;
    }
    Object.defineProperty(Shape.prototype, "posX", {
        get: function () {
            return this._posX;
        },
        set: function (value) {
            this._posX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "poxY", {
        set: function (value) {
            this._posY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "posY", {
        get: function () {
            return this._posY;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return "x=" + this._posX + ", y=" + this._posY;
    };
    return Shape;
}());
exports.Shape = Shape;
