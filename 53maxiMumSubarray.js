/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */


//  动态规划
// dp[i]为数组前n项的最大子序列和，而dp[i]=dp[i-1]+nums[i] 即结果取决于dp[i-1]
var maxSubArray = function (nums) {
    var dp = [0];
    var max = nums[0];
    for (var i = 1; i < nums.length; i++) {
        dp[0] = nums[0];
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i];
        } else {
            dp[i] = nums[i];
        }
        if (max > dp[i]) {
            continue;
        } else {
            max = dp[i];
        }
    }
    log(dp);
    return max;
};

log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));