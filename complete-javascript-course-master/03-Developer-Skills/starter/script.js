// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN
/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do when the sensor error occurs?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  const amplitude = max - min;
  return amplitude;
};

console.log(calcTempAmplitude([1, 10, 4, 24, -3, 31]));
console.log(calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([2, 8, 24], [-1, 7, 18]);
console.log(amplitudeNew);

*/
///////////////////////////////////////////////////////////
// Debugging with console and breakpoints

const measureKelvin = function () {
  const measurements = {
    type: 'temp',
    unit: 'celsius',
    // C) Fix the problem
    value: 10,
    // value: Number(prompt('degrees celsius:')), // now converted the prompt value to number because by default prompt returns a string.
  };
  //B) Find
  console.table(measurements); // this shows that the value is actually string so first we need to convert that to number then only we will get expected results.

  // console.log(measurements.value);
  // console.warn('this just to show warning');
  // console.error('this is to show the error');
  const kelvin = measurements.value + 273;
  return kelvin;
};

// A) Identify the problem
console.log(measureKelvin());

//Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    //we can even use debugger from our code
    //debugger;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([2, 8, 24], [35, 7, 18]);
// A) Identify
console.log(amplitudeBug);

////////////////////////////////////////////////////////////
// Coding challenge 1:

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17,21,23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up inot sub-problems!

TEST DATA 1: [17,21,23]
TEST DATA 2: [12,5,-5,0,4]
*/

const data_1 = [17, 21, 23];
const data_2 = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  let str = '';
  for (let days = 0; days < temps.length; days++) {
    let curDay = temps[days];
    str += ` ${temps[days]}°C in ${days + 1} days ...`;
  }
  return '...' + str;
};

console.log(printForecast(data_2));
console.log(printForecast(data_1));
