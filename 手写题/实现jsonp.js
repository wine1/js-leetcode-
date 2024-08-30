// 由于同源策略的限制，浏览器只允许请求当前源（域名、协议、端口）的资源，而 HTML 的 script 元素是一个例外。利用 script 元素的这个开放策略，网页可以得到从其它来源动态产生的 JSON 资料，而这种使用模式就是所谓的 JSONP。

// ```
//     // 动态的加载js文件
//     function addScript(src) {
//     const script = document.createElement('script')
//     script.src = src
//     script.type = 'text/javascript'
//     document.body.appendChild(script)
//     }
//     addScript('http://xxx.xxx.com/xxx.js?callback=handleRes')
//     // 设置一个全局的 callback 函数来接收回调结果
//     function handleRes(res) {
//     console.log(res)
//     }
//     // 接口返回的数据格式
//     handleRes({ a: 1, b: 2 })
//     ```

// 具体的实现上有几个关键点：

// 1、服务端返回的数据不是 JSON，而是 JavaScript，也就是说 contentType 为 application / javascript ，内容格式为 callbackFunction(JOSN) 。
// 2、callbackFunction 需要注册在 window 对象上，因为 script 加载后的执行作用域是 window 作用域。
// 3、需要考虑同时多个 JSONP 请求的情况，callbackFunction 挂在 window 上的属性名需要唯一。
// 4、请求结束需要移除本次请求产生的 script 标签和 window 上的回调函数。
// 5、最好支持 Promise 。
