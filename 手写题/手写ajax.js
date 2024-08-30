function myAjax(method, url) {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      return xhr.response
    } else {
      console.log('error')
    }
  }
  xhr.send()
}
function myAjax(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response)
        } else {
          reject(`error,${xhr.status}`)
        }
      }
    }
    xhr.send()
  })
}