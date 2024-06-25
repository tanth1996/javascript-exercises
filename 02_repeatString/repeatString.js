const repeatString = function(stringToRepeat, numRepetitions) {
    let output = "";
    if (numRepetitions < 0) {
        return "ERROR";
    }
    for (let i = 0; i < numRepetitions; i++) {
        output += stringToRepeat;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
