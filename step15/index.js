/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-05 20:29:10
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-05 21:06:55
 * @FilePath: /study/step13/index.js
 * @Description: 实现字符串翻转
 */
const str = "Hello,宝贝，我爱你";

function reverseStr(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStr(str));
