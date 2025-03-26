// the 'reduce' method is used to reduce the array to a single value

const numsArr = [2,100,3,15] //=> 120

const initialValue = 0;

console.log(numsArr.reduce((accumulator, item)=>{ return accumulator + item} , initialValue))

//=================================

const shoppingBasket = [
    { product: 'candy', price: 1.09, quantity: 2 },
    { product: 'bread', price: 0.99, quantity: 1 },
    { product: 'tea', price: 3.99, quantity: 1 },
    { product: 'chips', price: 2.99, quantity: 1 },
    { product: 'peanuts', price: 1.99, quantity: 3 },
]
//calculating the total cost:
const totalCost = shoppingBasket.reduce((acc, item)=>{ return acc + (item.price * item.quantity) } , 0 )

console.log(totalCost)

//reduce the array to a string with first letter of each product:

const firstLetters = shoppingBasket.reduce((acc, item)=>{return acc + item.product[0] } , "" )
console.log(firstLetters)

//reduce the array to the most expensive item:

const mostExpensiveItem = shoppingBasket.reduce(
(acc, item)=>{ 
if(acc.price < item.price){
return item
}
if(acc.price >= item.price){
return acc
}
})

console.log(mostExpensiveItem)

//===============================================

//sorting the array by price:
shoppingBasket.sort((a,b)=> a.price - b.price )

//getting the most expensive item:
console.log(shoppingBasket.at(-1))

//==================

//sorting the array by product name:

shoppingBasket.sort((itemA,itemB)=> itemA.product.localeCompare(itemB.product) )

console.log(shoppingBasket)
