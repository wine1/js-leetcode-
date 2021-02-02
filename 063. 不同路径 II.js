/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// https://leetcode-cn.com/problems/unique-paths-ii/submissions/
// 第一行和第一列的dp都只能是1如果路径中有一个障碍1 后续路都不通了 都为0 每一步都只能是上一步向下或者向右而来 所以dp[m][n]=dp[i-1][j]+dp[i][j-1] 如果遇到障碍 grid[i][j]==1 那么到这一步的路径都是0 后续的路也就不通了

var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0]===1) return 0
    else {obstacleGrid[0][0]=1}
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    for(let i=1;i<m;i++) {
        if(obstacleGrid[i][0]===1||obstacleGrid[i-1][0]===0) {
            obstacleGrid[i][0]=0
        }else {
            obstacleGrid[i][0]=1
        }
    }
    for(let i=1;i<n;i++) {
        if(obstacleGrid[0][i]===1||obstacleGrid[0][i-1]===0) {
            obstacleGrid[0][i]=0
        }else {
            obstacleGrid[0][i]=1
        }
    }
    for(let i=1;i<m;i++) {
        for(let j=1;j<n;j++) {
            if(obstacleGrid[i][j]===1) {
                obstacleGrid[i][j]=0
            }else{
                obstacleGrid[i][j]=obstacleGrid[i-1][j]+obstacleGrid[i][j-1] 
            }
        }
    }
return obstacleGrid[m-1][n-1]
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
console.log(uniquePathsWithObstacles([[0,1],[0,0]]))
console.log(uniquePathsWithObstacles([[1,0]]))