// Importing Modules
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing Modules');

// // Exports are hoisted at the top of the script.
// // hence first "Exporting Modules" will be printed in the console and then "Importing Modules" will be printed.

// // console.log(shippingCost);

// addToCart('bread', 5);

// console.log(price, tq);

// importing everything from a module
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 10);
// console.log(ShoppingCart.totalPrice);

// importing default exports
import add, { cart } from './shoppingCart.js';

add('banana', 4);
add('bread', 5);
add('apples', 4);

console.log(cart);

// imports are not copies of the exports they are instead like a live connection. which points to same location in the memory.

