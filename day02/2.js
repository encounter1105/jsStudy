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

// var x = [12, 23];
// function fn(y) {
//     y[0] = 100;
//     y = [100];
//     y[1] = 200;
//     console.log(y); //[100,200]
// }
// // fn(x);
// console.log(x); // [100,23]

// EC(G)
//  VO(G)
//   i= 0
//   A=0x000 [A函数 [[scope]:EC(G)]]
//   y=0x001
//   B=0x003[B函数 [[scope]:EC(G)]]
// var i = 0;
// function A() {
//     // EC(A) 私有上下文
//     //  AO(A)
//     //    i=10
//     //   x=0x001[x函数 [[scope]:EC(A)]]
//     //  作用域链：<EC(A),EC(G)>
//     //  形参赋值：--
//     //  变量提升 
//     var i = 10;
//     function x(){
//         // EC(X1)
//         //  AO(X1)
//         //  作用域链<EC(x1),EC(A)> 函数执行的上级上下文是它的作用域[之和在哪创建的有关系，和在那执行没有关系]
//         //  形参赋值：---
//         //  变量提升：。。。
//         // EC(X2)
//         //  AO(X2)
//         //  作用域链<EC(x2),EC(A)> 函数执行的上级上下文是它的作用域[之和在哪创建的有关系，和在那执行没有关系]
//         //  形参赋值：---
//         //  变量提升：。。。
//         console.log(i); // 获取其上级上下文中EC(A)中的i =>10
//     }
//     return x; // return 0x001
// }

// var y = A(); //把A执行的返回值[return]赋值给全局的y
// y();
// function B() {
//     // EC(B)
//     //  AO(B)
//     //     i=20
//     //  作用域链：<EC(B),EC(G)>
//     //  形参赋值：--
//     var i = 20;
//     y();
// }
// B();

// let x = 5;
// function fn(x) {
//     return function(y) {
//         console.log(y + (++x));
//     }
// }
// let f = fn(6); 
// f(7)  // 14
// fn(8)(9); //18
// f(10); //18 
// console.log(x); // 5
// -> 14 18 18 5
// ++x & x++
//  ++x:先累加1，用累加后的结果再去运算
//  x++:先拿原始值去运算，运算结束后，自身累加1
//  ==> 累加操作都是数学运算 和 x+=1(x=x+1)不完全一致

// let i = 1;
// console.log(5 + (++i)); //-> 7
// console.log(i) //-> 2

// let i = 1;
// console.log(5 + (i)); //-> 6
// console.log(i) //-> 2

// EC(G)
//  x=10
//  fn = 0x000 [[scope]:EC(G)]
let x= 10;
function fn() {
    // EC(FN) 闭包
    //  y = 20
    //  f=0x001[[scope]:EC(FN)]
    let y = 20;
    function f() {
        console.log(y)
    }
    window.f = f;
}
fn();
fn = null; // 把0x000堆释放掉,但是之前形成上下文不受影响
f(); // ->20
window.f = null //把0x001堆释放掉，此时EC(FN)中没有被外面占用的内容了，它也被释放掉