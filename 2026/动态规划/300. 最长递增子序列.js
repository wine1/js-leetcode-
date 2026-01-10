// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1

// dp[i] 只需要在dp[i-1]的基础上 判断 nums[i] 与 dp[i-1]的大小

function lengthOfLIS(nums) {
  let n = nums.length;
  let res = 1;
  const dp = new Array(n);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let count = 1;
    let max = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, dp[j]);
        count = max + 1;
      }
    }
    dp[i] = count
    res = Math.max(dp[i], res)
  }
  return res;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); //4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); //4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); //1
