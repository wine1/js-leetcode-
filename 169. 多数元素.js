/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//  设置一个哈希表
var majorityElement = function(nums) {
  let hash = {};
  let max=0;
  let res=0;
  for (let i = 0; i < nums.length; i++) {
    if (typeof hash[nums[i]] !== 'undefined') {
      hash[nums[i]] = hash[nums[i]] + 1;
    } else {
      hash[nums[i]] = 1;
    }
    if(hash[nums[i]]>max) {
        max=hash[nums[i]];
        res=nums[i];
    }
  }
  return res;
};
// @lc code=end

log(majorityElement([3, 2, 3]));
log(majorityElement([2, 2, 1, 1, 1, 2, 2]));


// 时间复杂度为O(n)
// 空间复杂度为O(n)