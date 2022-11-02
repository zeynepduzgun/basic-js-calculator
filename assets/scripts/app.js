const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function log(operator, prevResult, number, result) {
  const logEntry = {
    operation: operator,
    prevResult: prevResult,
    number: number,
    result: result,
  };
  logEntries.push(logEntry);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  log('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  log('SUBSTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  log('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  log('DIVIDE', initialResult, enteredNumber, currentResult);
}

function calc() {}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
