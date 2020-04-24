
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// bfs算法
var levelOrderBottom = function(root) {
    if (!root) return [];
    let queue = [root];
    let res = [];
    let level = 0;
    while (queue.length) {
      let temp = [];
      res[level] = [];
      for (let i = 0; i < queue.length; i++) {
        res[level].push(queue[i].val);
        if (queue[i].left) {
          temp.push(queue[i].left);
        }
        if (queue[i].right) {
          temp.push(queue[i].right);
        }
      }
      queue = temp;
      ++level;
    }
    return res.reverse();
  };