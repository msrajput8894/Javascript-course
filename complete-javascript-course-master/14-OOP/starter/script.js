'use strict';

const Person = function (firstName, lastName, birthYear, pin) {
  // Instance properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.pin = pin;

  // Instance Methods (we should never do this, this can cause performance problem instead we can use prototype to use this)
  // this.calcAge = function () {
  //   console.log(2024 - this.birthYear);
  // };
};

const mahendra = new Person('Mahendra', 'Rajput', 1999, 1111);
console.log(mahendra);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

const Aashu = new Person('Aashu', 'Rajput', 2004, 2222);
const Aruna = new Person('Aruna', 'Rajput', 1974, 3333);

console.log(Aashu, Aruna);

console.log(mahendra instanceof Person); // true

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

mahendra.calcAge();
Aashu.calcAge();

// as we can see we don't have the calcAge method inside Person Constructor function and we attached it as prototype to Person so that any object created using Person will have access to calcAge method.

console.log(mahendra.__proto__);
console.log(mahendra.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(mahendra)); // true
console.log(Person.prototype.isPrototypeOf(Aashu)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // FALSE

// IMP NOTE:- here Person.prototype is actually not a prototype of Person constructor instead it is a prototype of whatever objects created using Person constructor.

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(mahendra.species, Aashu.species); // Homo Sapiens Homo Sapiens

console.log(mahendra.hasOwnProperty('firstName')); // true
console.log(mahendra.hasOwnProperty('species')); // false


// Prototypal Inheritance on built in objects:

console.log(mahendra.__proto__); // constructor functions prototype(Person.prototype)

console.log(mahendra.__proto__.__proto__); // object.prototype

console.log(mahendra.__proto__.__proto__.__proto__); // null, becuase object.prototype is at the top of prototype chain

console.log(mahendra.__proto__.constructor); //Person constructor function
console.dir(mahendra.__proto__.constructor); // Person contstructor function

const arr = [3, 6, 9, 12, 15, 3, 9]; // new Array === []

console.log(arr.__proto__); // Array.protype: it has all the methods that we normally use for array operations. such as flat, flatMap, concat, fill ... etc.

console.log(arr.__proto__.__proto__); // Object.prototype, again we are back to top of the prototype chain, this as methods related to objects such as hasOwnProperty, isPropertyOf, toString ... etc.

console.log(arr.__proto__.__proto__.__proto__); // null as we already reached at the top of prototype chain.

// So as we know that Array has the prototype and we can add new methods to prototype so lets add new method.

// lets say we need method to find unique values in an array.

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // [3, 6, 9, 12, 15]

const arr2 = [2, 4, 6, 6, 4, 2];

console.log(arr2.unique()); // [2, 4, 6]

// Note: we just extended the prototype of a built-in object, however this is not good idea.

// The reason is Javascript may add this method that you created in next versions, and it might work differently, then your code will start using that method if the name is same, and it might cause your code to break.

// another reason is if you are working in a team, then other developers also create the method with same name but has different functionality then, that is going cause lot of bugs in the code.

const h1 = document.querySelector('h1');

console.dir(h1); // h1 ->[prototype]: HTMLHeadingElement -> [prototype]: HTMLElement -> [prototype]: Element -> [prototype]: Node -> [prototype]: Event Target -> [prototype]: Object

console.dir(x => x + 1); // this is arrow function and it also has a prototype. which contains all the methods we use for functions such as call, bind, caller.. etc.

// basically everything inside javascript is an object. and by using prototype we can access the various methods on them.
