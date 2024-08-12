// call
Function.prototype.mycall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('myCall must be called on a function');
  }
  context = context || globalThis

}