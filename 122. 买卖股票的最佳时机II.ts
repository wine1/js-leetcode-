/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// dp思路
// 状态转移方程
// dp[i]=

function maxProfit(prices: number[]): number {
  const len = prices.length
  let dp0 = 0,
    dp1 = -prices[0]
  for (let i = 1; i < len; ++i) {
    let newDp0 = Math.max(dp0, dp1 + prices[i])
    let newDp1 = Math.max(dp1, dp0 - prices[i])
    dp0 = newDp0
    dp1 = newDp1
  }
  return dp0
}
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4])) //7
console.log(maxProfit([1, 2, 3, 4, 5])) //4
console.log(maxProfit([7, 6, 4, 3, 1])) //0
