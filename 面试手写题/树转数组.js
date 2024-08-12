const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] },
      ],
    },
    {
      value: 3,
      children: [
        { value: 6, children: [] },
        { value: 7, children: [] },
      ],
    },
  ],
};

const trans = (tree, parentId = 0, res = []) => {

  const { value, children = [] } = tree
  for (let i = 0; i < children.length; i++) {
    trans(children[i], value, res)
  }
  let temp = { value, id: value, parentId }
  res.push(temp)

  return res
}

console.log(trans(tree))
console.log(1111)
