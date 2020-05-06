<<<<<<< HEAD
=======

>>>>>>> 75c54de50b29e881d07352cd7009454927d18f8b
// 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

// 必须原地修改，只允许使用额外常数空间。

// 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

<<<<<<< HEAD
=======
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    if (len <= 1) return;
  
    for (let i = len - 2; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
        for (let j = len - 1; j > i; j--) {
          if (nums[i] < nums[j]) {
            swap(i, j, nums)
            break;
          }
        }
        let x = i + 1, y = len - 1;
        while (x < y) swap(x++, y--, nums)
        break;
      }
      if (i === 0) {
        let x = i, y = len - 1;
        while (x < y) swap(x++, y--, nums)
      }
    }
  };
  
  function swap(i, j, nums) {
    let t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  }
>>>>>>> 75c54de50b29e881d07352cd7009454927d18f8b
