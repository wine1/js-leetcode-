/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
  var ret = [];
  var exist = {};
  for (var i = 0; i < nums.length; i++) {
    if (typeof exist[target - nums[i]] !== "undefined") {
      ret.push(exist[target - nums[i]]);
      ret.push(i + 1);
    }

    exist[nums[i]] = i + 1;
  }
  log(ret,exist);
  return ret;
};

twoSum([1, 3, 5, 2, 7, 11, 15], 9);
// 双重循环的时间复杂度为O(n*n)
// 用哈希表的时间复杂度为O(n)
