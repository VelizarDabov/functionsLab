function carWash(arr) {

    let totalValue = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let currProgram = arr[i];
        if (currProgram === 'soap') {
            totalValue += 10;
        } else if (currProgram === 'water') {
            totalValue += totalValue * 0.20;
        } else if (currProgram === 'vacuum cleaner') {
            totalValue += totalValue * 0.25;
        } else if (currProgram === 'mud') {
            totalValue -= totalValue * 0.10;
        }
    }
    console.log(`The car is ${totalValue.toFixed(2)}% clean.`);

}
carWash(["soap", "water", "mud", "mud", "water", "mud",

"vacuum cleaner"])