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
// let i = 0;
// Object.defineProperty(window,'a',{
//     get() {
//         return ++i;
//     }
// })
// if (a == 1 && a == 2 && a == 3) {
//     console.log('OK');
// }

// +++++++++++++++++++
// parseInt/parseFloat([value]) [parseFloat没有[radix]这个值]
//    + 首先会把[value]变为字符串，从字符串左侧第一个开始查找，查找到一个非有效数字
//      为止，把找到的结果转换为数字，一个都没找到，结果就是NaN[parseFloat多识别一个小数点]
//  + parseInt([string],[radix]) [radix]是进制，有效取值范围是2~36之间，如果不传递默认是10进制
//    [如果字符串以""0x"开头，默认是16进制]，如果写0，和不写是一样的
//  + 把[string]看作[radix]进制[从左侧找到所有符合这个进制的字符，遇到不符合的结束查找]，把找到的字符转换为数字[10进制]
//  + 如果[radix]不在2~36之间[排除0]，则返回的是NaN
//  扫盲1：
//   + 2进制0~1
//   + 8进制0~7
//   + 10进制0~9
//   + 16进制0~9 A~F

// 扫盲2：
//   + 把其他值转换为10进制如何处理？
// let str = "12345.23"; //->八进制
// 3*8^-2 + 2*8^-1 + 5*8^0 + 4*8^1 + 3*8^2 + 2*8^3 + 1*8^4 ->十进制的值
// 3*(1/64) + 2*(1/8) + 5*1 + 4*8 + 3*64 + 2*512 + 1*4096 -> 5349.296875
// parseInt('0x0BAF3') -> parseInt('0x0BAF3',16)
// 0BAF3 16进制->10进制
// 3*16^0 + 15*16^1 + 10*16^2 + 11*16^3 + 0*16^4
// 3+15*16+10*256+11*4096 =>47859

// 0123 如果一个数字以0开始，浏览器会默认其是八进制，但是浏览器会直接把八进制转换为10进制

let arr = [27.2,0,'0013','14px',123];
// arr = arr.map((item,index) => {
//     // 数组有多少项，遍历多少次
//     // item->当前项 index->当前项索引
//     // 回调结果返回值会替换数组中当前项的结果[原始数组不变，以新数组形式返回]
//     return 'xxx'
// })
// parseInt('27.2',0) ->27
// parseInt('0',1) ->NaN
// parseInt'0013',2) ->'001'[0013中符合二进制的是001]当作二进制转换为10进制 1*2^0  =>1
// parseInt('14px',3) ->'1' [14px中符合三进制的]当作三进制  1*3^0 =>1
// parseInt('123',4) -> '123'当作四进制转化为转换为10进制 3*4^0+2*4^1+1*4^2 =>27
arr = arr.map(parseInt);
console.log(arr);
