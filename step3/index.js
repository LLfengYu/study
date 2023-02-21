/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2022-12-29 10:20:38
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-19 17:17:53
 * @FilePath: /study/step3/index.ts
 * @Description: 数组扁平化
 */
const a = [[1, 2], [3, 4], 5];
const b = [1, [1, 2], [[1, 3], 3]];

// 方法一   使用reduce
const fn = (total, current) => {
  if (Array.isArray(current)) return [...total, ...current];
  return [...total, current];
};

const result = a.reduce(fn, [10]);
// console.log(result);

// 方法二  array.flat([depth]);  depth默认为1，表示扁平一层数组，可设为几表示扁平几层的数组。 可设 Infinity 表无限
// 缺点： 是2019年的方法，可能兼容性不太好
const result1 = a.flat(Infinity);
// console.log(result1)

const result2 = b.reduce((acc = [], cur, index, arr) => {
  if (cur instanceof Array) {
    return [...acc, ...cur];
  }
  return [...acc, cur];
}, []);

function generateArr(data) {
  return data.reduce((acc, cur) => {
    if (cur instanceof Array) {
      return [...acc, ...generateArr(cur)];
    }
    return [...acc, cur];
  }, []);
}
// console.log(result2);
// console.log(generateArr(b));

const c = [
  {
    key: "1",
    value: 2,
    children: [
      { key: "1-1", value: 3, children: [{ key: "1-1-1", value: 3 }] },
    ],
  },
  { key: "2", value: 2 },
];
// [{ key: '1', value: 2, parKey: '' }, { key: '1-1', value: 3, parKey: '1' }, { key: '1-1-1', value: 3, parKey: '1-1' }, {key: '2', value: 2, parKey: ''}]

function Search(data, parKey) {
  return data.reduce((total, current) => {
    if (current.children && Array.isArray(current.children)) {
      return [
        ...total,
        { ...current, parKey, children: undefined },
        ...Search(current.children, current.key),
      ];
    }
    return [...total, { ...current, parKey }];
  }, []);
}

console.log(Search(c, ""));

const d = [
  { key: "a", value: 1 },
  { key: "b", value: 2 },
  { key: "c", value: 3 },
  { key: "d", value: 4 },
];
// { a: 1, b: 2, c: 3, d: 4}

const result4 = d.reduce((total, current) => {
  return { ...total, [current.key]: current.value };
}, {});

console.log("====================================");
console.log(result4);
console.log("====================================");

// 单层嵌套 使用reduce 扁平化
function getArray(arr) {
  return arr.reduce((total, current) => {
    if (Array.isArray(current)) {
      return [...total, ...current];
    }
    return [...total, current];
  }, []);
}

console.log(6, getArray(a));

// 多层数组嵌套  可用递归扁平化
function getArray2(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(getArray2(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(7, getArray2([1, [2, 3, [4, [5, 6]], 7]]));

// 使用 Array.toString()  将数组直接转换成逗号分隔的字符串，再使用split(',')方法将字符串转换成数组
const e = [1, [2, 3, [4, [5, 6]], 7]]; //toString（）方法后转换成了：字符串 1，2，3，4，5，6，7
console.log(8, e.toString().split(","));

// 使用reduce 递归
function getArray3(arr) {
  return arr.reduce((total, current) => {
    if (Array.isArray(current)) {
      return total.concat(getArray3(current));
    }
    return [...total, current];
  }, []);
}
console.log(9, getArray3(e));

// 数组扁平化：
function getArray4(arr) {
  return arr.toString().split(",");
}
console.log(444, getArray4(b));

// 实现一个flat方法
Array.prototype.Flat = function (depth) {
  if (!Array.isArray(this) || depth <= 0) {
    return this;
  }
  if (depth == "Infinity") {
    return this.toString().split(",");
  }
  this.reduce((total, current) => {
    if (Array.isArray(current)) {
      return total.concat(current.Flat(depth - 1));
    } else {
      return [...total, current];
    }
  }, []);
};
