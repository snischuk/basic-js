// const { NotImplementedError } = require('../lib');

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
  const rowsCount = matrix.length;
  const colsCount = matrix[0].length;

  function isValidCell(row, col) {
    return row >= 0 && row < rowsCount && col >= 0 && col < colsCount;
  }

  function countNeighbors(row, col) {
    let mineCount = 0;
    const minRow = Math.max(0, row - 1);
    const maxRow = Math.min(row + 1, rowsCount - 1);
    const minCol = Math.max(0, col - 1);
    const maxCol = Math.min(col + 1, colsCount - 1);

    for (let i = minRow; i <= maxRow; i++) {
      for (let j = minCol; j <= maxCol; j++) {
        if (i !== row || j !== col) {
          if (isValidCell(i, j) && matrix[i][j]) {
            mineCount++;
          }
        }
      }
    }

    return mineCount;
  }

  return matrix.map((row, i) => row.map((cell, j) => {
    return cell ? 1 : (0 + countNeighbors(i, j));
  }));
}

module.exports = {
  minesweeper
};
