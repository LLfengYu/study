/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-17 15:05:33
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 10:26:15
 * @FilePath: /study/step38/index.js
 * @Description: 手写一个map;
 */

// 思路： 接受一个fn作为参数，遍历数组，将每一项都执行fn，将返回值放入新数组，最终返回新数组

Array.prototype.myMap = function (fn) {
  if (typeof fn !== "function") {
    throw new Error("type error");
  }
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i]));
  }
  return res;
};
