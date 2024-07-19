const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, elt) => total += elt, 0);
};

const multiply = function(arr) {
	return arr.reduce((product, elt) => product *= elt, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

	let result = num;
  let next = num - 1;
  while (next > 1) {
    result *= next;
    next--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
