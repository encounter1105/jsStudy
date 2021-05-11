// JS代码运行的环境
//   + 浏览器 ->webkit内核(V8)、Trident(IE)、Gecko(火狐)、Blink(谷歌)...
//   + Node ->webkit内核
//   + webview [Hybrid混合App开发] ->webkit内核
//   +...

// var a = 12;
// var b = a;
// b = 13;
// console.log(a); //12

// function fn() {
//     var a = 12;
//     var b = a;
//     b = 13;
//     console.log(a);
// }

// fn();

// var a = {n: 12};
// var b = a;
// b['n'] = 13;
// console.log(a.n) //13

// EC(G)全局执行上下文
//   VO（G）全局变量对象
//   a->0x000
//   b->0x001
// var a = {n: 12}; //->堆内存 0x000
// var b = a;
// var a = {n: 13}; //->堆内存 0x001
// console.log(a.n) //12

// console.log({} === {})  //false 对象和对象比较，看的是内存地址

// var a = 12,
//     b = 12;
//     // 连续定义多个变量，可以用，分隔
// var a = 12;
// var b = 12；

// var a = b = 12;
// ----->1.创建一个值12
//       2.b = 12 [正常顺序是从右到左处理]
//       3. var a = 12 

// JS运算符优先级 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//   + 成员访问 obg.xx 优先级很大
//   优先级大的会提前处理
// obj.x = b = 12
// 1.创建值12
// 2.obj.x = 12
// 3. b = 12

// 思考
// var a = {n: 1}; //->堆内存 0x000
// var b = a;
// a.x = a = { n:2}
// console.log(a.x)  // undefined
// console.log(b) // {n:1,x:{n:2}}

var x = [12, 23];
function fn(y) {
    y[0] = 100;
    y = [100];
    y[1] = 200;
    console.log(y); //[100,200]
}
// fn(x);
console.log(x); // [100,23]

