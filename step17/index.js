/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-05 21:39:56
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-05 21:41:04
 * @FilePath: /study/step17/index.js
 * @Description: 实现非负大整数相加
 */

// 其主要的思路如下
// 首先用字符串的方式来保存大数，这样数字在数学表示上就不会发生变化
// 初始化res，temp来保存中间的计算结果，并将两个字符串转化为数组，以便进行每一位的加法运算
// 将两个数组的对应的位进行相加，两个数相加的结果可能大于10，所以可能要仅为，对10进行取余操作，将结果保存在当前位
// 判断当前位是否大于9，也就是是否会进位，若是则将temp赋值为true，因为在加法运算中，true会自动隐式转化为1，以便于下一次相加
// 重复上述操作，直至计算结束
