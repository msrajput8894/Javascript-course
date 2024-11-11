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

*/ const shoppingCart2 = function() {
    const cart1 = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;
    const addToCart = function(product, quantity) {
        cart1.push({
            product,
            quantity
        });
        console.log(`${quantity} ${product} added to cart`);
    };
    const orderStock = function(product, quantity) {
        console.log(`${quantity} of ${product} ordered from supplier`);
    };
    return {
        cart: cart1,
        addToCart,
        totalPrice,
        totalQuantity
    };
}();
shoppingCart2.addToCart("bread", 8);
shoppingCart2.addToCart("pizza", 4);
console.log(shoppingCart2.cart);
console.log(shoppingCart2);
const state = {
    cart: [
        {
            product: "bread",
            quantity: 5
        },
        {
            product: "pizza",
            quantity: 2
        }
    ],
    user: {
        isLoggedIn: true
    }
};
const cloneState = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);
console.log(cloneState);
console.log(state);
cloneState.user.isLoggedIn = false;
// this is the problem with cloning the object using Object.assign the original object also changes
console.log(state);
console.log(cloneState);
// console.log(stateDeepClone);
// lets use external function from lodash library
// import cloneDeep from 'lodash-es/cloneDeep';
// if (module.hot) {
//   module.hot.accept();
// }
class Person {
    greeting = "Hey";
    constructor(name){
        this.name = name;
        console.log(`${this.greeting}, ${this.name}`);
    }
}
const mahi = new Person("Mahi");
console.log("Mahendra" ?? null);
console.log(cart.find((el)=>el.quantity >= 2));

//# sourceMappingURL=index.672d4772.js.map
