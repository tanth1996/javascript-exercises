const sumAll = function (num1, num2) {
    if (typeof num1 !== "number"
        || typeof num2 !== "number"
        || num1 < 0
        || num2 < 0
    ) {
        return "ERROR";
    }

    let from, to;
    if (num1 > num2) {
        to = num1;
        from = num2;
    } else {
        from = num1;
        to = num2;
    }

    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
