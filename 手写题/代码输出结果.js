// 异步 事件循环
// const promise = new Promise((resolve, reject) => {
//   console.log(1)
//   console.log(2)
// })
// promise.then(() => {
//   console.log(3)
// })
// console.log(4)
// 1 2 4

const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})
const promise2 = promise1.then(res => {
  console.log(res)
})
console.log('1', promise1)
console.log('2', promise2)
// promise1
// 1 Promise{<resolved>: resolve1}
// 2 Promise{<pending>}
// resolve1

const promise = new Promise((resolve, reject) => {
  console.log(1)
  setTimeout(() => {
    console.log('timerStart')
    resolve('success')
    console.log('timerEnd')
  }, 0)
  console.log(2)
})
promise.then(res => {
  console.log(res)
})
console.log(4)
// 1 2 4 'timerStart' 'undefined'  'timerEnd'

Promise.resolve().then(() => {
  console.log('promise1')
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
})
const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start')
//'start' 'promise1' 'timer1' 'promise2' 'timer2'

const promise = new Promise((resolve, reject) => {
  resolve('success1')
  reject('error')
  resolve('success2')
})
promise
  .then(res => {
    console.log('then:', res)
  })
  .catch(err => {
    console.log('catch:', err)
  })
// 'then:' 'success1'

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)
//1
// Promise {<fulfilled>: undefined}
// ??

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)
// promise1 Promise {<pending>}
// promise2 Promise {<pending>}
// Uncaught (in promise) Error: error!!!
// promise1 Promise {<fulfilled>: "success"}
// promise2 Promise {<rejected>: Error: error!!}

Promise.resolve(1)
  .then(res => {
    console.log(res)
    return 2
  })
  .catch(err => {
    return 3
  })
  .then(res => {
    console.log(res)
  })
// 1 2

Promise.resolve()
  .then(() => {
    return new Error('error!!!')
  })
  .then(res => {
    console.log('then: ', res)
  })
  .catch(err => {
    console.log('catch: ', err)
  })
//"catch: " 'error!!!'

const promise = Promise.resolve().then(() => {
  return promise
})
promise.catch(console.err)
// cycle

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)
// 1

Promise.reject('err!!!')
  .then(
    res => {
      console.log('success', res)
    },
    err => {
      console.log('error', err)
    }
  )
  .catch(err => {
    console.log('catch', err)
  })
// 'error' 'err!!!'

Promise.resolve()
  .then(
    function success(res) {
      throw new Error('error!!!')
    },
    function fail1(err) {
      console.log('fail1', err)
    }
  )
  .catch(function fail2(err) {
    console.log('fail2', err)
  })
// 'fail2' 'error!!!'

Promise.resolve('1')
  .then(res => {
    console.log(res)
  })
  .finally(() => {
    console.log('finally')
  })
Promise.resolve('2')
  .finally(() => {
    console.log('finally2')
    return '我是finally2返回的值'
  })
  .then(res => {
    console.log('finally2后面的then函数', res)
  })
// 1
// finally2
// finally
// finally2后面的then函数 2
// ??

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
async1()
console.log('start')
//"async1 start" 'start' "async2" "async1 end"

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
  setTimeout(() => {
    console.log('timer1')
  }, 0)
}
async function async2() {
  setTimeout(() => {
    console.log('timer2')
  }, 0)
  console.log('async2')
}
async1()
setTimeout(() => {
  console.log('timer3')
}, 0)
console.log('start')
// "async1 start" "async2" "start" "async1 end" 'timer2' 'timer3' 'timer1'

async function async1() {
  console.log('async1 start')
  await new Promise(resolve => {
    console.log('promise1')
  })
  console.log('async1 success')
  return 'async1 end'
}
console.log('srcipt start')
async1().then(res => console.log(res))
console.log('srcipt end')
// 'srcipt start' 'async1 start' 'promise1' 'srcipt end'

async function async1() {
  console.log('async1 start')
  await new Promise(resolve => {
    console.log('promise1')
    resolve('promise1 resolve')
  }).then(res => console.log(res))
  console.log('async1 success')
  return 'async1 end'
}
console.log('srcipt start')
async1().then(res => console.log(res))
console.log('srcipt end')
//'srcipt start' 'async1 start' 'promise1' 'srcipt end' 'promise1 resolve' 'async1 success''async1 end'

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('setTimeout')
}, 0)
async1()
new Promise(resolve => {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')
// "script start"
// "async1 start"
// "async2"
// "promise1"
// 'script end'
// "async1 end"
// "promise2"
// "setTimeout"

async function async1() {
  await async2()
  console.log('async1')
  return 'async1 success'
}
async function async2() {
  return new Promise((resolve, reject) => {
    console.log('async2')
    reject('error')
  })
}
async1().then(res => console.log(res))
// 'async2' Uncaught (in promise) error

const first = () =>
  new Promise((resolve, reject) => {
    console.log(3)
    let p = new Promise((resolve, reject) => {
      console.log(7)
      setTimeout(() => {
        console.log(5)
        resolve(6)
        console.log(p)
      }, 0)
      resolve(1)
    })
    resolve(2)
    p.then(arg => {
      console.log(arg)
    })
  })
first().then(arg => {
  console.log(arg)
})
console.log(4)
//3 7 4 1 2 5 Promise{<resolved>: 1}

// this指向
function foo() {
  console.log(this.a)
}
function doFoo() {
  foo()
}
var obj = {
  a: 1,
  doFoo: doFoo,
}
var a = 2
obj.doFoo() // 2
//
var a = 10
var obj = {
  a: 20,
  say: () => {
    console.log(this.a)
  },
}
obj.say() // 10
var anotherObj = { a: 30 }
obj.say.apply(anotherObj) //10
//
function a() {
  console.log(this)
}
a.call(null) //window
//
var obj = {
  name: 'cuggz',
  fun: function () {
    console.log(this.name)
  },
}
obj.fun() // cuggz
new obj.fun() // undefined
//
var obj = {
  say: function () {
    var f1 = () => {
      console.log('1111', this)
    }
    f1()
  },
  pro: {
    getPro: () => {
      console.log(this)
    },
  },
}
var o = obj.say
o() //1111  undefined
obj.say() //1111  {say pro}
obj.pro.getPro() //undifned
//
var myObject = {
  foo: 'bar',
  func: function () {
    var self = this
    console.log(this.foo)
    console.log(self.foo)
    ;(function () {
      console.log(this.foo)
      console.log(self.foo)
    })()
  },
}
myObject.func() // bar bar undefined bar
//
window.number = 2
var obj = {
  number: 3,
  db1: (function () {
    console.log(this)
    this.number *= 4
    return function () {
      console.log(this)
      this.number *= 5
    }
  })(),
}
var db1 = obj.db1
db1()
obj.db1()
console.log(obj.number) // 15
console.log(window.number) // 40
//
var length = 10
function fn() {
  console.log(this.length)
}
var obj = {
  length: 5,
  method: function (fn) {
    fn()
    arguments[0]()
  },
}
obj.method(fn, 1) //10 2
//
var a = 1
function printA() {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: printA,
  bar: function () {
    printA()
  },
}
obj.foo() // 2
obj.bar() // 1
var foo = obj.foo
foo() // 1
//
var x = 3
var y = 4
var obj = {
  x: 1,
  y: 6,
  getX: function () {
    var x = 5
    return (function () {
      return this.x
    })()
  },
  getY: function () {
    var y = 7
    return this.y
  },
}
console.log(obj.getX()) // 3
console.log(obj.getY()) // 6
//
var a = 10
var obt = {
  a: 20,
  fn: function () {
    var a = 30
    console.log(this.a)
  },
}
obt.fn() // 20
obt.fn.call() // 10
obt.fn() // 20
//
function a(xx) {
  this.x = xx
  return this
}
var x = a(5)
var y = a(6)

console.log(x.x) // undefined
console.log(y.x) // 6
//
function foo(something) {
  this.a = something
}

var obj1 = {
  foo: foo,
}

var obj2 = {}

obj1.foo(2)
console.log(obj1.a) // 2

obj1.foo.call(obj2, 3)
console.log(obj2.a) // 3

var bar = new obj1.foo(4)
console.log(obj1.a) // 2
console.log(bar.a) // 4
//
function foo(something) {
  this.a = something
}

var obj1 = {}

var bar = foo.bind(obj1)
bar(2)
console.log(obj1.a) // 2

var baz = new bar(3)
console.log(obj1.a) // 2
console.log(baz.a)(
  // 3
  //

  // 作用域 变量提升 闭包
  function () {
    var x = (y = 1)
  }
)()
var z
console.log(y) // 1
console.log(z) // undefined
console.log(x) // Uncaught ReferenceError: x is not defined
//
var a, b
;(function () {
  console.log(a)
  console.log(b)
  var a = (b = 3)
  console.log(a)
  console.log(b)
})()
console.log(a)
console.log(b)
//
undefined
undefined
3
3
undefined
3
//
var friendName = 'World'
;(function () {
  if (typeof friendName === 'undefined') {
    var friendName = 'Jack'
    console.log('Goodbye ' + friendName)
  } else {
    console.log('Hello ' + friendName)
  }
})()
//
var name = 'World!'
;(function () {
  var name
  if (typeof name === 'undefined') {
    name = 'Jack'
    console.log('Goodbye ' + name)
  } else {
    console.log('Hello ' + name)
  }
})()
//
function fn1() {
  console.log('fn1')
}
var fn2
fn1()
fn2()
fn2 = function () {
  console.log('fn2')
}
fn2()
//
function a() {
  var temp = 10
  function b() {
    console.log(temp) // 10
  }
  b()
}
a()
function a() {
  var temp = 10
  b()
}
function b() {
  console.log(temp) // 报错 Uncaught ReferenceError: temp is not defined
}
a()
//
var a = 3
function c() {
  alert(a)
}
;(function () {
  var a = 4
  c()
})()
//
function fun(n, o) {
  console.log(o)
  return {
    fun: function (m) {
      return fun(m, n)
    },
  }
}
var a = fun(0)
a.fun(1)
a.fun(2)
a.fun(3)
var b = fun(0).fun(1).fun(2).fun(3)
var c = fun(0).fun(1)
c.fun(2)
c.fun(3)
//
f = function () {
  return true
}
g = function () {
  return false
}
;(function () {
  if (g() && [] == ![]) {
    f = function f() {
      return false
    }
    function g() {
      return true
    }
  }
})()
console.log(f())
//

// 原型 继承
function Person(name) {
  this.name = name
}
var p2 = new Person('king')
console.log(p2.__proto__) //Person.prototype
console.log(p2.__proto__.__proto__) //Object.prototype
console.log(p2.__proto__.__proto__.__proto__) // null
console.log(p2.__proto__.__proto__.__proto__.__proto__) //null后面没有了，报错
console.log(p2.__proto__.__proto__.__proto__.__proto__.__proto__) //null后面没有了，报错
console.log(p2.constructor) //Person
console.log(p2.prototype) //undefined p2是实例，没有prototype属性
console.log(Person.constructor) //Function 一个空函数
console.log(Person.prototype) //打印出Person.prototype这个对象里所有的方法和属性
console.log(Person.prototype.constructor) //Person
console.log(Person.prototype.__proto__) // Object.prototype
console.log(Person.__proto__) //Function.prototype
console.log(Function.prototype.__proto__) //Object.prototype
console.log(Function.__proto__) //Function.prototype
console.log(Object.__proto__) //Function.prototype
console.log(Object.prototype.__proto__) //null
//
// a
function Foo() {
  getName = function () {
    console.log(1)
  }
  return this
}
// b
Foo.getName = function () {
  console.log(2)
}
// c
Foo.prototype.getName = function () {
  console.log(3)
}
// d
var getName = function () {
  console.log(4)
}
// e
function getName() {
  console.log(5)
}

Foo.getName() // 2
getName() // 4
Foo().getName() // 1
getName() // 1
new Foo.getName() // 2
new Foo().getName() // 3
new new Foo().getName() // 3
//
var F = function () {}
Object.prototype.a = function () {
  console.log('a')
}
Function.prototype.b = function () {
  console.log('b')
}
var f = new F()
f.a()
f.b()
F.a()
F.b()
//
function Foo() {
  Foo.a = function () {
    console.log(1)
  }
  this.a = function () {
    console.log(2)
  }
}
Foo.prototype.a = function () {
  console.log(3)
}
Foo.a = function () {
  console.log(4)
}
Foo.a() // 4
let obj = new Foo()
obj.a() // 2
Foo.a() // 1
//
function Dog() {
  this.name = 'puppy'
}
Dog.prototype.bark = () => {
  console.log('woof!woof!')
}
const dog = new Dog()
console.log(Dog.prototype.constructor === Dog && dog.constructor === Dog && dog instanceof Dog)
//
var A = { n: 4399 }
var B = function () {
  this.n = 9999
}
var C = function () {
  var n = 8888
}
B.prototype = A
C.prototype = A
var b = new B() // 9999
var c = new C() //c对象没有n属性 4400
A.n++
console.log(b.n)
console.log(c.n)
//
function A() {}
function B(a) {
  this.a = a
}
function C(a) {
  if (a) {
    this.a = a
  }
}
A.prototype.a = 1
B.prototype.a = 1
C.prototype.a = 1
console.log(new A().a) // 1
console.log(new B().a) // undefined
console.log(new C(2).a) //2
//
function Parent() {
  this.a = 1
  this.b = [1, 2, this.a]
  this.c = { demo: 5 }
  this.show = function () {
    console.log(this.a, this.b, this.c.demo)
  }
}
function Child() {
  this.a = 2
  this.change = function () {
    this.b.push(this.a)
    this.a = this.b.length
    this.c.demo = this.a++
  }
}
Child.prototype = new Parent()
var parent = new Parent()
var child1 = new Child()
var child2 = new Child()
child1.a = 11
child2.a = 12
parent.show() // 1 121 5
child1.show() //11 121 5
child2.show() // 12 122 5
child1.change()
child2.change()
parent.show() //1 121 5
child1.show() // 5 1 2 11 12 5
child2.show()
// 1 (3) [1, 2, 1] 5
// 11 (3) [1, 2, 1] 5
// 12 (3) [1, 2, 1] 5
// 1 (3) [1, 2, 1] 5
// 5 (5) [1, 2, 1, 11, 12] 5
// 6 (5) [1, 2, 1, 11, 12] 5
//
function SuperType() {
  this.property = true
}
SuperType.prototype.getSuperValue = function () {
  return this.property
}
function SubType() {
  this.subproperty = false
}
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.subproperty
}
var instance = new SubType()
console.log(instance.getSuperValue()) // true
//
