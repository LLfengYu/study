// for in 和 Object.keys() 的区别
const a = {
  b: 1,
  c: 3,
  d: {
    e: 3,
    f: 4,
  },
};
a.__proto__ = { g: 1 }; // 为对象a的原型添加 g属性
for (let key in a) {
  console.log(key); // b c d g
}

console.log(11, Object.keys(a)); // [ 'b', 'c', 'd' ]

// 区别： for in 能够遍历出对象自身以及原型上可迭代的属性， Object.keys() 只能够获取对象自身的属性
