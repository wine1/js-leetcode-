const findIndex = arr => {
  let res = []
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    } else {
      continue
    }
    let flag = true
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        flag = false
        break
      }
    }
    if (flag) {
      res.push(i)
    }
  }
  return res
}
console.log(findIndex([2, 3, 1, 8, 9, 20, 12]))
// 输入：[2, 3, 1, 8, 9, 20, 12]
// 输出：3, 4
// 解释：数组中 8, 9 满足题目要求，他们的索引分别是 3、4

// O(n)方案
const findIndexN = arr => {
  let res = []
  let len = arr.length
  let max = []
  max[0] = arr[0]
  let min = []
  min[len - 1] = arr[len - 1]
  for (let i = 1; i < arr.length; i++) {
    max[i] = Math.max(max[i - 1], arr[i])
  }
  for (let i = len - 2; i >= 0; i--) {
    min[i] = Math.min(min[i + 1], arr[i])
  }
  for (let i = 0; i < len - 1; i++) {
    if (max[i] === min[i]) {
      res.push(i)
    }
  }
  return res
}
console.log(findIndexN([2, 3, 1, 8, 9, 20, 12]))
