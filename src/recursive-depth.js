// const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
  constructor() {
    this.brackets = { '[': ']' };
  }

  calculateDepth(arr) {
    let maxDepth = 1;

    arr.forEach(element => {
      if (!Array.isArray(element)) return;
      const currentDepth = 1 + this.calculateDepth(element);
      maxDepth = Math.max(maxDepth, currentDepth);
    });

    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
