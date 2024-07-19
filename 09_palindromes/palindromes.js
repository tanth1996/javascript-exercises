const palindromes = function (string) {
    let alphaNumericRegex = new RegExp("[0-9a-zA-Z]+");
    let alphaNumericOnlyArray = string.split("")
        .filter(char => alphaNumericRegex.test(char))
        .map(char => char.toLowerCase());
    
    let rightIndex = alphaNumericOnlyArray.length - 1;
    for (let leftIndex = 0; leftIndex < rightIndex; leftIndex++) {
        if (alphaNumericOnlyArray[leftIndex] !== alphaNumericOnlyArray[rightIndex - leftIndex]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
