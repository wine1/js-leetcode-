/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 沿着205讨巧的思路 这道题就非常简单了
// 时间复杂度为O(n) 但是在leetcode上执行用时1888ms why
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i], i + 1) !== -1) {
      return true;
    }
  }
  return false;
};
// 用哈希表也简单 问题不大 没啥写的兴趣了 
log(containsDuplicate([1, 2, 3, 1]));
log(containsDuplicate([1, 2, 3, 4]));
log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
