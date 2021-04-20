const MESSAGES = require('./loan_messages.json');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function clean(num) {
  return num.replace(/[ ,$%]/g, "");
}

prompt(MESSAGES['welcome']);

let rL = require('readline-sync');

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) <= 0   ||
         Number.isNaN(Number(number));
}
while (true) {
  prompt(`What is your loan amount?`);
  let loanAmount = clean(rL.question());

  while ( isInvalidNumber(loanAmount)) {
    prompt(MESSAGES['Error']);
    loanAmount = clean(rL.question());
  }
  console.clear();
  prompt(`What is your APR?`);
  let APR = clean(rL.question());

  while ( isInvalidNumber(APR) ) {
    prompt(MESSAGES['Error']);
    APR = clean(rL.question());
  }
  console.clear();

  prompt(`What is the loan duration?`);
  let loanDuration = clean(rL.question());

  while ( isInvalidNumber(loanDuration) ) {
    prompt(MESSAGES['Error']);
    loanDuration = clean(rL.question());
  }

  console.clear();

  let anualIntrestRate = APR / 100;
  let monthlyInterestRate = anualIntrestRate / 12;
  let months = Number(loanDuration) * 12;

  let monthlyPayment = loanAmount
                        * (monthlyInterestRate
                        / (1 - Math.pow((1 + monthlyInterestRate), (-months))));

  prompt(`Your monthly payments is: $${monthlyPayment.toFixed(2)}`);

  prompt(`Would you like to perform another calculation? y = yes n = no.`);
  let response = rL.question().toLowerCase();
  console.clear();

  while (response[0] !== 'y' && response[0] !== 'n' ) {
    prompt(`Please enter y or n !`);
    response = rL.question().toLowerCase();
  }
  if (response[0] === 'n') {
    prompt(MESSAGES['Exit']);
    break;
  }
}