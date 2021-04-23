//function for the program & JSON files.

const MESSAGES = require('./loan_messages.json');

let rL = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function clean(num) {
  return num.replace(/[ ,$%]/g, "");
}

function isValidYear(num) {
  return Math.round(num);
}

function askToCalculateAgain() {
  prompt(`Would you like to perform another calculation? y = yes n = no.`);
  let response = rL.question().toLowerCase();
  console.clear();
  return response;
}

prompt(MESSAGES['welcome']);

function isInvalidNumber(number) {
  return  Number(number) <= 0   ||
        Number.isNaN(Number(number));
}

function getLoan() {
  prompt(`What is your loan amount?`);
  let loanAmount = clean(rL.question());

  while ( isInvalidNumber(loanAmount)) {
    prompt(MESSAGES['Error']);
    loanAmount = clean(rL.question());
  }
  console.clear();
  return loanAmount;
}

function getAPR() {
  prompt(`What is your APR?`);
  let APR = clean(rL.question());

  while ( isInvalidNumber(APR) ) {
    prompt(MESSAGES['Error']);
    APR = clean(rL.question());
  }
  console.clear();
  return APR;
}

function getLoanDuration() {
  prompt(`What is the loan duration?`);
  let loanDuration = rL.question();
  loanDuration = isValidYear(loanDuration);


  while ( isInvalidNumber(loanDuration) ) {
    prompt(MESSAGES['Error']);
    loanDuration = clean(rL.question());
  }

  console.clear();
  return loanDuration;

}

// Actual code for loan Calc.

while (true) {

  let loanAmount = getLoan();
  let APR = getAPR();
  let loanDuration = getLoanDuration();

  let anualIntrestRate = APR / 100;
  let monthlyInterestRate = anualIntrestRate / 12;
  let months = Number(loanDuration) * 12;

  let monthlyPayment = loanAmount
                        * (monthlyInterestRate
                        / (1 - Math.pow((1 + monthlyInterestRate), (-months))));

  prompt(`Your monthly payments is: $${monthlyPayment.toFixed(2)}`);

  let response = askToCalculateAgain();

  while (response !== 'y' && response !== 'n') {
    prompt(`Please enter y or n !`);
    response = rL.question().toLowerCase();
  }

  if (response === 'n') {
    prompt(MESSAGES['Exit']);
    break;
  }
}

