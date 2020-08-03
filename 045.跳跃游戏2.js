/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 首先需要循环这个数组，所以一定有一个变量 i 代表当前遍历的位置，我们定义一个变量 maxReach 代表遍历时所能触达的最远距离，因为题目需要输出的是步数，所以需要一个 step 变量来记录所走的步数，当找到当前可走范围内的最远距离，我们就走到这里，其实第一次的 maxReach 就是这个范围的边界，然而由于在寻找范围内最远距离的过程中最远距离可能会更新，所以用一个 end 变量来记录。
var jump = function(nums) {
    let maxReach = 0;
    let step = 0;
    let end = 0;//当前能达到的最远距离
    for (let i = 0; i < nums.length - 1; i++) {
      maxReach = Math.max(maxReach, nums[i] + i);
      if (i === end) {
        step++;
        end = maxReach;
      }
    }
    return step;
  };
  // @lc code=end
  
  console.log(jump([2, 3, 1, 1, 4]));
  