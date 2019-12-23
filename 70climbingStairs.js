/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 怎么把文字性的题目抽象成公式呢 这种能力 挺厉害 可惜我没有
// 这道题实质上是菲波那切数列的问题 f(n)=f(n-1)+f(n-2) f(n)为上n层楼梯的总方法
// 可以用递归来解决
//怎么把工程思维和实际生活有效结合起来呢 这是个问题

// leetcode中 超时了 需要优化

let climbStairs = n => {
    if (n === 1) {
      return 1;
    } else if (n === 2) {
      return 2;
    } else {
      return climbStairs(n - 1) + climbStairs(n - 2);
    }
  };

// 递归会超时，动态规划不会
  var climbStairs = function(n) {
    let dp = new Array()
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};  // @lc code=end
  log(climbStairs(3));
  log(climbStairs(5));
  