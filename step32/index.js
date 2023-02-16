/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-16 16:17:35
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-16 18:57:01
 * @FilePath: /study/step32/index.js
 * @Description: 获取对象数据类型
 */
// 1. 判断是否是null， 是直接返回null
// 2. 判断是否是引用数据类型，instanceof Object 是否为true
// 3. 其余的返回typeof

function getType(obj) {
  if (obj === null) {
    return "null";
  }
  if (obj instanceof Object) {
    let res = Object.prototype.toString.call(obj); // [Object Object]
    let type = res.split(" ")[1].split("");
    type.pop();
    return type.join("");
  } else {
    return typeof obj;
  }
}

console.log(getType());

// 防抖
function DB(fn, await) {
  // 最后执行，时间段内触发事件重新计时
  let timer = null;
  return function () {
    let args = arguments,
      _this = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, await);
  };
}

// 节流
function th(fn, await) {
  // 先执行，单位时间内再次触发无效
  let timer = null;
  return function () {
    let args = arguments,
      _this = this;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(_this, args);
      }, await);
    }
  };
}
