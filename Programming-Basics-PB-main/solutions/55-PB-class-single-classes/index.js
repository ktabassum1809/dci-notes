// Task 1

class Product {
    constructor(type, color, price) {
        this.type = type
        this.color = color
        this.price = price
    }
    description() {
        return `A ${this.color} ${this.type}, ${this.price}€`
        
    }
}

const shirt = new Product("shirt", "red", 9.99)

console.log(shirt.description()); // A red shirt, 9.99€

 

// Task 2

class Rectangle {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }

    perimeter() {
        return (this.width + this.height) * 2
    }

    area() {
        return `${this.width * this.height} cm²`
    }

    description() {
        return `This is a ${this.color} rectangle ${this.width}cm wide and ${this.height}cm high`
    }
}

const rectangle1 = new Rectangle(3, 4, "green");

console.log(rectangle1.perimeter()); // 14
console.log(rectangle1.area()); // 12
console.log(rectangle1.description()); // This is a green rectangle 3cm wide and 4cm high

 

// Task 3

class Person {
    constructor(firstName, lastName, age, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.city = city
    }

    introduce() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I live in ${this.city}`
    }
    
    greet(person) {
        const greetings = ["Hey", "Hi", "Yo", "Good morning", "Hello", "Hallo"]
        const randomGreeting = greetings[Math.floor(Math.random()*greetings.length)]

        return `${randomGreeting} ${person}, how are you?`
    }
}

const person1 = new Person ("Eloy", "Rojano Vargas", 32, "Berlin")

console.log(person1.greet("Thong"))

// Task 4

 


class Song {
    constructor(title, artist, duration) {
        this.title = title
        this.artist = artist
        this.duration = duration
    }

    info() {
        return `${this.title} by ${this.artist} (${this.duration})`
    }

    /*durationInSeconds() {
        const [minutes,seconds] = this.duration.split(":")

        return parseInt(minutes)*60 + parseInt(seconds)
    }*/

    /*durationInSeconds() {
        return ((parseFloat(this.duration))*60) + parseInt(this.duration.slice(-2))
    }*/

    durationInSeconds() {
        const splitDuration = this.duration.split(":");
        console.log(splitDuration)
        const minuteInSeconds = parseInt(splitDuration[0]) * 60;
        const seconds = parseInt(splitDuration[1]);
        return minuteInSeconds + seconds;
      }
}


const song = new Song("Last Nite", "The Strokes", "23:13");
console.log(song.durationInSeconds())

// Task 5


class HTMLElement {
    constructor(element, id = "", cssClassList = []) {
        this.element = element
        this.id = id
        this.cssClassList = cssClassList
    }

    addCSSClass(className) {
        if(!this.cssClassList.includes(className)) {
            this.cssClassList.push(className)
        }
        return this.cssClassList
    }

    removeCSSClass(className) { 

        this.cssClassList = this.cssClassList.filter(item => item !== className)
        return this.cssClassList
    }

    showHTML() {
        return `<${this.element} id="${this.id}" class="${this.cssClassList.join(" ")}">...</${this.element}>`
    }
}
