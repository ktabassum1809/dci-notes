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

// const userCopy = structuredClone(user)
const carCopy = {...template}
delete carCopy.manufacturing.year

// delete user.password

console.log(template)
console.log(carCopy)
