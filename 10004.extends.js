// 1. 原型链继承
function Parent1() {
  this.name = 'kevin'
}

Parent1.prototype.getName = function () {
  console.log(this.name)
}
function Child1() {}
Child1.prototype = new Parent1()
var child1 = new Child1()
console.log(child1.getName()) // kevin

// 问题：
// 无法实现多继承
// 来自原型对象的所有属性被所有实例共享
// 创建子类实例时，无法向父类构造函数传参
// 要想为子类新增属性和方法，必须要在Student.prototype = new Person() 之后执行，不能放到构造器中

// 2. 借用构造函数(经典继承)
function Parent(age) {
  this.names = ['lucy', 'dom']
  this.age = age

  this.getName = function () {
    return this.name
  }

  this.getAge = function () {
    return this.age
  }
}

function Child(age) {
  Parent.call(this, age)
}

var child1 = new Child(18)
child1.names.push('child1')
console.log(child1.names) // [ 'lucy', 'dom', 'child1' ]

var child2 = new Child(20)
child2.names.push('child2')
console.log(child2.names) // [ 'lucy', 'dom', 'child2' ]

// 优点：
// 1.避免了引用类型的属性被所有实例共享
// 2.可以在 Child 中向 Parent 传参
// 缺点：
// 实例并不是父类的实例，只是子类的实例
// 只能继承父类的实例属性和方法，不能继承原型属性和方法
// 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

// 3. 组合继承
function Parent3(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
Parent3.prototype.getName = function () {
  console.log(`${this.name}`)
}
function Child3(name, age) {
  Parent3.call(this, name)
  this.age = age
}
Child3.prototype = new Parent3()
Child3.prototype.constructor = Child3

var child3 = new Child3('kevin', '18')
child3.colors.push('black')

console.log(child3.name) // kevin
console.log(child3.age) // 18
console.log(child3.colors) // ["red", "blue", "green", "black"]

var child32 = new Child3('daisy', '20')

console.log(child32.name) // daisy
console.log(child32.age) // 20
console.log(child32.colors) // ["red", "blue", "green"]
// 组合继承既具有原型链继承能够复用函数的特性，
// 又有借用构造函数方式能够保证每个子类实例能够拥有自己的属性以及向超类传参的特性，
// 但组合继承也并不是完美实现继承的方式，因为这种方式在创建子类时会调用两次超类的构造函数。

// 4. 原型继承
function createobj1(o) {
  function F() {}
  F.prototype = o
  return new F()
}
var person4 = {
  name: 'kevin',
  friends: ['daisy', 'kelly'],
}

var person41 = createobj1(person4)
var person42 = createobj1(person4)

person41.name = 'person1'
console.log('person4', person41.name, person42.name) // kevin

person41.friends.push('taylor')
console.log(person42.friends) // ["daisy", "kelly"]
// 缺点：
// 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。

// 5. 寄生式继承
function object(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

function createAnother(original) {
  var clone = object(original) // 创建新对象
  clone.sayHi = function () {
    console.log('hello, world') // 增强对象，添加属性或方法
  }
  return clone // 返回新对象
}

var person = {
  name: 'alice',
  friends: ['Sherly', 'Taissy', 'Vant'],
}

var p1 = createAnother(person)
p1.sayHi()
// 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。

// 6. 寄生式组合继承
function Parent6(name) {
  this.name = name
  this.colors = ['red', 'green']
}
Parent6.prototype.getName = function () {
  console.log(this.name)
}
function Child6(name, age) {
  Parent6.call(this, name)
  this.age = age
}

let F6 = function () {}
F6.prototype = Parent6.prototype
Child6.prototype = new F6()
let child6 = new Child6('kevin', '18')
console.log(child6)
// 寄生组合继承的高效率在于它只调用了一次超类构造函数，同时还能够保持原型链不变，能够正常使用 instanceof 和 isPrototypeOf() 寄生组合继承被普遍认为是引用类型最理想的继承方式

// 7. es6中的继承
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  printX() {
    console.log(this.x)
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y)
    this.color = color // 正确
  }
}

let point = new ColorPoint(0, 0, 'red')
point.printX()
console.log(point)
