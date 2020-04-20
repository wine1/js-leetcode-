// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res=[];
    const help=(cur,left,right)=>{
        if(cur.length===2*n) {
            res.push(cur);
            return;
        }
        if(left<n) {
            help(cur+'(',left+1,right);
        }
        if(right<left) {
            help(cur+')',left,right+1);
        }
    }
    help('',0,0);
    return res;
};