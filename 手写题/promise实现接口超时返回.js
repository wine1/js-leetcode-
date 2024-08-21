const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('succ1')
  }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('succ2')
  }, 1000)
})

Promise.race([promise1, promise2])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
