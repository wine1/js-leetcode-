const oldObj = {
    a: 1,
    b: [ 'e', 'f', 'g' ],
    c: { h: { i: 2 } },
    d: function say() {
        console.log('hi');
      }
  };
//   JSON.parse(JSON.stringify(obj))方法会丢失 d:function say(){console.log('hi)}
//   function deepclone(obj) {
//     return JSON.parse(JSON.stringify(obj))
//   }

const isObject=(obj)=>{
  return typeof obj === 'object' && obj !== null
}

function deepclone(source) {
  if(!isObject) return source
  let target=Array.isArray(source) ? [] : {};
    for(let key in source) {
      if(typeof key=== 'object'){
        target[key]=deepclone(source(key))
      }else {
        target[key]=source[key]
      }
    }
    return target
}





  let newObj=deepclone(oldObj)
  console.log(newObj)
  console.log(111)