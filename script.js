"use strict";

// variables
const newGame = document.querySelector(".new");
const rollDice = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const dice = document.querySelector(".dice");
const current = document.querySelectorAll(".current");
const player = document.querySelectorAll(".player");
let score = document.querySelectorAll(".result");
const container = document.querySelector(".container");
let direction = "to right";
let random;
let sum = 0;
let i = 0;
// initialization
function init() {
  container.style.backgroundImage =
    "linear-gradient(to right,#aaf0d1,#aaf0d1 50%,#8af5c5 50%,#8af5c5)";
  dice.style.display = "none";
  score.forEach((e) => (e.textContent = "0"));
  current.forEach((e) => (e.textContent = "0"));
  sum = 0;
  i = 0;
}
init();
// switch player
function switchPlayer() {
  current[i].textContent = "0";
  sum = 0;
  if (+score[i].textContent < 100) {
    i === 0 ? (i = 1) : (i = 0);
    direction === "to right"
      ? (direction = "to left")
      : (direction = "to right");
    container.style.backgroundImage = `linear-gradient(${direction},#aaf0d1,#aaf0d1 50%,#8af5c5 50%,#8af5c5)`;
  }
}
// rollDice functionnality
rollDice.addEventListener("click", function (e) {
  e.preventDefault();
  dice.style.display = "block";
  random = Math.trunc(Math.random() * 6 + 1);
  dice.src = `images/dice-${random}.png`;
  sum = sum + random;
  current[i].textContent = sum;
  if (random === 1) {
    switchPlayer();
  }
});
// hold functionnality
hold.addEventListener("click", function (e) {
  e.preventDefault();
  score[i].textContent = +score[i].textContent + +current[i].textContent;
  if (+score[i].textContent >= 100) {
    console.log("yes");
    container.style.backgroundImage = `linear-gradient(${direction},#49796b,#49796b 50%,#aaf0d1 50%,#aaf0d1)`;
    document
      .querySelectorAll("button:not(:first-child)")
      .forEach((e) => (e.disabled = true));
  } else {
  switchPlayer();
  }
});
// newGame functionnality
newGame.addEventListener("click", function (e) {
  e.preventDefault();
  init();
  document
    .querySelectorAll("button:not(:first-child)")
    .forEach((e) => (e.disabled = false));
});
