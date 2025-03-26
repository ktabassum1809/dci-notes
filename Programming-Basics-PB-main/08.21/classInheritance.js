class Shape {
    constructor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }
    getArea() {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color)
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

class LongRectangle extends Rectangle {
    constructor(color, width, height, square) {
        super(color, width, height)
        this.square = square
    }
}

const longRectangle1 = new LongRectangle("blue", 5, 10, false)


const circle1 = new Circle("red", 5)
console.log(circle1, circle1.getArea())

const rectangle = new Rectangle('blue', 5, 10)
console.log(rectangle, rectangle.getArea())


console.log(circle1 instanceof Shape) // to check the inheritance. Return boolean