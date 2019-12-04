/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 0) {
    return false;
  }
  while (n) {
    if (n % 2 === 0) {
      n = parseInt(n / 2);
    } else if (n === 1) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

// 大神写法 位运算
// js中不适用 有时间找下原因
let isPowerOfTwo2 = n => {
  if (n & (n - 1) === 0) {
    return true;
  } else {
    return false;
  }
};

log(isPowerOfTwo2(1));
log(isPowerOfTwo2(16));
log(isPowerOfTwo2(218));
