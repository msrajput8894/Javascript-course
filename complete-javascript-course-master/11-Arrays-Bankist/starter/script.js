'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Mahendra Rajput',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Ashwini Rajput',
  movements: [50000, 34000, -150, -790, -3210, -1000, 85000, -30],
  interestRate: 6.5,
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

const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = '';

  movs.forEach((movement, i) => {
    const type = `${movement > 0 ? 'deposit' : 'withdrawal'}`;
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${movement}₹</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(
    (acc, movement) => acc + movement,
    0
  );
  labelBalance.textContent = `${account.balance}₹`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(move => move > 0)
    .reduce((acc, move) => acc + move, 0);

  labelSumIn.textContent = `${incomes}₹`;

  const outgoings = account.movements
    .filter(move => move < 0)
    .reduce((acc, move) => acc + move, 0);

  labelSumOut.textContent = `${Math.abs(outgoings)}₹`;

  const interest = account.movements
    .filter(move => move > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}₹`;
};

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

const updateUI = function (account) {
  // Display Movements
  displayMovements(account.movements);

  // Display Balance
  calcDisplayBalance(account);

  // Display Summary
  calcDisplaySummary(account);
};

//Login Button event handler
let currentAccount;
btnLogin.addEventListener('click', e => {
  //prevent default
  e.preventDefault();
  currentAccount = accounts.find(
    account => account?.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome Back! ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  // to prevent default re-loading
  e.preventDefault();

  //

  const amount = Number(inputTransferAmount.value);
  console.log(amount);

  const receiverAccount = accounts.find(
    account => account.username === inputTransferTo.value
  );

  // Clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    receiverAccount.movements.push(amount);
    currentAccount.movements.push(-amount);
    console.log('Transfer Valid');

    // Update UI
    updateUI(currentAccount);
  }
});

// Event handler for loan button
btnLoan.addEventListener('click', e => {
  // prevents default reloading
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(move => move >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

// Event handler for close account button
btnClose.addEventListener('click', e => {
  // Prevent Default Reloading
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  } else {
    console.log(
      'Invalid Credentials... Please Provide the correct username and pin.'
    );
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

// Sort Movements
let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
});
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
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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

/*
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
*/
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

/*
const dogsAges = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  const humagAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const adultDogs = humagAges.filter(age => age >= 18);

  const average = adultDogs.reduce((acc, curr, i, arr) => {
    return acc + curr / arr.length;
  }, 0);
  return average;
};

const avg1 = calcAverageHumanAge(dogsAges);
console.log(avg1);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg2);

// const eurToUsd = 1.1;
// const totalDepositsUsd = movements
//   .filter(movement => movement > 0)
//   .map(movement => movement * eurToUsd)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(totalDepositsUsd);


// Challenge 3: create calcAverageHumanAge function using arrow function and use chaining
const calcAverageHumanAgeArr = ages => {
  const average = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, curr, i, arr) => {
      return acc + curr / arr.length;
    }, 0);
  return average;
};

const avg3 = calcAverageHumanAgeArr([16, 6, 10, 5, 6, 1, 4]);

console.log(avg3);
*/

/*
// FIND METHOD: we can use find method to retreive one element of an array based on a condition.

const firstWithdrawl = account1.movements.find(move => move<0)

// here the find method will look for values less than 0 and it will return the first value that will be below zero.
// it looks similar to filter method but the only difference is filter method returns new array and the find method returns the first element that satisfies the condition.

console.log(firstWithdrawl);

console.log(accounts);

const account = accounts.find(account => account.owner === 'Jessica Davis')
console.log(account);

let accountFor;
for(const account of accounts){
  if(account.owner==='Jessica Davis'){
    accountFor =  account;
    console.log(accountFor);
  }
}
// console.log(accountFor);
*/

/*

// SOME METHOD:
// to understand some methods lets first remind the includes method, include method checks if the provided value is present inside an array.
const abc = account1.movements.includes(-130);

console.log(abc);

// while some method checks if there are any values that satisfies the condition provided in call back function, if there are values satisfying the condition it will return true, or else it will return false.

const anyDeposits = account1.movements.some(movement => movement > 0);
console.log(anyDeposits);

// EVERY METHOD: every method is same as some method but the key difference is every methods will only return true if all elements inside an array satisfies the condition.

console.log(account4.movements.every(move => move > 0)); // true as the account4 only has deposits.
console.log(account1.movements.every(move => move > 0)); // false as the account1 also contains the negative values which are basically withdrawls.

// Note:- up until now we have used the callback function inside the method parameters but we can create separate call back function and then we can use the same function in different different methods.

// separate callback
const deposit = move => move > 0;
console.log(account4.movements.every(deposit));
console.log(account4.movements.some(deposit));
console.log(account4.movements.filter(deposit));

*/

/*

// FLAT METHOD: flat method basically converts the nested array into single array, if the array is nested to only one lever then we simply use flat() method to convert it into single array, incase the level of nesting is more then we have to provide the level number as parameter to flat method based on a number it will convert the array from deeply nested to normal array.
const arr = [[1, 2, 3], [4, 5, 6, 7], 8, 9, 10];
console.log(arr.flat());

const arr2 = [[[1, 2], 3], [4, [5, 6, [55, 66]], 7], 8, [9, [10]]];
console.log(arr2.flat(2));
console.log(arr2.flat(3));


// FLAT
const overallBalance = accounts
  .map(account => account.movements)
  .flat()
  .reduce((acc, move) => acc + move, 0);

console.log(overallBalance);

// it turns out that using map method and then to convert into single array using flat method is common operation so to make it more simple and easy we have another method is which is flatMap(). one thing to note with flatmap we can only go one lever deeper to convert the arrays, if you need to go more deeper then make sure to use flat and map methods separately.

// FLATMAP
const overallBalance2 = accounts
  .flatMap(account => account.movements)
  .reduce((acc, move) => acc + move, 0);

console.log(overallBalance2);

*/

/*
// SORT METHOD:

// sort method basically sort the strings, so in case we are sorting the numbers using simply .sort() method it will sort those numbers as per strings

const owners = [
  'Mahendra',
  'Ashwini',
  'Sukoon',
  'Aashu',
  'Mahi',
  'zebra',
  'akshu',
  'Zach',
  'Thomas',
  'AKSHU',
];

owners.sort();

console.log(owners);

// output: ['AKSHU', 'Aashu', 'Ashwini', 'Mahendra', 'Mahi', 'Sukoon', 'Thomas', 'Zach', 'akshu', 'zebra']

// so as we can see from above output, the capital letter values are sorted first then the small letters are give preference.

// account1.movements.sort();
// console.log(account1.movements);

//output: [-130, -400, -650, 1300, 200, 3000, 450, 70]
// if you see above output for numbers the out is not as expected, because the string method is basically sorts the array by considering the values as a string.

// so get correct output we can provide the callback function to sort method.

console.log(account1.movements);
//output:
//[200, 450, -400, 3000, -650, -130, 70, 1300]

// Ascending
// a and b is basically current and next value in the below call back function
account1.movements.sort((a, b) => {
  //return < 0, a b (keep order as it is)
  //return > 0, b a (reverse the order)

  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});

console.log(account1.movements);

// Descending
account1.movements.sort((a, b) => {
  //return < 0, a b (keep order as it is)
  //return > 0, b a (reverse the order)

  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
});
console.log(account1.movements);

// this above code works for strings as well, lets try to sort the strings in descending order using same code.
owners.sort((a, b) => {
  //return < 0, a b (keep order as it is)
  //return > 0, b a (reverse the order)

  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
});

console.log(owners);
// this will give the owners arrays in descending order.

// incase we are just working with numbers we can even shorten this logic.
// as we know if a > b then a - b will be positive value (value>0) and if a < b then a - b will be negative value. (value < 0). note that if the a === b then the order of values will be as it is.
account2.movements.sort((a, b) => a - b);
console.log(account2.movements);

// similarily for // descending we can do b - a;

account2.movements.sort((a, b) => b - a);

console.log(account2.movements);


*/

// until now we learned following ways of creating arrrays.

// 1.
const arr = [1, 2, 3, 4, 5, 6, 7];

// 2.
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(arr, arr2);

// in above new Array constructor if we only specify one element, then the Array constructor creates an empty array with specified element length, note that this will only happen if we provide the number as an element that too without decimal.

// console.log(new Array(7000)); // even if the number is large it will create an empty array with that length here in this case empty array of length 7000.
console.log(new Array(7)); // empty array of length 7

console.log('a'); // as usual normal array which has only one element which is 'a'
// console.log(3.4); // invalid it will consider the empty array of invalid length so this is invalid and will throw error.

const x = new Array(5);

console.log(x); // empty array of length 5.

console.log(x.map(() => 5)); // nothing will happen it will still be an empty array of length five.

// so most of the methods do no work on this empty array but there is one method which does work which is fill method.

//FILL METHOD: fill method basically fills the based on call back function code.

// x.fill(17) // x array will be filled with the value 17 at all positions.

// x.fill(17, 2) // x array will be filled with the value 17 but starting from index 2 till the end.

x.fill(17, 1, 4); // x array will be filled with value 17 starting from index 1 to the index 4-1
console.log(x);

// it is not necessary to use fill method with empty array, it can be used on existing arrays as well.
arr.fill(3, 3, 5);

console.log(arr);

// Array.from():

const y = Array.from({ length: 10 }, () => 1);
console.log(y); // new array of length 10 will be created and will be filled with value 1 at all positions

const z = Array.from({ length: 10 }, (_, i) => i + 1); // here underscore means throw away variable. which we dont need in this case.
console.log(z); // new array of length 10 will be created and will be filled the values from 1 to 10

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('₹', ''))
  );
  console.log(movementsUI);
});

// Array methods practice:

// 1. calculate all deposits sum for all accounts in the bank

const depositSums = accounts
  // .map(acc => acc.movements)
  // .flat()
  .flatMap(acc => acc.movements) // we can use flatMap instead of using map and then flat method.
  .filter(move => move > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(depositSums);

// 2. calculate number of deposits greater than or equals one thousand.

// first way to solve this problem
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(move => move >= 1000).length;

console.log(numDeposits1000);

// second way:
const numDepositsOver1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDepositsOver1000);

// 3. calculate all deposits and withdrawls

const { deposits, withdrawls } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);

      sums[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
      return sums;
    },
    { deposits: 0, withdrawls: 0 }
  );

console.log(deposits, withdrawls);

// 4. convert the sentence into title case.

//this is a nice title => This Is a Nice Title

const convertToTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'and', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertToTitleCase('This is a nice title'));
console.log(convertToTitleCase('This is a LONG title but not too long'));
console.log(convertToTitleCase('and here is an another title with an EXAMPLE'));
console.log(convertToTitleCase('This is aslo anotHEr TITLE and bit wierd'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => {
  dog.recFood = dog.weight ** 0.75 * 28;
});

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'
  }`
);

// 3.

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);


// 4.
//"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.

console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
//current > (recommended * 0.90) && current < (recommended * 1.10)

const DogsEatingOkay = dog => dog.curFood > (dog.recFood * 0.9) && dog.curFood < (dog.recFood * 1.1)
console.log(dogs.some(DogsEatingOkay));

// 7.
console.log( dogs.filter(DogsEatingOkay));

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogsCopy);
