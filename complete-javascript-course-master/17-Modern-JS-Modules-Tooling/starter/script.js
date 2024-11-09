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
// import add, { addToCart, cart } from './shoppingCart.js';
/*
add('banana', 4);
add('bread', 5);
add('apples', 4);

console.log(cart);

// imports are not copies of the exports they are instead like a live connection. which points to same location in the memory.

// TOP LEVEL AWAIT: now we can use await keyword outside of an async function atleast in the modules.

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// const data = await res.json();
// console.log(data);

// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();
console.log(lastPost);

// Note: Use top level await with care, it can block the code execution of an entire module.

*/

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} of ${product} ordered from supplier`);
  };

  return {
    cart,
    addToCart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('bread', 8);
shoppingCart2.addToCart('pizza', 4);
console.log(shoppingCart2.cart);
console.log(shoppingCart2);
