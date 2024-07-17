// 暴力枚举 超时
// var subarraySum = function (nums, k) {
//   let count = 0
//   let len = nums.length
//   for (let i = 0; i < len; i++) {
//     let sum = 0
//     for (let j = i; j >= 0; j--) {
//       sum += nums[j]
//       if (sum === k) {
//         count++
//       }
//     }
//   }
//   return count
// };


// 前序和 + hash
var subarraySum = function (nums, k) {
  let count = 0;
  let pre = 0
  const mp = new Map()
  mp.set(0, 1)
  for (let i = 0; i < nums.length; ++i) {
    pre += nums[i]
    if (mp.has(pre - k)) {
      count += mp.get(pre - k)
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1)
    } else {
      mp.set(pre, 1)
    }
  }
  return count;
};


console.log(subarraySum([1, 1, 1], 2)) //2
console.log(subarraySum([1, 2, 3], 3)) //2
console.log(subarraySum([1, -1, 0], 0)) //3
