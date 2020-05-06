// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 如果数组中不存在目标值，返回 [-1, -1]。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let first = nums.indexOf(target);
  let res = [];
  if (first == -1) {
    return [-1, -1];
  } else {
    res[0] = first;
    for (let i = nums.length - 1; i >= first; i--) {
      if (nums[i] == target) {
        res[1] = i;
        return res;
      }
    }
  }
  return res;
};
// @lc code=end

console.log(searchRange([5, 7, 7, 8, 9, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([3, 3, 3, 3], 3));
