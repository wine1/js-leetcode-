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

//  leetcode没跑过
var mySqrt = x => {
  let left = 0,
    right = x;
  let mid = parseInt((0 + x) / 2);
  while (left <= right) {
    if (mid * mid > x) {
      right = mid - 1;
      mid = parseInt((parseInt(left) + parseInt(right)) / 2);
      //  console.log(mid);
    } else if (mid * mid < x) {
      left = mid + 1;
      mid = parseInt((parseInt(left) + parseInt(right)) / 2);
      //  console.log(mid);
    } else {
      return mid;
    }
  }
  return mid;
};
// @lc code=end

log(mySqrt(10000));
log(mySqrt(170));
