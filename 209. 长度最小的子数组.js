/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// 暴力 超时 O(n*n)
// var minSubArrayLen = function (target, nums) {
//   let res = Math.MAX_VALUE
//   let n = nums.length
//   for (let i = 0; i < n; i++) {
//     let sum = 0
//     for (let j = i; j < n; j++) {
//       sum += nums[j]
//       if (sum >= target) {
//         let m = j - i + 1
//         res = res < m ? res : m
//         break
//       }
//     }
//   }
//   if (res === Math.MAX_VALUE) res = 0
//   return res
// };

var minSubArrayLen = function (target, nums) {
  let res = Infinity
  let n = nums.length
  let sumArr = [nums[0]]
  for (let i = 1; i < n; i++) {
    if (target <= nums[i]) return 1
    sumArr[i] = sumArr[i - 1] + nums[i]
  }
  if (target > sumArr[n - 1]) return 0
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n
    while (left <= right) {
      let mid = (left + right) >> 1
      if (sumArr[mid] - sumArr[i] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
      // console.log(sumArr[mid], sumArr[i], mid)
    }
    res = res < left - i + 1 ? res : left - i + 1
  }

  if (res === Infinity) res = 0
  return res
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))