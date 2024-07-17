/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = nums.length
  let dp = new Array(len).fill(0)
  dp[0] = 1
  let res = 1
  for (let i = 1; i < len; i++) {
    let count = 1
    let max = 1
    for (j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, dp[j])
        count = max + 1
      }
    }
    dp[i] = count
    res = Math.max(dp[i], res)
  }
  console.log(dp)
  return res
};