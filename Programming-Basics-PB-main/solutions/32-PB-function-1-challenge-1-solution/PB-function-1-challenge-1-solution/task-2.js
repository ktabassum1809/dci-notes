/**
 * Task 2
 * 
 * Create a function that takes 2 numbers in input and returns the 
 * largest of the 2.
 * 
 * If the numbers are equal, it returns the first one. 
 */

function largestOf2(n1, n2) {
    if (n1 >= n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log(largestOf2(2, 5)); // 5
console.log(largestOf2(6, 3)); // 6
console.log(largestOf2(10, 10)); // 10
console.log(largestOf2(-1, -5)); // -1