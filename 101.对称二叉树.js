//  判断二叉树是否对称，直接去判断根节点的左子树和右子树是否相同
var isSymmetric = function(root) {
    if (!root) {
      return true;
    }
    return isSameTree(root.left, root.right);
  };
  
  const isSameTree = (s, t) => {
    if (s === null) {
      return t === null;
    }
    if (t === null) {
      return s === null;
    }
    if (s.val !== t.val) {
      return false;
    }
    return isSameTree(s.left, t.right) && isSameTree(s.right, t.left);
  };