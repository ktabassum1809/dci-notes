/**
 * Task 04
 * 
 * Complete the code so that the console.log() outputs always the
 * last item in the array, no matter how long is the array 
 * 
 * For example:
 * 
 * ["a", "b", "c", "d", "e"] => "e"
 * ["a", "b", "c", "d", "e", "f"] => "f"
 * ["a", "b", "c", "d", "e", "f", "g", "h", "i"] => "i"
 * 
 * The console.log() should be only one and work for every array
 */

const letters = ["a", "b", "c", "d", "e"];

console.log(letters[letters.length-1]);