// 代码输出：

Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// 输出结果：
// 1
// Promise {<fulfilled>: undefined}

// 解析：Promise.resolve方法的参数如果是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为resolved，Promise.resolve方法的参数，会同时传给回调函数。
// then方法接受的参数是函数，而如果传递的并非是一个函数，它实际上会将其解释为then(null)，这就会导致前一个Promise的结果会传递下面。
