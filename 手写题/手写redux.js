// store.subscribe: 订阅state的变化，当state变化的时候执行回调，可以有多个subscribe，里面的回调会依次执行。
// store.dispatch: 发出action的方法，每次dispatch action都会执行reducer生成新的state，然后执行subscribe注册的回调。
// store.getState:一个简单的方法，返回当前的state。

function createStore(reducer) {
  let state
  let listeners = []
  let store = {

    getState() {
      return state
    },

    subscribe(callback) {
      listeners.push(callback)
    },

    dispatch(action) {
      state = reducer(state, action)
      for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i];
        listener();
      }
    }
  }

  return store
}
const initState = {
  count: 1
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREASE': return { ...state, count: state.count + 1 }
    case 'DECREASE': return { ...state, count: state.count - 1 }
  }
}
const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREASE' })
store.dispatch({ type: 'DECREASE' })