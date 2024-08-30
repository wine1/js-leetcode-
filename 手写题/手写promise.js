
// // promise 中必须的值有

// // - fulfill :解决 对应 resolve
// // - reject :拒绝
// // - eventual value :终值 对应 result
// // - reason :拒因 对应 error
// // - Then 方法 一个 promise 必须提供一个 then 方法以访问其当前值、终值和据因。
// //   promise 的 then 方法接受两个参数：
// //   promise.then(onFulfilled, onRejected)

// // 一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(excutor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        this.fulfilledCallbacks.forEach(fn => fn())
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.rejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
    if (this.status === PENDING) {
      this.rejectedCallbacks.push(() => onRejected(this.reason))
      this.fulfilledCallbacks.push(() => onFulfilled(this.value))
    }
  }
}
const p1 = new MyPromise((resolve, reject) => {
  console.log('create a promise');
  resolve('成功了');
})

console.log("after new promise");

const p2 = p1.then(data => {
  console.log(data)
  throw new Error('失败了')
})

const p3 = p2.then(data => {
  console.log('success', data)
}, err => {
  console.log('faild', err)
})
