const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const matrixRowLength = matrix[0].length;
  const transposedMatrix = [];

  for (let i = 0; i < matrixRowLength; i += 1) {
    transposedMatrix[i] = [];
    for (let j = 0; j < matrix.length; j += 1) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  return transposedMatrix.reduce((acc, curr) => {
    let isBelowZero = curr[0] === 0;
    return (
      acc +
      curr.reduce((acc, curr) => {
        if (isBelowZero) return acc;
        if (curr === 0) {
          isBelowZero = true;
          return acc;
        }
        return acc + curr;
      }, 0)
    );
  }, 0);
}

module.exports = {
  getMatrixElementsSum,
};
