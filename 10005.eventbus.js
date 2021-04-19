
class eventBus {
    constructor() {
        this.bus={}
    }

    on(name,cb){
        if (!this.bus[name]) {
            this.bus[name] = []
        }
        this.bus[name].push(cb)
    }

    emit (name,data) {
        this.bus[name].forEach((cb) => {
           cb(data)
        });
    }
}

let newbus=new eventBus()
newbus.on('test',(data)=>{
    console.log(`${data}success`)
})
newbus.on('test',(data)=>{
    console.log(`${data}fail`)
})
newbus.emit('test','a')
