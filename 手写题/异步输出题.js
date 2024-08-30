// //请写出输出内容
// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }
// async function async2() {
//   console.log('async2');
// }

// console.log('script start');

// setTimeout(function () {
//   console.log('setTimeout');
// }, 0)

// async1();

// new Promise(function (resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function () {
//   console.log('promise2');
// });
// console.log('script end');

/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/


// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }
// async function async2() {
//   //async2做出如下更改：
//   new Promise(function (resolve) {
//     console.log('promise1');
//     resolve();
//   }).then(function () {
//     console.log('promise2');
//   });
// }
// console.log('script start');

// setTimeout(function () {
//   console.log('setTimeout');
// }, 0)
// async1();

// new Promise(function (resolve) {
//   console.log('promise3');
//   resolve();
// }).then(function () {
//   console.log('promise4');
// });

// console.log('script end');
/**
script start
async1 start
promise1
promise3
script end
promise2
async1 end
promise4
setTimeout
 */


console.log('begin');
setTimeout(() => {
  console.log('setTimeout 1');
  Promise.resolve()
    .then(() => {
      console.log('promise 1');
      setTimeout(() => {
        console.log('setTimeout2');
      });
    })
    .then(() => {
      console.log('promise 2');
    });

  new Promise(resolve => {
    console.log('a');
    resolve();
  }).then(() => {
    console.log('b');
  });

}, 0);
console.log('end');

/**
begin 
end 
setTimeout 1 
a 
promise 1 
b 
promise 2 
setTimeout2
 */