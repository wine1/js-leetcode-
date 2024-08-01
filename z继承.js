// 原型链继承
// function SuperType() {
//   this.property = true
// }
// SuperType.prototype.getSuperValue = function () {
//   return this.property
// }
// function SubType() {
//   this.subProperty = false
// }
// SubType.prototype = new SuperType()
// SubType.prototype.getSubValue = function () {
//   return this.subProperty
// }
// SubType.prototype.getSuperValue = function () {
//   return false
// }
// var instance = new SubType()
// console.log(instance.getSuperValue())

// 构造函数继承
// function SuperType() {
//   this.colors = ['red', 'green', 'blue']
// }
// function SubType() {
//   SuperType.call(this)
// }
// const instance = new SubType()
// instance.colors.push('black')
// console.log(instance.colors)
// const instance2 = new SubType()
// console.log(instance2.colors)

// 组合继承
// function SuperType(name) {
//   this.name = name
//   this.colors = ['red', 'green', 'blue']
// }
// SuperType.prototype.sayName = function () {
//   console.log(this.name)
// }
// function SubType(name, age) {
//   SuperType.call(this, name)
//   this.age = age
// }
// SubType.prototype = new SuperType() // 继承方法
// SubType.prototype.constructor = SuperType
// SubType.prototype.sayAge = function () {
//   console.log(this.age)
// }
// const instance1 = new SubType('lihua', 18)
// instance1.colors.push('black')
// console.log(instance1.colors)
// instance1.sayName()
// instance1.sayAge()
// const instance2 = new SubType('xiaohua', 28)
// console.log(instance2.colors)
// instance2.sayName()
// instance2.sayAge()

// 原型式继承
// var person = {
//   name: 'lihua',
//   friends: ['xiaohua']
// }
// var anotherPerson = Object.create(person)
// anotherPerson.name = '321'
// anotherPerson.friends.push('xiaoli')
// console.log(person.friends)
// console.log(person.name)

// 寄生式继承
// function object(o) {
//   function F() { }
//   F.prototype = o;
//   return new F();
// }
// function createAnother(original) {
//   var clone = object(original)
//   clone.sayhi = function () {
//     console.log('sayhi')
//   }
//   return clone
// }
// var person = {
//   name: 'lihua',
//   friends: ['321']
// }
// var anotherPerson = createAnother(person)
// anotherPerson.sayhi()

// 寄生式组合继承
function inheritPrototype(subType, superType) {
  let prototype = Object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 赋值对象
}
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
const instance = new SubType('123', 18)
instance.colors.push('black')
console.log(instance.colors)
instance.sayName()
instance.sayAge()
const instance2 = new SubType('456', 28)
console.log(instance2.colors)
instance2.sayName()
instance2.sayAge()
