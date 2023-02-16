/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-09 22:52:56
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-29 14:30:05
 * @FilePath: /study/step22/index.js
 * @Description:  手写一个深 浅 拷贝
 */

// 手写一个浅拷贝
function clone(target) {
  let newObj = {};
  for (let value in target) {
    newObj[value] = target[value];
  }
  return newObj;
}

// 深拷贝第一种方法：  可应对大部分场景
// var o1 = JSON.parse(JSON.stringify(obj));
// 缺点：
// 1.会忽略 undefined和symbol；
// 2.不可以对Function进行拷贝，因为JSON格式字符串不支持Function，在序列化的时候会自动删除；
// 3.诸如 Map, Set, RegExp, Date, ArrayBuffer 和其他内置类型在进行序列化时会丢失；
// 4.不支持循环引用对象的拷贝;（循环引用的可以大概地理解为一个对象里面的某一个属性的值是它自己）

// 深克隆    要熟练
function deepClone(obj) {
  var newObj = {};
  var keys = Object.keys(obj);
  var data = null;
  for (let i = 0; i < keys.length; i++) {
    data = obj[keys[i]];
    if (data && data instanceof Object) {
      newObj[keys[i]] = deepClone(data);
    } else {
      newObj[keys[i]] = data;
    }
  }
  return newObj;
}

var obj = {
  a: { b: 1 },
  c: 2,
  d: { e: { f: 3 } },
};

// ---------------------------
//深克隆（深克隆不考虑函数）
function deepClone(obj, result) {
  var result = result || {};
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] == "object" && obj[prop] !== null) {
        // 引用值(obj/array)且不为null
        if (Object.prototype.toString.call(obj[prop]) == "[object Object]") {
          // 对象
          result[prop] = {};
        } else {
          // 数组
          result[prop] = [];
        }
        deepClone(obj[prop], result[prop]);
      } else {
        // 原始值或func
        result[prop] = obj[prop];
      }
    }
  }
  return result;
}

// 深浅克隆是针对引用值
function deepClone(target) {
  if (typeof target !== "object") {
    return target;
  }
  var result;
  if (Object.prototype.toString.call(target) == "[object Array]") {
    // 数组
    result = [];
  } else {
    // 对象
    result = {};
  }
  for (var prop in target) {
    if (target.hasOwnProperty(prop)) {
      result[prop] = deepClone(target[prop]);
    }
  }
  return result;
}
