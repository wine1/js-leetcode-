


// test

var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call(foo); // 1

// call 改变了 this 的指向，指向到 foo
// bar 函数执行了

// 模拟思路：
// 1.将函数设为对象的属性
// 2.执行函数
// 3.删除该函数
// 第一步 foo.fn = bar
// 第二步 foo.fn()
// 第三步 delete foo.fn
Function.prototype.call1 = function (context) {
    context.fn = this
    context.fn()
    delete context.fn
}

// 解决传参的问题
Function.prototype.call2 = function (context) {
    var context = context || window // 传参数为null的时候指向window
    context.fn = this;
    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args + ')');
    delete context.fn;
}

// 测试一下
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call2(foo, 'kevin', 18);
// kevin
// 18
// 1


// apply
Function.prototype.apply1 = function (context, arr) {
    var context = context || window
    context.fn = this
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        args.push('arr[' + i + ']');
    }
    eval('context.fn(' + args + ')');
    delete context.fn
}

// test
let obj = {
    a: 1,
}
function test(name, age) {
    console.log(this.a)
    console.log(name)
    console.log(age)
}
test.apply1(obj, ['name', 'age'])
console.log(123)

// bind
Function.prototype.bind1 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
