
class EventBus {
  constructor() {
    this.store = new Map()
  }

  // 订阅
  On(name, cb) {
    let value = []
    if (this.store.has(name)) {
      value = this.store.get(name)
      value = [...value, cb]
    } else {
      value = [cb]
    }
    this.store.set(name, value)
  }

  // 发布
  Emit(name, event) {
    if (this.store.has(name)) {
      this.store.get(name).forEach(cb => cb(event));
    } else {
      console.log(`error,${name}is not declare`)
    }
  }

  // 终止
  Stop(name) {
    if (this.store.has(name)) {
      this.store.delete(name)
    } else {
      console.log(`error,${name}is not declare`)
    }
  }
}

let test = new EventBus()
test.On('test1', (a) => {
  console.log(a)
})
test.On('test1', (a) => {
  console.log(a + 12)
})

test.Emit('test1', 1)

test.Stop('test1')

test.Emit('test1', 1)
