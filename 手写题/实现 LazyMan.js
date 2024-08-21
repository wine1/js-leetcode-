// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class Person {
  constructor(name) {
    this.name = name
    this.tasks = []
    this.tasks.push(() => console.log(`Hi! This is ${name}!`))
    setTimeout(() => this.runTasks(), 0)
  }

  addTask(fn) {
    this.tasks.push(fn)
  }
  runTasks() {
    const runTask = () => {
      if (!this.tasks.length) return
      const task = this.tasks.shift()
      Promise.resolve(task()).then(runTask)
    }
    runTask()
  }
  sleep(time) {
    this.tasks.push(() => new Promise(resolve => setTimeout(() => {
      resolve()
    }, time * 1000)))
    return this
  }

  sleepFirst(time) {
    this.tasks = [() => new Promise(resolve => setTimeout(() => {
      resolve()
    }, time * 1000))].concat(this.tasks)
    return this
  }

  eat(value) {
    this.addTask(() => console.log(`eat ${value}`))
    return this
  }
}

function LazyMan(name) {
  return new Person(name)
}
LazyMan('Hank')
LazyMan('Hank').sleep(5).eat('dinner')
LazyMan('Hank').sleepFirst(5).eat('supper')