const { NotImplementedError } = require('../extensions/index.js');

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
  let stringifiedNumber = n.toString();
  let maxValue = stringifiedNumber.slice(0, stringifiedNumber.length - 1);
  [...stringifiedNumber].forEach(num => {
    const isCurrentMaxValue = stringifiedNumber.replace(num, '') >= maxValue;
    if (isCurrentMaxValue) {
      maxValue = stringifiedNumber.replace(num, '');
    }
  });
  return +maxValue;
}

module.exports = {
  deleteDigit,
};
