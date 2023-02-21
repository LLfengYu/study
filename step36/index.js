/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-17 14:49:17
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 09:53:08
 * @FilePath: /study/step36/index.js
 * @Description:  实现一个push方法;
 */

//  思路： push方法接收一个或多个参数，将每个参数依次放入数组中的最后一项，返回新数组的length
//  核心代码：遍历arguments，  this[this.length] = arguments[i]
Array.prototype.PUSH = function () {
  if (!Array.isArray(this)) {
    throw new Error("type error");
  }
  let arr = this;
  for (let i = 0; i < arguments.length; i++) {
    arr[arr.length] = arguments[i];
  }
  return arr.length;
};
