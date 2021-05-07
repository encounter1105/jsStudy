// js中的数据类型
// 原始值类型
// 	1. number:NaN[不是一个有效数字]、Infinity[无穷大的值]
// 	2. string：基于单引号/双引号/反引号 包起来的都是字符串
// 	3. boolean ： true/false
// 	4. null
// 	5. undefined
// 	6. symbol:唯一值
// 	7. bigint

// 对象类型
// 	* 标准普通对象 object
// 	* 标准特殊对象 Array/Regexp/Date/Error/Math/ArrayBuffer/DataView/Set/Map。。。
// 	* 非标准特殊对象 Number/Sring/Boolean/Symbol/Bigint
// 	* 可调用对象 【实现了call方法】function

// let n = Symbol('AA');
// let m = Symbol('AA');
// console.log(n === m); //false
// 1.对象的唯一属性
// 如果想要拿到Symbol()的值
// 方法1
let key = Symbol()
let obj = {
    [key]: 100
}
console.log(obj[key]) 
// 方法2
let arr = Object.getOwnPropertySymbols(obj) //获得当前对象所有的Symbol属性
arr.forEach(item => {
    console.log(obj[item])
})

// 2.宏观管理标识：保证标志的唯一性（vuex/redux）

// 3.底层原理



// if(NaN === NaN){
    // 不相等 所以不能基于是否等于NaN来检测是否为有效数字
    // isNaN(value)：不论value啥类型，默认隐式转换为Number类型(Number(value)),在校验是否为有效数字
    // 如果是有效数字 返回false，不是有效数字才返回true
    // Object.is(NaN,NaN):true 不会做数字类型的隐式转换 [不兼容IE，Edge除外]
// }