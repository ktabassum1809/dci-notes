const average = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        const item = args[i];
        sum += item
    }
    return sum/args.length
};

console.log(average(0)); // -> 0
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14