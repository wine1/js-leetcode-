/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

//  先用个暴力的方法，我想总是会有大神写出神奇的简单写法

// var isHappy = function(n) {
//   while (n / 10 > 0 && n != 1) {
//     let y = n % 10;
//     n=n/10;
//     let res;
//     res = res + y * y;
//     log(res);
//   }
// };
// @lc code=end

log(isHappy(19));
