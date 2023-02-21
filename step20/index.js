/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-09 17:16:11
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 12:42:56
 * @FilePath: /study/step20/index.js
 * @Description: 手写一个防抖节流方法
 */

// 防抖
function debounce(fn, wait) {
  // 单位时间内最后一次执行
  // 如果timer不为空，则清空计时器重新计时

  var timer = null;
  return function () {
    var context = this,
      args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}
// 节流  定时器版本
function throttle(fn, wait) {
  // 单位时间内先执行
  // 如果timer不为空，直接return
  var timer = null;
  return function () {
    let args = arguments;
    let context = this;
    if (!timer) {
      fn.apply(context, args);
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    }
  };
}

// 节流  时间戳版本
function throttle(fn, time) {
  var last = 0;
  return function () {
    var now = Date.now();
    if (now >= last + time) {
      fn.apply(this, arguments);
      last = now;
    } else {
      console.log("throttle");
    }
  };
}

//
function throttle(fn, time) {
  var last = 0;
  return function () {
    var now = Date.now();
    if (now >= last + time) {
      fn().apply();
    }
  };
}
// 防抖  单位时间内最后执行，重复触发重新计时
function debounce(fn, time) {
  var timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    var _this = this;
    var args = [...arguments];
    timer = setTimeout(() => {
      fn.call(_this, args);
    }, time);
  };
}
