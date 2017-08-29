//函数参数的默认值

// 1. 箭头函数 arrow function
// const another = function() {
// 	// function body
// 	return {
// 		a: 'hello world'
// 	}
// };
// 等价于
// const sexy = () => {
// 	return {
// 		a: 'hello world'
// 	}
// };

// 2. const块级作用域
// const C = 'c';
// const apart = () => {
// 	const C = 's'
// };

// 3. 一个function （入参 + 返回值）
// ES5方式
// const pa = () => '1';
// var s = fn;
// // 多种function的执行方式
// fn.apply(this, [argument]);
// fn.call(this, 1,2,3,4);
// fn(1,2,4);

// ES6方式
// const pa = (...args) => {
// 	console.log(args);
// 	return args.reduce((pre, cur) => {
// 		return pre+cur;
// 	}, 0);
// };
// pa(1,2,45);
//
// let a = [1,2,3];
// // c和...d不可以交换位置
// let [c, ...d] = a;
// console.log(d);



// 4. 参数 初始值
// function log(x, y = 'World') {
//   console.log(x, y);
// }
// log('Hello'); // Hello World
// log('hello', 'alycia'); // hello alycia


// 5. rest参数 用于获取函数的多余参数，这样就不需要使用arguments对象了
// function add(...values) {
// 	let sum = 0;
// 	for (var val of values) {
// 		sum += val;
// 	}
// 	return sum
// }
// add(2, 5, 3); // 10
//
// function add2(a, b, ...values) {
//     let sum = 0;
//     for (var val of values) {
//         sum += val;
//     }
//     return sum
// }
// add2(2, 5, 3); // 3


// 6. 箭头函数this指向
// ES5
const s = function() {
    console.log(this); // this指向window/global
};
s();
s.apply({a:1}); // this指向{a:1}

// ES6 箭头函数会绑定上下文，this将会指向我调用地方的this
const s1 = ()=> {
    console.log(this === global); // window/global
};
s1.apply({a:1}); // this指向window/global


const s2 = function() {
    return ()=> {
        console.log(this) //箭头函数会绑定上下文的this，而s2的this指向{a:1}
    }
};
s2.apply({a:1})(); // this指向{a:1}



// //箭头函数 {}
// var f = v => v;
// var f1 = v=>{
// 	console.log(this)
// }
// var f3 = function(v){
// 	//this
// 	return v=>{
// 		console.log(this);
// 	}
// }

// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。