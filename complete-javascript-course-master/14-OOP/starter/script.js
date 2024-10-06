'use strict';

// ways of implementing the prototypal inheritance in Javascript

// 1. Constructor function
// 2. ES6 Classes
// 3. Object.create();

/*
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
*/

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

/*
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

*/

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

/*
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


*/
/////////////////////////////////////

// Coding challenge #2

/* 

  1. Re-create challenge 1, but this time using an ES class;

  2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);

  3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);

  4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

  DATA CAR 1: 'FORD' going at 120 km/h
*/

/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford);

ford.accelerate();
ford.accelerate();

ford.brake();
ford.brake();
ford.brake();

console.log(ford.speedUS);

ford.speedUS = 98.125; // this will set the speed of the ford to 98.125* 1.6 = 157;

console.log(ford);

ford.accelerate();
console.log(ford);
console.log(ford.speedUS);

*/

/////////////////////////////////////////////////
/*
// Inheritance on Constructor function:

//Parent constructor function:
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// setting method using prototype on parent constructor function
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

// Child class
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // inheriting firstname and birthYear from Person(parent)
  this.course = course;
};

// in order to link the prototype of Student constructor function to Person constructor function we need to use Object.create();

// Linking protypes:
Student.prototype = Object.create(Person.prototype); // now by doing this we have linked the Person.prototype to Student's prototype. now we can have access to methods and properties from Person's prototype.

Student.prototype.introduce = function () {
  console.log(`Hi, I am ${this.firstName} and I study ${this.course}`);
};

const gunjan = new Student('Gunjan', 2019, 'Nursery');
console.log(gunjan);

gunjan.introduce(); // Hi, I am Gunjan and I study Nursery
gunjan.calcAge(); // 5

console.log(gunjan.__proto__);
console.log(gunjan.__proto__.__proto__);

console.log(gunjan instanceof Student); // true
console.log(gunjan instanceof Person); // true
console.log(gunjan instanceof Object); // true

// so here gunjan is basically instance of three protypes because of the prototype chain.

console.dir(Student.prototype.constructor); // Person, where it should be Student actually. so lets correct that.

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // Student. Now it is correct!

*/
///////////////////////////////////////////////

// Coding Challenge:

/*
1. Use a constructor function to implement an Electric Car (called EV) as child class of Car. Besides make and current speed , the EV also has the current battery charge in % ('charge' property);

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo';

3. Implement an 'accelerate' method that will increase the car's speed by 20 and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';

4. Create an electric car object and exeperiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: review the definition of polymorphism

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

*/

/*

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const ford = new Car('Ford', 120);

ford.accelerate();
ford.brake();

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// this will link the prototypes of parent(Car) and child(EV)
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};

const tesla = new EV('Tesla', 140, 23);

console.log(tesla);

tesla.chargeBattery(45);
console.log(tesla);

tesla.accelerate();
tesla.brake();

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// Now as we have overwritten the accelerate method, now the child(EV) will use the first method in prototype chain, which is currently on child(EV).
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();

*/

////////////////////////////////////////

/*
// Inheritance with ES6 classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method:
  static hey() {
    console.log('Hey there 🙋‍♂️');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old, but as a student I feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

const gunjan = new StudentCl('Gunjan Rajput', 2019, 'Nursery');

console.log(gunjan);
gunjan.introduce(); // My name is Gunjan Rajput and study Nursery
gunjan.calcAge(); // I'm 5 years old, but as a student I feel more like 15.


*/

////////////////////////////////

/*
// Inheritance Between "Classes": Object.create()

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const jaypal = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
const gunjan = Object.create(StudentProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hi my name is ${this.fullName} and I study ${this.course}`);
};

gunjan.init('Gunjan Rajput', 2019, 'Nursery');

gunjan.introduce();

gunjan.calcAge();

*/

/*
// Another class example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // Public Interface:
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this._movements.push(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Congrats!! Your Loan request is approved!`);
    }
  }
}

const acc1 = new Account('Mahendra', 'INR', 1111);

// acc1.movements.push(250);
acc1.deposit(250);
acc1.deposit(5000);
acc1.withdraw(250);

acc1.requestLoan(10000);
acc1._approveLoan(4); // this actually does not have application outside of the class hence we should not be able to access such methods outside of the class, and even we should not be able change some properties outside of the class. We can achieve that using encapsulation.

console.log(acc1);

// Encapsulation: means keeping some properties and methods private inside the class.

// In javascript we don't really have the private keyword so we follow the conventions just so that we are aware that we don't have to change some properties. we just add (_) infront of those properties and methods.

console.log(acc1.movements); // now we will not get the movements array as we have added _ at the front, but ofcourse you can access it by doing acc1._movements. but at least we are aware that we are not supposed to access it.


*/

////////////////////////////////////////////

// Private Class fields

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

// there are also static method versions of this private and public fields and methods

// Another class example
class Account {
  // 1) Public fields(instances)
  locale = navigator.language;

  // 2) Private fields(instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // 3) public methods:
  // Public Interface:
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Congrats!! Your Loan request is approved!`);
    }
    return this;
  }

  getPin() {
    return this.#pin;
  }

  // 4) Private Methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Mahendra', 'INR', 1111);

console.log(acc1);

acc1.deposit(500);
acc1.deposit(300);
acc1.deposit(200);
console.log(acc1);

// console.log(acc1.#movements); // we cannot access the #movements outside as it is private property.

console.log(acc1.getMovements());

// console.log(acc1.#pin); // private field, not able to access outside

acc1.requestLoan(5000);
console.log(acc1.getMovements());

// console.log(#approveLoan(100)); // private method can't access it outside of the class
console.log(acc1.getPin());

// Chaining methods:

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements);

console.log(acc1.getMovements());
