const res = []
function flat(value, dep = Infinity) {
  if (dep <= 0) {
    res.push(value)
  } else if (Array.isArray(value)) {
    for (let item of value) {
      flat(item, dep--)
    }
  } else
    if (Object.prototype.toString.call(value) === '[object String]' && !value) { }
    else {
      res.push(value)
    }
  return res
}

// 用 reduce 实现 flat 函数
// const flatWithReduce = (arr) => {
//   return arr.reduce((acc, cur) => {
//     return acc.concat(Array.isArray(cur) ? flatWithReduce(cur) : cur)
//   }, [])
// }
const flatWithReduce = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatWithReduce(cur) : cur);
  }, []);
};

const animals = ["🐷", ["🐶", "🐂"], ["🐎", ["🐑", ["🐲"]], "🐛"]];
const arr = [1, 2, [3, [4, 5], 6, [7, 8]], '', 9]
const arr2 = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "虎虎" }];
console.log(arr.flat(3))
console.log(flat(arr, 3))
console.log(flat(arr2))
console.log(flatWithReduce(arr, 2))
console.log(111)