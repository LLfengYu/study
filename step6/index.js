/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2022-12-29 18:26:53
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2022-12-30 14:14:46
 * @FilePath: /study/step6/index.js
 * @Description: 实现三角形的方法
 */


// 1. border  div宽高设为0，border设宽度，三条边透明一条边给颜色
// 2. liner-gradient  在一个矩形里给颜色角度，形成三角形
// 3. 让一个带颜色的矩形在父盒子里绕某个定点旋转45度，父盒子溢出隐藏
// 4. clip-path: polygon(0 0, 0% 100%, 100% 50%);   使用clip-path方法让浏览器只渲染划定区域
// 5. svg
// 6. cavans