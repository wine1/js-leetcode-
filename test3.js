function sleep(time) {
  let startTime = new Date()
  while (new Date() - startTime < time) {}
  console.log('<--Next Loop-->')
}

// 宏任务1 -
setTimeout(() => {
  console.log('宏任务timeout1-一级')
  // 宏任务3 -
  setTimeout(() => {
    console.log('宏任务timeout1-二级')
    sleep(1000)
  })
  new Promise(resolve => {
    console.log('微任务promise1-同步')
    resolve()
  }).then(() => {
    console.log('微任务promise1-异步then')
  })
  sleep(1000)
})

// 宏任务2 -
setTimeout(() => {
  console.log('宏任务timeout2-一级')
  // 宏任务4 -
  setTimeout(() => {
    console.log('宏任务timeout2-二级')
    sleep(1000)
  })
  new Promise(resolve => {
    console.log('微任务promise2-同步')
    resolve()
  }).then(() => {
    console.log('微任务promise2-异步then')
  })
  sleep(1000)
})

// node11以下执行
// 宏任务timeout1-一级
// 微任务promise1-同步
// <--Next Loop-->
// 宏任务timeout2-一级
// 微任务promise2-同步
// <--Next Loop-->
// 微任务promise1-异步then
// 微任务promise2-异步then
// 宏任务timeout1-二级
// <--Next Loop-->
// 宏任务timeout2-二级
// <--Next Loop-->

// 浏览器
// 宏任务timeout1-一级
// 微任务promise1-同步
// <--Next Loop-->
// 任务promise1-异步then
// 宏任务timeout2-一级
// 微任务promise2-同步
// <--Next Loop-->
// 任务promise2-异步then
// 宏任务timeout1-二级
// <--Next Loop-->
// 宏任务timeout2-二级
// <--Next Loop-->
