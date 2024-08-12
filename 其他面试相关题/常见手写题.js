// 2. 实现每隔一秒打印 1,2,3,4
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, i * 1000)
// }

// for (var i = 1; i < 5; i++) {
//   ;(function (i) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
//   })(i)
// }

// 3. 小孩报数问题
// const func = (count, n) => {}
// func(30, 3)

// 4.用 Promise 实现图片的异步加载
// let imageAsync = url => {
//   return new Promise((resolve, reject) => {
//     let img = new Image()
//     img.src = url
//     img.οnlοad = () => {
//       console.log(`图片请求成功，此处进行通用操作`)
//       resolve(image)
//     }
//     img.οnerrοr = err => {
//       console.log(`失败，此处进行失败的通用操作`)
//       reject(err)
//     }
//   })
// }

// imageAsync('https://wine1.github.io/img/header.jpg')
//   .then(() => {
//     console.log('加载成功')
//   })
//   .catch(error => {
//     console.log('加载失败', error)
//   })

// 5.实现发布-订阅模式
// class Eventbus {
//   constructor() {
//     this.bus = new Map()
//   }
//   /** 订阅 */
//   On(name, func) {
//     console.log(typeof func)
//     let arr = this.bus.get(name) || []
//     this.bus.set(name, arr.concat(func))
//   }
//   /** 发布 */
//   Emit(name, ...args) {
//     let arr = this.bus.get(name) || []
//     console.log('args', args)
//     arr.forEach(item => {
//       item(...args)
//     })
//   }
// }

// let bus = new Eventbus()
// bus.On('test1', (value1, value2) => {
//   console.log('test1' + value1 + value2)
// })
// bus.On('test1', value1 => {
//   console.log('test2' + value1)
// })
// bus.Emit('test1', 'tian', 'jingjing')

// 13. 使用 setTimeout 实现 setInterval
// const mySetInterval = (fn, n) => {
//   setTimeout(() => {
//     mySetInterval(fn, n)
//   }, n)
//   fn()
// }
// mySetInterval(function () {
//   console.log(123)
// }, 1000)

// 15.判断对象是否存在循环引用
// let hash = new Map()
// const isCircle = obj => {
//   for (let key in obj) {
//     console.log(hash)
//     if (hash.get(key)) {
//       console.log('isCircle')
//       return
//     } else {
//       hash.set(key, obj[key])
//       if (typeof obj[key] === 'object' && obj[key] !== null) {
//         isCircle(obj[key])
//       }
//     }
//   }
// }
// let objA = { a: 1, b: 2, c: { d: 3 } }
// objA.c.d = objA
// isCircle(objA)
console.log(123)
