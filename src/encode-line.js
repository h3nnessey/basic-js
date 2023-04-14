const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  return [...str].reduce((acc, curr, i) => {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      acc += `${count > 1 ? count : ''}${str[i]}`;
      count = 1;
    }
    return acc;
  }, '');
}

module.exports = {
  encodeLine,
};
