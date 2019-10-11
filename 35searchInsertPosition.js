/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var left, right, mid;
  left = 0;
  right = nums.length - 1;
  while (left < right) {
    mid = parseInt((left + right) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else if (target === nums[mid]) {
      return mid;
    }
  }
  if (left === 0) {
      nums.splice(0,0,target);
    return 0;
  } else {
    nums.splice(left+1,0,target);
    return left + 1;
  }
};
// @lc code=end
log(searchInsert([1, 3, 5, 6], 7));
log(searchInsert([1, 3, 5, 6], 3));
log(searchInsert([1, 3, 5, 6], 0));
