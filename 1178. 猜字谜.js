// https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle/

/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
 var findNumOfValidWords = function (words, puzzles) {
    let resArray = new Array
    let m = puzzles.length
    let n=words.length
    // let newWords=new Array
    for(let i=0;i<n;i++) {
        let str =  [].filter.call(words[i],(s,i,o)=>o.indexOf(s)==i).join(''); 
        // newWords.push(str)
        for(let s=0;s<str.length;s++) {
            let temp=str[s]
            for(let j=0;j<m;j++) {
                
            }
        }
    }
    // console.log('newWords',newWords)
    for (let i = 0; i < m; i++) {
        let first = puzzles[i].slice(0,1)
    }
    return resArray
};

console.log(findNumOfValidWords["aaaa", "asas", "able", "ability", "actt", "actor", "access"], ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"])//[1,1,3,2,4,0]
// ["aaaa","asas","able","ability","actt","actor","access"]
// ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
console.log(111)