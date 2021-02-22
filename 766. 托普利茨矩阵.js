/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let m = matrix[0].length
    let n = matrix.length
    if (m === 1 || n === 1) return true
    for (let i = 0; i < n - 1; i++) {
        let a = 0, b = 0
        while (a < m - 1 && b < n - 1) {
            if (matrix[a][b] !== matrix[a + 1][b + 1]) {
                console.log(a,b,matrix[a][b])
                return false
            }
            a++;b++;
        }
    }
    for (let j = 0; j < m - 1; j++) {
        let a = 0, b = 0
        while (a < m - 1 && b < n - 1) {
            if (matrix[a][b] !== matrix[a + 1][b + 1]) {
                console.log(a,b,matrix[a][b])
                return false
            }
            a++;b++;
        }
    }
    return true
};
// console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]))
console.log(isToeplitzMatrix([[11,74,0,93],[40,11,74,7]]))