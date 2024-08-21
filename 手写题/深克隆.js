// 深克隆
// 循环引用会造成栈溢出
const obj1 = {
  a: 2
}
const oldObj = {
  a: 1,
  b: ['f', 'e', 'g'],
  c: { h: { i: 2 } },
  d: function say() {
    console.log('hi')
  },
  e: [{ m: 1 }, { n: 2 }],
  f: null,
  g: undefined,
  date: [new Date(1536627600000), new Date(1540047600000)],
  RegExp: new RegExp('\\w+'),
  obj1
}
obj1.oldObj = oldObj

let hash = new WeakMap()
const deepclone = (val) => {
  if (!val) return val
  if (typeof val !== 'object') return val
  let res = Array.isArray(val) ? [] : {}
  console.log(val, res)
  if (hash.has(val)) {
    return hash.get(val)
  } else {
    hash.set(val, res)
  }
  for (let key in val) {
    if (val[key] instanceof Date) {
      res[key] = new Date(val[key])
    } else if (val[key] instanceof RegExp) {
      res[key] = new RegExp(val[key])
    } else {
      res[key] = deepclone(val[key])
    }
  }
  return res
}

console.log(deepclone(oldObj))
console.log(1111)

