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
