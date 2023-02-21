/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-18 20:52:46
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 09:35:33
 * @FilePath: /study/step45/index.js
 * @Description: 字符串出现的不重复最长长度
 */

// 思路： 1. 依次往新数组里放，若重复则记录此时新数组的长度
// 2. 判断重复字符在数组中的哪一个位置，从当前位置的后一位开始重新放入数组。
// 3. 如此循环，若数组长度大于上次记录的，就替换，最后返回这个长度值

function getLength(str) {
  if (str.length <= 1) return str.length;

  var left = 0,
    right = 1,
    max = 0,
    temp;

  while (right < str.length) {
    temp = str.slice(left, right);
    if (temp.indexOf(str.charAt(right)) > -1) {
      left++;
      continue; // 跳不跳过本次循环均可，结果不变，但执行次数会多
    } else {
      right++;
    }
    max = Math.max(max, right - left);
  }
  return max;
}
console.log(getLength("abcdabbab"));
