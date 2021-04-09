// Ask the user for their move
//The computer makes their move
//display who won the result

const readline = require('readline-sync');
const VALID_CHOICES = ['rock','paper','scissor'];

function prompt(msg) {
  console.log(`===>${msg}`);
}
function displayWinner(choice, computerChoice) {
  prompt(`Your choice: ${choice}. Computers chose: ${computerChoice}`);

  if (choice === 'rock' && computerChoice === 'scissor') {
    prompt(` You Win!!!!`);
  }     else if (choice === 'scissor' && computerChoice === 'paper') {
    prompt(` You Win!!!!`);
  }     else if (choice === 'paper' && computerChoice === 'rock') {
    prompt(` You Win!!!!`);
  }   else if (choice === computerChoice) {
    prompt(` Its a tie!`);
  }  else {
    prompt(` Computer Wins >:)`);
  }
}


while (true) {
  prompt(` Choose one: ${VALID_CHOICES.join(', ')}.`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`  That is not a valid option!`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  displayWinner(choice,computerChoice );


  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}


