/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-16 18:54:24
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-16 20:14:21
 * @FilePath: /study/step33/index.js
 * @Description: call  , apply  , bind
 */

// call方法的实现原理
// 1.首先判断this，即call方法的对象是不是一个function，如果不是直接抛出错误
// 2. 接着判断context对象是否存在，若不存在设置为window
// 3. 将this作为context对象的一个属性方法，然后执行
// 4. 方法执行完毕后删除这个属性，将执行结果返回

Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("type error");
  }
  let result = null;
  context = context || window;
  const args = [...arguments].slice(1);
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("type error");
  }
  context = context || window;
  let result = null;
  context.fn = this;
  let args = [...arguments][1];
  if (args) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }
  return result;
};
