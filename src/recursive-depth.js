const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    this.depth = 1;
    return arr.reduce((acc, curr) => {
      if (Array.isArray(curr)) this.depth = this.calculateDepth(curr) + 1;
      return acc <= this.depth ? this.depth : acc;
    }, 1);
  }
}

module.exports = {
  DepthCalculator,
};
