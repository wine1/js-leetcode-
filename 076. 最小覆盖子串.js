/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const hash = new Map()
  for (let v of t) {
    if (hash.has(v)) {
      hash.set(v, hash.get(v)++)
    } else {
      hash.set(v, 1)
    }
  }
};
console.log('res', minWindow("ADOBECODEBANC", "ABC"))
console.log(1)