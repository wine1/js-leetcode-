function myAjax(method, url) {
  const xhr = new XMLHttpRequest()

  xhr.open(method, url, true)

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) { // 请求已完成
      if (xhr.status === 200) { // 请求成功
        console.log(xhr.responseText); // 在控制台输出服务器的响应
      } else {
        console.error("请求失败，状态码：" + xhr.status); // 输出错误信息
      }
    }
  }

  xhr.send()
}

myAjax('get', 'http://gips3.baidu.com/it/u=1821127123,1149655687&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280')