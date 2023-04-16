const { NotImplementedError } = require('../extensions/index.js');
const { json } = require('mocha/lib/reporters');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minesField = [];

  matrix.forEach((row, i) => {
    minesField[i] = [];
    row.forEach((cell, j) => {
      const prevRow = matrix[i - 1];
      const nextRow = matrix[i + 1];
      const north = prevRow ? prevRow[j] : null;
      const northWest = prevRow ? prevRow[j - 1] : null;
      const northEast = prevRow ? prevRow[j + 1] : null;
      const west = row[j - 1] || null;
      const east = row[j + 1] || null;
      const south = nextRow ? nextRow[j] : null;
      const southWest = nextRow ? nextRow[j - 1] : null;
      const southEast = nextRow ? nextRow[j + 1] : null;

      const allDirections = [north, northWest, northEast, west, east, south, southWest, southEast];
      const minesAroundCount = allDirections.reduce((acc, curr) => (curr === true ? acc + 1 : acc), 0);
      minesField[i].push(minesAroundCount);
    });
  });

  return minesField;
}

module.exports = {
  minesweeper,
};
