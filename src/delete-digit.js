// const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const numString = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < numString.length; i++) {
    const currentNumber = Number.parseInt(numString.slice(0, i) + numString.slice(i + 1));
    maxNumber = Math.max(maxNumber, currentNumber);
  }

  return maxNumber;
}


module.exports = {
  deleteDigit
};
