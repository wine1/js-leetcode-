// 处理传递的图片的尺寸比例
let url= "https://gbrestest.dfcfw.com/Files/picture/20210527/2245E3FD9D613F0BE755ECFBA8801FDA_w2500h500.jpg"


const handelPictureUrl=(url)=>{
  let n=url.indexOf('_')
  if(n>-1) {
    url=url.slice(n+1)
    let w=url.indexOf('w')
    let h=url.indexOf('h')
    let width=parseInt(url.slice(w+1,h))
    let height=parseInt(url.slice(h+1))
    console.log(width/height,w,h,width,height)
    return width/height
  }
}

handelPictureUrl(url)