<strong>
 promise 以一种更加优雅的方法 链式调用 解决了回调嵌套的问题
 promise.all promise.rice 合并多个任务的请求结果
</strong>
[promise/A+规范](https://www.ituring.com.cn/article/66566)

promise 中必须的值有

- fulfill :解决 对应 resolve
- reject :拒绝
- eventual value :终值 对应 result
- reason :拒因 对应 error
- Then 方法 一个 promise 必须提供一个 then 方法以访问其当前值、终值和据因。
  promise 的 then 方法接受两个参数：
  promise.then(onFulfilled, onRejected)

一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）

```
// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class NewPromise {
  constructor(executor) {
    this.value = undefined
    this.reason = undefined
    this.status = PENDING
    this.resolveStorage = []
    this.rejectStorage = []

    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.resolveStorage.length && this.resolveStorage.forEach(fn => fn())
      }
    }
    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.rejectStorage.length && this.rejectStorage.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch {
      console.log(err)
    }
  }

  then(resolve, reject) {
    if (this.status === FULFILLED) resolve(this.value)
    if (this.status === REJECTED) reject(this.reason)
    if (this.status === PENDING) {
      this.resolveStorage.push(() => resolve(this.value))
      this.rejectStorage.push(() => reject(this.reason))
    }
  }
}

const a = new NewPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  }, 1000)
}).then(
  res => {
    console.log('success', res)
  },
  err => {
    console.log('error')
  }
)

```
