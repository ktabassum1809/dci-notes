# Title

## last day:

- Bracket notation to access object properties
- Conversion from object to array
- `for...in`

## today:

- Shallow cloning of objects
- Deep cloning of objects

### resources:

- [YT video deep copy vs shallow copy](https://www.youtube.com/watch?v=OIQk3uxnEPc)
- [delete property from an object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)

### exercises

- Ex1: [46-PB-object-shallow-cloning](https://classroom.github.com/a/qZNwb4EU)

## Theory 

**When to clone objects**

Example:

- We have a user object:

```js
const user = {
    id: 41,
    name: "Jean",
    lastname: "Valvaljean",
    email: "41@mail.example.org",
    username: "SchwipSchwapSulky",
    password: "beanburrito4",
}
```

- You have to send that user object from your code somewhere
    - You can't reveal the password
    - And you can't delete it from the original
- You probably want to clone the original and remove the password from the clone

Another example? [The pokemon evolution from yesterday](../07.24/recapObjectsPikachu.js). We can make a second object (pokemon) that is a copy of the original but changing some properties (like the name, or the attack). Like so, we are going to keep the original pokemon untouched.

### Concept: shallow vs deep cloning

**Shallow cloning**

- Creating a new object that is a copy of the original
- Each property in the original object is copied to the clone...
- However "shallow" cloning because only copies the top-level properties are independent from the original
- Syntax: `const cloneObject = {...originalObject}`

[shallow cloning live code](shallowCloning.js)

**Deep cloning**

- Creating a new object that is a copy of the original
- Each property in the original object is copied to the clone...
- Including any nested objects or arrays, everything is independent from the original
- Syntax: `clone cloneObject = structuredClone(originalObject)`

[deep cloning live code](deepCloning.js)

**Delete elements from object**

[Live code example### ](delete.js)

### Extra theory

Extra theory from line 25 in [shallow cloning file](shallowCloning.js):

- Objects are stored in the memory of your computer

- Variables hold references to these objects

- When you assign an object to a variable, you are storing a reference

- Multiple variables can hold references to the same object

- This happens to the the property "warranty"

- Both the original and the shallow clone refer to the same object in memory

- This is also the reason you can mutate the objects created using const

- The const keyword only prevents the variable from being reassigned

- The value in the variable is a reference to the object

- The object that is referenced can still be mutated

- This is also how comparison works

- When you compare two objects, you are comparing the references

- Not the values of the objects themselves

- Note: This does not happen with primitive values like numbers. Those are different