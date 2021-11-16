// 示例 1:

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
// 示例 2:

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let len = nums.length
  if (nums[0] > target || nums[len - 1] < target) return -1
  let left = 0,
    right = len - 1
  while (left <= right) {
    let mid = Math.ceil((right + left) / 2)
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)) //4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) //-1
console.log(1)
