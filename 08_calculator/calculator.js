const add = (a,b) => a + b;
const subtract = (a,b) => a - b;

const sum = function(array) {
  return array.reduce((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = (a,b) => a ** b;

const factorial = function (n) {
  let output = 1;
  for (let i = n; i > 0; i--) {
    output *= i;
  }
  return output;
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
