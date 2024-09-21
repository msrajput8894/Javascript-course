'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

/*
// SELECTING ELEMENTS:

// to select all document element:
console.log(document.documentElement);

// to select body element:
console.log(document.body);

// to select head element:
console.log(document.head);

// to select element using selector:
// for single element using class:
const header = document.querySelector('.header');
console.log(header);

// to select multiple elements using class
const allSections = document.querySelectorAll('.section');
console.log(allSections); // this will give node list of all element which has class 'section'

// to select element using id:
console.log(document.getElementById('section--1'));

// to select using tagname:
const allButtons = document.getElementsByTagName('button'); // this returns HTMLCollection, this is nothing but live collection that means if the DOM changes then this collection is updated autmatically.
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // this also returns a new HTML collection

///////////////////////////////////////////////////////////////////////////////////

// CREATING AND INSERTING ELEMENTS:

// to create new element
const message = document.createElement('div');

// to add or remove class on element
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // this will add the element to the start of the header as child of header element
header.append(message); // this will add the element to the end of the header as a child of header element

// Note: if we do prepend and append at the same time for same element then that element will be added at only one location, which ever is specified later.

// if we need to append and prepend at the same time then we can clone the element

// header.append(message.cloneNode(true));

// header.before(message); // this will add the message element before the header element as a sibling
// header.after(message); // this will add the message element after the header element as a sibling

//////////////////////////////////////////////////////////////////////////////////////

// DELETING THE ELEMENT:

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove(); // this is newer way to delete the elements earlier it was done as follows
  //message.parentElement.removeChild(message); // older way to delete elements
});

////////////////////////////////////////////////////////////////////////////////

// STYLES:

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Setting styles using style property in javascript basically sets the inline styles for the elements. and we can only see the styles that are set inline using style property

console.log(message.style.height); // this is not set inline so we wont get anything
console.log(message.style.width); // 120%

// if we really need to get the styles that are not set inline or set in saperate stylesheet.

console.log(getComputedStyle(message)); // this will give all styles, to get the style that we need we do as follow
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 43px

// suppose we need increase the height of the message element using js
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log(getComputedStyle(message).height);

// to select and change the css variables
// as the css variable we have defined are custom properties so we connot do it like above instead we do it like below using setProperty method.
document.documentElement.style.setProperty('--color-primary', 'orange');

////////////////////////////////////////////////

// ATTRIBUTES:

//Standard
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt);

console.log(logo.className);
console.log(logo.id);

// as shown in above examples we can take the attribute properties from the elements, if we have defined our own attribute property then that we will not get using above method. to get custom attribute use following way

//Non standard
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // mahendra
logo.setAttribute('company', 'bankist');

// we can change attributes

logo.alt = 'Beutiful minimalist logo';

console.log(logo.src); // this gives the relative url and not the actual url
console.log(logo.getAttribute('src')); // img/logo.png

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // this will give the relative url
console.log(link.getAttribute('href')); // actual url

// DATA ATTRIBUTE
console.log(logo.dataset.versionNumber); // 3
// keep in mind that in data attributes when we write in html we use - dash as a separator while in js we write in camelCase

// CLASSES:
logo.classList.add('x', 'y', 'z');
logo.classList.remove('x', 'y');
logo.classList.toggle('z');
logo.classList.contains('z');

logo.className = 'mahendra';
// Don't use: it overrides all existing classes and also lets us add only one class to an element

*/

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //lets use getBoundingClientRect on button which is basically e.target
  console.log(e.target.getBoundingClientRect());

  // to get X and Y scroll position from the top of the page
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // to get the current viewport height and width
  console.log(
    'height/width viewport:',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling: // Old way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Scrolling: better way
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////

//Event and Event listeners:

// there are lots of different events in js, such as click, mouseenter you can always check the mdn reference for more details
const h1 = document.querySelector('h1');

const alertH1 = e => {
  alert('addEventListener: Great! you are reading the heading :)');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  console.log('removing event listener');
  h1.removeEventListener('mouseenter', alertH1);
}, 5000);

// this is the old way of using event listener
// h1.onmouseenter = e => {
//   alert('onmouseenter: Great! you are reading the heading :)');
// };

// Now we only use addEventListener to work with events, there are two reasons why addEventListener is better

// 1. it allows us to add multiple event listeners to same event.
// 2. we can actually remove the event handler if we don't need it anymore.

// rgb(255, 255, 255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

// keep one thing in mind this keyword is undefined in arrow functions and in event handers this keyword always points to the element to which it is attached.
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);

  //stop propagation
  // e.stopPropagation(); // not advisable, can be useful in rare situations
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link-container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target, e.currentTarget);
  }
  // true // this makes the event to bubble in capturing phase.
);
