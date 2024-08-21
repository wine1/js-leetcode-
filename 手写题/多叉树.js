// 获取每一层的节点之和

function layerSum(root) {
  if (!root) return [];
  let queue = []
  queue.push(root)
  let res = []
  while (queue.length) {
    let nodelen = queue.length
    let sum = 0
    for (let i = 0; i < nodelen; i++) {
      let node = queue.shift()
      sum += node.value
      if (node.children?.length)
        queue.push(...node.children)
    }
    res.push(sum)
  }
  return res
}

const res = layerSum({
  value: 2,
  children: [
    { value: 6, children: [{ value: 1 }] },
    { value: 3, children: [{ value: 2 }, { value: 3 }, { value: 4 }] },
    { value: 5, children: [{ value: 7 }, { value: 8 }] }
  ]
});

console.log(res);