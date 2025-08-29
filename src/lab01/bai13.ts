export abstract class Shape {
    abstract area(): number;
}

export class Square extends Shape {
    constructor(public side: number) {
        super();
    }

    area(): number {
        return this.side * this.side;
    }
}

export class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}