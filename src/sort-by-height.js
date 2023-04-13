const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ascSortedArrayWithoutNegatives = arr.filter(num => num > 0).sort((a, b) => a - b);
  const negativesIndexes = arr.reduce((acc, curr, index) => (curr === -1 ? [...acc, index] : acc), []);
  const result = [...ascSortedArrayWithoutNegatives];
  negativesIndexes.forEach(index => {
    result.splice(index, 0, -1);
  });
  return result;
}

module.exports = {
  sortByHeight,
};
