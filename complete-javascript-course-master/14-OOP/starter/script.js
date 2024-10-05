'use strict';

// ways of implementing the prototypal inheritance in Javascript

// 1. Constructor function
// 2. ES6 Classes
// 3. Object.create();

// Constructor function
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
const aashu = new Person('Aashu', 'Rajput', 2004, 2222);
console.log(mahendra);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

const Aashu = new Person('Aashu', 'Rajput', 2004, 2222);
const Aruna = new Person('Aruna', 'Rajput', 1974, 3333);

console.log(Aashu, Aruna);

console.log(mahendra instanceof Person); // true

/*
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

// The reason is Javascript may add this method that you created in next versions, and it might work differently, then your code will start using that method if the name is same, and it might cause your code to brake.

// another reason is if you are working in a team, then other developers also create the method with same name but has different functionality then, that is going cause lot of bugs in the code.

const h1 = document.querySelector('h1');

console.dir(h1); // h1 ->[prototype]: HTMLHeadingElement -> [prototype]: HTMLElement -> [prototype]: Element -> [prototype]: Node -> [prototype]: Event Target -> [prototype]: Object

console.dir(x => x + 1); // this is arrow function and it also has a prototype. which contains all the methods we use for functions such as call, bind, caller.. etc.

// basically everything inside javascript is an object. and by using prototype we can access the various methods on them.

*/
/////////////////////////////////////

// Coding Challenge:

/* 
  1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed is the current speed of the car in km/h; 

  2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to console;

  3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;

  4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

  DATA CAR 1: 'BMW' going at 120 km/h
  DATA CAR 2: 'Mercedes' going at 95 km/h

*/

/*
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// accelerating the BMW car
console.log('-----------------BMW Accelerating----------------');
bmw.accelerate(); // 130
bmw.accelerate(); // 140
bmw.accelerate(); // 150

// braking the BMW car
console.log('-----------------BMW braking-----------------');
bmw.brake(); // 145
bmw.brake(); // 140
bmw.brake(); // 135

// Accelerating the Mercedes Car
console.log('-----------------Mercedes Accelerating----------');
mercedes.accelerate(); // 105
mercedes.accelerate(); // 115
mercedes.accelerate(); // 125
mercedes.accelerate(); // 135
mercedes.accelerate(); // 145

// brakeing the Mercedes Car
console.log('-----------------Mercedes braking--------------');
mercedes.brake(); // 140
mercedes.brake(); // 135
mercedes.brake(); // 130
mercedes.brake(); // 125
mercedes.brake(); // 120

*/

//////////////////////////////////

// 2. ES6 Classes:

// Classes are basically like functions, the ES6 Classes basically works like constructor function. they don't behave like traditional classes

// As the classes are like functions, we can write them in two ways, class declaration and class expression

// class expression:
// const PersonCl = class {}

// Class Declaration:
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }
}

const anand = new PersonCl('Anand', 2000);
console.log(anand);

anand.calcAge(); // 24

anand.sayHello(); // Hello Anand

console.log(anand.__proto__ === PersonCl.prototype); // true

// we can even set the method externally to prototype for ES6 class.
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

anand.greet();

// 1. Classes are not hoisted, so we cannot use them before they are declared in the code.

// 2. Classes are also first-class citizens. that means we can pass them into function and we can return them from function.

// 3. Classes are executed in strict mode.

// which one should we use? function constructor or ES6 Classes?

// the answer for the above question is it depends on personal choice, to make our code readable and to keep it neat and clean we should use ES6 classes. as we can write the methods inside the class.

/////////////////////////////////////////////////////////////////////

// Setters and Getters In javascript:

// 1. Every object is javascript has setter and getter properties.

// 2. We call these special properties as assesor properties, while all other normal properties are called data properties.

// 3. Getter and Setter are basically functions that get and set a value.

// 4. As we know every object in javascript has getter and setter properties, in the same way classes also have the getter and setter properties.

// Lets first see the getter and setter properties on Objects:

/*
const account = {
  accountHolderName: 'Mahendra Rajput',
  accountNumber: '1234567890',
  branchName: 'BOB Neri',
  birthDate: '17/01/1999',
  idNo: '11223344',
  transactions: [200, 5000, 500, 20, 10000, 300],

  get latest() {
    return this.transactions.slice(-1).pop();
  },

  set latest(trans) {
    this.transactions.push(trans);
  },
};

account.latest = 50;
console.log(account.transactions); // [200, 5000, 500, 20, 10000, 300, 50]

console.log(account.latest); // 50

// Setter and Getter on Classes:

class User {
  constructor(fullName, userName, password, birthYear) {
    this.fullName = fullName;
    this.userName = userName;
    this.password = password;
    this.birthYear = birthYear;
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const ashwini = new User('Ashwini Rajput', 'Aashu_1727', 'Akshu@1727', 2004);

console.log(ashwini);

console.log(ashwini.age);

ashwini.fullName = 'Ashwini Mahendrasing Rajput'; // this will set the fullName property to Ashwini Mahendrasing Rajput

console.log(ashwini.fullName);

const mahi = new User('mahi', 'mahi1727', 'pass123', 1999);
console.log(mahi);

// Static methods:

// Static methods are basically helper methods.

// Static methods on constructor function:

const Account = function (accountHolder, accountNum, pin) {
  this.accountHolder = accountHolder;
  this.accountNum = accountNum;
  this.pin = pin;

  Account.welcome = function () {
    console.log('Welcome to BOB...🤝');
  };
};

const acc = new Account('Mahendra Rajput', '12344567890', 1111);
Account.welcome();

// acc.welcome(); // this will give error, as welcome is static method attched to Account constructor function.

///////////////////////////

// Static Method on Class:

class AccountCl {
  constructor(accountHolder, accountNum, pin, birthYear) {
    this.accountHolder = accountHolder;
    this.accountNum = accountNum;
    this.pin = pin;
    this.birthYear = birthYear;
  }

  //Instance method
  calcAge() {
    return 2024 - this.birthYear;
  }

  // static method
  static welcome() {
    console.log('Welcome to BOB...🤝');
  }
}

const accCl = new AccountCl('Ashwini Rajput', '1234567891', 2222, 2004);

AccountCl.welcome(); // Welcome to BOB...🤝
// accCl.welcome(); // ERROR as the welcome method is attached to AccountCl class, not to objects created using that class.

console.log(accCl.calcAge());

*/

////////////////////////////////

// Object.create():

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  // this is not actual constructor function. although looks like it
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const naitik = Object.create(PersonProto);

console.log(naitik);

naitik.name = 'Naitik';
naitik.birthYear = 2022;

naitik.calcAge();

// here we have created one prototype object which is PersonProto, and we linked newly created object naitik to that prototype object hence now naitik object has access to caclAge method which is defined in PersonProto object.

console.log(naitik.__proto__); // PersonProto object

console.log(naitik.__proto__.__proto__); // object

console.log(naitik.__proto__.__proto__.__proto__); // null

const gunjan = Object.create(PersonProto);

gunjan.init('Gunjan', 2019);
gunjan.calcAge();

console.log(naitik);
