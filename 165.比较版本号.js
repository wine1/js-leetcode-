/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let res = 0
  let arr1 = version1.split('.')
  let arr2 = version2.split('.')
  let len = arr1.length > arr2.length ? arr1.length : arr2.length
  for (let i = 0; i < len; i++) {
    let temp1 = parseInt(arr1[i]) ? parseInt(arr1[i]) : 0
    let temp2 = parseInt(arr2[i]) ? parseInt(arr2[i]) : 0
    if (temp1 > temp2) {
      return 1
    } else if (temp1 < temp2) {
      return -1
    } else {
      continue
    }
  }
  return res
}

// console.log(compareVersion('1.01', '1.001')) //0
// console.log(compareVersion('1.0', '1.0.0')) //0
// console.log(compareVersion('0.1', '1.1')) //-1
// console.log(compareVersion('1.0.1', '1')) //1
// console.log(compareVersion('7.5.2.4', '7.5.3')) //-1
// @lc code=end
