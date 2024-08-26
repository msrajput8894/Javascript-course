'use strict';

//we compute the values of properties inside of an objects literals

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[2 + 3]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

// Data needed for first part of the section
const restaurant = {
  restName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //before ES6 to call object literals
  //openingHours: openingHours,

  //after ES6 enhanced object literals
  openingHours, // name should be same

  //another enhancement is we can write the function in simpler syntax like below one, here we dont have function keyword or colon ':'
  orderDelivery({ starterIndex = 0, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};
////////////////////////////////////////////////////////////////

//Optional chaining: in optional chaining if certain property does not exist then undefined is returned immediately
/*
// console.log(restaurant.openingHours.mon.open); //as the monday 'mon' is not present in openingHours object this will give us the error so to handle this we can use if statement

//some restaurant might not have the concept of opening hours itself in that case we have to check if opening hours is present or not
// Without Optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//lets try for fri which actually do exist.
if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}

//With Optional chaining:
console.log(restaurant.openingHours?.mon?.open); // this checks if the property before '?' exists if not returns undefined.

console.log(restaurant.openingHours?.fri?.close);

//Example:

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist.

// Arrays
const users = [
  {
    userName: 'Mahendra',
    email: 'msrajput8894@gmail.com',
  },
  {
    userName: 'Aashu',
    email: 'Aashu123@gmail.com',
  },
];

console.log(users[1]?.userName ?? 'User does not exist'); //with optional chaining

*/
////////////////////////////////////////////////////////////////
/*
//Examples:
restaurant.orderDelivery({
  time: '22:30',
  address: '305, Sunshine Elite PG, Hyderabad 500032',
  mainIndex: 0,
  starterIndex: 2,
});

//with some default options
restaurant.orderDelivery({
  address: '435 Mohadi, Jamner 425114',
  starterIndex: 2,
});

////////////////////////////////////////////////////////////////

// Destructuring Objects:

const { restName, openingHours, categories } = restaurant;
console.log(restName, openingHours, categories);
// here there are three variables created for restName, openingHours, categories

// Renaming variables
const {
  restName: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values:
//let's see default values for objects destructuring
// const { menu, starterMenu: starters } = restaurant;
// console.log(menu, starters); // here menu will be undefined because it does not exist in restarant object.

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // now it will show empty array for menu.

//Mutating variables:

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// {a, b} = obj; //Unexpected token error we cannot assign curly braces to anything so the solution is to wrap them inside parenthesis

({ a, b } = obj);
console.log(a, b);

// Nested objects:
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

*/
////////////////////////////////////////////////////////////////

// Destructuring Arrays:
/*
const arr = [3, 6, 8, 4];

const [a, b, c, d] = arr;
console.log(a, b, c, d); // 3 6 8 4
console.log(arr);

//let's try same on our restaurant object

const [first, second] = restaurant.categories;
console.log(first, second); //Italian Pizzeria

//now if we want to skip one element in between

const [first1, , third] = restaurant.categories;
console.log(first1, third);

// Switching variables:

// suppose we want to switch categories of the restaurant. In our object main category is Italian and secondary is Pizzeria, we want Pizzeria as main category and Italian as a secondary category.

let [main, secondary] = restaurant.categories;

//lets see the without destructuring approach:
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Now lets see with destructuring approach:
[secondary, main] = [main, secondary];
console.log(main, secondary);

// Receive two return values from  a function

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

//let's try nested destructuring now:
const nested = [2, 4, 7, [5, 3]];
// const [i, j, k, l] = nested;
// console.log(i, j, k, l); // 2 4 7 [5, 3]

const [i, , , [j, k]] = nested;
console.log(i, j, k); // 2 5 3

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined, because here we have only two values we are trying to access three values so third value will be undefined so to avoid these bugs we can set default values to our destructuring variables

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8 9 1

*/
//////////////////////////////////////////////////////////////////////////////////

// Spread Operator (...)
/*
//we can get all the elements inside array using spread operator

const arr = [7, 8, 9];
//without spread operator
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

// with spread operator:
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

//lets say that we want another element in our menu
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//here we have created completely new array and not manipulating old array.
//spread operator helps to get all the elements out of an array.

console.log(...newMenu);

//to create shallow copy of an array and merge two arrays together

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterable: arrays, strings, maps, sets etc but not Objects
const str = 'mahendra';
const letters = [...str, ' ', 'S.'];
console.log(...letters);

//real world example
const ingredients = [
  // prompt("Let's make pasta! ingredient 1?"),
  // prompt('ingredient 2?'),
  // prompt('ingredient 3?'),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
// here above two gives us same results so spread operator much more easy approach in this case.

// since 2018 spread operator also works on objects
//creating new object
const newRestaurant = { foundedIn: 2019, ...restaurant, founder: 'Mahendra' };
console.log(newRestaurant);

//creating shallow copy:
const restarantCopy = { ...restaurant };
restarantCopy.restName = 'ristorante Roma';
console.log(restarantCopy.restName);
console.log(restaurant.restName);
*/

///////////////////////////////////////////////////////////////////

//Rest patterns
/*
//rest is apposite of an spread operator, spread operator unpacks the elements from an arrays and rest packs the elements in an array

// 1) Destructuring
// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//Note: 1) rest pattern should be always last in javascript assignment in order it know rest of the elements
//  2) there can be only one rest element in assignment

//rest in Objects:

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) Functions:
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 5, 4, 3, 7, 4);
add(8, 2, 4, 6, 9, 3, 6, 7);

const x = [23, 5, 13, 9, 3];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

//Note: Spread operator is used where we write values seperated by commas and Rest operator is used where we write variable names seperated by commas


*/
////////////////////////////////////////////////////////////////////

// Short Circuiting (&& and ||):-
/*
// they can use any Data type, return any data type, they can do short-circuiting

// Or Operator ( || )
//if one of the value is true the expression is evaluated to true, if fist value itself is true it will not evaluate other values.

console.log('--------------OR--------------');

console.log(3 || 'jonas'); // 3
console.log('' || 'mahendra'); // mahendra
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'Aashu' || 23 || null); // Aashu

restaurant.numGuests = 11;
//without short-circuiting
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//with short-circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND operator ( && )
console.log('--------------AND-------------');

//and operator is only true if all the operands are true, if one of them is false it will be false and if firstever operand or element is false then it will not evaluate other operands or elements. 
//if all elements are true it will return last truthy value.
//if all elements are false it will return last false value
// it will return first falsy value if all are not false

console.log(0 && 'mahi'); // 0
console.log(7 && 'Aashu' && 17); //Aashu

console.log('hello' && 'mahi' && 23 && null && true); //null

// Practical Example:
//without &&  operator
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

//with && operator
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

*/

///////////////////////////////////////////////////////////
/*
// Nullish Coalescing operator:

restaurant.numGuests = 0;

//with or operator
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//Nullish: it considers null and undefined as a falsy value( Not 0 or '')
const guest3 = restaurant.numGuests ?? 10;
console.log(guest3);
*/

///////////////////////////////////////////////////////

// OR Assignment operator:
/*
const rest1 = {
  restName: 'Punjab da Dhaba',
  owner: 'Dharmendar Singh',
  numGuests: 0,
};

const rest2 = {
  restName: 'Hotel Chaitanya',
  owner: 'Chaitanya Purohit',
};
// here we are trying to validate if numGuest variable is actually present in the object or not if not assigning default value to it.
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

//note that above operator does not work as expected in case of 0
// so the solution is nullish assignment operator

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// AND assignment operator:
rest1.owner = rest1.owner && '<ANONYMOUS>';
console.log(rest1);

rest2.owner &&= '<ANONYMOUS>';
console.log(rest2);

*/

////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');

printGoals(...game.scored);

// 7.
team1 < team2 && console.log('team1 is more likely to win');

team2 < team1 && console.log('team1 is more likely to win');

*/

/////////////////////////////////////////////////////////////

// Looping over arrays
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // we can use continue and break, by using this loop method we can get each element from an array one by one.

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

*/

////////////////////////////////////////////////////////////////////////////

//Optional chaining:
//?. is optional chaining operator, it checks if the property exists or not if it exists then then only next operation will be performed, or else it will return undefined immediately.

if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

console.log( restaurant.openingHours?.mon?.open );

//example:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//methods:
console.log( restaurant.order?.(0, 1)?? 'method does not exist');
console.log( restaurant.orderRessoto?.(0, 1)?? 'method does not exist');

// Arrays:
const users = [{name: 'mahendra', email: 'msrajput8894@gmail.com'}]

console.log(users[0]?.name?? 'User array is empty');

// Sets:-

// set is basically just collection of unique values, it does not contain any duplicate value.
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet); //{'Pasta', 'Pizza', 'Rissoto'}

//Just like an array sets are iterable.
// and even strings are also iterable
console.log(new Set('Mahendra')); //  {'M', 'a', 'h', 'e', 'n', 'd', 'r'} so here last a is skipped becuase it is duplicate we already had 'a' in our set at index 1.

// to get the size of an set
console.log(orderSet.size); // three

//capital letters and small letters treated differently, which means they will not be considered as duplicate.
console.log(new Set('Aashu')); //{'A', 'a', 's', 'h', 'u'}

//we can check if certain element is presen inside set
console.log(orderSet.has('Pizza')); //true
console.log(orderSet.has('Pizza', 'Pasta')); //true
console.log(orderSet.has('Pizza', 'Pasta', 'Bread')); //true, note that the bread is not there in our set still it says true.
console.log(orderSet.has('Bread')); // false

// Adding new element to a set

orderSet.add('Garlic Bread'); // this will be added
orderSet.add('Garlic Bread'); // this will be skipped because it already contains 'Garlic Bread' from above step.
console.log(orderSet); //{'Pasta', 'Pizza', 'Rissoto', 'Garlic Bread'}

// Deleting element from a set

orderSet.delete('Rissoto'); // 'Rissoto' will be deleted from a set.
console.log(orderSet); //{ 'Pasta', 'Pizza', 'Garlic Bread'}

orderSet.delete('Burger'); // notice that our set does not contain any 'Burger' so it will be as it is we will not get any error.

// To clear or delete all the elements from the set.

// orderSet.clear();
console.log(orderSet); //{size: 0}

// Looping over in sets
for (const order of orderSet) {
  console.log(order);
}

// Used case or Example:

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);

//Suppose we need what are the positions in our restaurant or may be we can say unique positions or jobs.
const staffUnique = new Set(staff);
console.log(staffUnique); // here we will get an set of unique values from staff array but suppose we want it in array not as a set then we can use spread operator here.

const staffUniqueArr = [...new Set(staff)];
console.log(staffUniqueArr);

//////////////////////////////////////////////////////////////////

// Maps:

//just like an object the data is stored in key value pairs in maps.
// in objects keys can only of string type but in maps we can have any type of key.

const rest = new Map();
rest.set('restName', 'Classico Italiano');
rest.set(1, 'Akurdi, Pune');
console.log(rest.set(2, 'Wagholi, Pune'));

rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
// .set(true, 'You will get discount here :)');

console.log(rest);

// to get the data from the maps we use get method.
console.log(rest.get('restName'));
console.log(rest.get(true));
console.log(rest.get(1));

//suppose we need to check at the current time if restarant is open or not
const time = 11; // now here if time is in between 11 to 23 then we are open either we are closed.
console.log(rest.get(time >= rest.get('Open') && time <= rest.get('Close')));

//to check if certain element is present:
console.log(rest.has('Categories')); // true

// to delete certain element:
rest.delete(2);
console.log(rest);

// to check size of map
console.log(rest.size);

// to clear the map completely
rest.clear();
console.log(rest);

// adding array as key in maps
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// we can even set html element as a key value in map

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

//Another easy way to defining the set

const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Python'],
  [4, 'JavaScript'],
  ['correct', 4],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

// Converting object to map:
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iterations or looping over on the maps
//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Option ${key}: ${value}`);
}

// const answer = Number(prompt('Your Answer'));
const answer = 4;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
/////////////////////////////////////////////////////////////////////////////

// STRINGS IN JAVASCRIPT:-

const airline = 'Air India Airlines';
const plane = 'A320';

// Getting the elements out from the string
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B147'[2]);

// checking the length of the string.
console.log(airline.length);
console.log('B383'.length);

// to check the index of particular element from the string.
console.log(airline.indexOf('r'));
console.log(airline.indexOf('i'));

// to check the last index.
console.log(airline.lastIndexOf('i'));

// we can also check from which index which word is starting
console.log(airline.indexOf('India'));
console.log(airline.indexOf('india')); // this will result in -1 because it is case sensitive.

// STRING METHODS
// all these methods will return a new string therefore we can store them into new variables to use them in future.

// 1. slice method:-
//this method will slice(cut) the string from the index we provide.
console.log(airline.slice(4));

// we can aslo provide ending index so it will cut the string from starting index to ending index.
console.log(airline.slice(4, 9)); // 9 - 4 will be the length of the output string 5.

// till upto this point we have hardcoded the index values for these string but in most of the cases we don't know the strings we will receive from inputs.
// so to fetch that data we can use the slice method.

console.log(airline.slice(0, airline.indexOf(' '))); // Air
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Airlines
console.log(airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' '))); // India

// we can even specify negative index so that it will start counting from the end.
console.log(airline.slice(-2));
console.log(airline.slice(-8));
console.log(airline.slice(1, -1));

// lets create one fuction to check whether someone got middle seat or not.

const checkMiddleSeat = function (seat) {
  //B and E are middle seats in small planes
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😬');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// as the strings are primitive datatypes they should not have all these methods right? but behind the scene javaScript converts strings into objects. lets see below example to understand it better.

console.log(new String('Mahendra'));
/* output:-
String {'Mahendra'}
0: "M"
1: "a"
2: "h"
3: "e"
4: "n"
5: "d"
6: "r"
7: "a"length: 8[[Prototype]]: String[[PrimitiveValue]]: "Mahendra"
*/
console.log(typeof new String('Mahendra')); // Object

// if we use methods on them it will be again converted to string type.
console.log(typeof new String('Mahendra').slice(1)); // String

// 2 Lower and Upper case methods:-
// these methods are used to convert the string to lower case or either upper case

console.log(airline.toLowerCase()); // air india airlines
console.log(airline.toUpperCase()); // AIR INDIA AIRLINES

//fix capitalization in name
const passenger = 'mAheNdra'; // Mahendra
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// lets try to create a function which takes any passenger name and fixes the capitalization.
const fixCapitalizationInPassengerName = function (passengerName) {
  //passengerName = prompt('Enter your name');
  passengerName = 'AKasH';
  const passengerNameLower = passengerName.toLowerCase();
  const passengerNameCorrect =
    passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
  console.log(passengerNameCorrect);
};

fixCapitalizationInPassengerName();

// 3 Trim():-
// Comparing emails
// using trim method we can cut the whitespace from the start and end.
const email = 'msrajput8894@gmail.com';
const loginEmail = '   MsRajput8894@Gmail.com \n'; // note: \n is considered as a whitespace.

// const lowerEmail = loginEmail.toLowerCase(); // to make it lower case
// const trimmedEmail = lowerEmail.trim(); // to trim whitespace
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim(); // methods returns string we can use another method on that string.
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// 4. replace method
// REPLACING
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288.97$

// we can even replace a complete word.
const announcement =
  'All the passenger come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate')); // this will replace the door from the first place only. i.e. output will be as follow: All the passenger come to boarding gate 23. Boarding door 23!

// if we want to replace all the occurences of particular word then we can use replaceAll method.

// 5. replaceAll
// this method replaces all of the occurences of a particular word. note: this method is case sensitive as all other methods are.
console.log(announcement.replaceAll('door', 'gate')); // All the passenger come to boarding gate 23. Boarding gate 23!

// 6. includes
// this method checks if the particular word or charecter is present inside a string.

const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320')); // true
console.log(plane1.includes('boing')); // false

// 7. startsWith and endsWith methods
// these methods checks if the string starts with particular letters or ends with particular letters.
console.log(plane1.startsWith('Air')); //true
console.log(plane1.endsWith('o')); // true

// we can use this methods to check if the plane is part of new Airbus family:

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a Laptop, some Food and a pocket Knife');
checkBaggage('Camera and clothes');
checkBaggage('Got some snacks and a Gun for protection');

// 8. split method:
// this method is used to split strings based on some parameters(commanly used space(' '))

console.log('a+very+nice+string'.split('+'));
console.log('Mahendra Rajput'.split(' '));
// this will seperate the strings basen on the '+' and in second example by ' ' and will store the values in an array
// we can use the power of destructuring to directly store these values into variables.

const [firstName, lastName] = 'Mahendra Rajput'.split(' ');
console.log(firstName); // Mahendra
console.log(lastName); // Rajput

// 9. join method:
// this method is used joined muliple strings into one by adding one devider parameter in between.
const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);

// lets create one function to capitalize the fist letter of name.

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1)); // there is another way to achieve same results.
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('mahendra rajput');
capitalizeName('ashwini subhash rajput');

//  10. padding methods:
const message = 'Go to gate 23!';
console.log(message.padStart(25, '*').padEnd(38, '*'));
console.log('mahendra'.padStart(25, '*').padEnd(40, '*'));

// lets see a real world example whenever we see the credit card number on the internet we only see last four digits.
const maskCreditCard = function (number) {
  const str = number + ''; // this will automatically convert the number into a string as one of the operant in addition operation is string.
  const last = str.slice(-4);
  const maskedNumber = last.padStart(str.length, '*');
  console.log(maskedNumber);
};

maskCreditCard(7362926362972966);
maskCreditCard(7620729263629295);
maskCreditCard(7620729263);

// 11. repeat method:
// this method repeats the given string muliple times

const message2 = 'Bad Weather... All Departures Delayed... ';
console.log(message2.repeat(3));

// lets create one function where we can update the number of planes waiting in line
const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planeInLine(5);
planeInLine(3);
planeInLine(12);

// Coding challenge on strings
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }

  //console.log(row);
});

// Strings method practice:
///////////////////////////////////////
// String Methods Practice

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;
  console.log(output.padStart(46));
}
