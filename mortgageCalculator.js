//Get the user to enter in how much their loan is,
//what is the APR and the loan duration


let readLine = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('Welcome to Mortage Calculator!');

while (true) {
  prompt(`What is the loan amount?`);
  let loanAmount = readLine.question();

  prompt(`What is the Annual Percentage Rate`);
  let APR = readLine.question();

  prompt(`What is the loan duration in years?`);
  let loanDuration = readLine.question();

  prompt(`Your loan amount is: $${loanAmount}. Your APR is ${APR}%. Your loan duration is ${loanDuration} years.`);

  let durationInMonths = loanDuration * 12;
  prompt(`Your loan duration in months is: ${durationInMonths} months.`);

  let annualInterestRate = Number(APR) / 100;
  //We have to turn 3% into a decimal

  let monthlyInterestRate = annualInterestRate / 12;
  prompt(`Your monthly interest rate is: ${monthlyInterestRate}%`);


  let monthlyPayment = Number(loanAmount) *
                        (monthlyInterestRate /
                        (1 - Math.pow((1 + monthlyInterestRate),
                          (-Number(durationInMonths)))));

  prompt(`Your monthlyPayment is:$${monthlyPayment.toFixed(2)}`);

  prompt("Another calculation?");
  let answer = readLine.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readLine.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}