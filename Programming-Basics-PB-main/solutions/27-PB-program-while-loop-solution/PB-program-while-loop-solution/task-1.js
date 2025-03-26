/**
 * Task 1
 */

const items = ["pen", "chair", "cup", "laptop", "glass", "book"];

while (items.length > 3) {
    const removedItem = items.pop();
    console.log(`The item ${removedItem} was removed from the list.`)
}

console.log("\nRemaining items:", items);