/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2022-12-30 17:48:35
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-16 22:55:53
 * @FilePath: /study/step8/index.js
 * @Description: 数组转为树形结构
 */

var arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

// 思路：
// 1. 利用obj作为中间件保存arr中每一项的值
// 2. 遍历数组，判断当前元素是否有pid，如果有则在obj中找到pid对应的元素，为pid元素增加children，将自身放进去,再将修改后的pid的值赋值覆盖原来的pid元素
// 3. 没有pid则代表自己是父元素，直接放到result数组中
// 4. 返回result即可

function arrToTree(arr) {
  var obj = {};
  var result = [];
  arr.forEach((item) => {
    obj[item.id] = item;
  });
  arr.forEach((item) => {
    let parentNode = obj[item.pid] || null;
    if (parentNode) {
      parentNode.children = parentNode.children || [];
      parentNode.children.push(item);
      obj[item.pid] = parentNode; // 要将原来的pid覆盖
    } else {
      result.push(item);
    }
  });
  return result;
}
// console.log(arrToTree(arr));

function promiseAll(promiseArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray)) {
      throw new Error("type error");
    }
    var len = promiseArray.length;
    var result = [];
    var successNumber = 0;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promiseArray[i]).then(
        (value) => {
          successNumber++;
          result[i] = value;
          if (successNumber === len) {
            resolve(result);
          }
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}

function arr2Tree(arr) {
  var obj = {};
  var result = [];
  arr.forEach((item) => {
    obj[item.id] = item;
  });
  arr.forEach((item) => {
    const pNode = obj[item.pid];
    if (pNode) {
      pNode.children = obj[item.pid].children || [];
      pNode.children.push(item);
      obj[item.pid] = pNode;
    } else {
      result.push(item);
    }
  });
  console.log(result);
  return result;
}
arr2Tree(arr);
