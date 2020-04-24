/*
 * @Author: your name
 * @Date: 2020-04-24 08:40:36
 * @LastEditTime: 2020-04-24 08:41:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\041. 缺失的第一个正数.js
 */
// 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

//

// 示例 1:

// 输入: [1,2,0]
// 输出: 3
// 示例 2:

// 输入: [3,4,-1,1]
// 输出: 2
// 示例 3:

// 输入: [7,8,9,11,12]
// 输出: 1
//

// 提示：

// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let res;
  let len = nums.length;
  nums.sort((a, b) => {
    return a - b;
  });
  let max = nums[len - 1];

  if (nums[len - 1] <= 0 || len === 0) {
    res = 1;
  } else if (nums[0] > 1) {
    res = 1;
  } else {
    for (let i = 1; i <= max + 1; i++) {
      if (nums.indexOf(i) == -1) {
        return i;
      }
    }
  }

  return res;
};
