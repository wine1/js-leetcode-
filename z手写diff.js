
// 递归遍历对象
const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'
const FUNCTIONTYPE = '[object Function]'

function diff(cur, pre) {
  const result = {}
  sysncKeys(cur, pre)
  _diff(cur, pre, '', result)
  return result
}

const _type = (value) => {
  return Object.prototype.toString.call(value)
}

const concatPathAndKey = (path, key) => {
  console.log(path, key)
  return key.includes('.') ? path + `["${key}"]` : (path == '' ? '' : path + '.') + key

}

const setRes = (result, k, v) => {
  const t = _type(v)
  if (t !== FUNCTIONTYPE) {
    if (t !== OBJECTTYPE && t !== ARRAYTYPE) {
      result[k] = v
    } else {
      result[k] = JSON.stringify(JSON.parse(v))
    }
  }
}

const sysncKeys = (cur, pre) => {
  if (cur === pre) return
  const rootCurrentType = _type(cur)
  const rootPreType = _type(pre)
  if (rootCurrentType === rootPreType) {
    if (rootCurrentType === OBJECTTYPE) {
      for (let key in pre) {
        if (cur[key] === undefined) {
          pre[key] = null
        } else {
          sysncKeys(cur[key], pre[key])
        }
      }
    } else if (rootCurrentType === ARRAYTYPE) {
      for (let key of pre) {
        sysncKeys(cur[key], pre[key])
      }
    }

  }
}

const _diff = (cur, pre, path, res) => {
  if (cur === pre) return
  const rootCurrentType = _type(cur)
  const rootPreType = _type(pre)
  if (rootCurrentType === OBJECTTYPE) {
    if (rootPreType !== OBJECTTYPE) {
      setRes(res, path, cur)
    } else {
      for (let key in cur) {
        _diff(cur[key], pre[key], concatPathAndKey(path, key), res)
      }
    }

  } else if (rootCurrentType === ARRAYTYPE) {
    if (rootPreType !== ARRAYTYPE) {
      setRes(res, path, cur)
    } else {
      cur.forEach((item, index) => {
        _diff(item, pre[index], concatPathAndKey(path + '[' + index + ']', index), res)
      })
    }
  } else {
    setRes(res, path, cur)
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
