
// Interface to define point object
// Interfaces are only for declarations in TS
interface interfacePoint {
    x: number,
    y: number,
    draw: () => void
} 
let drawPoint = (point: interfacePoint) => {
    // do something
}

let getDistance = (pointA: interfacePoint, pointB: interfacePoint) => {
    // do something 
}

// Better way of designing a Point Object in TS

export class Point {
    // Access modifiers

    // OPTION 1 of ACCESS MODIFIERS
    // private x: number;
    // private y: number;

    // constructor(x?: number, y?: number) {
    //     this.x = x;
    //     this.y = y;
    // }

    // OPTION 2 of ACCESS MODIFIERS
    constructor(private _x?: number, private _y?: number) {}
    public draw() {
        console.log('x:' + this._x);
        console.log('y:' + this._y);
    }
    public getDistance(another: Point) {
        // do something
    }

    // method can be also declared as getX() 
    get x() {
        return this._x;
    }
    // method can be also declared as getY() 
    get y() {
        return this._y;
    }
    set x(value) {
        this._x  = value;
    }
    set y(value) {
        this._y = value;
    }
}

// Defining objects (instance of the class)
// let pointA = new Point();
// let pointB = new Point(1,2);

// pointA.draw();
// console.log("---");
// pointB.draw();

//Export module


