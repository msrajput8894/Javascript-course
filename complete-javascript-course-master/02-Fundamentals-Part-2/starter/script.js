//we need to activate strict mode in order to write secure code.
//we can just write 'use strict'; to activate strict mode
//this has to be at top of you script you cannot write anything before this line of code. however you can write comments before that.

"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicence = true;
// }
// if (hasDriversLicence) {
//   console.log("I can drive!");
// }

//in above program there is one mistake we have mis-spelled the hasDriversLicence variable 's' is missing in that, we run this program without srict mode we will not get any results or error in console.

//result is obivously not expected if there is mistake in code but we should atleast get an error message. so if activate strict mode we will get exact error message.

//error message: script.js:11 Uncaught ReferenceError: hasDriverLicence is not defined at script.js:11:20

//it also has the list of variable names that are reserved for future javaScript might include these reserved words in future update, so we cannot use them as a variable name.

//for example:
// const interface = "Audio";
//const private = 17;

//we will get follwing error msg in console: script.js:26 Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:26:7)

/**********************************************/

// Functions: A piece of code that we can reuse over and over again in our code .

//syntax:
/*
//defining the function
function logger() {
  console.log(`My name is Mahendra`);
}

//calling / running / invoking function
logger();
logger();
logger();

//we only need to define function once, choose one descriptive name and then we can use that function as many time we want it in our code.

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);

//we can define parameters in the parenthesis of the function, they represent the input data of the function, they will be defined once the function gets called.

//in above example we have taken two parameters apples and oranges, consider them as a empty variables for that function.

//we can fill those variable later while calling the function in this case fruitProcessor(5,0); , so we have given 5 value to apple parameter and 0 to oranges parameter.

//By using return, we can return the output of the function to one variable, here we returned it to string juice.

//later we stored the output in one variable and then using console.log we printed the output in console.

//parameters:- empty placeholders or variables that we use while defining the function in this case those are apples and oranges

//Arguments:- the values that we provide to our parameters in this case we have provided 5,0 and later 2, 3.

//function declarations:
const age = calcAge1(1999);

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

console.log(calcAge1(2004));

//function expression:
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(2000);
console.log(age2, age);
//here instead of giving a function a name we are storing the function in a variable, basically later we can use that variable name as a function name to call that function.

//basically that function is an expression and we know that the expression results a value.

//the difference between function declaration and function expression is in function declaration we can call the function before it is defined we can't do that in function expression.
*/

//Arrow functions:-
/*
//function expression:
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

//above one is example of function expression now lets see how we can write same function using arrow function.
//Arrow function
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

//arrow function is more useful for single line functions

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
};
//here we have two expressions so we have to use return keyword

console.log(yearsUntilRetirement(1999, "mahendra"));
console.log(yearsUntilRetirement(2004, "Aashu"));
*/

//functions calling other functions:-
/*
//lets take our old fruit processor function
//now lets write another function to cut the fruits into multiple pieces.

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(3, 4));

//data flow: arguments(3,4)->parameters(apples(3), oranges(4))->argument(apples(3))->parameter(fruit(3))->return apple(3)*4 -> applePieces(12)

//this data flow we created for apples value just to understand the data flow.
*/
/*
const calcAge = function (birth_Year) {
  return 2023 - birth_Year;
};

//here in both function we have same parameter birthyear but they are not similar they are completely different than each other, lets keep the names different
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired...🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1949, "Rajendra"));
console.log(yearsUntilRetirement(1999, "mahendra"));

//we cannot write anything after the return statement, returns basically exits the from the function so anything written after return will not be executed.
*/
/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

/* Write your code below. Good luck! 🙂 */
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// return average;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgKoalas >= avgDolphins * 2) {
    return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins >= avgKoalas * 2) {
    return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    return console.log(`No team wins...`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

//Test data 2:
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
*/

//Arrays in javaScript

//to understand why we use arrays lets see one example

//suppose you are writing some program you need to store multiple similar data without arrays you need to create multiple variables to do so.

/*

const friend1 = "Mohan";

const friend2 = "Yash";

const friend3 = "Jivan";

 

//if you try this way this very difficult to write the multiple data, so in this case we use arrays.

const friends = ["Mohan", "yash", "jivan"];

console.log(friends);

 

//another way to create an array, we usually use the earlier method only.

 

const years = new Array(1999, 2004, 2016, 2019);

console.log(years);

 

//this was about how to create an array now lets see how to get the data out of array.

 

console.log(friends[0]);

console.log(friends[0], friends[1]);

 

//indexing starts from 0 that is first element will start from 0 index.

 

//to get the length of an array that is to get the no of elements from an array.

 

console.log(friends.length);

console.log(years.length);

 

//this is not 0 based the indexing does not starts with 0 in case of length.

 

//if the array list too big we can use .length function to get the last element from an array

 

console.log(friends[friends.length - 1]);

 

//if we want to change the array data we can do that in following way.

 

friends[2] = "Karansingh Rajpurohit";

console.log(friends);

 

//after this "jivan" should be replaced by "Karansingh"

 

// now we know that we cannot reassign the values to const variables but here we did that even though our array was defined as const. so when it comes to array we can assign the values to const. we cannot assign the values to const primitive data types and array is non primitive data type.

 

//however we cannot change the whole array, we can change the values inside array as we did above.

 

//friends = ["Karan", "chutya bhai"];

 

//we will get following error: script.js:49  Uncaught TypeError: Assignment to constant variable.at script.js:49:9

 

//array can hold the values of different types at the same type.

//we can even give the data from variables to an array.

//we can even use template literals in an array to do the calculation

//we can even provide another array in other array.

 

const birthYear = 1999;

const mahendra = [

  "Mahendra",

  "Rajput",

  `${2023 - birthYear}`,

  "developer",

  friends,

];

 

console.log(mahendra);

*/

//Excercise:

/*

const calcAge = function (birthYear) {

  return 2023 - birthYear;

};

 

const years = [1999, 1968, 1974, 2000, 2004];

 

const age1 = calcAge(years[0]);

const age2 = calcAge(years[1]);

const age3 = calcAge(years[2]);

const age4 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3, age4);

 

//here we got the result from calcAge function and we stored them in different  variables. we have used array data to pass as an arguments.

 

//we can even store this results in different array.

const ages = [

  calcAge(years[0]),

  calcAge(years[1]),

  calcAge(years[2]),

  calcAge(years[years.length - 1]),

];

 

console.log(ages);

*/

//Array methods:-
/*
const friends = ["Mohan", "yash", "jivan"];

console.log(friends);

// 1.Push method: this method adds the element at the end of an array.

friends.push("Karansingh");

console.log(friends);

// we will get new array like this after this: ["Mohan", "yash", "jivan", "Karansingh"];

//push method is nothing but the function and it does returns the value, it returns the length of an new array.

let newLength = friends.push("Abhishek");

console.log(friends);

console.log(newLength);

//2.Unshift method: this method adds the element at the start of an array.

newLength = friends.unshift("Shubham");

console.log(friends);

console.log(newLength);

//unlike push method unshift method also returns the length of an new array.

// 3.pop method: this method removes the last element from an array.

let removedElement = friends.pop();

let removedElement1 = friends.pop();

console.log(friends);

console.log(removedElement, removedElement1);

//this returns the removed element.
//this does not require any argument.

// 4. shift() method: this method removes the first element from an array.

removedElement = friends.shift();

console.log(friends);

console.log(removedElement);

//this returns the removed element.
//this does not require any argument.

//5.indexOf: to find out in which position the certain element is located in an array.

console.log(friends.indexOf("yash"));

//output: 1

//if we provide the element incorrectly it will return us -1.

//includes: it will check if the element is present inside an array or not.

//it will return true if the element is present or else it will return false.
friends.push(23);
console.log(friends.includes("yash"));
console.log(friends.includes("Abhishek"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

//this is uses strict equality method it will type coerced the elements. we need to specify correctly if it is number or string

//we can use includes methods as a condition.

if (friends.includes("yash")) {
  console.log("Your friend Yash is no-1 chutiya");
}

*/

//Challenge2
/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.


*/
/*
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills, tips, totals);

*/

//Introduction to Objects:
/*
const mahendraArray = [
  "Mahendra",
  "Rajput",
  2023 - 1999,
  "teacher",
  ["yash", "mohan", "abhishek", "jivan"],
];

//here we have this array which contains multiple type of data such as strings number and even array inside an array. so to reference this data we don't have any option in case of arrays, we can only use index numbers. so to avoid this issue we have objects data structure in javaScript. we use key value pairs to do that.

//lets see how to do that with objects
const mahendra = {
  firstName: "mahendra",
  lastName: "rajput",
  age: 2000 - 2000,
  job: "Devloper",
  friends: ["yash", "mohan", "abhishek", "jivan"],
};

//we use curly braces for the object. we can define several key value pairs inside these curly braces. these are also called as a properties of an object.

//here order of the element does not matters.
console.log(mahendra);

//Dot and Bracket notations
//to get the output from an object we use two methods dot and bracket.
//Dot method:
console.log(mahendra.firstName);
console.log(mahendra.firstName, mahendra.lastName);
console.log(mahendra.friends, mahendra.job);

//Bracket method:
console.log(mahendra["firstName"]);
//in bracket method we can write any expressions

const nameKey = "Name";
console.log(mahendra["first" + nameKey]);
console.log(mahendra["last" + nameKey]);

//here it concatenates two string into one 'first' and 'Name' and gives the result as firstName

//this does not work with dot operator.

//let see one more example:

const interestedIn = prompt(
  "what do you want to know about mahendra? Choose between firstName,lastName,age,job, and friends"
);
// console.log(interestedIn);
// console.log(mahendra[interestedIn]);

//if we provide any input other than the values present inside an object it will give undefined as ouput. so to handle that lets try something else

if (mahendra[interestedIn]) {
  console.log(mahendra[interestedIn]);
} else {
  console.log(
    "Please provide valid input. Choose between firstName,lastName,age,job, and friends"
  );
}

//here it validate the value of interestedIn, incase you the falsy value(such as 0,null,undefined..etc) in your object then this will not work.

//we can add new properties to our object using dot and bracket methods

mahendra.location = "Hyderabad";
mahendra["github"] = "@msrajput8894";
console.log(mahendra);

//challenge:
console.log(
  `${mahendra.firstName} has ${mahendra.friends.length} friends, and his best friend is called ${mahendra.friends[0]}`
);

//this works because of operator precedance both dot and bracket operator have highest precedance. and the precedance works left to right.
*/
//object methods:
//we know that the functions are nothing but just a value, so we can add functions as a key value pair inside an object.
/*
const mahendra = {
  firstName: "mahendra",
  lastName: "rajput",
  birthYear: 1999,
  job: "Devloper",
  friends: ["yash", "mohan", "abhishek", "jivan"],
  hasDriverLicence: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function(){
  //   console.log(this);
  //   return 2023-this.birthYear;
  // }
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} old ${
      this.job
    }, and he has ${this.hasDriverLicence ? `a` : `no`} drivers licence `;
  },
};

//using this
console.log(mahendra);
mahendra.calcAge();
console.log(mahendra.getSummary());

console.log(mahendra.age);
console.log(mahendra.age);
console.log(mahendra.age);

//this basically represents the object you are calling to.
//here this points to mahendra

//without using this
// console.log(mahendra.calcAge(1999));
// console.log(mahendra["calcAge"](1999));

//we know tha we have already defined the birthYear as property of an object but we are not using that to calculate the age or to get the results.

//if we are calling calcAge function mulitple times then it is good idea to store the ouput of that function to a variable.

//challenge:

console.log(
  `${mahendra.firstName} is a ${mahendra.calcAge()} old ${
    mahendra.job
  }, and he has ${mahendra.hasDriverLicence ? `a` : `no`} drivers licence `
);

console.log(mahendra.getSummary());
*/
//Challenge #3:
/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

*/
/* Write your code below. Good luck! 🙂 */
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
// console.log(john.calcBMI());
// console.log(mark.calcBMI());

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// }

//we could even try like this
console.log(
  mark.bmi > john.bmi
    ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
    : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
);

*/

/***************************************************/

//Loops:- Iterations

//using loops we can perform repeated steps

// console.log("Lifting weights repetion 1 🏋️");
// console.log("Lifting weights repetion 2 🏋️");
// console.log("Lifting weights repetion 3 🏋️");
// console.log("Lifting weights repetion 4 🏋️");
// console.log("Lifting weights repetion 5 🏋️");
// console.log("Lifting weights repetion 6 🏋️");
// console.log("Lifting weights repetion 7 🏋️");
// console.log("Lifting weights repetion 8 🏋️");
// console.log("Lifting weights repetion 9 🏋️");
// console.log("Lifting weights repetion 10 🏋️");

//For Loop:
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetion ${rep} 🏋️`);
}

//looping arrays:

const mahendra = [
  "Mahendra",
  "Rajput",
  2023 - 1999,
  "teacher",
  ["yash", "mohan", "abhishek", "jivan"],
  true,
];

for (let i = 0; i < mahendra.length; i++) {
  console.log(mahendra[i]);
}

//now this will give output of an array but still here we have hard coded the the length of an array if increase the elements in an array they will not be printed into the console. so we will add mahendra.length

//to check the type of each element in an array
for (let i = 0; i < mahendra.length; i++) {
  console.log(mahendra[i], typeof mahendra[i]);
}

//lets store these types into a different array.

const types = [];
for (let i = 0; i < mahendra.length; i++) {
  console.log(mahendra[i], typeof mahendra[i]);

  //filling types array
  //1 way to do it
  //types[i] = typeof mahendra[i];

  //2 way to do it
  types.push(typeof mahendra[i]);
}
console.log(types);

//lets see one better example of calculating ages

const years = [1968, 1974, 1999, 2000, 2004];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

//continue and break:

//continue: to skip current iterations of the loop
//break: to exit the out of the loop

//Continue:
console.log("-------ONLY STRINGS---------");

for (let i = 0; i < mahendra.length; i++) {
  if (typeof mahendra[i] !== "string") continue;

  console.log(mahendra[i], typeof mahendra[i]);
}

// in above code it will check the type of the element if it is not string it will skip that element

//Break:
console.log("-------BREAK WITH NUMBER---------");

for (let i = 0; i < mahendra.length; i++) {
  if (typeof mahendra[i] === "number") break;
  console.log(mahendra[i], typeof mahendra[i]);
}



//Backward loops:

const mahendra = [
  "Mahendra",
  "Rajput",
  2023 - 1999,
  "teacher",
  ["yash", "mohan", "abhishek", "jivan"],
  true,
];

for (let i = mahendra.length - 1; i >= 0; i--) {
  console.log(i, mahendra[i]);
}

//nested loops:

for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`----------- Starting Excercise ${excercise} ------------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${excercise}: Lifting weight repetion ${rep}`);
  }
}

*/

//While Loop:
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetion ${rep} 🏋️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`while: Lifting weights repetion ${rep} 🏋️`);
  rep++;
}

//this loop is usually used where we don't know the limit value of loop or no of iterations we will need.

//lets build a program to roll a dice.

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`you got ${dice}, Loop is about to end...`);
  }
}
*/

//Challenge 4:

/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.

*/

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totals = [];
const tips = [];

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
};
console.log(calcAverage([20, 30, 50]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));
