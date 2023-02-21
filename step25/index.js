/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-12 18:29:19
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 10:45:30
 * @FilePath: /study/step25/index.js
 * @Description: 手写 new
 */

// 1. new一个空对象
// 2. 将对象的原型指向构造函数的原型
// 3. 将this指向空对象，执行构造函数
// 4. 返回新的对象

function NewFn() {
  var newObj = null;
  var constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }
  console.log(arguments);
  newObj.__proto__ = constructor.prototype;
}

NewFn(() => {}, 1, 2);
