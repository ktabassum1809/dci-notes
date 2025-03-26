# Operators basic


## Task 1

Modify the code below so that the first and last character of the string are printed to the console

```javascript
const string = "hello world";
const firstCharacter = string[1];
const lastCharacter = string[string.length];

// don't change this
console.log(firstCharacter + lastCharacter)
```

Expected output:
```plaintext
hd
```

## Task 2 

Fix the code below so that you know how many biscuit each of your friends can eat


```javascript
const biscuits = 33;
const friends = 4;

const biscuitsPerPerson = Math.floor(???);

// don't change this
console.log(`Each person can eat ${biscuitsPerPerson} biscuits`);
```

Expected output:
```plaintext
Each friend can eat 8 biscuits
```


## Task 3

Modify the code below so that the variable `isCakeEnough` will be `true` or `false` if the slices of cake are enough or not for the number of friends

```javascript
const numberOfFriends = 4;
const slicesOfCake = 6;

const isCakeEnough = ???;

console.log(`Is there enough cake for everyone? ${isCakeEnough}`);
```

Expected output:
```plaintext
Is there enough cake for everyone? true
```


## Task 4

Four friends go to a cafe and order several things to eat and drink.
They decide to equally divide the total.

Fix the formula to calculate the amount each person should pay

```javascript
let coffeesTotal = 15;
let juicesTotal = 10;
let cakesTotal = 25;
let iceCreamTotal = 8;

let numberOfPeople = 4;

// change the code here
let totalPerPerson =
  coffeesTotal + cakesTotal + juicesTotal + iceCreamTotal / numberOfPeople;

console.log(`Each person should pay ${totalPerPerson}€`);
```

Expected output:
```plaintext
Each person should pay 14.5€
```


## Task 5

Uncomment and fix the code below by replacing `???` with the right operator so that every console.log() prints `true`


```javascript
const apples = 8;
const oranges = 6;

// console.log("1.", apples ??? 8);
// console.log("2.", apples ??? oranges);
// console.log("3.", oranges ??? "6");
// console.log("4.", oranges ??? apples);
// console.log("5.", apples ??? 10);
// console.log("6.", apples + oranges ??? 10);
// console.log("7.", apples - oranges ??? 2);
// console.log("8.", apples + oranges ??? 14);
// console.log("9.", apples + oranges ??? oranges + apples);
// console.log("10.", apples ??? oranges);
```


## Task 6
 
 Uncomment and fix the code below by replacing `???` with the right operator so that every console.log() prints `false`
 

```javascript
const apples = 8;
const oranges = 6;

// console.log("1.", apples ??? 8);
// console.log("2.", apples ??? oranges);
// console.log("3.", oranges ??? "6");
// console.log("4.", oranges ??? apples);
// console.log("5.", apples ??? 10);
// console.log("6.", apples + oranges ??? 10);
// console.log("7.", apples - oranges ??? 2);
// console.log("8.", apples + oranges ??? 14);
// console.log("9.", apples + oranges ??? oranges + apples);
// console.log("10.", apples ??? oranges);
```



## Task 7

You are feeling particularly generous and decide to first divide the biscuits equally among your friends. 
After doing that, you will get the remaining biscuits.

Fix the code below to calculate how many biscuits you and your friends can eat each.

```javascript
const biscuits = 34;
const friends = 4;

const biscuitsForFriends = Math.floor(???);
const biscuitsForMe = biscuits ??? friends;

// don't change this
console.log(`Each friend can eat ${biscuitsForFriends} biscuits`);
console.log(`The biscuits left for me are: ${biscuitsForMe}`);
```

Expected output:
```plaintext
Each friend can eat 8 biscuits
The biscuits left for me are: 2
```
