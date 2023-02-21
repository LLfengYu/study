/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-17 18:01:10
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-17 18:04:38
 * @FilePath: /study/step44/index.js
 * @Description: 实现一个sleep函数;
 */

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
sleep(1000);
