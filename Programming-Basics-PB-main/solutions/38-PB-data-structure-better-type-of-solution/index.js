function betterTypeOf(value) {
  if (Array.isArray(value)) {
    return "array";
  } else {
    return typeof value;
  }
}

console.log(betterTypeOf(1)); // 'number'
console.log(betterTypeOf("hello")); // 'string'
console.log(betterTypeOf(true)); // 'boolean'
console.log(betterTypeOf("")); // 'string'
console.log(betterTypeOf([1, 2, 3])); // 'array'
console.log(betterTypeOf(["a", "b", "c"])); // 'array'

const person = {
    fullName: "Sandy Smith",
    age: 28
};

console.log(betterTypeOf(person)); // "object"
