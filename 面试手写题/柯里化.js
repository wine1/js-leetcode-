function add(m) {
  function curried(n) {
    if (typeof n === 'undefined') {
      return m
    }
    m += n
    return curried
  }
  curried.toString = function () {
    return m
  }
  return curried
}

console.log(add(1)(2)(3).toString())