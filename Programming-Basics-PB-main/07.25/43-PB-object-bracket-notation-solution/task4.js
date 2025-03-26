const product = {
	type: "t-shirt",
	brand: "Awesome Tees",
	price: 19.99,
	colors: ["green", "yellow", "pink"],
	sizes: ["S", "M", "L"],
	material: "organic cotton"
}

const keys = ["type", "brand", "id", "material", "details"]

//console.log(product.chocolate) //undefined

for (let i = 0; i < keys.length; i++) {
    if(product[keys[i]] === undefined) {
        console.log(`The product doesn't have the "${keys[i]}" property`)
    } else {
        console.log(`${keys[i]}: ${product[keys[i]]}`)
    }
}

// for (let i = 0; i < keys.length; i++) {
//     if(!product[keys[i]]) {
//         console.log(`The product doesn't have the "${keys[i]}" property`)
//     } else {
//         console.log(`${keys[i]}: ${product[keys[i]]}`)
//     }
// }

