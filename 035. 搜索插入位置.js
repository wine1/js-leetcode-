/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      if (target > nums[nums.length - 1]) {
        return nums.length;
      } else {
        if (target < nums[i]) {
          return i;
        }
      }
    } else {
      return nums.indexOf(target);
    }
  }
};

// @lc code=end
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 3));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1], 1));
