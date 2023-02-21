/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-17 17:16:43
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 09:37:47
 * @FilePath: /study/step43/index.js
 * @Description: 产生一个随机不重复的数组;
 */

function getArray(min, max, length) {
  var result = [];

  while (result.length <= length) {
    let data = Math.round(Math.random() * (max - min) + min);
    if (!result.includes(data)) result.push(data);
  }
  return result;
}
console.log(getArray(1, 8, 5));
