//making a js object using the traditional 'object literal' way:
const myPet = {
    name: "Astra",
    type: "dog",
    age: 3,
    voice: "woff",
    greeting: function(){
        return `Hi I'm ${this.name} the ${this.type}`
    },
    speaking: function(){
        return this.voice + ' ' + this.voice;
    }

}

console.log(myPet)
console.log(myPet.greeting())


//making a class 'Pet' that will be used to generate pet objects later:
class Pet{ // class declaration with the keyword class followed by the class name
    constructor(nameParameter, typeParameter, ageParameter){// constructor: is a method to initialize the object's properties and it's invoked when we create a new instance
        this.name = nameParameter; // properties: variables that hold data for each instance of the class. They are defined within the class constructor
        this.type = typeParameter;
        this.age = ageParameter;
       
    }

    greeting(){// methods: functions defined within the class that operate on the class's properties. They can be called on instances of the class to perform actions
        return `Hi I'm ${this.name} the ${this.type}`
    }

    speaking(){
        if(this.type==="dog"){
         return "woff woff";
        }
         if(this.type==="cat"){
         return "mew mew";
        }
         return "not a dog or a cat";
    }
}

//making instances of the Pet class (pet objects):
const pet1 = new Pet("Abby","dog",4.5);
const pet2 = new Pet("Yogi","cat",7);

console.log(pet1)
console.log(pet2)
console.log(pet1.greeting())
console.log(pet2.greeting())
console.log(pet1.speaking())
console.log(pet2.speaking())
