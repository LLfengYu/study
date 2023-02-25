/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-19 17:16:01
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-20 09:14:57
 * @FilePath: /study/step48/index.js
 * @Description: 手写一个flat方法
 */

const arr = [1, [2, 3, [4, [5, 6]], 7]];

Array.prototype.Flat = function (depth) {
  if (!Array.isArray(this) || depth <= 0) {
    return this;
  }
  if (depth == "Infinity") {
    return this.toString().split(",");
  }
  return this.reduce((total, current) => {
    if (Array.isArray(current)) {
      return total.concat(current.Flat(depth - 1));
    } else {
      return [...total, current];
    }
  }, []);
};

// console.log(arr.Flat(1));

Array.prototype.Flatt = function (depth = 0) {
  if (!Array.isArray(this) || depth <= 0) {
    return this;
  }
  // num 或 Infinity
  if (depth === "Infinity") {
    return this.toString().split(",");
  }

  return this.reduce((total, current) => {
    if (Array.isArray(current)) {
      const data = current.Flatt(depth - 1);
      return (total = [...total, ...data]);
    } else {
      return (total = [...total, current]);
    }
  }, []);
};

console.log(arr.Flatt(2));
