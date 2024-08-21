
// bind
Function.prototype.bind2 = function(context) {
    //返回一个绑定this的函数，我们需要在此保存this
    let self = this
        // 可以支持柯里化传参，保存参数
    let arg = [...arguments].slice(1)
        // 返回一个函数
    return function() {
        //同样因为支持柯里化形式传参我们需要再次获取存储参数
        let newArg = [...arguments]
        // console.log(newArg)
            // 返回函数绑定this，传入两次保存的参数
            //考虑返回函数有返回值做了return
        return self.apply(context, arg.concat(newArg))
    }
}


Function.prototype.bind1=function (context) {
    let self=this
    let arg = [...arguments].slice(1)
    return function () {
        let newArg = [...arguments]
        console.log(arg,newArg)
       return self.apply(context,arg.concat(newArg))
    }
}

// test
let obj={
    a:1
}
function test(name) {
    console.log(this.a)
    console.log(name)
}
test.bind1(obj,'lucy')('a') 