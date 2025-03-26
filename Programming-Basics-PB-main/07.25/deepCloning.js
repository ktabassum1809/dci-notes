const template = {
    type: 'Car',
    brand: 'Toyota',
    model: 'Corolla',
    features: ['ABS', 'Airbags', 'Power Steering'],
    manufacturing: {
        year: 2005,
        country: 'Japan',
    },
}

const car1 = structuredClone(template)
const car2 = structuredClone(template)

// Mutating the original object

car1.manufacturing.greeting = "good morning"

template.model = 'Celica'
template.features = ['Cool', 'Fast', 'Pop-up headlights']
template.manufacturing.year = 1991

console.log("original", template) // The original has the changes
console.log("deep copy 1", car1) // The clones are independent
console.log("deep copy 2", car2) // The clones are independent

car1.manufacturing.year = 2020
car2.manufacturing.year = 2030

console.clear()
console.log("original", template) // The original has the changes
console.log("deep copy 1", car1) // The clones are independent
console.log("deep copy 2", car2) // The clones are independent