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

// const partition = (arr, left, right) => {
//   let pivot = arr[left]
//   while (left < right) {
//     while (left < right && pivot <= arr[right]) {
//       right--
//     }
//     arr[left] = arr[right]
//     while (left < right && pivot >= arr[left]) {
//       left++
//     }
//     arr[right] = arr[left]
//   }
//   arr[left] = pivot
//   return left
// }

// const sort = (arr, left, right) => {
//   if (left > right) return
//   const pivot = partition(arr, left, right)
//   sort(arr, left, pivot - 1)
//   sort(arr, pivot + 1, right)

// }
// const quickSort = (nums) => {
//   sort(nums, 0, nums.length - 1)
//   return nums
// }

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var quickSort = function (nums) {
  const partition = (left, right) => {
    let temp = nums[left]
    while (left < right) {
      while (left < right && nums[right] >= temp) right--
      nums[left] = nums[right]
      while (left < right && nums[left] <= temp) left++
      nums[right] = nums[left]
    }
    nums[left] = temp
    return left
  }
  const sort = (left, right) => {
    if (left > right) return
    const p = partition(left, right)
    sort(left, p - 1)
    sort(p + 1, right)
  }

  sort(0, nums.length - 1)
  return nums
};
console.log(quickSort([5, 2, 3, 1]))
console.log(quickSort([5, 1, 1, 2, 0, 0]))
