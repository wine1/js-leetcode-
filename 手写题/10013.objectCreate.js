// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 （请打开浏览器控制台以查看运行结果。）
function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
