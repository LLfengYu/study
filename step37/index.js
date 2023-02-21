/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-17 14:54:19
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-17 14:59:34
 * @FilePath: /study/step37/index.js
 * @Description: 手写 filter 方法
 */

// 思路： 接受一个函数作为参数，函数执行数组中的每一个元素返回true或false，返回true后将此元素放入新数组，将新数组返回
Array.prototype.Filter = function (fn) {
  if (typeof fn !== "function") {
    throw new Error("type error");
  }
  let res = [];
  for (let i = 0; i < this.length; i++) {
    fn(this[i]) && res.push(this[i]);
  }
  return res;
};
