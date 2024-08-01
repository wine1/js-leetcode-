const debounce = function (fn, time) {
  let timer = null
  const _this = this
  return function (args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(_this, args)
    }, time)
  }
}

const throttle = function (fn, time) {
  let timer = null
  const _this = this
  return function (args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.call(_this, args)
      clearTimeout(timer)
      timer = null
    }, time);
  }
}
