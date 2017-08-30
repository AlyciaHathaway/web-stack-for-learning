

// import、export首先是一个IO，一般而言会通过webpack/gulp ==> 处理成require

import  { a }   from './export.js';
console.log('=------started');
console.log(a);
console.log('=------ ended');







// a.js ==>  require('./b.js').kkkkk
// b.js ==>  require('./c.js').kkkkk
// c.js ==>  require('./a.js').kkkkk

// AMD  define + require

// webpack ==> node.js的fs io体系来把所有的require依赖放在一个文件里面
// bundle.js

// (function(moduleArr) {
//     // XXX
// }[
//     a.js ,
//     c.js,
//     d.js
// ])()
