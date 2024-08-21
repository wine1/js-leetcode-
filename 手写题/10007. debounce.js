// 函数防抖
// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
// n秒内再次触发就清除计时器并重新开始计时
function debounce(fn, n) {
  let timer = null
  return function (args) {
    let that = this
    timer && clearTimeout(timer)
    timer = setTimeout(function () {
      fn.call(that, args)
    }, n)
  }
}
