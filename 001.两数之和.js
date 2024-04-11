/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  题目
// https://leetcode-cn.com/problems/two-sum/
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 解题思路：
// 将数组依次循环存入hash表中，判断target-num[i]的值是否已经在hash表中存在，查找到则返回两者下标

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = new Map()
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (hashMap.has(target - nums[i])) {
      return [i, hashMap.get(target - nums[i])]
    }
    hashMap.set(nums[i], i)
  }

};

// O(n)
var twoSum = function (nums, target) {
  var ret = []
  var exist = {}
  for (var i = 0; i < nums.length; i++) {
    if (typeof exist[target - nums[i]] !== 'undefined') {
      ret.push(exist[target - nums[i]] - 1)
      ret.push(i)
    }

    exist[nums[i]] = i + 1
    console.log(exist)
  }
  return ret
}

// 暴力解题
let twoSum = function (nums, target) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res[0] = i
        res[1] = j
      }
    }
  }
  return res
}

console.log(twoSum([1, 3, 5, 2, 7, 11, 15], 9))
// 双重循环的时间复杂度为O(n*n)
// 用哈希表的时间复杂度为O(n)
