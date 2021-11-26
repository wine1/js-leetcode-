// 用settimeout 实现 settimeinterval

function newSetTimeInterval(time, func) {
  function interval() {
    setTimeout(interval, time)
    func()
  }
  setTimeout(interval, time)
}
newSetTimeInterval(1000, () => {
  console.log(123)
})

// 实现_get
const obj = {
  a: {
    b: {
      c: 1,
    },
  },
}
function newGet(obj, str) {
  let arr = str.split('.')
  for (let i = 0; i < arr.length; i++) {
    for (const key in obj) {
      if (key === arr[i]) {
        obj = obj[key]
      } else {
        return 'undefined'
      }
    }
  }
  return obj
}
console.log(newGet(obj, 'a.b.c'))
//return 1
console.log(newGet(obj, 'a.b.d'))
//return undefined
