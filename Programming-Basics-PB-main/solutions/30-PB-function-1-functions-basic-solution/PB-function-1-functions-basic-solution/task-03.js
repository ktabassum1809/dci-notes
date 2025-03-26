/** 
 * Task 03
 * 
 * Complete the code below so that the right result is shown in the console
*/

function getNumbersUntil(number) {
    const list = [];
    for (let i = 0; i < number; i++) {
        list.push(i);
    }
    return list;
}

const list1 = getNumbersUntil(10);
const list2 = getNumbersUntil(8);
const list3 = getNumbersUntil(20);

console.log(list1); // [0, 1, 2, 3, ..., 9]
console.log(list2); // [0, 1, 2, 3, ..., 7]
console.log(list3); // [0, 1, 2, 3, ..., 19]