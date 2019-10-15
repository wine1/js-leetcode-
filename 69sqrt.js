/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0,
    right = x;
  let mid = (0 + x) / 2;
  while (left <= right) {
    if (mid * mid > x) {
      right = mid - 1;
      mid = parseInt((parseInt(left) + parseInt(right)) / 2);
    //   log(mid);
    } else if (mid * mid < x) {
      left = mid + 1;
      mid = parseInt((parseInt(left) + parseInt(right)) / 2);
    //   log(mid);
    }else {
        return mid;
    }
  }
  return mid;
};
// @lc code=end

log(mySqrt(10000));
log(mySqrt(170));
