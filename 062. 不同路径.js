// https://leetcode-cn.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 输入：m = 3, n = 7
// 输出：28
// 示例 2：

// 输入：m = 3, n = 2
// 输出：3
// 解释：
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向下
// 示例 3：

// 输入：m = 7, n = 3
// 输出：28
// 示例 4：

// 输入：m = 3, n = 3
// 输出：6

var uniquePaths = function(m, n) {
    
    let dp=new Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[0][0]=1
    for(let i=1;i<m;i++) {
        dp[i][0]=1
    } 
    for(let i=1;i<n;i++) {
        dp[0][i]=1
    }
    for(let i=1;i<m;i++) {
        for(let j=1;j<n;j++) {
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};

console.log(uniquePaths(3,7))
console.log(uniquePaths(3,2))
console.log(uniquePaths(7,3))
console.log(uniquePaths(3,3))