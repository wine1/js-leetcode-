// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

// 你可以假设数组中不存在重复的元素。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 示例 1:

// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:

// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1

// 时间复杂度限制O(logn) 所以用二分查找
// 因为数组在未知的位置发生过旋转 所以 并不是一个完全有序的数组
// 可以通过判断 mid 值 来确定哪一部分有序 如 nums[mid]>nums[0] 则左半部分有序 反之 右半部分有序

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let len = nums.length;
  let left = 0,
    right = len-1,
    mid;

  while (left <= right) {
    mid = parseInt((left + right) / 2);
    console.log(left,right,mid)
    if (nums[mid] === target) {
      return mid;
    }
    // sums[mid]在左半有序数组中
    if (nums[mid] > nums[left]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // sums[mid]在右半有序数组中
    else {
      if (target >= nums[mid] && target <= nums[right]) {
          console.log(true)
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([3,1], 1));
