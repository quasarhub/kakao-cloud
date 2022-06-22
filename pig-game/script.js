'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
// This is only works for id.
// It is supposed to be a little bit faster than query selector.
// If you're selecting like thousands of elements at once.
// However, I prefer to use querySelector.
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
