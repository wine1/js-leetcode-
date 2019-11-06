/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */


//  质数是除了1和他本身之外没有能整除他的数 的数
// 新建数组的时候signs = new Array(n + 1) 能至少减少一半的内存消耗
var countPrimes = function (n) {
    let count = 0
    let signs = new Array[n+1]
    for (let i = 2; i < n; i++) {
      if (!signs[i]) {
        count++
        for (let j = 2 * i; j < n; j += i) {
          signs[j] = true
        }
      }
    }
    return count
  };
// @lc code=end

log(countPrimes(10));