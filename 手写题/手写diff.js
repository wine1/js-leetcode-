const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'

function _type(val) {
  return Object.prototype.toString.call(val)
}

function diff(cur, pre) {
  let res = {}
  let path = ''
  _diff(cur, pre, path, res)
  return res
}

function setResult(result, key, value) {
  const type = _type(value)
  if (type === ARRAYTYPE || type === OBJECTTYPE) {
    result[key] = JSON.stringify(value)
  } else {
    result[key] = value
  }
}

function _diff(cur, pre, path, res) {
  if (cur === pre) return
  let curType = _type(cur)
  let preType = _type(pre)
  if (curType === OBJECTTYPE) {
    // 类型相同 均为object
    if (preType === OBJECTTYPE) {
      for (let key in cur) {
        let type = _type(cur[key])
        if (type === OBJECTTYPE || type === ARRAYTYPE) {
          _diff(cur, pre, `${path}.${key}`, res)
        }
      }
    }
    // cur类型为object pre类型为array
    else if (preType === ARRAYTYPE) {
      setResult(res, path, cur)
    }
  } else if (curType === ARRAYTYPE) {

  } else {
    setResult(res, path, cur)
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
  k: 'del'
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
