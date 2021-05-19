// // class Parent {
// //     constructor(name){
// //         this.name=name
// //     }
// //     getName() {
// //         return this.name
// //     }
// // }

// // let a=new Parent('dasiy')
// // console.log(a.getName())

// // class Child extends Parent {
// //     constructor(name,sex) {
// //         super(name)
// //         this.sex=sex
// //     }
// //     getSex() {
// //         return this.sex
// //     }
// // }

// // let b=new Child('mickey','man')
// // console.log(b.getName())
// // console.log(b.getSex())

// // 发布订阅
// class eventhub{
//     constructor(){
//         this.bus=[]
//     }
//     on(name,cb){
//         if(this.bus.indexOf(name)===-1) {
//             this.bus.push({name,cb})
//         }
//     }
//     emit(name){
//         if(this.bus.indexOf(name)===-1) {
//             this.bus.forEach((item)=>{
//                 if(item.name===name) {
//                     item.cb()
//                 }
//             })
//         }
//     }
//     off(name,cb) {
//         if(this.bus.indexOf(name)===-1) {
//             this.bus.splice(this.bus.indexOf(name),1)
//             cb()
//         }
//     }
// }

// let a=new eventhub()
// a.on('test',()=>{
//     console.log('123')
// })
// setTimeout(()=>{
//     a.off('test',()=>{
//         console.log('cancel')
//     })
// },500)
// console.log('start')
// setTimeout(()=>{
//     a.emit('test')
// },1000)

const a = { b :3}

function foo(obj) {
  obj.b = 5

  return obj
}

const aa = foo(a)

console.log(a.b)

console.log(aa.b)