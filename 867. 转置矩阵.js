// 示例 1：

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[1,4,7],[2,5,8],[3,6,9]]
// 示例 2：

// 输入：matrix = [[1,2,3],[4,5,6]]
// 输出：[[1,4],[2,5],[3,6]]

// 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

// 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

//  matrix[i][j]=transpose[j][i]

 var transpose = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let res = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++)
        {
            res[i][j]=matrix[j][i]
        }
    }
    return res
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))
console.log(transpose([[1,2,3],[4,5,6]]))