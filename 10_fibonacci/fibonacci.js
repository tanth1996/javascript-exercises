const fibonacci = function(n) {
    num = parseInt(n);
    if (num < 0) {
        return "OOPS";
    }

    if (num === 0) {
        return 0;
    }

    let current = 1;
    let prev = 1;
    for (let i = 3; i <= num; i++) {
        let temp = current;
        current += prev;
        prev = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
