// js中的数据类型
// 原始值类型
// 	1. number:NaN[不是一个有效数字]、Infinity[无穷大的值]
// 	2. string：基于单引号/双引号/反引号 包起来的都是字符串
// 	3. boolean ： true/false
// 	4. null
// 	5. undefined
// 	6. symbol:唯一值
// 	7. bigint:大数

// 对象类型
// 	* 标准普通对象 object
// 	* 标准特殊对象 Array/Regexp/Date/Error/Math/ArrayBuffer/DataView/Set/Map。。。
// 	* 非标准特殊对象 Number/Sring/Boolean/Symbol/Bigint 基于构造函数或者Object创造的原始值的对象类型的格式信息，类型属于对象
// 	* 可调用对象 【实现了call方法】function


// 数据类型检测
// 1. typeof 运算符
// 2. instanceof [本意：检测实例是否属于某类]
// 3. constructor [本意：获取构造函数]
// 4. Object.prototype.toString.call([value]) 检测数据类型
// .............
// 5. Array.isArray([value]) 检测一个值是否为数组

// typeof[value]
// 1. 返回[value]所属类型的字符串 例如'Number'/'String'...
// 2. 不能检测null typeod null -> 'Object'
// 3. 除可调用对象[函数]会返回'function' [不论是箭头函数、构造函数、生成器函数、普通函数都返回'function']
//    其余的对象数据值返回的都是'Object'
// 4. 检测一个未被申明的变量不会报错，返回undefined

// ~~~~~~~~~~~~~
// GetValue(val) [浏览器内部提供的方法C++]，按照值存储的二进制进行检测
//   + 对象 000 -> 函数实现了call，则返回'function' 没实现call返回'object'
//   + null 000000 -> 没实现call返回'object'
//   + undefined -2^30
//   + 数字 -> 整数1 浮点数010
//   + 字符串 -> 100
//   + 布尔 -> 110
// !!!!!!!!!!!!!!!!!!!!!
// typeof 检测数据类型还是很快的，检测原始值类型[除了null，还是很准确的]


// 字面量:原始值
// let n = 10
// 构造函数
// let m = new Number(10);
// let x = Object(10);
// 不允许被new的
// new Symbol()  // Uncaught TypeError: Symbol is not a constructor
// new BigInt()
// 最大安全数字：9007199254740991 超过这个数字进行运算就不准确了
// console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)
// 问题：服务器中有longInt 长整型这种值，如果把这样的值返回客户端，则客户端无法进行有效的处理
// [一般服务器都是以字符串的形式返回，但是字符串进行计算还是需要转换为数字才可以，还是不准确]
// 9007199254740991n-1n 数字后面加n就是bigint类型
// 9007199254741000n.toString() =>返给服务器

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
// Symbol.hasInstance
// Symbol.iterator
// Symbol.toPrimitive
// Symbol.toStringTag
// ......



// if(NaN === NaN){
    // 不相等 所以不能基于是否等于NaN来检测是否为有效数字
    // isNaN(value)：不论value啥类型，默认隐式转换为Number类型(Number(value)),在校验是否为有效数字
    // 如果是有效数字 返回false，不是有效数字才返回true
    // Object.is(NaN,NaN):true 不会做数字类型的隐式转换 [不兼容IE，Edge除外]
// }