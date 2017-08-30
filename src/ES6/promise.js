// microtask是在下一个event loop的下面
// microtask versus macrotask
// macrotask是在本次event loop的尾部就去执行

let p = new Promise((resolve,reject)=> {
	setTimeout(resolve,3000,1)
});

let q = new Promise((resolve, reject)=> {
	reject('not good time')
});

let pending = new Promise((resolve,reject)=> {
	
});

// p ==> fulfilled 1
// Promise的状态 fulfilled pending rejected
// Promise的值  

// 链式调用，3s后
let p1 = p.then((val)=> {
	val += 2;
	// 返回值也支持字面量 return 2
	return new Promise((res, rej) => {
		res(2)
	})
}).then((val) => {
	// 这个promise的值完全由上一个promise的值决定
	console.log(val);
});
