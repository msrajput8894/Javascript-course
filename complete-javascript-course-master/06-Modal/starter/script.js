'use strict';

//modal code:
//try to write your own code

//selecting required elements with querySelector
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function to open a modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//passing openModal function as an argument in an event handler.
//using for loop to handle the click event on each button
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//passing closeModal function as an argument to event handler
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//closing the modal with Esc (escape) button

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //here we need to call the closeModal function
    closeModal();
  }
});
