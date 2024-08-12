let arr = [
  { id: 1, name: '1', pid: 0 },
  { id: 2, name: '2', pid: 1 },
  { id: 3, name: '3', pid: 1 },
  { id: 4, name: '4', pid: 3 },
  { id: 5, name: '5', pid: 3 },
]

const trans = value => {
  let obj = {}
  let map = new WeakMap()
  arr.forEach(item => {
    map.set(item.pid, item)
  })
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[id])) {
    }
  }
  return obj
}

trans(arr)
// let tree = [
//   {
//       "id": 1,
//       "name": "1",
//       "pid": 0,
//       "children": [
//           {
//               "id": 2,
//               "name": "2",
//               "pid": 1,
//               "children": []
//           },
//           {
//               "id": 3,
//               "name": "3",
//               "pid": 1,
//               "children": [
//                  {
//                    "id": 4,
//                    "name": "4",
//                    "pid": 3,
//                    "children": []
//                  }
//               ]
//           }
//       ]
//   }
// ]
