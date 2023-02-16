/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2022-12-29 14:44:45
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-01-13 22:27:13
 * @FilePath: /study/step4/index.js
 * @Description: 手写promise
 */
class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.data = void 0;
    executor(this._resolve.bind(this), this._reject.bind(this));
    return this;
  }

  _resolve(result) {
    this.data = result;
    this.status = "fulfilled";
  }

  _reject(reason) {
    this.data = reason;
    this.status = "rejected";
  }

  then(executor) {
    if (this.status === "fulfilled") {
      executor(this.data);
    }
    return this;
  }

  catch(executor) {
    if (this.status === "rejected") {
      executor(this.data);
    }
    return this;
  }

  finally(executor) {
    executor();
  }

  static resolve(data) {
    return new MyPromise((resolve) => {
      resolve(data);
    });
  }

  static reject(reason) {
    return new MyPromise((_, reject) => {
      reject(data);
    });
  }
}

new MyPromise((resolve, reject) => {
  reject(121);
})
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("finally");
  });

MyPromise.resolve(1111).then(console.log);

// 第二种方法：
function myPromise(constructor) {
  let self = this;
  self.status = "pending"; //定义状态改变前的初始状态
  self.value = undefined; //定义状态为resolved的时候的状态
  self.reason = undefined; //定义状态为rejected的时候的状态
  function resolve(value) {
    //两个==="pending"，保证了了状态的改变是不不可逆的
    if (self.status === "pending") {
      self.value = value;
      self.status = "resolved";
    }
  }
  function reject(reason) {
    //两个==="pending"，保证了了状态的改变是不不可逆的
    if (self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
    }
  }
  //捕获构造异常
  try {
    constructor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
myPromise.prototype.then = function (onFullfilled, onRejected) {
  let self = this;
  switch (self.status) {
    case "resolved":
      onFullfilled(self.value);
      break;
    case "rejected":
      onRejected(self.reason);
      break;
    default:
  }
};

// 测试
var p = new myPromise(function (resolve, reject) {
  resolve(1);
});
p.then(function (x) {
  console.log(x);
});
