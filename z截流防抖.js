// 防抖 （只在经过一段时间没有再次请求时触发）
const debounce = (time, fn) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, time);
  };
}

// 截流 （隔固定的时间触发一次）
const throttle = (time, fn) => {
  let timer
  return (...args) => {
    if (timer) return
    timer = setTimeout(() => {
      fn(...args);
      timer = null
    }, time)
  }
}
