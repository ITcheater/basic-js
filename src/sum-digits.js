const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function nSum(elem) {
    let sum = 0;
    elem = [...elem.toString()].map(Number);
    for (let i = 0; i < elem.length; i++) {
      sum += elem[i];
    }
    return sum;
  }
  let sumFun = 0;
  for (let i = 0; i < n; i++) {
    sumFun = nSum(n);
    if (sumFun > 10) {
      n = sumFun;
      sumFun = nSum(n);
    } else return sumFun;
  }
}

module.exports = {
  getSumOfDigits
};
