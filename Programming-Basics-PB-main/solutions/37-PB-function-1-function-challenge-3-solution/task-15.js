function countByColor(products) {
    const result = [0, 0, 0];
    for (let i = 0; i < products.length; i++) {
        if (products[i].toLowerCase().startsWith("red")) {
            result[0]++;
        } else if(products[i].toLowerCase().startsWith("yellow") ) {
            result[1]++;
        } else if (products[i].toLowerCase().startsWith("green")) {
            result[2]++;
        }
    }
    return result;
}
console.log(countByColor(["Red pen", "Yellow shirt"])); // [1, 1, 0]
console.log(countByColor(["Red pen", "Yellow shirt", "Green salad"])); // [1, 1, 1]
console.log(countByColor(["Pink hair", "Blue sky"])); // [0, 0, 0]
console.log(countByColor(["Yellow table", "Yellow piano", "Green guitar"])); // [0, 2, 1]