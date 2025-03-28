/**
 * 
 * Write a `for` loop that goes from 0 until `max` (not included) with an increment
 * defined by the variable `step` and prints every number to the console. 
 * 
 * The values for `max` and `step` should be passed to the script from the command line
 * 
 * **IMPORTANT**: the input coming from the command line is always a string. When you
 * need numbers, remember to convert it
 * 
 * For example:
 * 
 * Count up to 10 with an increment of 2:
 * node task-2.js 10 2 
 * 
 * Expected output:
 * 
 * 0
 * 2
 * 4
 * 6
 * 8
 * 
 * Count up to 50 with an increment of 5:
 * node task-2.js 50 5
 * 
 * 0
 * 5
 * 10
 * 15
 * 20
 * 25
 * 30
 * 35
 * 40
 * 45
 * 
 */

 const max = parseInt(process.argv[2]);
 const step = parseInt(process.argv[3]);

 for (let i = 0; i < max; i += step) {
     console.log(i);
 }