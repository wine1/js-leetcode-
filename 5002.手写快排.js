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
const quickSort = (nums, index, left, right) => {
  if (left >= right) return nums
  while (left <= right) {
    if (nums[index] < nums[left]) {
      left++
    } else if (nums[index] <= nums[right]) {
      [(nums[left], nums[right])] = [nums[right], nums[left]]
      right--
    }
  }
  index++
  [(nums[left], nums[right])] = [nums[right], nums[left]]
  quickSort(nums, index + 1, left, right)
}
var sortArray = function (nums) {
  let index = 0,
    left = index + 1,
    right = nums.length - 1
  quickSort(nums, 0, left, right)
  console.log(nums)
  return nums
}

sortArray([5, 2, 3, 1])
sortArray([5, 1, 1, 2, 0, 0])
