// Exporting Modules

console.log('Exporting Modules');

const shippingCost = 499;

export const cart = [];

// named export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// note that export always needs to happen at the top level of the code.
// example below code will not work.

// if (true) {
//   export const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
// }

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// default export (a module can only one default export)
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
