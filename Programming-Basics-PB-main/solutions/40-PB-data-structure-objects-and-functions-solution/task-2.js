// Task 2

const vehicle1 = {
    type: "car",
    color: "green",
    brand: "Ford",
    mileage: 73200
};

const vehicle2 = {
    type: "van",
    color: "white",
    brand: "Volvo",
    mileage: 58000
};

const vehicle3 = {
    type: "motorcycle",
    color: "yellow",
    brand: "Honda",
    mileage: 28000
};

// Task 2.1

function needsRevision(vehicle) {
    if (vehicle.mileage > 60000) {
        return true;
    } else {
        return false;
    }
}

console.log(`Does the ${vehicle1.color} ${vehicle1.brand} ${vehicle1.type} need a revision?`, needsRevision(vehicle1));
console.log(`Does the ${vehicle2.color} ${vehicle2.brand} ${vehicle2.type} need a revision?`, needsRevision(vehicle2));
console.log(`Does the ${vehicle3.color} ${vehicle3.brand} ${vehicle3.type} need a revision?`, needsRevision(vehicle3));
