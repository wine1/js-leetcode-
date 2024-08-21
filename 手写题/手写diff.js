const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'

function _type(val) {
  return Object.prototype.toString.call(val)
}

function diff(cur, pre) {
  let res = {}
  _diff(cur, pre, '', res)
  return res
}

function _diff(cur, pre, path, res) {
  if (cur === pre) return
  const rootPreType = _type(pre)
  const rootCurType = _type(cur)
  if (rootPreType === rootCurType) {
    if (rootCurType === ARRAYTYPE) {

    }
  } else {

  }
}



const preValue = {
  a: 1,
  b: 2,
  c: 'str',
  d: { e: [2, { a: 4, x: { y: 3 } }] },
  f: true,
  h: [1],
  g: { a: [1, 2], j: 222 },
}
const curValue = {
  a: 1,
  b: 2,
  c: 'str',
  d: { e: [2, { x: 4, m: { n: 1 } }] },
  f: true,
  h: [1],
  g: { a: [1, 2], j: 111 },
}
console.log(diff(
  curValue,
  preValue
))

console.log(123)
