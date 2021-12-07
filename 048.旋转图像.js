/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let row = matrix.length - 1
  let col = matrix[0].length - 1
  let res = []
  for (let i = 0; i <= row; i++) {
    let temp = new Array()
    for (let j = col; j >= 0; j--) {
      // console.log(i, j, matrix[j][i])
      temp.push(matrix[j][i])
    }
    res.push(temp)
  }
  // console.log(res)
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      matrix[i][j] = res[i][j]
    }
  }
  // console.log(matrix)
}
// @lc code=end
// console.log(rotate([[]]))
// console.log(rotate([[1]]))
// console.log(
//   rotate([
//     [1, 2],
//     [3, 4],
//   ])
// ) //[[3,1],[4,2]]
// console.log(
//   rotate([
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16],
//   ]) //[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// )
// console.log(
//   rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// )
console.log(123)
