// var a = 10;
// let b = 20  //定义了一个块级作用域的变量 b，它并不会成为 window 对象的属性。因此，它在全局作用域下是不可访问的。
// function foo() {
//   console.log(this)
//   console.log(this.a)
//   console.log(this.b)
// }
// foo(); // 10 undefined

// var a = 10;
// function foo() {
//   console.log('this1', this)
//   console.log(window.a)
//   console.log(this.a)
// }
// console.log(window.foo) // function foo
// console.log('this2', this) // window
// foo(); // 'this1' window  10 10

// let a = 10
// const b = 20
// function foo() {
//   console.log(this.a)
//   console.log(this.b)
// }
// foo();  // undefined undefined
// console.log(window.a) // undefined

// var a = 1
// function foo () {
//   var a = 2
//   console.log(this)
//   console.log(this.a)
// }
// foo() // window 1

// var a = 1
// function foo() {
//   var a = 2
//   function inner() {
//     console.log(this.a)
//   }
//   inner()
// }
// foo() //1

// function foo() {
//   console.log(this.a)
// }
// var obj = { a: 1, foo }
// var a = 2
// obj.foo() //1

// function foo() {
//   console.log(this.a)
// };
// var obj = { a: 1, foo };
// var a = 2;
// var foo2 = obj.foo;

// obj.foo(); // 1
// foo2(); // 2

// function foo() {
//   console.log(this.a)
// };
// var obj = { a: 1, foo };
// var a = 2;
// var foo2 = obj.foo;
// var obj2 = { a: 3, foo2: obj.foo }
// obj.foo();  // 1
// foo2(); // 2
// obj2.foo2(); //3

// function foo() {
//   console.log(this.a)
// }
// function doFoo(fn) {
//   console.log(this)
//   fn()
// }
// var obj = { a: 1, foo }
// var a = 2
// doFoo(obj.foo) // window 2

// function foo() {
//   console.log(this.a)
// }
// function doFoo(fn) {
//   console.log(this)
//   fn()
// }
// var obj = { a: 1, foo }
// var a = 2
// var obj2 = { a: 3, doFoo }
// obj2.doFoo(obj.foo) // obj2 2 如果把一个函数当成参数传递到另一个函数的时候，也会发生隐式丢失的问题，且与包裹着它的函数的this指向无关。在非严格模式下，会把该函数的this绑定到window上，严格模式下绑定到undefined。

// function foo() {
//   console.log(this.a)
// }
// var obj = { a: 1 }
// var a = 2
// foo() //2
// foo.call(obj) // 1
// foo.apply(obj) // 1
// foo.bind(obj)

// var obj1 = {
//   a: 1
// }
// var obj2 = {
//   a: 2,
//   foo1: function () {
//     console.log(this.a)
//   },
//   foo2: function () {
//     setTimeout(function () {
//       console.log(this)
//       console.log(this.a)
//     }, 0)
//   }
// }
// var a = 3
// obj2.foo1() //2
// obj2.foo2() // window undefined
// 对于setTimeout中的函数，这里存在隐式绑定的隐式丢失，也就是当我们将函数作为参数传递时会被隐式赋值，回调函数丢失this绑定，因此这时候setTimeout中的函数内的this是指向window的。
// setTimeout中改成箭头函数之后，this指向obj2

// function foo() {
//   console.log(this.a)
// }
// var obj = { a: 1 }
// var a = 2
// foo() // 2
// foo.call(obj) // 1
// foo().call(obj) //Uncaught TypeError: Cannot read property 'call' of undefined

// function foo() {
//   console.log(this.a)
//   return function () {
//     console.log(this.a)
//   }
// }
// var obj = { a: 1 }
// var a = 2
// foo() //2
// foo.call(obj) // 1
// foo().call(obj) // 2 1

// function foo() {
//   console.log(this.a)
//   return function () {
//     console.log(this.a)
//   }
// }
// var obj = { a: 1 }
// var a = 2
// foo() // 2
// foo.bind(obj)
// foo().bind(obj) //2

// function foo() {
//   console.log(this.a)
//   return function () {
//     console.log(this.a)
//   }
// }
// var obj = { a: 1 }
// var a = 2
// foo.call(obj)() // 1 2

// var obj = {
//   a: 'obj',
//   foo: function () {
//     console.log('foo:', this.a)
//     return function () {
//       console.log('inner:', this.a)
//     }
//   }
// }
// var a = 'window'
// var obj2 = { a: 'obj2' }
// obj.foo()() // window window 
// obj.foo.call(obj2)() // obj2 window
// obj.foo().call(obj2) // obj2







// var obj = {
//   a: 1,
//   foo: function (b) {
//     b = b || this.a
//     return function (c) {
//       console.log(this.a + b + c)
//     }
//   }
// }
// var a = 2
// var obj2 = { a: 3 }
// obj.foo(a).call(obj2, 1)  // 6
// obj.foo.call(obj2)(1)  // 6


// function foo1() {
//   console.log(this.a)
// }
// var a = 1
// var obj = {
//   a: 2
// }
// var foo2 = function () {
//   foo1.call(obj)
// }
// foo2() // 2
// foo2.call(window) // 2

// function foo1(b) {
//   console.log(`${this.a} + ${b}`)
//   return this.a + b
// }
// var a = 1
// var obj = {
//   a: 2
// }
// var foo2 = function () {
//   return foo1.call(obj, ...arguments)
// }
// var num = foo2(3)
// console.log(num) // 5

// function Person(name) {
//   this.name = name
// }
// var name = 'window'
// var person1 = new Person('LinDaiDai')
// console.log(person1.name) //LinDaiDai

// function Person(name) {
//   this.name = name
//   this.foo1 = function () {
//     console.log(this.name)
//   }
//   this.foo2 = function () {
//     return function () {
//       console.log(this.name)
//     }
//   }
// }
// var person1 = new Person('person1')
// person1.foo1() // person1
// person1.foo2()() // undefined


// console.log(111)


