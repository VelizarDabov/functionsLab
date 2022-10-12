function factorialDivision(firstNum, secondNum) {
   let result = (factorial(firstNum) / factorial(secondNum)).toFixed(2);
    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
    console.log(result);
}

factorialDivision(6, 2)