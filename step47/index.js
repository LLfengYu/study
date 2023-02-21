/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-19 16:44:16
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 09:22:35
 * @FilePath: /study/step47/index.js
 * @Description: // 字符串数组最长公共前缀
 */

// 思路一： 默认公共最长前缀为空，以第一个元素为基准依次遍历后续元素，判断每个元素的每一个字符是否与第一个元素相等，若相等默认前缀拼接上该字符。 否则返回
function getLongestStr(strArr) {
  // todo: 判断strArr是否是数组，长度是否大于1  为1时直接返回这个元素
  var re = "";
  for (let i = 0; i < strArr[0].length; i++) {
    for (let j = 1; j < strArr.length; j++) {
      if (strArr[0][i] !== strArr[j][i]) return re;
    }
    re += strArr[0][i];
  }
  return re;
}
console.log(getLongestStr(["aaaavc", "aaaavceee", "aaaavcd"]));

// 思路二：与思路一相反， 默认第一个元素为最长公共前缀，拿第一个与后续元素做对比，去掉后边不相同的，最终即为最长公共前缀

function getLongestString(strArr) {
  var re = "";
  for (let i = 0; i < strArr[0].length; i++) {
    for (let j = 1; j < strArr.length; j++) {
      if (strArr[0][i] !== strArr[j][i]) return re;
    }
    return (re += strArr[0][i]);
  }
  return re;
}
