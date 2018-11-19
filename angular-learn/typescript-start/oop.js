"use strict";
exports.__esModule = true;
var drawPoint = function (point) {
    // do something
};
var getDistance = function (pointA, pointB) {
    // do something 
};
// Better way of designing a Point Object in TS
var Point = /** @class */ (function () {
    // Access modifiers
    // OPTION 1 of ACCESS MODIFIERS
    // private x: number;
    // private y: number;
    // constructor(x?: number, y?: number) {
    //     this.x = x;
    //     this.y = y;
    // }
    // OPTION 2 of ACCESS MODIFIERS
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('x:' + this._x);
        console.log('y:' + this._y);
    };
    Point.prototype.getDistance = function (another) {
        // do something
    };
    Object.defineProperty(Point.prototype, "x", {
        // method can be also declared as getX() 
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        // method can be also declared as getY() 
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
// Defining objects (instance of the class)
// let pointA = new Point();
// let pointB = new Point(1,2);
// pointA.draw();
// console.log("---");
// pointB.draw();
//Export module
