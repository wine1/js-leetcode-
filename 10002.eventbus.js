
class eventBus {
    constructor() {
        this.bus={}
    }

    on(name,cb){
        if(this.bus.indexOf(name)===-1) {
            this.bus.push({name,cb})
        }
    }

    emit (name,data) {
        this.bus.forEach((item) => {
            if(item.name === name) {
                item.cb(data)
            }
        });
    }
}

let newbus=new eventBus()
newbus.on('test',(data)=>{
    console.log(`${data}success`)
})
newbus.emit('test','a')

// todo emit 传参 多个事件 换一个存储对象