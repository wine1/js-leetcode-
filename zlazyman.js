// const LazyMan=(name)=>{
//   console.log(`hi. this is ${name}`)

// }

class LazyManC {
  constructor() {
    this.init()
  }
  init(name) {
    console.log(`hi. this is ${name}`)
  }
}

const LazyMan = new LazyManC()

LazyMan('Hank')
// LazyMan('Hank').sleep(1000)
// LazyMan('Hank').sleep(1000).eat('sugar')