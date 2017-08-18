// let 和 const

//变量声明
//ES5 var声明作用域问题
// var s = 1;
// var another = function() {
// 	s = 2
// };
// another();
// console.log(s);
//
// var s = 2;
// if(true) {
// 	var s = 1
// }
// console.log(s);


// let a = 0;
// // 适用for 循环
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// //比对

// 块级作用域
// function f1() {
//   let n = 5;
//   if (true) {
//     let n = 10;
//   }
//   console.log(n); // 5
// }
// f1();


//常量
// const C= 'C'; // readonly，不能重复赋值
// C = 'Hello World';
//
// const c= { // 堆内存，point to a reference
// 	a:1
// };
// c={a: 2}; // 堆内存，point to another reference
// c.a = 2; // 不会报错，因为reference并没有变


// //块级作用域返回值 do expression
// let x = do{
// 	1
// }

// //const read only 

// const p = 1;

















