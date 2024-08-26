'use strict';

//scope of variable:
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1990 && birthYear <= 1999) {
      var millenial = true;
      const firstName = 'Aashu'; // here we have decladred variable with same name as it is already there in global scope.

      output = 'New Output'; //if we re-assign any variable it will take new variable for output instead of old one

      const str = `Oh, and you're a millenial, ${firstName}`; // this string will try to find firstName variable inside current scope first, as it is present in current scope it will print 'Aashu' on the screen.
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    //console.log(str); // ReferenceError, as this is const variable we cannot access it out of block.
    console.log(millenial); // as this is var variable we can access it out of block scope.

    console.log(output);

    //console.log(add(2, 5)); //ReferenceError we cannot call the function out of the block it is defined in but keep in mind this only happens in strict mode.
  }
  printAge();
  return age;
}

const firstName = 'mahendra'; //global scope, and it is difined before calling the calcAge function this works, but if we define it after calcAge function then it will not work.

calcAge(1999);
//const firstName = 'mahendra'; //ReferenceError

//printAge(); //ReferenceError, cannot access the print age outside of calcAge function.

*/
/////////////////////////////////////////////////////////////////////

//Hoisting and Temporal Dead Zone(TDZ):

//Hoisting with variables:
/*
console.log(firstName); // undefined
//console.log(lastName); // Uncaught ReferenceError: Cannot access 'lastName' before initialization
//console.log(age); // Uncaught ReferenceError: Cannot access 'age' before initialization

var firstName = 'Mahendra';
let lastName = 'Rajput';
const age = 25;

//Hoisting with functions:

console.log(addDecl(2, 4)); // 6, we can access function declaration before it is called.

//console.log(addExpr(2, 4)); //Uncaught ReferenceError: Cannot access 'addExpr' before initialization

//console.log(addArrow(2, 4)); //Uncaught ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

/////////////////////////////////////////////////////////////////////////

// this keyword
/*
// in global variable environment
console.log(this); // window object

// in normal function
const calcAge = function (birthYear) {
  const age = 2023 - birthYear;
  console.log(age);
  console.log(this); // undefined
};

calcAge(1999);

// in arrow function

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); //window object
};
calcAgeArrow(2004);

// arrow function does not get it's own this keyword, it takes the this keyword of it's parent scope.

const mahendra = {
  year: 1999,
  calcAge: function () {
    console.log(this); // whole object that is mahendra which is calling method
    console.log(2023 - this.year);
  },
};
mahendra.calcAge();

const aashu = {
  year: 2004,
};

aashu.calcAge = mahendra.calcAge; //borrowing

aashu.calcAge(); // here this will point to aashu as the aashu is calling the method we have borrowed method calcAge function from mahendra.

const f = mahendra.calcAge;
f(); // now calcAge function becomes normal function instead of method of an object and as we know the value of this variable is undefined for normal functions.
*/

/////////////////////////////////////////////////////////

// Regular functions v/s Arrow functions
/*
const mahendra = {
  firstName: 'mahendra',
  year: 1999,
  calcAge: function () {
    console.log(this); // whole object that is mahendra which is calling method
    console.log(2023 - this.year);

    //solution1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 2004); //true
    //   // console.log(this.year >= 1981 && this.year <= 2004);// here this keyword is undefined as we are using on normal function call. so to preserve this we will create one more variable self or that.
    // };

    //solution2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 2004); //true, here we are using arrow function inside calcAge method so calcAge method has it's own this keyword but arrow function does not have it so it will take it from parent which is calcAge method, hence this is working in this case.
    };
    isMillenial();
  },

  greet: () => console.log(`Hey, ${this.firstName}`), //arrow function does not get thier own this keyword.
};

mahendra.greet(); // Hey, undefined
//here the greet arrow function itself is in global scope so it will use this keyword of global scope, which is undefined.
console.log(this.firstName);

mahendra.calcAge();

//Never use arrow function as a method.

*/

//////////////////////////////////////////////////////////////////

// Arguments keyword
/*
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);

//Arrow function does not have arguments keyword.
*/

////////////////////////////////////////////////////////////////

// Primitive vs objects

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

// no doubt in above code now lets see same case in objects

const me = {
  firstName: 'mahendra',
  age: 24,
};

const friend = me;

friend.age = 19;
console.log('friends:', friend);
console.log('Me:', me);

// now the output we are expecting is freind should have age 19 and Me should have age 24 but the actual output is both have the age 19.

const aashu = {
  firstName: 'Ashwini',
  lastName: 'Jonwal',
  age: 20,
};

// const marriedAashu = aashu;

// marriedAashu.lastName = 'Gothwal';
// console.log('Married Aashu:', marriedAashu);
// console.log('Aashu:', aashu);

//so we know that we cannot change the object property using this method, so we will use another method

const marriedAashu = Object.assign({}, aashu); // however this method only works for first level of objects, if we have objects inside an object then this does not work. we need some deep cloning that we will learn later.
marriedAashu.lastName = 'Gothwal';
console.log('Before marriage:', aashu);
console.log('After marriage:', marriedAashu);
