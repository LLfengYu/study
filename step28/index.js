/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-01-13 21:16:26
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 10:39:00
 * @FilePath: /study/step28/index.js
 * @Description: 手写promise.all   promise.race
 */

function promiseAll(promiseArray) {
  if (!Array.isArray(promiseArray)) {
    throw Error("type error");
  }

  return new Promise(function (resolve, reject) {
    var len = promiseArray.length;
    var result = [];
    var successNumber = 0;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promiseArray[i]).then(
        (value) => {
          successNumber++;
          result[i] = value;
          if (successNumber === len) {
            return resolve(result);
          }
        },
        (error) => {
          return reject(error);
        }
      );
    }
  });
}

function promiseRace(promiseArray) {
  if (!Array.isArray(promiseArray)) {
    throw new Error("type error");
  }
  return new Promise(function (resolve, reject) {
    var len = promiseArray.length;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promiseArray[i]).then(
        (value) => resolve(value),
        (error) => {
          reject(error);
        }
      );
    }
  });
}

// 测试一下
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});
promiseAll([p3, p1, p2]).then((res) => {
  console.log(res); // [3, 1, 2]
});

promiseRace([p3, p1, p2]).then((res) => {
  console.log(res); // 1
});
