/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-09 14:43:19
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-09 19:07:35
 * @FilePath: /study/step19/index.js
 * @Description: for in  和  for of 的区别
 */
// for in  和  for of 的区别

var arr = [1, 3, 5];

for (let i in arr) {
  console.log(i); //输出 1，2，3
}

for (let i of arr) {
  console.log(i); //输出 1，3，5
}

// 执行上下文栈
let a = "Hello World!";
function first() {
  console.log("Inside first function");
  second();
  console.log("Again inside first function");
}
function second() {
  console.log("Inside second function");
}
first();
