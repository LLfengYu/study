/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-17 15:35:57
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-17 16:18:48
 * @FilePath: /study/step39/index.js
 * @Description: 实现多语言切换
 */

// 思路一：
//  组件config
const getType = "English"; // 从全局中拿当前是什么语言环境

export const text = {
  你好: {
    Chinese: "你好",
    English: "Hello",
  },
  欢迎: {
    Chinese: "欢迎",
    English: "Welcome",
  },
};
// 组件中使用：
// import text from "./text";

// {{text.你好[getType]}}
console.log(text.你好[getType]);
