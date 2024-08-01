
// promise 中必须的值有

// - fulfill :解决 对应 resolve
// - reject :拒绝
// - eventual value :终值 对应 result
// - reason :拒因 对应 error
// - Then 方法 一个 promise 必须提供一个 then 方法以访问其当前值、终值和据因。
//   promise 的 then 方法接受两个参数：
//   promise.then(onFulfilled, onRejected)

// 一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）

class MyPromise {
  constructor(executor) {
    this.eventual = undefined
    this.reason = undefined
    this.status = pending

  }

  then(onFulfilled, onRejected) {

  }
}