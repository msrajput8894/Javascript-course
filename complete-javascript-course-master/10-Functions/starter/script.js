'use strict';

//TAKING CLOSER LOOK AT THE FUNCTIONS:-

/*
// Default Parameters:

// to understand default parameters let's create one function to create bookings for airline.

const bookings = [];
// in ES6 we can directly set the default values to function parameters
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 approach to set default parameters
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 4);
//Note we cannot skip parameter in between, example in above case we cannot skip numPassenger parameter.
createBooking('LH123', 599); // now here it will take the 599 as a numPassenger parameter. so we cannot skip the middle values.
createBooking('LH123', 5, 499); // to skip the value in between we can use below trick.
createBooking('LH123', undefined, 499);

//let us create one function for passenger check in.

const flight = 'LH234';
const mahendra = {
  name: 'Mahendra Rajput',
  passport: 32657345878,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 32657345878) {
    alert('checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, mahendra);
// console.log(flight); // LH234
// console.log(mahendra); // {name: "Mr. Mahendra Rajput", passport: 32657345878}

// here if you see the output we can see that the mahendra is an object and its content has been changed inside the function while we also attempted to change the flight variable but it did not take an effect because it is an primitive data type. so always keep in mind that this behaviour of an objects might cause some bugs in the code so be careful with that.

// // it is actually same as doing this...
// const flightNum = flight;
// const passenger = mahendra;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(mahendra);
console.log(mahendra.passport);
console.log(mahendra);
checkIn(flight, mahendra);

// here we passed mahendra object to newPassport function and we have generated the random passport value so the passport value in the mahendra object is also changed for the next function call which is checkIn function which is called after newPassport function.

// Note: Javascript does not have pass by reference.

// FIRST-CLASS FUNCTIONS:

// First class functions VS Higher class functions:
// 1. Javascript treats functions as first-class citizens.
// 2. This means that functions are simply values
// 3. Functions are just another 'type' of object.

// Store functions in variables or properties:
// const add = (a, b) => a + b; // here we have stored the function in an value.
// const counter = {
//   value: 23,
//   inc: function () {
//     this.value++;
//   }, // here we have stored the function as object properties.
// };

// pass functions as arguments to other functions
// const greet = () => console.log('Hey Mahendra');
// btnClose.addEventListener('click', greet); // here we have passed the function as an argument to addEventListener function.

// Return functions from functions

// Call methods on functions:
// counter.inc.bind(someOtherObject);

// HIGHER-ORDER FUNCTIONS:

// A function that receives another function as an argument, that returns a new function, or both.
// This is only possible because of first-class functions.

// 1.Function that receives another function:
// const greet1 = () => console.log('hey mahendra');
// btnClose.addEventListener('click', greet);

// here in above example addEventListener function receives greet function as an argument it will be called once the btnClose button will be clicked.
// here we will call addEventListener function as higher-order function and greet function as a callback function.

// 2.Function that returns new function
// function count() {
//   let counter = 0;
//   return function () {
//     counter++;
//   };
// }

// here in above case count function is Higher-order function and we have another function which is returned.

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS:

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// here in above example we have used upperFirstWord and oneWord functions as an call back functions on transformer function which is higher-order fucntion.
// we also have methods and properties for functions as we have for objects. in above case we have used fn.name property which gives us the name of function.

// JS uses call back all the time.
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['mahendra', 'aashu', 'akshu'].forEach(high5);


*/

// FUNCTIONS RETURNING A FUNCTION

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hello');
console.log(greeter);
greeter('Mahendra');
greeter('Aashu');

greet('Hey!')('Aashu');

//challenge: convert above code to arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi,')('Aashu');

const airIndia = {
  airline: 'air india',
  airlineCode: 'AI',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.airlineCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.airlineCode}${flightNum}`, name });
  },
};

airIndia.book(99, 'mahendra');
airIndia.book(44, 'Aashu');

const indigo = {
  airline: 'Indigo',
  airlineCode: 'IG',
  bookings: []
}


const book = airIndia.book;
//below code does not work becuase the this keyword inside the functions is undefined.
// book(88,'Mahendra Rajput');

//Call Method:
//we can use the .call() method to call the functions and then the first parameter is object name to which our this keyword should point to.
book.call(indigo, 88, 'Mahi Rajput')
book.call(airIndia, 57, 'Anand Rajput')

console.log(indigo.bookings);
console.log(airIndia.bookings);

const spaceJet = {
  airline: 'SpaceJet',
  airlineCode: 'SJ',
  bookings:[]
}

book.call(spaceJet, 34, 'Rajendra Rajput')

console.log(spaceJet);
console.log(spaceJet.bookings);

//Apply Method:
// this method takes the array of the arguments instead of list

const bookingData = [44, 'Aruna Rajput']
book.apply(spaceJet,bookingData )
console.log(spaceJet);

// now a days we don't use the apply method instead we can use call method with destructuring

book.call(airIndia,...bookingData)
console.log(airIndia);


//BIND:

// bind does not call the function instead it returns new function in which this keyword is bound.

//book.call(airIndia,85,'Mahendra Rajput');

// bind basically binds the argument to function so in below example bookSJ function will basically have the first argument set to spaceJet that means our this keyword inside bookSJ function will always point to spaceJet object
const bookSJ = book.bind(spaceJet);

bookSJ(23, 'Aashu Rajput')

// we can bind multiple parameters at same time.
const bookAG = book.bind(indigo, 38)
bookAG('Akash Rajput')

airIndia.planes = 200;
console.log(airIndia);

airIndia.buyPlane = function(){
  console.log(this);
  this.planes++
  console.log(this.planes);
}

//here we are binding this keyword to airIndia object
document.querySelector('.buy').addEventListener('click', airIndia.buyPlane.bind(airIndia))

//partial application

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addGST = addTax.bind(null, 0.18);

// console.log(addGST(249));
// console.log(addGST(100));
// console.log(addGST(199));

//Challenge: use function returning function logic to achieve same results as above.

const addGST = function(value){
  console.log(value);
  return function(rate){
    return value + value * rate;
  }
}

const addTax = addGST(100);

addTax();
console.log(addTax(0.18));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const input = prompt(`${this.question}\n${this.options.join('\n')}\n(write option number)`)

    const answer = Number(input);
    console.log(typeof answer);
    typeof answer === 'number' && answer<this.answers.length && this.answers[answer]++
    this.displayResults();
    //this.displayResults('strings')
  },

  displayResults(type = 'array'){
   type = String(prompt(`Please specify result type:`))
    if(type === 'array'){
      console.log(this.answers);
    }else if(type === 'string'){
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } 
  }
  
}

document.querySelector('.poll').addEventListener('click', ()=>{
  poll.registerNewAnswer();
});


/////////////////////

//Imediately Invoked Functions Expression
//IIFE only executes once, incase we only have to use the function once then only it is recommended to use IIFE.
(function(){
  console.log('this function will never run again');
})();

// IIFE with arrow functions
(()=>console.log('this will also only run once'))();



/////////////////////////////////////////////////

//CLOSURES:

// Most complicated topic of javascript.

const secureBooking = function(){
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(passengerCount);
  }
}

const booker = secureBooking();

booker();
booker();
booker();


// here in above code example we have not passed any argument to returned function, that function is just simply returned and stored inside booker, once the secureBooking is executed and returned the function, the execution context of secureBooking function is removed from the call stack, so how the returned function is still able to access the variable declared inside the secureBooking? here comes the concept of closures in action.


// A function has access to the varialbe environment(VE) of the execution context in which it was created. in above case returned function will have access to VE of the secureBooking function.

//Closure:- VE attached to the function, exactly as it was at the time and place the function was created.

// closure has more priority than the scope chain, that means even if the variable is present inside the scope chain, it will first increase the count of the variable which is present in closure.

// Definitions of Closures:-

//A closure is the closed-over variable envionment of the execution context in which a function was created, even after that execution context is gone;

// A closure gives a function access to all the variable of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

//A closure makes sure that a function doesn't loose connection to variable that existed at the functions birth place.

// A closure is like a backpack that a function carries around wherever it goes, this backpack has all the variables that were present in the environment where the function was created.

//Note: We do not have to create closures manually, this is a Javascript feature that happens automatically, we can't even access closed-over variables explicitly. A closure is NOT a tangible Javascript object.


console.dir(booker);


//More examples on closure:


// Example 1:
let f;

const g = function(){
  let a = 17;
  f = function(){
    console.log(a * 2);
  }
}

const h = function(){
  let b = 27;
  f = function(){
    console.log(b*2);
  }
}
g();
f();

console.dir(f);

h();
f();

// note that here we have re-assigned the value of f. still it manages to store the two different closures for two different functions.

console.dir(f);


// Example 2:
// let z
// const boardPassengers = function(n, wait){
//   const perGroup = n/3;

//  z= setTimeout(() => {
//     console.log(`We are now boarding with total ${n} passengers`);
//     console.log(`We have total 3 groups each has ${perGroup} passengers`);
//   }, 1000 * wait);

//   console.log(`We will start boarding in ${wait} seconds`);
// }

// boardPassengers(180, 5);
// boardPassengers(60, 3);


// here as well the setTimeout functions runs way after the boardPassenger function is executed, still it contains the closure, which has the VE of boardPassenger function so that setTimeout has the access to variables inside boardPassenger function.


//////////////////////////////////////////////

// CHALLENGE: 

(function(){
  const header = document.querySelector('h1');
   header.style.color = 'red';
   document.querySelector('body').addEventListener('click', ()=> header.style.color = 'blue')
})();

// here as well the arrow function which is attached to event listener of body element uses closure to access the header variable.
