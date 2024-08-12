function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}
// 红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯

// callback
const task = function (timer, event, cb) {
  setTimeout(() => {
    if (event === 'red') {
      red()
    } else if (event === 'green') {
      green()
    } else if (event === 'yellow') {
      yellow()
    }
    cb()
  }, timer)
}

const step = () =>
  task(300, 'red', () => {
    task(100, 'green', () => {
      task(200, 'yellow', step)
    })
  })

// step()

// promise
const taskPromise = function (timer, event) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (event === 'red') {
        red()
      } else if (event === 'green') {
        green()
      } else if (event === 'yellow') {
        yellow()
      }
      resolve()
    }, timer)
  })
}

const stepPromise = () =>
  taskPromise(300, 'red')
    .then(() => {
      taskPromise(100, 'green')
    })
    .then(() => {
      taskPromise(200, 'yellow')
    })
    .then(stepPromise)
stepPromise()

// async/await

const taskAsync = function (timer, event) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (event === 'red') {
        red()
      } else if (event === 'green') {
        green()
      } else if (event === 'yellow') {
        yellow()
      }
      resolve()
    }, timer)
  })
}

const stepAsync = async () => {
  await taskAsync(300, 'red')
  await taskAsync(100, 'green')
  await taskAsync(200, 'yellow')
  stepAsync()
}
stepAsync()
