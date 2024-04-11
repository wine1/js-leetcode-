/*
 * @lc app=leetcode.cn id=1688 lang=javascript
 *
 * [1688] 比赛中的配对次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let res = 0
  while (n > 1) {
    if (n % 2 !== 0) {
      res = res + (n - 1) / 2
      n = (n - 1) / 2 + 1
    } else {
      res = res + n / 2
      n = n / 2
    }
    // console.log(n, res)
  }
  return res
}
// @lc code=end
console.log(numberOfMatches(7))
console.log(numberOfMatches(14))
