// 1. 原型链继承
function Parent1 () {
    this.name = 'kevin';
}

Parent1.prototype.getName = function () {
    console.log(this.name);
}
function Child1 () {}
Child1.prototype = new Parent1();
var child1 = new Child1();
console.log(child1.getName()) // kevin

// 问题：
// 1.引用类型的属性被所有实例共享
// 2.在创建 Child 的实例时，不能向Parent传参


// 2. 借用构造函数(经典继承)
function Parent2(age) {
    this.names=['kevin', 'daisy'];
    this.age=age
}
function Child2(age) {
    Parent2.call(this,age)
}
let child2=new Child2(12)
console.log(child2.names)
console.log(child2.age)
// 优点：
// 1.避免了引用类型的属性被所有实例共享
// 2.可以在 Child 中向 Parent 传参
// 缺点：
// 方法都在构造函数中定义，每次创建实例都会创建一遍方法。


// 3. 组合继承
function Parent3(name) {
    this.name=name
    this.colors=['red', 'blue', 'green'];
}
Parent3.prototype.getName=function(){
    console.log(`${this.name}`)
}
function Child3(name,age) {
    Parent3.call(this,name)
    this.age=age
}
Child3.prototype=new Parent3()
Child3.prototype.constructor=Child3

var child3 = new Child3('kevin', '18');
child3.colors.push('black');

console.log(child3.name); // kevin
console.log(child3.age); // 18
console.log(child3.colors); // ["red", "blue", "green", "black"]

var child32 = new Child3('daisy', '20');

console.log(child32.name); // daisy
console.log(child32.age); // 20
console.log(child32.colors); // ["red", "blue", "green"]


// 4. 原型继承
function createobj1(o) {
    function F() {}
    F.prototype=o
    return new F()
}
var person4 = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}

var person41 = createobj1(person4);
var person42 = createobj1(person4);

person41.name = 'person1';
console.log(person42.name); // kevin

person41.friends.push('taylor');
console.log(person42.friends); // ["daisy", "kelly"]
// 缺点：
// 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。

// 5. 寄生式继承
function createobj2(o){
    var clone = Object.create(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}
// 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。

// 6. 寄生式组合继承
function Parent6(name) {
    this.name=name
    this.colors=['red','green']
}
Parent6.prototype.getName=function () {
    console.log(this.name)
}
function Child6(name,age) {
    Parent6.call(this,name)
    this.age=age
}

let F6=function () {}
F6.prototype=Parent6.prototype
Child6.prototype=new F6()
let child6=new Child6('kevin','18')
console.log(child6)