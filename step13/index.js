/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-05 20:29:10
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-06 17:13:58
 * @FilePath: /study/step13/index.js
 * @Description: 实现数组的乱序输出
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// 整体思路： 从第一项开始，在最后一项之间随机选出来一个元素 互换位置
// 第一步： 遍历数组
// 第二步： 先在第一项和最后一项之间随机出来一个元素index
// 第三步： 和当前项互换位置

// 在最小值和最大值之间随机选出一个数值的方法：
function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const getArr = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let index = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
};

console.log(1, getArr(arr));
