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

// const a = new NewPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('成功')
//   }, 1000)
// }).then(
//   res => {
//     console.log('success', res)
//   },
//   err => {
//     console.log('error')
//   }
// )
// test

const p1 = new NewPromise((resolve, reject) => {
  console.log('create a promise')
  setTimeout(() => {
    resolve('成功了')
  }, 1000)
})

console.log('after new promise')

const p2 = p1.then(data => {
  console.log(data)
  throw new Error('失败了')
})

const p3 = p2.then(
  data => {
    console.log('success', data)
  },
  err => {
    console.log('faild', err)
  }
)

// 支持链式调用
