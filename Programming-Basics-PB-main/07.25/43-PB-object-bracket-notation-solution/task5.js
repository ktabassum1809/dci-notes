const product = {
	type: "t-shirt",
	color: "green",
	brand: "Awesome Tees",
	price: 19.99,
}

const newKey = "material"
const newValue = "wool"


product[newKey] = newValue

const keys = Object.keys(product)

for (let i = 0; i < keys.length; i++){
    console.log(`${keys[i]}: ${product[keys[i]]}`)
}