/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-12 17:27:05
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-17 11:17:00
 * @FilePath: /study/step24/index.js
 * @Description: 手写instanceof
 */

// A instanceof  B
// 原理：判断A的原型链上是否存在B的prototype
// 特点： 不能判断基础数据类型，基础数据类型会报错  1 instanceof Number  // false

function myInstanceof(left, right) {
  if (typeof left !== "object") return false;

  var prototype = right.prototype;
  var proto = Object.getPrototypeOf(left);
  // 获取左侧实例的原型 也可以换成这种写法
  // var proto = left.__proto__;

  while (true) {
    if (!prototype) return false;
    if (prototype === proto) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

// console.log(myInstanceof([1, 2], Function));

function instance(left, right) {
  let rightProto = right.prototype;
  let leftProto = left.__proto__;

  while (true) {
    if (!leftProto) return false;
    if (rightProto == leftProto) return true;
    leftProto = leftProto.__proto__;
  }
}
console.log(instance([1, 2], Array));
