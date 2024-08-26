'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((movement, i) => {
    const type = `${movement > 0 ? 'deposit' : 'withdrawal'}`;
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, movement) => acc + movement, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

const createUsernames = function (accounts) {
  accounts.forEach(account => {
    return (account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join(''));
  });
};

createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Arrays are basically objects in javascript so we can use methods on arrays.

/*

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE: this method does not actually changes the array, instead it returns new array with the modifications.

console.log( arr.slice(2)); // will return the array starting from index 2

console.log(arr.slice(2, 4)); // will return the array starting from index 2 and ending at index 4-1 = 3. the length of the array will be 4-2 = 2

console.log(arr.slice(-1)); // will return last element of an array

console.log(arr.slice(2, -1)); // will return the array starting at index 2 and ending at length - 1

console.log(arr.slice()); // this will return shallow copy of the array.

console.log([...arr]); // even this will return shallow copy of the array. incase we need to chain multiple array methods on shallow copy then use first method which is using slice method.

// SPLICE: this is similar as slice method, the only differece is this method actually changes the original array, it does returns the new array.but it also removes the returned elements from original array.

//console.log(arr.splice(2)); // this will return the new array starting from index 2 and will remove those returned element from original array. ['c', 'd', 'e']
console.log(arr); // ['a', 'b']

// we mostly use this splice method to remove the last element of an array.

arr.splice(-1);
console.log(arr);

arr.splice(0, 2); // here the second parameter is not a index number instead it is number of elements we want to delete starting from the first parameter which is in this case is 0 index, so it will delete two elements starting from 0 index (i.e. at index 0 and at index 1)
console.log(arr);

// REVERSE: reverse methods reverse the array, and it aslo mutates the original array.
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

arr2.reverse();
console.log(arr2); // array will be reversed.

// CONCAT:  this method is used to concatenate the array. this method does not mutate the original array.

const letters = arr.concat(arr2); // this will combine two different arrays together, first array will start with arr, and then it will join arr2 with it.
console.log(letters);
console.log([...arr, ...arr2]); // we can achieve the same result using spread operator.


// JOIN: joins the elements with a specified separator, and this one also does NOT mutate the array.

console.log(letters.join(' '));
console.log(letters.join(', '));
console.log(letters);


*/

/*
// AT:

const arr = [17, 27, 88];

console.log(arr[0]); // this will give the element at index 0
console.log(arr.at(0)); // this will also give the element at index 0

//getting last element of an array:

console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// at method also works on strings


*/
///////////////////////////////////////////////////////////

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// using for of :
// for(const movement of movements){
for(const [i, movement] of movements.entries()){ // this way we can get access to current index
  if(movement>0){
    console.log(`Transaction ${i + 1}: You deposited: ${movement} Rupees`);
  } else{
    console.log(`Transaction ${i + 1}: You withdrew: ${Math.abs(movement)} Rupees`); // Math.abs removes the positive or negative sign.
  }
}



// Using forEach method:
console.log('------------FOREACH METHOD-------------');

movements.forEach((movement, i, arr)=>{
  if(movement>0){
    console.log(`Transaction ${i + 1}: You deposited: ${movement} Rupees`);
  } else{
    console.log(`Transaction ${i + 1}: You withdrew: ${Math.abs(movement)} Rupees`); // Math.abs removes the positive or negative sign.
  }
})

// forEach method actually calls the call back function to do the task.

// note in case of forEach method,it always passes the current element with the index of that element and whole array to call back function. 

// the name of the parameter does NOT matter in case of forEach but the ORDER of parameter DOES MATTERS.

// First parameter: the current element, Second parameter: index of the current element and Third parameter: whole array.

// When to use for of and forEach?
//WE CANNOT BREAK OUT OF FOREACH METHOD: continue and break Keywords does not work in forEach method.

// in case we need to break out for a loop for some reason then use for of loop, and if we need to loop over the entire array then go with forEach method.


// forEach method with maps and sets:

// FOREACH WITH MAPS:

const currencies1 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['INR', 'Indian Rupees'],
]);


currencies1.forEach((value, key, map)=>{
  console.log(`${key}: ${value}`);
})

// in maps the forEach method can take three parameters first: value, second: key and third: map.

// FOREACH METHOD IN SETS:

const currenciesUnique = new Set(['USD', 'INR', 'INR', 'EUR', 'USD', 'GBP'] );

console.log(currenciesUnique);

currenciesUnique.forEach((value, key, map)=>{
  console.log(`${key}: ${value}`);
})

// in sets there are no keys but still the javascript developers/creators kept the same syntax as map, so we don't actually need key in sets. so we ignore that.


*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function(dogsJulia, dogsKate){
 const copyDogsJulia = dogsJulia.slice(1, -2);

 const dogs = copyDogsJulia.concat(dogsKate);
 console.log(dogs);

  dogs.forEach((dog, i)=>{
    dog>=3? console.log(`Dog number ${i +1} is an adult, and is ${dog} years old`): console.log( `Dog number ${i + 1} is still a puppy 🐶`) 
  })
  
}

checkDogs(dogsJulia, dogsKate)
*/

/*
// MAP METHOD:  map method also takes a callback function and returns new array with the whatever returned from that call back function.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUsd = movements.map(movement => movement * eurToUsd);
console.log(movements);
console.log(movementsUsd);

const movementsDescription = movements.map(
  (movement, i) =>
    `Transaction ${i + 1}: You ${
      movement > 0 ? 'deposited' : 'withdrew'
    }: ${Math.abs(movement)} Rupees`
);

console.log(movementsDescription);
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
// FILTER METHOD: - this filters the array, and returns the filtered array only.

const deposit = movements.filter(movement => {
  return movement > 0;
});
console.log(deposit);

// const depositFor =  [];

// for(const move of movements) if(move>0) depositFor.push(move)
// console.log(depositFor);

const withdrawal = movements.filter(movement => movement < 0);
console.log(withdrawal);
*/
// REDUCE METHOD: we convert all the elements in an array to one single value.

console.log(movements);

//accumalator is like a snowball, keeps adding
const balance = movements.reduce((acc, cur) => acc + cur, 0);

// reduce method has two parameters, first parameter is call back function and second parameter is initial value of accumalator.
console.log(balance);

// maximum value using reduce method.

const maximum = movements.reduce(
  (acc, curr) => (acc > curr ? acc : curr),
  movements[0]
);

// we kept the second parameter movements[0], becuase we have negative values in movements array so whenever we will compare with negative values 0 will always be greater than them, in this case it was fine, but what if we need to find the minimum value which can be negative then that would have caused problem.

console.log(maximum);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const dogsAges = [5, 2, 4, 1, 15, 8, 3];


const calcAverageHumanAge = function (ages){
 const humagAges =  ages.map(age => age<= 2? age * 2: 16 + age * 4)
 const adultDogs = humagAges.filter(age => age>=18)

const average = adultDogs.reduce((acc, curr, i, arr)=>{
  return acc + curr/arr.length;
 },0)
return average;
}

const avg1 = calcAverageHumanAge(dogsAges);
console.log(avg1);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg2);
