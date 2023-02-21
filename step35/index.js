/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-17 11:31:09
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 10:24:12
 * @FilePath: /study/step35/index.js
 * @Description: 浅、深拷贝
 */

function shallowCopy(obj) {
  var newObj = {};
  newObj = { ...obj };
}

function shallowCopy1(obj) {
  var newObj = {};
  Object.assign(newObj, obj);
}

function deepClone(target) {
  if (target === null || typeof target !== "object") {
    throw new Error("type error");
  }
  var newObj = Array.isArray(target) ? [] : {};
  let keys = Object.keys(target);
  for (let i = 0; i < keys.length; i++) {
    let data = target[keys[i]];
    if (typeof data === "object") {
      newObj[keys[i]] = deepClone(data);
    } else {
      newObj[keys[i]] = data;
    }
  }
  return newObj;
}

chainPromise([promise1, promise2, promise3], { limit: 3 }).then(
  ([result1, result2, result3]) => {
    // 每一环节允许三次重传
  }
);
