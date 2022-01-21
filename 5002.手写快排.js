/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  示例 1：

//  输入：nums = [5,2,3,1]
//  输出：[1,2,3,5]
//  示例 2：

//  输入：nums = [5,1,1,2,0,0]
//  输出：[0,0,1,1,2,5]

const quickSort = (nums, left, right) => {
  let temp = nums[left]
  while (left < right) {
    while (left < right && nums[right] >= temp) right -= 1
    nums[left] = nums[right]
    while (left < right && nums[left] <= temp) left += 1
    nums[right] = nums[left]
  }
  nums[left] = temp
  return left
}
const sort = (nums, left, right) => {
  if (left >= right) return
  let index = quickSort(nums, left, right)
  sort(nums, left, index - 1)
  sort(nums, index + 1, right)
}

var sortArray = function (nums) {
  let left = 0,
    right = nums.length - 1
  sort(nums, left, right)
  return nums
}

console.log(sortArray([5, 2, 3, 1]))
console.log(sortArray([5, 1, 1, 2, 0, 0]))
