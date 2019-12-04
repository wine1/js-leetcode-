/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  while (n !== 1) {
    if (n <= 0) {
      return false;
    } else {
      if (n % 4 !== 0) {
        return false;
      } else if (n % 4 === 0) {
        n = n / 4;
      }
    }
  }
  return true;
};
// @lc code=end
// 进阶：
// 你能不使用循环或者递归来完成本题吗？
// 这道题的标签是位运算

var isPowerOfFour = function(n) {
  var str = n.toString(4);
  return /^10*$/.test(n.toString(4));
};

log(isPowerOfFour(16));
log(isPowerOfFour(5));
