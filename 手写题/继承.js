// es6
class Person {
  constructor(name) {
    this.name = name
  }
  sayName = () => {
    console.log(this.name)
  }
}

class Female extends Person {
  constructor(name, sex) {
    super(name)
    this.sex = sex
  }
  saySex = () => {
    console.log(this.sex)
  }
}

const people = new Female('xiaohua', 18)
people.sayName()
people.saySex()

// 组合继承
function Animal(name) {
  this.name = name
  this.friends = ['niannian']
  this.sayName = () => {
    console.log(this.name)
  }
}
Animal.prototype.sayFriends = function () {
  console.log(this.friends)
}
function Cat(name, age) {
  Animal.call(this, name)
  this.age = age
  this.sayAge = () => {
    console.log(this.age)
  }
}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

const cat = new Cat('huhu', 2)
cat.sayName()
cat.sayAge()

cat.friends.push('gaigai')
cat.sayFriends()

const cat2 = new Cat('bao', 3)
cat2.sayFriends()
