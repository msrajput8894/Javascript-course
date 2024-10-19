'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
      </article>
      
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
      <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
      </article>
      
      `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('india');
getCountryData('usa');
getCountryData('china');
getCountryData('japan');

*/

/*

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
      </article>
      
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render Country 1
    renderCountry(data);

    // Get nieghbour country
    const nieghbour = data.borders?.[0];
    if (!nieghbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${nieghbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');

getCountryAndNeighbour('usa');

*/

// Promise
// const request = fetch(`https://restcountries.com/v2/name/usa`);

// console.log(request);

// as we know that the fetch request itself returns a promise, so we can use .then() method on all promises, so .then method is executed when the promise is completed.( fullfilled or rejected)

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data[1]);
//     });
// };

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'adfahls';

//       //country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}...😕😕😕`);
//       renderError(`Something went wrong...😕😕 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('pakistan');
// getCountryData('bangladesh');

// so now the data is not readable and in order to read the data we need to call json() method on the response and json method itself returns new promise so in order to handle that promise we need again have to use .then on that.

// HANDLING THE REJECTED PROMISES:
/*
const getJSON = function (url, errMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1

  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'adfahls';
      if (!neighbour) throw new Error('No neighbour found!');
      //country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}...😕😕😕`);
      renderError(`Something went wrong...😕😕 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('usa');
});

// getCountryData('bharat');
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=638967179904283397648x21126`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Problem with geocoding ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`
          Country not found! ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      renderCountry(data[1]);
      // countriesContainer.style.opacity = 1;
    })
    .catch(err => {
      console.log(`Something went wrong!! ${err.message}`);
    });
};

// btn.addEventListener('click', function () {
//   whereAmI(36.5459, 104.1375);
// });

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    btn.addEventListener('click', function () {
      whereAmI(lat, lng);
    });
  });
} else {
  console.log('Geolocation is not supported by this browser.');
}

// whereAmI(18.4832, 73.8154);

*/

/*
// Asynchronous behind the scenes

// As we know Javascript engine consist Callstack, Heap, event loop and in addition to that it also consist callback queue and microtask queue.

// for synchronous code it will be directly moved to callstack, however if there is asynchronous code, like timer then or image loading it will be loaded in browser engine and then it will be moved to callback queue. and once the callstack is empty event loop will pick it up and put it inside callstack.

// however for promises, fetch apis it will wait for data to laod, once the data is loaded then it will be moved to microtask queue. and then event loop will pick it up and put it inside callstack when it is empty.

// the difference between callback queue and microtask queue is that the microtask queue has higher priority than that of the callback queue.
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(response => console.log(response));

console.log('Test End');

// Order of execution

// 'Test start'
// 'Test End'
// 'Resolved promise 1'
// '0 sec timer'

// as we can see that order of execution changed here, becuase synchronous code was executed first, then after that the code inside microtask queue was executed which is resolved promise and after that the code inside callback queue was executed which 0 sec timer


*/

/*
// Building our own promises

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening...🔮');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win...💰');
    } else {
      reject('You lost your Money...🙄');
    }
  }, 3000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 second passed');
    return wait(1);
  });

// for (let i = 0; i <= 60; i++) {
//   wait(i).then(() => {
//     console.log(`${i} seconds passed`);
//   });
// }
// promisified setTimeout looks really good, earlier we had written this same code like this using callback, which results in callback hell!

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


*/
///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImage;

createImage('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  });


  */
// Async / Await:

const getPostion = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  const position = await getPostion();
  const { latitude: lat, longitude: lng } = position.coords;

  const resGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=638967179904283397648x21126`
  );

  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // fetch(`https://restcountries.com/v2/name/${country}`).then(response =>
  //   console.log(response)
  // );

  const response = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.country}`
  );

  const data = await response.json();
  console.log(data);
  renderCountry(data[1]);
};

whereAmI();
