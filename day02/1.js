let result = 100 + true + 21.2 + null + undefined + "Tencent" + [] + null + 9 + false;
// NaN+"Tencent" ->"NaNTencentnull9false"
console.log(result); // "NaNTencentnull9false"

// JS中验证两个值是否相等
//  + ==：相等[如果两边类型不一样，首先会隐式转化为相同的类型，然后再做比较]
//    + 对象 == 字符串 对象->字符串
//    + null == undefined ->true  [三个等号是不相等的，但是null/undefined和其它任何值都不会相等]
//    + NaN == NaN ->false
//    + Symbol() == Symbol() ->false
//    + 剩余的情况[例如:对象==数字、字符串==布尔...]都是要转换为数字，再进行比较
//  + ===：绝对相等[要求两边的类型和值都要相等] 例如： switch case
//  + Object.is([val],[val])
//  + ...
// ![] == false --> false == false // true
// 规则：只有""0、null、undefined、空字符串"会变为false，其余都是转换为true [] ->true ![] -> false
// [] == false --> 0 == 0 // true
// 解题思路1：掌握数据类型转换的规则，如果a是一个对象，我们就可以利用“对象->数字”的规则去做一些处理
// var a = ?;
// if (a == 1 && a == 2 && a == 3) {
//     console.log('OK');
// }
// var a = {
//     i:0,
//     // a[Symbol.toPrimitive] 还可以重写valueOf/toString
//     [Symbol.toPrimitive](){
//         // this ->a
//         return ++this.i;
//     }
// };
// if (a == 1 && a == 2 && a == 3) {
//     console.log('OK');
// }
// 这两种思路的核心是一样的 
// var a = [1,2,3]
// a.toString = a.shift // shift删除数组中的第一项
// if (a == 1 && a == 2 && a == 3) {
//     console.log('OK');
// }
// 解题思路2：可以劫持对象的成员访问
//   + 全局下申明的变量是window的一个属性
//   + Object.defineProperty数据劫持的办法
let i = 0;
Object.defineProperty(window,'a',{
    get() {
        return ++i;
    }
})
if (a == 1 && a == 2 && a == 3) {
    console.log('OK');
}