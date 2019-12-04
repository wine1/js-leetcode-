/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 0) {
    return false;
  } else if (num === 1) {
    return true;
  } else {
    for (let i = 0; i < num / 2; i++) {
      if (i * i === num) {
        return true;
      }
    }
    return false;
  }
};
// @lc code=end

log(isPerfectSquare(16));
log(isPerfectSquare(14));
