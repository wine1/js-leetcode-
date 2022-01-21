// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
// Object.create(proto，[propertiesObject])
// proto
// 新创建对象的原型对象。
// propertiesObject
// 可选。需要传入一个对象，该对象的属性类型参照

function create1() {
  // 创建一个空的对象
  var obj = new Object()
  console.log(arguments)
  // 获得构造函数，arguments中除第一个参数
  Con = [].shift.call(arguments)
  // 链接到原型，obj 可以访问到构造函数原型中的属性
  obj.__proto__ = Con.prototype
  // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  var ret = Con.apply(obj, arguments)
  // 优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj
}
function create() {
  // 获得构造函数，arguments中除第一个参数
  Con = [].shift.call(arguments)
  // 创建一个空的对象 链接到原型，obj 可以访问到构造函数原型中的属性
  var obj = Object.create(Con.prototype)
  // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  var ret = Con.apply(obj, arguments)
  // 优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj
}

// test
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name)
  }
}

// var person = new Person('Nicholas', 29, 'Front-end developer');
var person = create(Person, 'Nicholas', 29, 'Front-end developer')

console.log(person.name) // Nicholas
person.sayName() // Nicholas
console.log(person.__proto__ === Person.prototype) // true
