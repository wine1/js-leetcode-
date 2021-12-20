/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 快排
const quickSort = (arr, left, right) => {
  let partitionIndex = 0
  left = typeof left !== 'number' ? 0 : left
  right = typeof right !== 'number' ? 0 : right

  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

const partition = (arr, left, right) => {
  let pivot = left
  let index = pivot + 1
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

const swap = (arr, i, j) => {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

var findKthLargest = function (nums, k) {
  let len = nums.length
  nums = quickSort(nums, 0, len - 1)
  return nums[len - k]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) //5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)) //4
// @lc code=end
