/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间复杂度O(n) 空间复杂度O(1)
// 数学解法
var missingNumber = function(nums) {
  let res = 0;
  nums[nums.length] = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res - nums[i] + i;
  }
  return res;
};
// @lc code=end


// 哈希 能写但是空间复杂度会超过题目要求了
// let missingNumber=(nums)=> {

// }

log(missingNumber([3, 0, 1]));
log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
