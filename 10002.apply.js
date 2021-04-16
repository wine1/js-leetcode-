


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