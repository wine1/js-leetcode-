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
}
// dfs
const deepClone = (source, hash = new WeakMap()) => {
  if (!source) return source // 对应null  和 undefined 的情况
  if (typeof source !== 'object') return source // 基本类型

  let res = Array.isArray(source) ? [] : {}
  if (hash.has(source)) return hash.get(source)
  hash.set(source, res)
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] instanceof Date) {
        res[key] = new Date(source[key])
      } else if (source[key] instanceof RegExp) {
        res[key] = new RegExp(source[key])
      } else {
        res[key] = deepClone(source[key], hash)
      }
    }
  }
  return res
}

oldObj.c.h = oldObj //循环引用
const newObj = deepClone(oldObj)
oldObj.e[0].m = 10
console.log(newObj)
console.log(newObj.d())
console.log(123)
