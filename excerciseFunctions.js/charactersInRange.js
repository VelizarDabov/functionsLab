function charactersInRange(startChar, stopChar) {
    let rangeStart =Math.min(startChar.charCodeAt(), stopChar.charCodeAt());
    let rangeEnd = Math.max(startChar.charCodeAt(), stopChar.charCodeAt())
    let resultString = '';

    for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
        let singleChar = String.fromCharCode(currentChar)
        if (currentChar + 1 === rangeEnd) {
            resultString += `${singleChar}`
        } else {
            resultString += `${singleChar} `
        }
    }
    console.log(resultString);
}
charactersInRange('#',

':')