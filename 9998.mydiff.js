const typeObject = '[object Object]'
const typeArray = '[object Array]'
const typeFunction = '[object Function]'

const diff = (cur, prev) => {
  if (cur === prev) return null
  const res = {}
  _diff(cur, prev, res)
  console.log('res', res)
  return res
}

const _diff = (cur, prev, path, res) => {
  const rootCurType = type(cur)
  const rootPrevType = type(prev)
  if (rootCurType === typeObject) {
    for (let key in cur) {
    }
  } else if (rootCurType === typeArray) {
  } else {
    if (rootPrevType !== typeArray && rootPrevType !== typeObject) {
      setRes(res, path, cur)
    }
  }
}

const type = value => {
  return Object.prototype.toString.call(value)
}

const setRes = (res, key, value) => {
  key = key.join('.')
  res[key] = JSON.parse(JSON.stringify(value))
}

const curObj = {
  a: 1,
  b: 2,
  c: 'str',
  d: { e: [2, { a: 4, x: { y: 3 } }] },
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
diff(curObj, prevObj)

console.log(123)
