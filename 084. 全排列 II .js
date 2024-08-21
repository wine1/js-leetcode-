/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
  if (!nums.length) return []
  let res = []
  const flagArr = new Array(nums.length).fill(false)
  const sort = (index, arr) => {
    if (nums.length === arr.length) {
      res.push([...arr])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (flagArr[i] || (i > 0 && nums[i] === nums[i - 1] && !flagArr[i - 1])) continue
      arr.push(nums[i])
      flagArr[i] = true
      sort(index + 1, arr)
      flagArr[i] = false
      arr.pop()

    }
  }
  nums.sort((x, y) => x - y);
  sort(0, [])
  return res
};

console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([1, 2, 3]))
console.log(111)