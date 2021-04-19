


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
        args.push('arguments[' + i + ']' );
    }
    // eval('context.fn(' + args + ')'); //es3
    // context.fn(arguments[1],arguments[2]) //es5
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

bar.call2(foo, 'kevin', '18');
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
