const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
	let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
};

const multiply = function(num) {
  let product = 1;
  for (let i = 0; i < num.length; i++) {
    product *= num[i];
  }
  return product;
};

const power = function(num, exponent) {
	return Math.pow(num, exponent);
};

const factorial = function(num) {
	if (num == 0) {
    return 1;
  }else {
    // return num * factorial(num - 1);
    return multiply([num, factorial(num - 1)]);
  }
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
