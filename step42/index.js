/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-17 17:06:35
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-19 10:16:01
 * @FilePath: /study/step42/index.js
 * @Description: 循环打印1234;   循环打印红绿灯
 */

function print() {
  for (let i = 1; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// print();

// 循环打印红绿灯，绿一秒亮一次，黄两秒亮一次，红三秒亮一次
function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

const task = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "green") {
        green();
      } else if (light === "yellow") {
        yellow();
      }
      resolve();
    }, timer);
  });
};
// const taskRunner = async () => {
//   await task(1000, "green");
//   await task(2000, "yellow");
//   await task(3000, "red");
//   taskRunner();
// };
