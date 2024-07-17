/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length
  let maxx = 0
  for (let i = 0; i < n; i++) {
    if (i <= maxx)
      maxx = Math.max(maxx, i + nums[i])
  }
  return maxx >= n - 1
};