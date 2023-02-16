/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-13 21:12:29
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-13 21:14:42
 * @FilePath: /study/step27/index.js
 * @Description: 手动实现 Object.create()
 */

function Create(obj) {
  function f() {}
  f.prototype = obj;
  return new f();
}
