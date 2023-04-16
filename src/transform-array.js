const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const replaceItemWIthEmptyString = (array, i) => {
    array[i] = '';
  };

  const commands = {
    '--double-next': (array, i) => {
      replaceItemWIthEmptyString(array, i);
      array[i] = array[i + 1] || '';
    },
    '--double-prev': (array, i) => {
      replaceItemWIthEmptyString(array, i);
      array[i] = array[i - 1] || '';
    },
    '--discard-next': (array, i) => {
      replaceItemWIthEmptyString(array, i);
      replaceItemWIthEmptyString(array, i + 1);
    },
    '--discard-prev': (array, i) => {
      replaceItemWIthEmptyString(array, i);
      replaceItemWIthEmptyString(array, i - 1);
    },
  };

  const transformedArray = arr.slice();

  transformedArray.forEach((item, i, array) => {
    const isCommand = item.toString().startsWith('--') && commands[item];
    isCommand && commands[item](array, i);
  });

  return transformedArray.filter(item => item !== '');
}

module.exports = {
  transform,
};
