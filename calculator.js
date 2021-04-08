// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

let readLine = require('readline-sync');


function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

while(true) {

prompt(`What is the first number?`);
let number1 = readLine.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.Please enter one...");
  number1 = readLine.question();
}

prompt(`What is the second number?`);
let number2 = readLine.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.Please enter one...");
  number2 = readLine.question();
}

prompt(`What operation would you like to perform?\n1. Add 2. Subtract 3. Multiply 4. Divide?`);
let operation = readLine.question();
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readLine.question();
}

let output;

switch (operation) {
  case '1' :
    output = Number(number1) + Number(number2);
    break;
  case '2' :
    output = Number(number1) - Number(number2);
    break;
  case '3' :
    output = Number(number1) * Number(number2);
    break;
  case '4' :
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is ${output}!`);

prompt(`Would you like to perform another calculation?\n 'Y' or 'N'`);
  let response = readLine.question().toUpperCase();
if (response[0] !== 'Y' ){
  console.log(`Ok! Goodbye!`);
  break; 
} 
}