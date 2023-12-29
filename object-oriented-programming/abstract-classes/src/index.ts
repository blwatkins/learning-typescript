// Abstract Classes and Abstract Methods Notes

// abstract class definition
abstract class Shape {
    protected constructor(private _color: string) {
    }

    public get color(): string {
        return this._color;
    }

    // abstract method
    public abstract render(): void;
}

class Circle extends Shape {
    public constructor(private _radius: number,
                       _color: string) {
        super(_color);
    }

    public get radius(): number {
        return this._radius;
    }

    public override render(): void {
        console.log('We are rendering a Circle!');
    }
}

// let shape: Shape = new Shape('blue'); // this will cause a compiler error (Shape is an abstract class)
let circle: Circle = new Circle(50, 'red');
circle.render();
