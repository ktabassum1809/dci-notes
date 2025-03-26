const sum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        const item = args[i];
        sum += item
    }
    return sum
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70