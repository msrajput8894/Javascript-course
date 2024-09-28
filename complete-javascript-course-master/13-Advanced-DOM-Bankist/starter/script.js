'use strict';

// selected elements
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

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

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  //console.log(s1coords);

  //lets use getBoundingClientRect on button which is basically e.target
  //console.log(e.target.getBoundingClientRect());

  // to get X and Y scroll position from the top of the page
  //console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // to get the current viewport height and width
  // console.log(
  //   'height/width viewport:',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling: // Old way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Scrolling: better way
  section1.scrollIntoView({ behavior: 'smooth' });
});
/////////////////////////////////////////////////////////////////////////////////

// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine the element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching stratergy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause:
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Active Tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////////////////////////

// Menu Fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// this is already working we can even simply it.
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////////////////////////////////////////
// Sticky navigation:

// const initialcoords = section1.getBoundingClientRect();
// console.log(initialcoords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialcoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Sticky navigation using Intersection observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.3,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const obsNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(obsNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal sections

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
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

/*

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


*/

/*
// DOM Traversing:

const h1 = document.querySelector('h1');

// Going downwards: child

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going Sideways

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

*/
