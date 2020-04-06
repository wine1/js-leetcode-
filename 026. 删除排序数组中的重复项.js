/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 话说js的话可不可以直接用sort然后取个length得了 时间复杂度为o(n) 没有额外空间开销
var removeDuplicates = function(nums) {
  var j = 0;
  if (nums.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
          nums.splice(i+1,1);
          i--;
        continue;
      } else {
        j++;
      }
    }
  }
  return j;
};

var num = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var num2 = [1, 1, 2];
console.log(removeDuplicates(num));
console.log(removeDuplicates(num2));
