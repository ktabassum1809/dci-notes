/**
 * Task 3 
 * 
 * Use a loop to create a string with only the even numbers between 0 to 9, then print it to
 * the console
 * 
 * Expected output:
 * 02468 
 */


 let result = "";

 for (let i = 0; i < 10; i +=2) {
     result += i;
 }
 
 console.log(result);