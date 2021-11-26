/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//递归
var inorderTraversal = function (root) {
  const res = []
  const inorder = root => {
    if (!root) {
      return
    }
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
}

//非递归
function inorderTraversal(root) {
  let res = []
  if (!root) return []
  let stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}

console.log(inorderTraversal([1, null, 2, 3])) //[1,3,2]
console.log(inorderTraversal([])) //[]
console.log(inorderTraversal([1])) //[1]
console.log(inorderTraversal([1, null, 2])) //[2,1]
console.log(inorderTraversal([1, 2])) //[1,2]
