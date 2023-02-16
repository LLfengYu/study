/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-05 20:29:10
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-18 22:54:19
 * @FilePath: /study/step13/index.js
 * @Description: 实现数组元素求和
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getTotal(arr) {
  return arr.reduce((total, current) => {
    return total + current;
  });
}

console.log(getTotal(arr));
