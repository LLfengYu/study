/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-09 22:34:45
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-09 22:51:45
 * @FilePath: /study/step21/index.js
 * @Description:  slice substr substring 之间的区别
 */

const str = "123456789";

// slice 只有一个参数时，代表从起始下标开始截取到最后
str.slice(1); // '23456789'
// slice 两个参数的时候代表 起始下标  和  结束下标   包含结束下标的元素
str.slice(1, 3); // ‘23’

// substr  两个参数代表 起始下标，截取长度
str.substr(1, 3); // 23

// substring 方法和slice方法用法一至，区别在于如果slice方法两个参数前边起始下标大于结束下标时，slice方法返回空，substring方法会调整顺序输出
str.slice(9, 1); // ''   返回空
str.substring(9, 1); // 23456789
