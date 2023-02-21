/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-17 15:49:44
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-18 21:51:04
 * @FilePath: /study/step40/index.js
 * @Description:   创建一个100个1的数组
 */
let arr = new Array(100); // 长度为100的，每一项都是undefined的数组
// 或者  let arr = [] ;   arr.length = 100;
arr.fill(1); // 将每一项都填充为1
console.log(arr);
