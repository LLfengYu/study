/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-12 23:29:59
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-29 12:15:54
 * @FilePath: /study/step26/index.js
 * @Description: 分别使用es5 和 es6 的方法求参数的和
 */

// es5:
function add() {
  var total = 0;
  Array.prototype.forEach.call(arguments, function (item) {
    total = total + item;
  });
  return total;
}
console.log(add(1, 2, 3));

// es6
function addEs6(...args) {
  var total = 0;
  args.forEach((item) => {
    total = total + item;
  });
  return total;
}
console.log(addEs6(1, 2, 3, 4));
