function oddAndEven(number) {
  let odd = 0;
  let even = 0;
  let numToString = number.toString();
  for (let i = 0; i < numToString.length; i++) {
    let num = Number(numToString[i]);

    if (num % 2 === 0) {
      even += num;
    } else {
      odd += num;
    }
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEven(3495892137259234);
