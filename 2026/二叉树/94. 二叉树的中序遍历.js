// 中序遍历 左中右
// 递归

function inorderTraversal(root) {
  const res = [];

  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root, res);
  return res;
}

console.log(inorderTraversal([1, null, 2, 3])); //[1,3,2]
console.log(inorderTraversal([])); //[]
console.log(inorderTraversal([1])); //[1]
console.log(inorderTraversal([1, null, 2])); //[2,1]
console.log(inorderTraversal([1, 2])); //[1,2]
