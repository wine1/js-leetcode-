// 用settimeout 实现 settimeinterval

// function newSetTimeInterval(time,func) {
//     setTimeout(newSetTimeout,time)
//     function newSetTimeout(){
//         // console.log(time,func)
//         setTimeout(newSetTimeout,time)
//         func()
//     }
// }

// newSetTimeInterval(1000,()=>{console.log(123)})


// 实现_get
const obj = {
	a: {
		b: {
			c: 1
		}
	}
}
 function newGet(obj,str){
     let arr=str.split('.')
    // let temp=obj.arr[0]
    console.log(arr,temp)
    for(let i=0;i<temp.length;i++) {
        if(!obj.arr[i]) {
            return undefined
        }

    }

}
newGet(obj, 'a.b.c') //return 1
newGet(obj, 'a.b.d') //return undefined
