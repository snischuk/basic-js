// const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (Date.prototype.toString !== date.toString) throw new Error('Invalid date!');

  const month = date.getMonth() + 1;

  switch (true) {
    case month >= 3 && month <= 5:
      return 'spring';
    case month >= 6 && month <= 8:
      return 'summer';
    case month >= 9 && month <= 11:
      return 'autumn';
    default:
      return 'winter';
  }
}

module.exports = {
  getSeason
};
