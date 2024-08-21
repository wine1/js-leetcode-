const arrTest = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 1 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 2 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 4 },
  { id: 8, name: '部门H', parentId: 4 }
]
const trans = (arr) => {
  let res = {}
  let lookup = {}
  for (let item of arr) {
    lookup[item.id] = { ...item, children: [] }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].parentId === 0) {
      res = lookup[arr[i].id]
    } else {
      lookup[arr[i].parentId].children.push(lookup[arr[i].id])
    }
  }
  return res
}

console.log(trans(arrTest))
console.log(111)






