// 代码输出
const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});
promise
  .then((res) => {
    console.log("then:", res);
  })
  .catch((err) => {
    console.log("catch:", err);
  });

// 输出：then: success1

// 考点： promise状态在执行完毕之后就不会重新改变了，所以后续的reject和resolve都不会再执行了，catch不到
