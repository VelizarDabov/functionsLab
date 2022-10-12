function addAndSubtract(firstNumber, secondNumber, lastNumber) {
  let sumResult = 0;
  let result = 0;
  function sum(firstNum, secondNum) {
    sumResult = firstNum + secondNum;
  }
  sum(firstNumber, secondNumber);
  function subtract(sumResult, lastNum) {
    result = sumResult - lastNum;
  }
  subtract(sumResult, lastNumber);

  console.log(result);
}
addAndSubtract(1,

    17,
    
    30);
