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

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 最左侧值为定值，右侧所有值进行两边推进计算
  let res = []
  nums.sort((a, b) => a - b)
  let size = nums.length
  if (nums[0] <= 0 && nums[size - 1] >= 0) {
    // 保证有正数负数
    let i = 0
    while (i < size - 2) {
      if (nums[i] > 0) break // 最左侧大于0，无解
      let first = i + 1
      let last = size - 1
      while (first < last) {
        if (nums[i] * nums[last] > 0) break // 三数同符号，无解
        let sum = nums[i] + nums[first] + nums[last]
        if (sum === 0) {
          res.push([nums[i], nums[first], nums[last]])
        }
        if (sum <= 0) {
          // 负数过小，first右移
          while (nums[first] === nums[++first]) {} // 重复值跳过
        } else {
          while (nums[last] === nums[--last]) {} // 重复值跳过
        }
      }
      while (nums[i] === nums[++i]) {}
    }
  }

  return res
}

// 暴力方法 超时
var threeSum = function (nums) {
  let resArr = []
  let targetArr = []
  for (let i = 0; i < nums.length; i++) {
    let target = nums[i]
    targetArr.push(target)
    let arr = []
    for (let j = i + 1; j < nums.length; j++) {
      if (arr.indexOf(0 - target - nums[j]) === -1) {
        arr.push(nums[j])
      } else {
        let temp = [target, 0 - target - nums[j], nums[j]]
        let strtemp = JSON.stringify(temp.sort())
        let isSame = false
        resArr.forEach(item => {
          if (JSON.stringify(item) === strtemp) isSame = true
        })

        if (!isSame) resArr.push(temp)
      }
    }
  }
  return resArr
}
