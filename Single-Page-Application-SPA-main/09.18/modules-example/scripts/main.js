// NAMED imports
import { fruit1, fruit2, fruit3, fruit4 } from "./fruits.js" // curly braces to select the named imports
import * as veg from "./vegetables.js" 


// importing DEFAULT
import bread from "./bread.js"// no curly braces needed


console.log(fruit1, fruit2, fruit3, fruit4)

console.log(veg.veg1, veg.veg2, veg.veg3)

console.log(bread)

console.log(veg) /*  Expected output 
{
    veg1: 'lettuce',
    veg2: 'cucumber',
    veg3: 'zucchini'
  } */

console.log(typeof veg) // object
