// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

// 示例 1:

// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 示例 2:

// 输入: numRows = 1
// 输出: [[1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = new Array()
  res.push([1])
  // console.log('res',res)
  for (let i = 1; i < numRows; i++) {
    let temp = new Array()
    temp[0] = 1
    for (let j = 1; j < i + 1; j++) {
      if (j === i) {
        temp[j] = 1
      } else {
        temp[j] = res[i - 1][j - 1] + res[i - 1][j]
      }
    }
    // console.log('temp',temp)
    res.push(temp)
    // console.log('res',res)
  }
  return res
}

console.log(generate(1))
// console.log(1)
