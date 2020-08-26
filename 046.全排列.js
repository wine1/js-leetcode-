/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let len = nums.length;
    if (len == 0) {
      return [];
    }
    let result = [];
    let arr = [];
    backtrack(nums, arr, result, 0);
    return result;
  };
  function backtrack(nums, arr, result) {
    if (arr.length == nums.length) {
      result.push([...arr]);
      return;
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (arr.indexOf(nums[i]) === -1) {
        arr.push(nums[i]);
        backtrack(nums, arr, result);
        arr.pop();
      }
      console.log(arr)
    }
  }
  
  // @lc code=end
  
  console.log(permute([1, 2, 3]));
  // [
  //   ([1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1])
  // ];
  