'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// The reason why we don't call closeModal(), it calls function
// when javascript runs.
// We want closeModal when we click the button.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// He JS, call function when a key down event happens.
// And when you do so, pleas pass in the event object, which is e as an argument.
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  // If the modal doesn't contain the hidden class,
  // then close the modal.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
