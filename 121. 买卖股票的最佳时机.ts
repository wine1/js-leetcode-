/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// dp解法 思路
// dp[i]=max(dp[i-1],nums[i]-min)
function maxProfit(prices: number[]): number {
  let res: number = 0
  let dp: Array<number> = []
  let len: number = prices.length
  let min: number = 0,
    max: number = 0
  if (len < 2) return 0
  dp.push(prices[0])
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - min)
    min = Math.max(min, dp[i])
    max = Math.max(max, dp[i])
  }
  return res
}
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// 5
console.log(maxProfit([7, 6, 4, 3, 1]))
// 0
