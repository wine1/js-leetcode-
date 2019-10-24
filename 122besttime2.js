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

//  又是一道动态规划题，我觉得我已经进步了
//  开始罗里吧嗦的写了一串出来结果还是错的，有一处判断的条件没能正确写出来，结果一直不正确，一搜网友的解题思路让我觉得我是个傻子
// 只要卖出的价格比前一天买入的价格高,那么这个交易就能成,简单粗暴

var maxProfit2 = function(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit = profit + prices[i] - prices[i - 1];
    }
  }
  return profit;
};
// @lc code=end

log(maxProfit2([7, 1, 5, 3, 6, 4]));
log(maxProfit2([1, 2, 3, 4, 5]));
log(maxProfit2([7, 6, 4, 3, 1]));
