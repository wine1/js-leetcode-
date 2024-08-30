
// 用 reduce 实现 flat 函数
const flatWithReduce = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flatWithReduce(cur) : cur)
  }, [])
}

const flat = (arr, dep = Infinity, res = []) => {
  dep--
  for (let i of arr) {
    if (Array.isArray(i)) {
      if (dep < 0) res.push(i)
      else {
        flat(i, dep, res)
      }
    } else {
      res.push(i)
    }
  }
  return res
}

const animals = ["🐷", ["🐶", "🐂"], ["🐎", ["🐑", ["🐲"]], "🐛"]];
const arr = [1, 2, [3, [4, 5], 6, [7, 8]], '', 9]
const arr2 = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "虎虎" }];
console.log(arr.flat(1))
console.log(flat(arr, 1))
console.log(flat(arr))
console.log(flatWithReduce(arr, 2))
console.log(111)