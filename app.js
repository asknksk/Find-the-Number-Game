let number = Math.floor(Math.random() * 100 + 1);
let life = 5;
let stop = 100;
let start = 0;
let guess = document.querySelector("#guess");
const btn = document.querySelector("#btn");
const resetBtn = document.querySelector("#reset-btn");
const parag = document.querySelector("#parag");
console.log(number);
const between = document.querySelector("#between");
const log = document.querySelector("#log");
btn.addEventListener("click", guessGame);
window.addEventListener("keydown", (e) => {
  if (e.code == "NumpadEnter" || e.code == "Enter") {
    guessGame();
  }
});

function guessGame() {
  if (life > 0) {
    life--;
    log.innerHTML += guess.value + "<br>";
    if (number === parseInt(guess.value)) {
      parag.innerHTML = `🎉🎉You are right! Congrats! You knew ${
        5 - life
      }th try.🎉🎉`;
      btn.style.display = "none";
    } else if (number > parseInt(guess.value) && life != 0) {
      start = parseInt(guess.value);
      parag.innerHTML = `Please try a higher number. You have ${life} life left.`;
      between.innerHTML = `between ${start} - ${stop}`;
    } else if (number < parseInt(guess.value) && life != 0) {
      stop = parseInt(guess.value);
      parag.innerHTML = `Please try a lower number.You have ${life} life left.`;
      between.innerHTML = `between ${start} - ${stop}`;
    }
  }
  if (life == 0) {
    btn.style.display = "none";
    resetBtn.style.transform = "scale(1.4)";
    parag.innerHTML = `Sorry your right is over. Did you like? If you want to play again click Play Again!`;
  }
  guess.value = ``;
}
