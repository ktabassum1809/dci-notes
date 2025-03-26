/**
 * Task 3
 *
 * Modify the code below so that the variable `isCakeEnough` will be `true` or `false`
 * if the slices of cake are enough or not for the number of friends
 *
 * Expected output:
 * Is there enough cake for everyone? true
 */

const numberOfFriends = 4;
const slicesOfCake = 6;

const isCakeEnough = slicesOfCake >= numberOfFriends;

console.log(`Is there enough cake for everyone? ${isCakeEnough}`);
