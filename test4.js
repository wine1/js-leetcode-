function a(value) {
  console.log(value)
  return {
    sleep: time => {
      setTimeout(() => {
        return this
      }, time)
    },
    eat: args => {
      console.log(args)
      return this
    },
  }
}

a('a').sleep(10).eat('aaa')
