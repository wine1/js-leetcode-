/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp=[]
    dp[0]=0
    dp[1]=0
    let n=cost.length
    for(let i=2;i<n+1;i++) {
        dp[i]=Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }
    return dp[n]
};
// @lc code=end

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) //6
console.log(minCostClimbingStairs([10, 15, 20])) //15
console.log(11111)