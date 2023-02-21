/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-19 10:23:34
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 09:28:29
 * @FilePath: /study/step46/index.js
 * @Description: 使用 setTimeout 实现 setInterval
 */

// 思路： 输入fn、time，输出定时器的控制器
// 内部有一个递归方法执行fn，根据控制器来判断是否递归自己

function myInterval(fn, time) {
  // 控制器，用于控制定时器是否持续执行
  var timer = {
    flag: true,
  };
  function interval() {
    fn();
    if (timer.flag) {
      setTimeout(interval, time);
    }
  }
  setTimeout(interval, time);
  return timer;
}
