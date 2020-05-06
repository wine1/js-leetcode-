/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//  回归哈希表

var containsNearbyDuplicate = function(nums, k) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (typeof hash[nums[i]] === "undefined") {
      hash[nums[i]] = i;
    } else {
      if (i - parseInt(hash[nums[i]]) <= k) {
        return true;
      } else {
        hash[nums[i]] = i;
      }
    }
  }
  return false;
};

log(containsNearbyDuplicate([1, 2, 3, 1], 3));
log(containsNearbyDuplicate([1, 0, 1, 1], 1));
log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
