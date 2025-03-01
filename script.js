const player0 = document.getElementById("player-0");
const score0 = document.getElementById("score-0");
const player1 = document.getElementById("player-1");
const score1 = document.getElementById("score-1");
const current0 = document.getElementById("current-0");
const currentScore0 = document.getElementById("current-score-0");
const current1 = document.getElementById("current-1");
const currentScore1 = document.getElementById("current-score-1");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
const image = document.querySelector("img");

score0.textContent = 0;
score1.textContent = 0;
currentScore0.textContent = 0;
currentScore1.textContent = 0;
image.style.display = "none";
let current = 0;
let activePlayer = 0;
let playing = true;
btnRoll.addEventListener("click", function () {
  if (playing) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;

    image.src = `img/dice-${randomNumber}.png`;
    image.style.display = "block";

    if (randomNumber !== 1) {
      current += randomNumber;
      document.getElementById(`current-score-${activePlayer}`).textContent =
        current;
    } else {
      current = 0;
      document.getElementById(`current-score-${activePlayer}`).textContent =
        current;
      activePlayer = activePlayer === 0 ? 1 : 0;
      if (activePlayer === 0) {
        document.querySelector(".container-1").style.backgroundColor =
          "#ecc3c3"; // Active player
        document.querySelector(".container-2").style.backgroundColor =
          "#802c0d"; // Inactive player
      } else {
        document.querySelector(".container-1").style.backgroundColor =
          "#802c0d"; // Inactive player
        document.querySelector(".container-2").style.backgroundColor =
          "#ecc3c3"; // Active player
      }
    }
  }
});
let scores1 = 0;
let scores2 = 0;

btnHold.addEventListener("click", function () {
  if (playing) {
    if (activePlayer === 0) {
      scores1 = scores1 + current;
      console.log(scores1);
      score0.textContent = scores1;
      if (scores1 >= 20) {
        document.querySelector(".container-1").style.backgroundColor = "green";
        playing = false;
        return;
      }
    } else {
      scores2 = scores2 + current;
      console.log(scores1);
      score1.textContent = scores2;
      if (scores2 >= 20) {
        document.querySelector(".container-2").style.backgroundColor = "green";
        playing = false;
        return;
      }
    }

    current = 0;
    document.getElementById(`current-score-${activePlayer}`).textContent =
      current;
    // this is used to switch players
    activePlayer = activePlayer === 0 ? 1 : 0;

    if (activePlayer === 0) {
      document.querySelector(".container-1").style.backgroundColor = "#ecc3c3"; // Active player
      document.querySelector(".container-2").style.backgroundColor = "#802c0d"; // Inactive player
    } else {
      document.querySelector(".container-1").style.backgroundColor = "#802c0d"; // Inactive player
      document.querySelector(".container-2").style.backgroundColor = "#ecc3c3"; // Active player
    }
  }
});

btnNew.addEventListener("click", function () {
  scores1 = 0;
  scores2 = 0;
  current = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  document.querySelector(".container-1").style.backgroundColor = "#ecc3c3";
  document.querySelector(".container-2").style.backgroundColor = "#802c0d";

  image.style.display = "none";

  document.getElementById(`current-score-0`).textContent = 0;
  document.getElementById(`current-score-1`).textContent = 0;
});
