let Subject_id = 0
// 被观察的对象 
class Subject {
  constructor() {
    this.observers = []
    this.id = Subject_id++
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObserver(data) {
    this.observers.forEach((observer => observer.update(data)))
  }
}
let observer_id = 0
// 观察者
class Observer {
  constructor() {
    this.id = observer_id++
  }
  update(data) {
    console.log(this.id, '观察到了', data)
  }
}
let observer1 = new Observer()
let subject1 = new Subject()
let subject2 = new Subject()
subject1.addObserver(observer1)
subject2.addObserver(observer1)
subject1.notifyObserver('bianhua')
subject2.notifyObserver('第二个变化')