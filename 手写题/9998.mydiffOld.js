const typeObject = '[object Object]'
const typeArray = '[object Array]'
const typeFunction = '[object Function]'

const type = value => {
  return Object.prototype.toString.call(value)
}

const DiffOld = (cur, prev) => {
  const res1 = {}
  const res2 = {}
  _diffOld(cur, res1, [])
  _diffOld(prev, res2, [])
  const res = compare(res1, res2)
  console.log(111, res)
}

const _diffOld = (obj, res, path) => {
  if (type(obj) !== typeObject && type(obj) !== typeArray) {
    res[path.join('.')] = obj
    return
  }
  if (type(obj) === typeObject) {
    for (let key in obj) {
      path.push(key)
      _diffOld(obj[key], res, path)
      path.pop()
    }
  } else if (type(obj) === typeArray) {
    let temp = path.pop()
    for (let i = 0; i < obj.length; i++) {
      path.push(`${temp}[${i}]`)
      _diffOld(obj[i], res, path)
      path.pop()
    }
  }
  return
}
const compare = (cur, prev) => {
  const res = {}
  for (let key in prev) {
    if (prev[key] && !cur[key]) {
      res[key] = null
    }
  }
  for (let key in cur) {
    if (prev[key]) {
      console.log(key, prev[key] !== cur[key], prev[key], cur[key])
      if (prev[key] !== cur[key]) {
        res[key] = cur[key] ? cur[key] : null
      }
    } else {
      res[key] = cur[key]
    }
  }

  return res
}

const curObj = {
  a: 1,
  b: 2,
  c: 'str',
  d: { e: [{ a: 4, x: { y: 3 } }] },
  f: true,
  h: [1],
  g: { a: [1, 2], j: 222 },
  k: 'del',
}
const prevObj = {
  a: 1,
  b: 2,
  c: 'str',
  d: { e: [2, { a: 4, x: { y: 1 } }] },
  f: true,
  h: [1],
  g: { a: [1, 2], j: 111 },
}
DiffOld(curObj, prevObj)

console.log(123)
