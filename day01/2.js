// 把其他类型[原始值]转换为对象：Object([value])
// 把其他类型转换为数字
//  + Number([value])
//    + 一般用于隐式转换[数字运算、isNaN、==比较...]
//    + 字符串->数字 空字符串为0 字符串红只要出现非有效数字结果是NaN
//    + 布尔 -> 数字 true变为1 false变为0
//    + null -> 0
//    + undefined -> NaN
//    + Symbol -> 报错
//    + BigInt -> 去掉n，正常转换为数字
//    + 对象遵循 Symbol.toPrimitive/valueOf/toString/Number
//  + parseInt/parseFloat([value])
//    + 首先会把[value]变为字符串，从字符串左侧第一个开始查找，查找到一个非有效数字
//      为止，把找到的结果转换为数字，一个都没找到，结果就是NaN[parseFloat多识别一个小数点]
//  ....

// 把其他类型转换为字符串
//  规则：原始值转换是直接用引号包起来[bigint会去除n][除对象转换为字符串是比较特殊的]
    // + toString[排除Object.prototype.toString(用来检测数据类型)]
    // + 字符串拼接、模板字符串[+在JS中除了数学运算，还有字符串拼接(其他运算符一般都是数学运算)]
    // + ...
// 把其他类型转换为布尔
//  规则：只有""0、null、undefined、空字符串"会变为false，其余都是转换为true
// + Boolean([value])
// + !![value]
// + ![value] // 转换为布尔类型取反
// + 条件判断 例如:if(1){}
// + A||B A&&B
//  ...

// console.log(1+1) // -> 2
// console.log(1+'1') // -> '11'
// console.log(1 - '1') //->0
// "+"左右两边，有一边出现字符串或者部分对象，则都是按照字符串拼接处理的
// Case1:"+"只有一边
// let n ='10'
// console.log(+n) //  => 10 转化为数字
// console.log(++n) //  => 11 转化为数字然后累加1
// console.log(n++) //  => 11 转化为数字然后累加1
// i++ 和 i=i+1 以及 i+=1 三个是否一样
//   + i=i+1 & i+=1 是一样的
//   + i++一定返回的是数字，但是i+=1就不一定了，有可能是字符串拼接
// let i = 10;
// console.log(5 + (++i)); //先i累加1，累加后的结果运算 16 i=>11
// console.log(5 + (i++)); //先运算，再累加1 15 i=>11

// Case2:"+"有一边出现对象
// let n = "10"
//  {}+n -> 10 把左侧的{}当作代码块，不参与运算，运算的只有 +n
//  n+{} -> '10[Object Object]' 字符串拼接

// Case3:不是所有对象都是字符串拼接
//   规则：
//     + 先去调取对象的 Symbol.toPrimitive 属性值，如果没有这个属性
//     + 再去调取对象的 valueOf 获取原始值，如果不是原始值
//     + 再去调用对象的的 toString 转换为字符串[如果像转换为数字，则还会调用Number处理]
// console.log(10 + [10,20]); ->'1010,20'
// console.log(10 + new Number(10)) // ->20  new Number(10).vauleOf()有原始值
// console.log(+new Date()) // ->1620394553560 时间戳

// let obj = {
//     x: 10,
    // obj[Symbol.toPrimitive] && valueOf && toString
    // [Symbol.toPrimitive(hint)] {
    //     // console.log(hint); //->"default"、""string"、""Number"
    //     return this.x;
    // }
// };

// let time = new Date()
// console.log(10 + obj) // ->"10[object Object]"
// console.log(!![]); //true
// console.log(!!-1); //true