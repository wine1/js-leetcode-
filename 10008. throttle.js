// 函数节流
// 节流是在一个时间段内只执行一次函数
function throttle(n, fn) {
  var timer = null
  if (!n) {
    n = 1000
  }
  return function () {
    var context = this
    var args = arguments
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args)
        timer = null
      }, n)
    }
  }
}
