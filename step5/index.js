/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2022-12-29 15:02:58
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2022-12-29 17:58:07
 * @FilePath: /study/step5/index.js
 * @Description:  事件循环
 */
// Event loop  

Promise.resolve().then(()=>{
  console.log('1')  
  setTimeout(()=>{
    console.log('2')
  },0)
});
setTimeout(()=>{
  console.log('3')
  Promise.resolve().then(()=>{
    console.log('4')    
  })
},0);
console.log('5');


// 输出顺序： 5 1 3 4 2


// 面试点： 为什么js是单线程的？
//         宏任务、微任务是什么？ 都包含哪些？
//         谈谈事件循环