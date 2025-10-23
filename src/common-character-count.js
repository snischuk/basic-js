// const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const charCount = new Map();

  for (const char of s1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  let commonCount = 0;

  for (const char of s2) {
    if (charCount.get(char) > 0) {
      commonCount++;
      charCount.set(char, charCount.get(char) - 1);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
