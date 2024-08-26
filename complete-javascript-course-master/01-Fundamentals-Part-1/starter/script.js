//JavaScript Fundamentals part-1
/*
//to print output to browser console
console.log("mahendra rajput");
console.log(4 - 2 + 33 - 2);
let js = "amazing";
 if ((js = "amazing")) {
  alert("javaScript is Fun!");
 }

console.log(js);

"mahendra"; // here mahendra is value

// // to see the output in console
console.log("mahendra");

//same with this 23 here 23 is value
23;

// and to see it in console
console.log("23");

let firstName = "mahendrasing ";
let lastName = "rajput";
let space = "";

firstName = "Akash ";

console.log(firstName + space + lastName);

console.log(firstName + space + lastName);

console.log(firstName + space + lastName);



//Variables in JavasScript:-
//variables are used to store data in your computer memory

// Rules and conventions to define variables

// 1. try to stick to camelCase naming convention
//that is always make the first letter of second word or new word as a capital letter

//examples:

let dateOfBirth = "17/01/1999";
console.log(dateOfBirth);

let myFirstName = "Mahendrasing";
let myLastName = "Rajput";
const nav = "mahendra rajput";
let dob = "17-01-1999";

console.log(myFirstName, myLastName, nav, dob);

// 2. variable cannot start with numbers
//  examples:-
// let 3years = 3;

// this is giving us following error
//Uncaught SyntaxError: Invalid or unexpected token (at script.js:61:5)

// this error means there is syntax error in our code in script.js file on line no 61 and at charector no 5

// we can write same as follow
let years3 = 3;
let y3 = 5;
let y1y = 20;

// 3. variable name can only contain letters,numbers,underscore(_) and dollar sign($)

let _3years = 3;
let years_3 = 5;

let $3year = 30;
let my_name = "mahendra";

// let year&month = 50; // this is incorrect

// in above line there error we cannot use any other special charecter or symbols other that $ and _

// Error
// Uncaught SyntaxError: Unexpected token '&' (at script.js:79:9)

// 4. there are some reserved keywords in each programming languages so we cannot use them as a variable

// examples:-

//let new = "mahendra"; // this is not allowd as a new is predifined keyword

//let const = 'constant'; // this is not allowed as a const is predefined keyword

let name = "mahendra rajput";
//here name is also predefined keyword but we are using it as a variable and there is no error in the console for this but when we try to get the ouput in console we can see it shows as deprecated
// The declaration was marked as deprecated here.

//console.log(name);

// 5. it is convention not to make the first letter of the variable as capital
// example:
let Person = "Mahi";
let person = "mahendra rajput";

// 6. it convention to write anything that is constant and not changing at all as a capital
// for example value of pi
let PI = 3.1415;
let GRAVITY = 9.81;
console.log(person, Person);

//  7. variable name should be descriptive it should clearly say what variable contains
// for example :
myFirstJob = "labour";
mySecondJob = "developer";

// Assignment
//1. Declare variables called 'country','continent' and 'population' and assign their values according to your country.(population in millions)
//2.Log their values to console

// 1. assignment solution
let country = "India";
let continent = "Asia";
let population = "125 Millions";

//2. assignment solution
console.log(country, continent, population);

*/

/*************************************/
/*
//DataTypes in JavaScript:-

//there are 7 primitive datatypes in JavaScript
//1.Number- it takes integer and decimal both

let x = 233;
let y = 4.5343;
let z = 0.898;

// 2.String- it takes text
//we have to specify string value inside single or double quotes

let fullName = "Mahendra Rajendra Rajput";
let firstName = "mahendrasing";

// 3.Boolean - it takes either true or false
//mostly used for decision taking

let age = 18;
if (age >= 18) {
  isAllowed = true;
  console.log(isAllowed);
} else {
  isAllowed = false;
  console.log(isAllowed);
}

// 4.Undefined - it takes nothing (empty value) we can provide the value later

let myAge;

myAge = 25;

let month;
console.log(month);
console.log(typeof month);

//here both value and type is undefined.

// to check the datatype of any variable we can use typeof.

// console.log(typeof true);
// console.log(typeof myAge);
// console.log(typeof isAllowed);
// console.log(typeof firstName);
// console.log(typeof fullName);

//JavaScript has dynamic typing, we dont have to manually specify the type of values inside the variables. instead it determines the datatype automatically

// Value has the type not the variable
//now lets see how dynamic typic works

let javaSriptIsFun = true;
console.log(typeof javaSriptIsFun);

//we can see it holds the boolean value, now lets change the value and its type

javaSriptIsFun = 7;
console.log(typeof javaSriptIsFun);
//now we can see the datatype is changed automatically to Number

// mostly used datatypes are number string undefined and boolean

// 5.Null - it does not contain anything
console.log(typeof null);

//it shows type as object in console but that is javasript bug or we can say for legacy purpose they kept it like that only.

*/

/**********************************/

/*
// three different ways of declaring variables in javascript.

// 1.let
// We use let keyword when variables can be changed later during the execution of our program. (mutating variable- changing)

let age = 40;
age = 50;

//2.const
//We use const keyword when the variable value will be constant
//we cannot change the value later if we declared the variable using const.
const birthYear = 1999;
// birthYear = 2004;
console.log(birthYear);

//this is not showing any error in the editor but if we check in the console we will see following error.

// script.js:222 Uncaught TypeError: Assignment to constant variable.at script.js:222:11

// We cannot declare empty const variable

// const job;

// here it showing error that declaration must be inialized.

// 3.var
// this should be completely avoided this is old way to define variable
//this works similar to let

var job = "programmer";
job = "teacher";

// we can even use variable without declaring them but that is not at all advisable

lastName = "Rajput";
console.log(lastName);

*/

/**************************************/
/*
//Operators

//substraction
const now = 2023;
const ageMahendra = now - 1999;

const ageAashu = now - 2004;
console.log(ageAashu, ageMahendra);

console.log(ageAashu / 2, ageMahendra / 10, 2 ** 3);

//Addition
let x = 10;
let y = 20;
let z = -20;
let total;

total = x + y + z;

console.log(total); // this should give us the ouput as 10 in console

// we can also use this operator to concatenate strings

const firstName = "mahendrasing";
const lastName = "rajput";
//const space = "";

console.log(firstName + " " + lastName);

let m = 10 + 5;
m += 10; // m = m + m 10
m *= 3; // m = m*3
console.log(m);

// multiplication:-

total = x * y;
console.log(total);

totalAge = ageAashu * ageMahendra;
console.log(totalAge);

// using ** for cubes double multiplication

console.log(4 * 4); //we know this 16

console.log(4 ** 4); // this will give 256 so here the logic is it will first multiply 4 by 4 four times so first time output will be 16 again it will multiply 16 by 4 so the result will be 64 and again it will multiply 64 by 4 so final output will be 256

//this is basically used to calculate to the power of any number
console.log(10 ** 2);

console.log(3 ** 3);

// 5 ** 3 means 5 to the power of 3 = 5*5*5

console.log(5 ** 3); //result will be 125
console.log(5 ** 2); //result will be 25

//short methods to write some operations
//assignment operators
let p = 20;

p += 10; //p = p + 10; = 30
console.log("p value is: ", p);

p *= 2; // p = p * 2;  =60 because now p has became 30 from above expression
console.log("p value is: ", p);

//now value of p is 60 from last expression

p++; //increases the value by 1
console.log("p value is: ", p); // result will be 61

p--; //decrease the value by 1
console.log("p value is: ", p); // result -> 60

//comparison operators
// >,<,>=,<=

console.log(ageAashu > ageMahendra); // result -> false because age of ashu is less than the age of mahendra

console.log(ageAashu >= 18); //result -> true, because age of aashu is 19 which greater than 18.

console.log(ageAashu <= 10); // result -> false, because the age is 19 which is not less than 10.

//simple way to write the above expression of calculating the age.
console.log(1999 - now < 2004 - now);

console.log("mahendra");

*/

/**********************************/

//Operators precedance

/*
//lets see following example to understand the operators precedance.
const now = 2023;
const ageAashu = now - 2004;
const ageMahendra = now - 1999;

console.log(now - 1999 > now - 2004);

//check the operator precedance table to understand the operators precedance from mdn

//link for mdn page
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//assgnment and ternairy operator has least precedance

//grouping has highest precedance that is expressions inside the brackets

// suppose we need to calculate the average of two numbers

let averageAge = ageAashu + ageMahendra / 2; // this will not give us the correct results it will show us 31

//so for correct result we will use parenthesis

averageAge = (ageAashu + ageMahendra) / 2; // now this will give us correct answer that is 21.5

console.log(ageAashu, ageMahendra, averageAge);

// First coding challenge

/* Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula:
BMI = mass / (height * height) 
(mass in Kg and height in meters).

Your task is to write some code to help them:

1.Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

2.Calculate BMI's of both using given formula and store them in follwing variables called BMIMark and BMIJohn.

3. Log the values to console.

4. create boolean variable markHigherBMI to check whether Mark has higher BMI than the John and log it to console too.

//Test data: Marks weight is 78kg and height is 1.69M and John's weight 92kg and height is 1.95m
//Solution:-


const massMark = 78; //KG
const heightMark = 1.69; //Meters

const massJohn = 92; //Kg
const heightJohn = 1.95; //meters

//formula to calculate BMI

//BMI = mass /(height * height)

const BMIJohn = massJohn / (heightJohn * heightJohn);

const BMIMark = massMark / (heightMark * heightMark);

console.log("BMI of John is:", BMIJohn);

console.log("BMI of Mark is: ", BMIMark);

const markHigherBMI = BMIMark > BMIJohn;

console.log("is mark BMI is higher than the John.", markHigherBMI);

*/

//strings and template literals
/*
const firstName = "mahendra";
const job = "developer";
const birthYear = "1999";
const now = 2023;

//we want following line as a output
// "I'm mahendra, a 24 years old developer!"

//lets concatenate the string to get the results
const mahi =
  "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + "!";

console.log(mahi);

//using above method it is quite hard and challenging to manage complex strings

//we have better method to implement the same that is by using template literals

//by using backtick `backtick` (usually located below escape button )

const mahiNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}!`;

console.log(mahiNew);

//by using backtick it becomes really simple to concatenate the strings.

//we can use backtick for normal string as well such as
const thisIsString = `Mahendra Rajendra Rajput`;
console.log(thisIsString);

//Nowadays many developers started to use the backtick for the strings

//we can even create multiline strings using backtick (template literals)

//lets see the old method to write multiline strings (without template literals)

const oldMultiLineString =
  "this is \n\
old way\n\
of writing \n\
multiline strings";
console.log(oldMultiLineString);

//now lets see the new way using template literals
const multiLineString = `this is 
new way
of writing
multiline 
string`;

console.log(multiLineString);

*/
/*************************************/
/*
//Decision Controls
//if else statements

//lets write a program to check whehter someone is allowed to apply for the driving licence.

let age = 19;

if (age >= 18) {
  console.log(`Congratulations! You are eligible to apply for the driving licence!...🚗
  please visit -> mahaparivahan.in to apply`);
} else
  console.log(`Sorry..😐 You are not eligible to apply for driving licence.
  Please try after ${18 - age} years.`);

//lets try one more example to derive in which century the person was born.
let birthYear = 2004;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
//in order to have access to the century variable outside of the if, else block we need to define the century variable outside of the if else blocks.

*/

/***************************************** */

//Type conversion and Type coercion

/*
//Type conversion:- type conversion is when we manually convert type of variable

//Type Coercion:- type coercion is automatically converting type of variable

// 1.Type Conversion:-

//lets see one example to under stand this better

//suppose we have birthYear of the person after adding 18 years to that the person will become full age

//suppose we want to take the birthYear as a user input then it will be in the form of string.

const birthYear = "1999";

console.log(birthYear + 18);

// we are expecting the output as it should add 18 years to our birthYear but the output will be -> 199918

//becuase it will simply concatenate the strings

// so for expected output we need to convert the string into number

console.log(Number(birthYear) + 18);

// now we will get the desired output.

//things to note that the birthYear variable still contains the string in it. we have just converted that for one calculation

console.log(birthYear, Number(birthYear)); // number will be printed in blue color and string will be in white, colors may vary in future.

console.log(birthYear + 18);

//type conversion to number from a string only work when string actually contains a number.

console.log(Number("mahendra")); // we will get the output as NaN (not a number).

//NaN is means invalid number if we check the type of NaN, it is actually a number

console.log(typeof NaN);

//this was all about converting strings into the numbers but we can aslo convert the numbers to string

const num = 18;

console.log(typeof num, num);

console.log(String(num)); //if the output is in white color it is a string

//by default the type of num will be number only.

// we can only covert number to a string or a boolean but we cannot convert something to undefined or null.

// 2.Type Coercion:-

console.log("I am " + 25 + " years old");

//output will be -> I am 23 years old

// here 'I am' and ' years old' are strings and 23 is number, but by type coercion javaScript automatically converts the 23 into a string

//here + operator triggers the coercion between number and string.

//whenever there is concatenation of number and string the plus operator converts the number into a string.

// - operator converts the string to a number

console.log("23" - "10" - "3");

// here string has been converted into number, so the output would be 10

console.log("23" - "3" + "10");

//now in above example we have used both + and - operator together with the string, so at first by using - operator it converted the string into a number so result of that is 20 and after that + operator is used with next string so it again converted the number into string and the output is 2010.

// now lets try * multiplication operator

console.log("23" * "2"); //output -> 46

//here also the string has been converted into a number by using * operator.

//guess the output game:

let n = "1" + 1;

n = n - 1;

console.log(n);

//output will be 10 because at first "1"+ 1 this will treated as a string and n value will be 11 and after that n=n-1 here we have - operator so it will be treated as number and 11-1 the value will be 10 so n value will be 10 in the end.
*/
//truthy and falsy
/*
// in javaScript there are 5 falsy values

// 5 falsy values: 0,'',undefined,null,NaN

//lets try to understand by some examples

console.log(Boolean(0)); //false

console.log(Boolean(undefined)); //false

console.log(Boolean("mahendra")); //true

console.log(Boolean({})); //true

console.log(Boolean("")); //false

console.log(Boolean(null)); //false

console.log(Boolean(NaN)); //false

//in practice the conversion to boolean is always implicit not explicit
//in other it always done automatically by type coercion, we don't have to do it manually
//it happens in two situations when when using logical operators and when using in conditions for if else statements.

const money = 0;

if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`);
}
//output->

//in above example we have used the condition as a 'money' value so javaScript will try to convert that into the boolean value.
//no matter what value we provide in condition javascript will always try to convert it to a boolean.

//lets try to understand with another example
//now we will take undefined variable as a condition

let height;
if (height) {
  console.log("YAY! Height is defined"); //if variable is defined
} else {
  console.log(`Height is undefined`); //if variable is not defined
}

//if the variable is not defined it will act as a falsy condition, because undefined is taken as falsy in javaScript, even if the variable is defined but it has the value 0 then also it will act as a false.

*/

//Equality operators
/*
//strict equality operator(===)
//we use === for exact equal comparison.
//this is called strict equality operator, this does not performs the type coercion of the values. both value should be exactly same for comparison.
const age = 18;
if (age === 18) {
  console.log(`You just became an adult :D`);
} else {
  console.log(`the value provided is not exactly same!`);
}

//Loose equality operator(==)
//we use == for similar values but with type coercion.
//in this case the values will be type coerced by javascript
//lets see one example to understand it better.

const numString = "18";
if (numString == 18) {
  console.log(
    "this has been converted by type coercion and the values are 'matching' after converting"
  );
} else {
  console.log(
    "this has been coverted by type coercion and the values does 'not match.'"
  );
}

//in this case we are checking the number value in condition but providing the string as variable value so that variable will be converted into number by type coercion

//To avoid the bugs in our code always use === operator

// now lets try a program for checking whether someone is exact 18 years old or not but by taking the input from user

const ageString = prompt("Please input your age!");

//by default the input that we take is of string type so here we are comparing the input with number type so we have to use the loose equality.
if (ageString == 18) {
  console.log("Your age is exact 18");
  console.log(typeof ageString);
} else {
  console.log("your age is not 18");
  console.log(typeof ageString);
}

// we know that we should completly avoid the loose equality operator so we will convert our input value into a number

const ageNumber = Number(prompt("Please input your age!"));

//here we have stored the input in number datatype
if (ageNumber === 18) {
  console.log("Your age is exact 18");
  console.log(typeof ageNumber);
} else {
  console.log("your age is not 18");
  console.log(typeof ageNumber);
}

//lets write one more program to find your favorite number is lucky or not.

const favoriteNumber = Number(prompt("Please provide your favorite number!"));

if (favoriteNumber === 17) {
  console.log(`Congratulations!! ${favoriteNumber} is a lucky number.`);
} else if (favoriteNumber === 7) {
  console.log(`Congratulations!! ${favoriteNumber} is a lucky number.`);
} else if (favoriteNumber === 27) {
  console.log(`Congratulations!! ${favoriteNumber} is a lucky number.`);
} else {
  console.log(`Sorry to say ${favoriteNumber} is not a lucky number.`);
}

//we can use else if to write multiple conditions.

//Not equal operator (!==)
if (favoriteNumber !== 7) {
  if (favoriteNumber !== 17) {
    if (favoriteNumber !== 27) {
      console.log(`lucky numbers are 7,17,27`);
    }
  }
}

//in this we can write nested if else that is if else statements inside another if else.
//here we have also used not equals to operator, basically here in above program we are checking if the given number is equals to 7,17 or 27 if it is not equals to all three then it should print the message in the console. -> lucky numbers are 7,17,27

*/

//Boolean Logic:-

//AND Operator(&&):- A && B
//true when ALL are true.
//check the truth tables for better understanding

//OR Operator(||):- A || B
//true when ONE is true.

//NOT Operator(!):- !A , !B
//inverts true/false value

//now lets try to understand them with the example

// age = 16;
//A. age is greater or equal 20 ->false
//B. age is less than 30 ->true
// here in this case A is false because the age is not greater or equal than 20 and B is true because the age is less than 30.

// !A -> true (inverted the output ) (! is for NOT)

// !B -> false (inverted the output)

// A && B -> false ( as all values are not true)

// A || B -> true (as one value is true)

// !A && B -> true (we know that the not A has become true)

// A || !B -> false ( as the b also became false after inverting)

// Important note! not operator has higher precedance than AND or OR operators
/*
//now lets see one example with code
// A. Aashu has a driving licence. -> false
// B. Aashu has a good vision -> true
// C. Aashu is tired -> false

const hasDrivingLicence = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDrivingLicence && hasGoodVision && !isTired);
console.log(hasDrivingLicence || hasGoodVision);
console.log(!hasDrivingLicence);

if (hasDrivingLicence && hasGoodVision && !isTired) {
  console.log(`Aashu can drive`);
} else {
  console.log(`Aashu please do not drive...`);
}

//Aashu will be able to drive when has the driving licence, has good vision and not tired.

//coding challenge 03:-
//there are two gymnastic teams: Dolphins and Koalas. They compete against each other 3 times. the winner with the highest average score wins the trophy!

//Your Task:

//1.Calculate the average score for each team, using the test data included below. the average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

//2.Compare the team's average scores to determine the winner of the competition, and print to the console:"Dolphins win the trophy" if Dolphins win, or "Koalas win the trophy" if Koalas win, or "Both win the trophy" if thier average scores are equal.

//Test data: Dolphins scored 96,108,89. Koalas scored 88,91 and 110.

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy 🏆");
// } else {
//   console.log("Both win the trophy 🏆");
// }

//BONUS 1: Include a requirement for a minimum score of 100. with this rule, a team should only wins if it has higher score than other team, and the same time a score of at least 100 points.

//Test data: dolphins: 97,112,101 and koalas: 109,95,123

const scoreDolphins = (100 + 95 + 18) / 3;
const scoreKoalas = (100 + 95 + 10) / 3;
/*
if (scoreDolphins > scoreKoalas) {
  if (scoreDolphins > 100) {
    console.log("Dolphins win the trophy 🏆");
  } else {
    console.log(
      "sorry but you do not pass the criteria for minimun average score"
    );
  }
} else if (scoreKoalas > scoreDolphins) {
  if (scoreKoalas > 100) {
    console.log("Koalas win the trophy 🏆");
  } else {
    console.log(
      "sorry but you do not pass the criteria for minimun average score"
    );
  }
} else if (scoreDolphins === scoreKoalas) {
  if (scoreDolphins > 100) {
    console.log("Both win the trophy 🏆");
  } else {
    console.log(
      "sorry but you do not pass the criteria for minimun average score"
    );
  }
}
*/

//this was one method by using nested if else we can also try by logical operators to simplify it
/*
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy.");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
  console.log("both wins the trophy");
} else {
  console.log("No one wins the trophy");
}

*/

//Switch Case:
//switch case is an alternative for if else statements
//lets write one program for breakfast list for each day
const day = `sunday`;

/*
switch (day) {
  case `monday`: //day === "monday"
    console.log("Idali");
    break; //break is used to stop the execution of switch
  case `tuesday`:
  case `friday`: //we can write two cases at once.
    console.log("Dosa");
    break;
  case `wednesday`:
    console.log("Puri Bhaji");
    break;
  case `thursday`:
    console.log("Lemon rice");
    break;
  case `saturday`:
    console.log("Bhel");
    break;
  case `sunday`:
    console.log("Upama");
    break;
  default:
    console.log("Not a valid day");
}

//switch act as strict method.
//we can manually specify the type for variable if type conversion is needed

//Challenge: to write the same code using if else statement

if (day === `monday`) {
  console.log(`Idali`);
} else if (day === `tuesday` || day === `friday`) {
  console.log(`Dosa`);
} else if (day === `wednesday`) {
  console.log(`Puri Bhaji`);
} else if (day === `thursday`) {
  console.log(`Lemon Rice`);
} else if (day === `saturday`) {
  console.log(`Bhel`);
} else if (day === `sunday`) {
  console.log(`Upama`);
} else {
  console.log("not a valid day");
}
*/

//Statements and Expressions
/*
//expressions

3 + 5;
1999;
true && false && !false;

//all above written are expressions

if (23 > 10) {
  const str = "23 is bigger";
}

//above written code is statements
*/
/**********************************************/

//Ternairy Operator:
// It is also called conditional operator
//we can use ternairy operator as a if else block.
/*
const age = 23;
// age >= 18
//   ? console.log("I would like to drink wine..🍷")
//   : console.log("I would like to drink water..💧");

//as we know it is a operator we will get results out of the expression from it we can assign those results to a variable
// lets see same example but in different way.

const drink = age >= 18 ? "wine..🍷" : "water..💧";
console.log(drink);

//lets see how we can achieve this same result using if else block.

let drink2;
if (age >= 18) {
  drink2 = "wine..🍷";
} else {
  drink2 = "water..💧";
}
console.log(drink2);

//from above example you can see how easy to achieve the same results using ternairy operator.

//we can also use the conditional operator inside the template literals

console.log(`I would like to drink ${age >= 18 ? "wine..🍷" : "water..💧"}`);

*/

//Challenge 4:
/*
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
*/
const bill = 275;

// const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

//to simplify the calculation of percentage we can write 0.15*bill for 15 percent and 0.2*bill for 20 percent

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);

//congrats!! you have completed the section1
