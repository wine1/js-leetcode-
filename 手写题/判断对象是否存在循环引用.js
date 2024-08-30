
const isCircle = (obj, hash = new Map()) => {
  for (let key in obj) {
    if (hash.get(key)) {
      return true
    } else {
      hash.set(key, obj[key])
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        return isCircle(obj[key], hash)
      }
    }
  }
  return false
}

let objA = { a: 1, b: 2, c: { d: 3 } }
objA.c.d = objA
const obj2 = {
  a: { b: { c: 1 } }
}
console.log(isCircle(objA))
console.log(isCircle(obj2))