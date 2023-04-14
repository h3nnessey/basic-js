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
function encodeLine(str = 'aabbbc') {
  // AssertionError: expected '2a2b2c' to equal 'a2b2ca'
}

module.exports = {
  encodeLine,
};
