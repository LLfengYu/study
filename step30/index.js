/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-08 09:18:58
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-08 09:31:36
 * @FilePath: /study/step30/index.js
 * @Description: 下划线命名改为驼峰
 */
// aa_bb_cc   aaaaaBbCc
function changeName(name) {
  var arr = name.split("_");
  var first = arr[0].toLowerCase();
  var next = arr.slice(1).map((item) => {
    var startStr = item.substr(0, 1).toUpperCase();
    var nextStr = item.substr(1).toLowerCase();
    return startStr + nextStr;
  });
  console.log(next);
  return first + next.join("");
}
console.log(changeName("aa_bb_cc"));
