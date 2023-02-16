/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-10 23:13:40
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-29 12:08:10
 * @FilePath: /study/step23/index.js
 * @Description: 手写reduce
 */

// 传入的func的形式为：  func(total, currentValue, currentIndex, arr);
// 整体思路： 获取这四个值，然后让total加上func的返回值，再返回total

Array.prototype.myReduce = function (func, initValue) {
  var arr = this;
  var total =
    typeof initValue === "undefined" || !initValue ? arr[0] : initValue;
  var starIndex = typeof initValue === "undefined" ? 1 : 0;
  arr.slice(starIndex).forEach((item, index) => {
    total = func(total, item, index + starIndex, arr);
  });
  return total;
};

function test(arr) {
  const result = arr.myReduce((total, current) => {
    return total + current;
  });
  console.log(result);
}
test([1, 2, 3, 4]);
