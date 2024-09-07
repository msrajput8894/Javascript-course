'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Mahendrasing Rajput',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-05-08T14:11:59.604Z',
    '2024-05-27T17:01:17.194Z',
    '2024-09-04T23:36:17.929Z',
    '2024-09-06T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN', // de-DE
};

const account2 = {
  owner: 'Ashwini Rajput',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-09-03T18:49:59.371Z',
    '2024-09-06T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  
};

// Formats the currency according to locale and currency
const formatCurrency  = function(value, locale, currency){
 return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value)
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCurrency(mov,acc.locale, acc.currency)
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurrency(acc.balance,acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent =  formatCurrency(incomes,acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(Math.abs(out),acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(interest,acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// Experimenting with intl API
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'short', // long, 2-digit, numeric
//   year: 'numeric', // 2-digit
//   weekday: 'short' // narrow, long
// }

// const locale = navigator.language;
// console.log(locale);
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', // long, 2-digit, short
      year: 'numeric', // 2-digit
      // weekday: 'short' // narrow, long
    }
    
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)

   

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add Loan request date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
// in javascript the numbers are always treated as decimal no matter if we write them as a integer.
console.log(23 === 23.0);

// we know that numbers are stored in binary form, so storing decimal numbers is quite a challenge.
//Base 10 -> 0 to 9, 1/10 = 0.1, 3/10 = 3.3333333...
//Binary base 2 -> 0 1

console.log(0.1 + 0.2); // expected output is 0.3 but the actual output is weird- 0.30000000000000004

console.log(0.1 + 0.2 === 0.3);

// conversion
console.log(Number('23'));
console.log(+'23');

// parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN, String must start with a number

console.log(Number.parseInt('  2.5rem  ')); // 2
console.log(Number.parseFloat('   2.5rem ')); // 2.5

console.log(parseFloat('3.55rem')); // 3.55
// it is not necessary to use parseInt and parseFloat on a Number function object, but it has become convention to use it on Number function.

// isNaN: to check value is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN('aa'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23/0)); 

// it is recommended to not use this to check if something is a number


// isFinite: this should be your go to way to check if the value is a number.
console.log(Number.isFinite(23));
console.log(Number.isFinite(+'23'));
console.log(Number.isFinite('a'));
console.log(Number.isFinite(23/0));

// isInteger: to check if the value is integer

console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.0)); //true
console.log(Number.isInteger(20/0)); //true


*/

/*
// ways to calculate square root

console.log(Math.sqrt(25)); // 5
console.log(25**(1/2)); // 5

// cube root
console.log(8**(1/3)); // 2
console.log(125**(1/3)); // 4.99999999999

//maximum value
console.log(Math.max(1, 17, 27, 25, 7)); //27
console.log(Math.max(1, '17', '27', 25, 7)); //27
console.log(Math.max(1, '17px', '27px', 25, 7)); // NaN Parsing does not work

// Min value
console.log(Math.min(1, 17, 27, 25, 7)); // 1
console.log(Math.min('1', '17', '27', 25, 7)); // 1
console.log(Math.min('1', '17px', '27', 25, 7)); // NaN

// PI
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random number
console.log(Math.trunc( Math.random() * 6) + 1);

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

// rounding integers

// Math.round: rounds the number to nearest integer
console.log(Math.round(23.3)); // 23 
console.log(Math.round(23.9)); // 24

// Math.ceil: rounds up to next integer
console.log(Math.ceil(23.3)); // 24 
console.log(Math.ceil(23.9)); // 24

// Math.floor : rounds down to previous integer
console.log(Math.floor(23.3)); // 23 
console.log(Math.floor(23.9)); // 23

// Math.trunc: removes the digits after decimal point
console.log(Math.trunc(23.3)); // 23

// Note all of these methods also support type coercion
console.log(Math.round('17.5')); // 18

// you might think that the floor and trunc methods are same, for positive integers they are indeed a same thing but for negative numbers they work differently

console.log(Math.trunc(-23.4)); // 23
console.log(Math.floor(-23.4)); // 24

// rounding decimals:

console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700 
// Note: toFixed always returns a string not a number so keep that in mind.

console.log(+(45.7252832).toFixed(2)); // 45.73 // this will be a number as we added + sign at the start.

// Boxing: As we know numbers are primitive values and method do not work on primitives. so behind the scene JavaScript will do boxing, it will transform the number to an object and then call the method on the object, once the operation is performed it will convert it back to primitive

*/

/*
// remainder operator (modulus operator):

console.log(5 % 2);

console.log(8 % 3);

// to check if the number is even or odd

console.log(6 % 2); // 0 if the output is zero then the number is even, so anything which is divisible by 2 is even

console.log(7 % 2); // 1 odd

const isEven = num => num % 2 === 0;

console.log(isEven(4));
console.log(isEven(27));
console.log(isEven(17));
console.log(isEven(34));

labelBalance.addEventListener('click', () => {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orange';

    //0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'pink';
  });
});


*/

/*

// Numeric separators:

// 287,460,000,000

const diameter = 287_460_000_000;
console.log(diameter); // 287460000000

// using underscore as separator it becomes to easy to read large numbers. like we use comma to identify thousand separator.

const price = 34_599;
console.log(price);

const transferFee = 1_500;

const PI = 3.14_15 
console.log(PI);

// this does not work when we try to convert a string with underscore as a separator to convert into a number.

console.log(Number('230_000')); // NaN
console.log(Number.parseInt('230_000')); // 230 this will only take initial part of number.
*/

/*
// numbers are represented internally as 64 bits that means there are exactly 64 bits to store the numbers out of these 64 bits only 53 are used to store the digits.

// so that means there is a limit on how big the number can be stored.

console.log(2 ** 53-1); // this is the number that javascript can store safely
console.log(Number.MAX_SAFE_INTEGER); // this gives the same number as above

console.log(2 ** 53+1); // not safe
console.log(2 ** 53+2); // not safe
console.log(2 ** 53+3); // not safe
console.log(2 ** 53+4); // not safe

// we can use bigInt to store the numbers bigger than the above safe integer. with bigInt we can store any number no matter how big it is.
console.log(75925965974533759325694775974975969275749n); // simply adding n at the end makes it bigInt
console.log(BigInt(852027575));

// operations:

console.log(100000n + 1000000n);
console.log(7974575205804857575408n * 100743774n);

const huge = 239750348052058820n
const num =17 
// console.log(huge * num); // INVALID: cannot mix bigInt with other types.
 console.log(huge * BigInt(num)); // we can convert it to bigInt

 console.log(20n > 15);
 console.log(20n > 20);

 console.log(20n === 20); // false -> because javascript does not do type coercion when used triple equal

 console.log(typeof 20n); // bigint

 console.log(20n == 20); // true

 console.log( huge + ' is REALLY big!!!');

 // Math operation such as Math.sqrt will not work on bigints

// console.log(Math.sqrt(16n)); // invalid

// divisions:
console.log(10n/ 3n); // 3n
console.log(10/ 3); // 3.3333333

// bigint basically cuts off the decimal part of the number.


*/

// Dates:
/*
// Create a date:
const now = new Date();
console.log(now);

console.log(new Date('Sep 07 2024 12:38:44'));
console.log(new Date('January 17, 1999')); // this is not ideal, or not reliable
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2030, 10, 19, 13, 30, 5)); // (YYYY, MM, DD, hh,mm,ss) , here we have provided 10th month but in output the month is shown november, that is because the month is zero based.

console.log(new Date(2025,3,27));

// unix time started on january 1st 1970 so to get that date
console.log(new Date(0)); //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

console.log(new Date(3 * 24 * 60 * 60 * 1000)); // three days later unix time: Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)


// working with dates

const future = new Date(2025, 3, 27, 10,30)
console.log(future);

console.log(future.getFullYear()); // 2025
console.log(future.getMonth()); // 3 remember it is 0 based so actual month is apr(4)
console.log(future.getDate()); // 27
console.log(future.getHours()); // 10
console.log(future.getMinutes()); // 30
console.log(future.getSeconds()); // 0
console.log(future.getMilliseconds()); // 0
console.log(future.toISOString()); // 2025-04-27T05:00:00.000Z
console.log(future.getTime()); // 1745730000000 // this a timestamp which is basically the milliseconds that have passed since jan 1 1970

console.log(new Date(1745730000000)); // Sun Apr 27 2025 10:30:00 GMT+0530 (India Standard Time) // we can use the timestamp to get the date this will give the exact date.

// timestamp is very important concept, we have separate method to get the current timestamp:

console.log(Date.now()); // current timestamp
console.log(new Date()); // current date and time


// there are also set version of all these method that we saw earlier
future.setFullYear(2026)
future.setMonth(0)
future.setDate(17)
console.log(future);
*/

/*
// operations with dates:
const future = new Date(2025, 3, 27, 10, 30);
console.log(+future); // this will give the timestamp in milliseconds

// const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) /(1000 * 60 * 60 * 24)

// const days1 = calcDaysPassed(new Date(2025, 3, 27), new Date(2025, 3, 1))
// console.log(days1);


*/

// Internationalizing numbers
const num = 369230.31;

const options = {
  style: 'currency',
  currency: 'INR'

}

console.log('US:    ', new Intl.NumberFormat('en-US', options).format(num));
console.log('INDIA: ', new Intl.NumberFormat('en-IN', options).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num));