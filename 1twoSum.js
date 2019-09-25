/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 打印出来的方法
const log = console.log.bind(console);

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
  log(ret);
  return ret;
};

// var twoSum = function(nums, target) {
//   var ret = [];
//   for (let i = 0; i < nums.length; i++) {
//     console.log(i);
//     for (let j = i + 1; j < nums.length - i; j++) {
//       console.log(i, j);
//       console.log(nums[i],nums[j]);
//       if (nums[i] + nums[j] === target) {
//         ret[0] = i;
//         ret[1] = j;
//         log(ret);
//       }
//     }
//   }
//   return ret;
// };

twoSum([1, 3, 5, 2, 7, 11, 15], 9);
// 双重循环的时间复杂度为O(n*n)
// 用哈希表的时间复杂度为O(n)
