const product = {
    name: 'Laptop',
    price: 200,
    features: ['8GB RAM', '512GB SSD', '8th gen Intel Core i3 CPU'],
    warranty: {
        duration: 12,
        type: 'months',
    },
}

const clone = {...product}

product.name = 'Phone'
clone.name = 'Desktop'

console.log("original", product)
console.log("clone", clone)

product.warranty.duration = 24

console.log("original", product)
console.log("clone", clone)


// You can check theory about that in the readme file
console.log(product === clone) // false
console.log(product.warranty === clone.warranty) // true