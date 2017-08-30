class TestSuper {
	constructor() {
		this.a = 'a1'
	}
	d() {}
}

class Test extends TestSuper{
	constructor() {
		super();
		this.a = 'a';
		this.b = 'b'
	}
	c() {
		return 'ddddd';
	}
}

let ins = new Test();
console.log(ins);
// console.log(ins.prototype.c);

// 上下等价，class是更加结构化的语法
// 如果存在继承关系，要手动call一下super
// react也是用class语法来写

let TestFactory = function(argument) {
	this.a = 'a';
	this.b = 'b'
};
Test.prototype.c = ()=> 'ddddd';
let inst = new Test();
console.log(inst.c);