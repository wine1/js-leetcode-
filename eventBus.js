// 手写发布订阅模式
// emit 多个参数 check
//  匿名函数无法取消监听 取消监听的必须是有名字的函数
class EventBus {
  constructor() {
    this.tempMap = new Map()
  }

  /** 发布 */
  emit(name, ...args) {
    this.tempMap.get(name).forEach(fn => {
      fn(args)
    })
  }
  /** 订阅 */
  on(name, fn) {
    if (!this.tempMap.has(name)) {
      this.tempMap.set(name, new Set().add(fn))
    } else {
      this.tempMap.set(name, this.tempMap.get(name).add(fn))
    }
  }
  /** 停止 */
  off(name, fn) {
    if (this.tempMap.has(name)) {
      let list = this.tempMap.get(name)
      if (list.has(fn)) {
        list.delete(fn)
        this.tempMap.set(name, list)
        console.log(`解除对${name}的监听`)
      }
    }
  }
}

// test
let eventbus = new EventBus()
eventbus.on('test', (data1, data2) => {
  console.log(`${data1}success ${data2}`)
})
const fail = data => {
  console.log(`${data}fail`)
}
eventbus.on('test', fail)

eventbus.emit('test', 'a', ' b ', 'c')
eventbus.off('test', fail)
eventbus.emit('test', 'test')

// eventbus.on('newone', data => {
//   console.log(`${data}success`)
// })
// eventbus.emit('newone', 'newone')

// 测试移除事件监听
// const toBeRemovedListener = function () {
//   console.log('我是一个可以被移除的监听者')
// }
// eventbus.on('testoff', toBeRemovedListener)
// eventbus.emit('testoff')
// eventbus.off('testoff', toBeRemovedListener)
// eventbus.emit('testoff') // 此时事件监听已经被移除，不会再有console.log打印出来了

console.log(123)
