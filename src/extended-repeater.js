const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|' }) {
  let string = String(str, '');
  const addString = String(addition, '');

  if (addString && !repeatTimes) return string + addString;
  if (repeatTimes && !additionRepeatTimes) additionRepeatTimes += 1;

  if (addString) {
    string += Array(additionRepeatTimes)
      .fill('')
      .map(_ => addString)
      .join(additionSeparator);
  }

  if (repeatTimes) {
    return Array(repeatTimes)
      .fill('')
      .map(_ => string)
      .join(separator);
  }
}

module.exports = {
  repeater,
};
