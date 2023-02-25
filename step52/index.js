// 代码输出顺序

Promise.resolve().then(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
});
setTimeout(() => {
  console.log("3");
  Promise.resolve().then(() => {
    console.log("4");
  });
}, 0);
console.log("5");

// 输出顺序： 5 1 3 4 2

// 执行流程分析：
// 1. then方法为微任务，放入微任务队列
// 2. setTimeout为宏任务，放入宏任务队列
// 3. 执行console。log  输出5
// 4. 开始执行微任务队列里的任务，输出 1 ，遇到了setTimeout，放入宏任务队列，此时没有微任务，开始执行宏任务
// 5. 输出3。  在执行宏任务中遇到了微任务then方法，会将微任务执行完毕后再去执行其他宏任务，输出4
// 6。 最终执行最后一个宏任务，输出2
