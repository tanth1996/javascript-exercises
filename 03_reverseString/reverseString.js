const reverseString = function(str) {
    // let reversedString = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversedString += str[i];
    // }
    // return reversedString;
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
