
let guess;
let number = Math.floor(Math.random() * 100 + 1);
let life = 5;
let stop = 100;
let start = 0;
let answer;
do {
  do {
    guess = +prompt(`Please enter your guess ${start} between ${stop}`);
    life--;
   
    if (number === guess) {
      console.log(`You are right! Congrats! You know ${5 - life}. guess.`);
      break;
    } else if (number > guess) {
      start = guess;
      console.log(`Please improve your number. You Left ${life} life.`);
    } else if (number < guess) {
      stop = guess;
      console.log(`Please lower your number. You Left ${life} life.`);
    }
  } while (life > 0);
  answer = prompt("Do you like? If you want play again please type y/Y ");
} while (answer === "y" || answer === "Y");
console.log("The game has been finished");