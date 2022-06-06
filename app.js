let number = Math.floor(Math.random() * 100 + 1);
let life = 5;
let stop = 100;
let start = 0;
let guess = document.querySelector("#guess");
const btn = document.querySelector("#btn");
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
      parag.innerHTML = `You are right! Congrats! You knew ${5 - life}th try.`;
    } else if (number > parseInt(guess.value)) {
      start = parseInt(guess.value);
      parag.innerHTML = `Please try a higher number. You have ${life} life left.`;
      between.innerHTML = `between ${start} - ${stop}`;
    } else if (number < parseInt(guess.value)) {
      stop = parseInt(guess.value);
      parag.innerHTML = `Please try a lower number.You have ${life} life left.`;
      between.innerHTML = `between ${start} - ${stop}`;
    }
  }
  guess.value = ``;
}

// do {
//   do {
//     guess = +prompt(`Please enter your guess ${start} between ${stop}`);
//     life--;

//     if (number === guess) {
//       console.log(`You are right! Congrats! You know ${5 - life}. guess.`);
//       break;
//     } else if (number > guess) {
//       start = guess;
//       console.log(`Please improve your number. You Left ${life} life.`);
//     } else if (number < guess) {
//       stop = guess;
//       console.log(`Please lower your number. You Left ${life} life.`);
//     }
//   } while (life > 0);
//   answer = prompt("Did you like it? If you want to play again please type y/Y ");
// } while (answer === "y" || answer === "Y");
// console.log("The game is finished");
