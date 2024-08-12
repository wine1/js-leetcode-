
class EventBus {
  constructor() {
    this.Bus = new Map()
  }
  // 订阅
  on(name, fn) {
    if (this.Bus.has(name)) {
      this.Bus.set(name, this.Bus.get(name).concat(fn))
    } else {
      this.Bus.set(name, [fn])
    }
  }
  // 发布
  emit(name, ...args) {
    if (this.Bus.has(name)) {
      let arr = this.Bus.get(name) || []
      arr.forEach((item) => {
        item(args)
      })
    }
  }
  // 取消监听
  off(name, fn) {
    if (this.Bus.has(name)) {
      this.Bus.delete(name)
      fn()
    }
  }
}