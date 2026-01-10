// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

function treeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const target = nums[i] + nums[left] + nums[right];
      if (target > 0) {
        right--;
      } else if (target < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        break
      }
    }
  }
    return res;
}

console.log(treeSum([-1, 0, 1, 2, -1, -4]));
console.log(111);
