/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-09 17:16:11
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-29 11:02:47
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
