function myNew(fn) {
  const newObj = Object.create(fn.prototype)
  result = fn.apply(newObj, [...arguments])
  return typeof result === 'object' ? result : newObj
}
