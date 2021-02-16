/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 因缺思厅  又是一道动态规划~
// 如果抢劫sums[i]位，最大抢劫收益dp[i]为dp[i-2]+dp[i] 不抢就 dp[i]=dp[i-1]
// 考虑边界条件，坑啊 比如nums为空
var rob = function(nums) {
  if (nums.length === 0) {
    return 0;
  }else if(nums.length===2) {
      return Math.max(nums[0],nums[1])
  } 
  else {
    let dp = [];
    dp[0] = nums[0];
    let max=dp[0];
    for (let i = 1; i < nums.length; i++) {
      if (i === 1) dp[i] = Math.max(dp[i - 1], nums[0],nums[1]);
      else dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
      max = dp[i];
    }
    return max;
  }
};
// @lc code=end
log(rob([]));
log(rob([1, 2]));
log(rob([1,3,1]));
log(rob([1, 2, 3, 1]));
// 4
log(rob([2, 7, 9, 3, 1]));
// 12
