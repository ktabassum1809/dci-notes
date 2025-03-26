let person1Name = "Finn";
let person1Age = 18;
let person2Name = "Fiona";
let person2Age = 23;

if (person1Age < person2Age) {
  console.log(`${person1Name} is the youngest person.`);
} else if (person2Age < person1Age) {
  console.log(`${person2Name} is the youngest person.`);
} else {
  console.log(`${person1Name} and ${person2Name} have the same age.`);
}
