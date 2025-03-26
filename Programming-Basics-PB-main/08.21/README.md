# Classes day II

## last day:

- Classes JavaScript
- OOP (object oriented programming)

## today:

- Inheritance

### resources:


### exercises

- Ex1: [56-PB-class-extending-employee-manager](https://classroom.github.com/a/YHEOob-X)


## Theory - inheritance

- Animal
    - Mammal
        - Cat
        - Human
    - Bird
        - Flamingo
        - Penguin

- Each class is more specific than it's parent
    - `Animal` is generic, the basis for any kind of creature
        - All animals are multicellular
    
    - `Bird` is more specific kind of `Animal`
        - All Birds are Animals; they are multicellular
        - All Birds lay hard-shelled eggs

    - `Flamingo` is a more specific kind of `Bird`
        - All Flamingoes are Animals; they are multicellular
        - All Flamingoes are Birds; they lay hard-shelled eggs
        - All flamingoes are filter-feeders

    
- What we have seen in the [example with shapes](classInheritance.js) is called inheritance
    - Because child classes inherit the features of the parent
    - Our green square has a color
        - This is because it is a Shape and all Shapes have color
    - Our green square has the getArea function
        - This is because it is a Rectangle and all Rectangle have getArea


- There's a lot more to object-oriented programming than what we cover here
    - But time is limited
    - This concept is not that common in JS, we can't afford it more time
    - Now you have a solid basis; a grasp on the fundamentals
    - If you do find yourself looking at an OOP job
    - You can self-study to quickly learn more
        - To really embrace OOP, it might be best to learn a language like Java
        - OOP next: 
            - 1. interfaces 
            - 2. static methods 
            - 3. method overriding & overloading

**Wrap-up**
- Classes can "extend" other classes
- This is called inheritance
- If Cat extends Animal, Cat is a child class of Animal
- If Cat extends Animal, Animal is the parent class of Cat
