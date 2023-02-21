/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-17 16:36:11
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 09:41:37
 * @FilePath: /study/step41/index.js
 * @Description: 解析url params为对象
 */

const url = "https://coder.itclan.cn?name=itclanCoder&study=css";

function getUrlParams(url) {
  let params = url.split("?")[1].split("&");
  let result = {};
  for (let i = 0; i < params.length; i++) {
    let kv = params[i].split("=");
    result[kv[0]] = kv[1];
  }
  return result;
}
console.log(getUrlParams(url));
