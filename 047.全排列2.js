/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  剪枝操作. 什么意思呢? 就是我们在递归的过程中直接跳过会重复的排列.
// 怎么做到呢? 分为两步
//  第一步, 将数组排序, 这样相同的元素在数组中就是相邻的;
//  第二步, 也是最重要的一步, 当遍历到相同元素时, 如果它不是第一位且它前面的相同的元素没有被使用, 那么就跳过这次递归.
// 为什么是这个条件呢? 比如 [1, 1, 2] 前两个组合为 [1, 1, 2], [1, 2, 1], 下一次递归时, curr 数组为 [], 递归到了第二个 1 上, 也就是下标为 1 的位置, 如果 curr 再以这个 1 为开始, 那么后面遍历到的肯定是重复的;
// 还有一个条件是前面的元素没有被使用, 这是因为当前面的 1 未使用时, 说明下一个 1 一定是可以跳过的, 前面的 1 已经包括了以 1 开头的所有组合.

const backTrack = (nums, temp, res, n, used) => {
  if (n === nums.length) {
    res.push([...temp])
    return
  }

  for (let i = 0; i < nums.length; ++i) {
    if (used[i]) continue
    if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue

    temp.push(nums[i])
    used[i] = true
    backTrack(nums, temp, res, n + 1, used)
    temp.pop()
    used[i] = false
  }
}
var permuteUnique = function (nums) {
  let used = new Array(nums.length).fill(false)
  let res = []
  nums.sort((a, b) => a - b)
  backTrack(nums, [], res, 0, used)
  return res
}
// @lc code=end
console.log(permuteUnique([1, 1, 2])) //[[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique([1, 2, 3])) //[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(123)
