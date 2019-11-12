/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */


//  效率有点低 执行用时120ms 
var isUgly = function(num) {
  if (num === 1) {
    return true;
    // 超出int 范围
  }else if(num>Math.pow(2,31)-1||num<1) {
      return false;
  } else {
    while (num > 1) {
      if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {
        return false;
      } else {
        if (num % 2 === 0) {
          num = num / 2;
        } else if (num % 3 === 0) {
          num = num / 3;
        } else if (num % 5 === 0) {
          num = num / 5;
        }
      }
    }
    return true;
  }
};
// @lc code=end
log(isUgly(6));
log(isUgly(8));
log(isUgly(14));
