/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-04 22:43:37
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-05 14:30:54
 * @FilePath: /study/step12/index.js
 * @Description: 数组去重
 */

const arr = [1, 1, 2, 33, 33, 44, 5, 1, 2];
// 1. set
// const result = [...new Set(arr)];
const result = Array.from(new Set(arr));
// 也相当于  result = Array.from(new Set(arr))
console.log(1, result);

// 2. indexOf  / includes
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  const current = arr[i];
  // newArr.indexOf(current) === -1
  if (!newArr.includes(current)) {
    newArr.push(arr[i]);
  }
}
const result2 = newArr;
console.log(2, result2);

// 3. 双重for循环  + splice
// 思路是  拿当前项与后边所有元素对比，若相同则删除

function getArray(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] === arr[i]) {
        arr.splice(j, 1);
        len--;
      }
    }
  }
  return arr;
}
console.log(3, getArray(arr));

// 4. 先排序，相邻两个不相等的放入新数组
arr.sort((a, b) => a - b);
const newArr1 = [arr[0]];
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1]) newArr1.push(arr[i + 1]);
}
const result3 = newArr1;
console.log(4, result3);

// 5. 利用map  或者  hash表
function getArray5(arr) {
  let obj = {},
    res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(5, getArray5(arr));

function getArray6(arr) {
  let map = new Map(),
    res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(6, getArray6([1, 1, 1, 14, 3, 2, 3, 2, 2, 3]));
