let vdom = {
  type: 'ul',
  props: {
    className: 'list',
    children: [
      {
        type: 'li',
        props: {
          className: 'item',
          children: ['aa'],
        },
      },
      {
        type: 'li',
        props: {
          className: 'item',
          children: ['bb'],
        },
      },
    ],
  },
}

// function workLoop(deadline) {
//   requestIdleCallback(WorkLoop)
// }

// requestIdleCallback(WorkLoop)
// let renderRes = null
// console.log(renderRes)
