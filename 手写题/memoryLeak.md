### 程序不再需要使用的内存, 但是又没有及时释放, 就叫做内存泄漏

##### 内存泄漏的情况

1.  意外的全局变量

```
  function test() {
        // 漏掉了声明, 将会自动挂载到window对象下
        str = '' // 换成  var str='' 就可以被正常释放掉
        for (let i = 0; i < 1000000; i++) {
          str += 'xx'
        }
        return str
      }
      // test执行结束后, str应该就没用了, 但是它常驻在了内存中
      test()
```

2. 滥用闭包

```
function fn() {
  const x = 'xx';
  return function() {
    return x;
 }
}
const getX = fn();
console.log(getX());
```

3. 没清除的定时器

4. dom 相关
   假设你手动移除了某个 dom 节点，本应释放该 dom 节点所占用的内存，但却因为疏忽导致某处代码仍对该被移除节点有引用（比如一个全局对象），最终导致该节点所占内存无法被释放

5. console.log()

怎么用 performance 排查内存泄漏
