/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-05 20:29:10
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-05 21:45:52
 * @FilePath: /study/step13/index.js
 * @Description: 将数字每千分位用逗号隔开
 */

// 整体思路：     若为小数，split('.‘) 将小数从小数点分为两部分
// 第一种：
// 1.数字长度小于三个的 直接返回数字
// 2.大于三个的  分为长度为3的整倍数 和  非整倍
// 3. 是整数倍时   str.match(/\d{3}/g).join(',')
// 4. 不是整数倍时  const index = str.length % 3  获取除三取余的值，就是第一个分隔的位数

// 第二种方法： 全部正则匹配
// "1234567.89".replace(/\B(?=(\d{3})+(?!\d))/g, ",");

let format = (n) => {
  let num = n.toString();
  let len = num.length;
  if (len <= 3) {
    return num;
  } else {
    let index = len % 3;
    if (index > 0) {
      // 不是3的整数倍
      return (
        num.slice(0, index) +
        "," +
        num.slice(index, len).match(/\d{3}/g).join(",")
      );
    } else {
      // 是3的整数倍
      // match（）方法返回的是匹配到的字符的集合，是一个数组
      return num.slice(0, len).match(/\d{3}/g).join(",");
    }
  }
};

console.log(format(1232323)); // '1,232,323'
console.log("1.3".split("."));
