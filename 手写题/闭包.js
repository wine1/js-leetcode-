for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i)
    }, 1000);
  })(i)
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000);
}


// 在迭代内使用IIFE会为每个迭代都生成一个新的作用域，使得延迟函数的回调可以将新的作用域封闭在每个迭代内部，每个迭代中都会含有一个具有正确值的变量供我们访问。