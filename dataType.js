// js中的数据类型
// 原始值类型
// 	1. number:NaN[不是一个有效数字]、Infinity[无穷大的值]
// 	2. string
// 	3. boolean
// 	4. null
// 	5. undefined
// 	6. symbol
// 	7. bigint

// 对象类型
// 	* 标准普通对象 object
// 	* 标准特殊对象 Array/Regexp/Date/Error/Math/ArrayBuffer/DataView/Set/Map。。。
// 	* 非标准特殊对象 Number/Sring/Boolean/Symbol/Bigint
// 	* 可调用对象 【实现了call方法】function

if(NaN === NaN){
    // 不相等 所以不能基于是否等于NaN来检测是否为有效数字
    // isNaN(value)：不论value啥类型，默认隐式转换为Number类型(Number(value)),在校验是否为有效数字
    // 如果是有效数字 返回false，不是有效数字才返回true
    // Object.is(NaN,NaN):true 不会做数字类型的隐式转换 [不兼容IE，Edge除外]
}