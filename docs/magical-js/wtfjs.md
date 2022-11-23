---
sidebar_position: 1
---

# Javascript意外

本章节整理了一些javascript 的特别之处。[原文地址](https://github.com/denysdovhan/wtfjs)

### [] 等于 ![]

数组等于一个数组取反：

      [] == ![]; // -> true

#### 说明
> 抽象相等运算符会将其两端的表达式转换为数字值进行比较，尽管这个例子中，左右两端均被转换为 0，但原因各不相同。数组总是真值（truthy）,因此右值的数组取反后总是为 false，然后在抽象相等比较中被被类型转换为 0。而左值则是另一种情形，空数组没有被转换为布尔值的话，尽管在逻辑上是真值（truthy），但在抽象相等比较中，会被类型转换为数字 0。

      +[] == +![];
      0 == +false;
      0 == 0;
      true;


### true 不等于 ![]，也不等于 []

数组不等于 true，但数组取反也不等于 true； 数组等于 false数组取反也等于 false：

      true == []; // -> false
      true == ![]; // -> false

      false == []; // -> true
      false == ![]; // -> true


#### 说明:

      true == []; // -> false
      true == ![]; // -> false

      // 根据规范

      true == []; // -> false

      toNumber(true); // -> 1
      toNumber([]); // -> 0

      1 == 0; // -> false

      true == ![]; // -> false

      ![]; // -> false

      true == false; // -> false

      false == []; // -> true
      false == ![]; // -> true

      // 根据规范

      false == []; // -> true

      toNumber(false); // -> 0
      toNumber([]); // -> 0

      0 == 0; // -> true

      false == ![]; // -> true

      ![]; // -> false

      false == false; // -> true


### true 是 false

      !!"false" == !!"true"; // -> true
      !!"false" === !!"true"; // -> true


#### 说明

      // true 是真值（truthy），并且隐式转换为数字1，而字符串 'true' 会被转换为 NaN。
      true == "true"; // -> false
      false == "false"; // -> false

      // 'false' 不是空字符串，所以它的值是 true
      !!"false"; // -> true
      !!"true"; // -> true

### baNaNa

      "b" + "a" + +"a" + "a";
      这是用 JavaScript 写的老派笑话，原版如下：

      "foo" + +"bar"; // -> 'fooNaN'

#### 说明：

  > 这个表达式可以转化成 'foo' + (+'bar')，但无法将'bar'强制转化成数值。


### 奇怪的 Object.is() 和 ===

Object.is() 用于判断两个值是否相同。和 === 操作符像作用类似，但它也有一些奇怪的行为：

      Object.is(NaN, NaN); // -> true
      NaN === NaN; // -> false

      Object.is(-0, 0); // -> false
      -0 === 0; // -> true

      Object.is(NaN, 0 / 0); // -> true
      NaN === 0 / 0; // -> false


### 说明:
  > 在 JavaScript “语言”中，NaN 和 NaN 的值是相同的，但却不是严格相等。NaN === NaN 返回 false 是因为历史包袱，记住这个特例就行了。
      基于同样的原因，-0 和 0 是严格相等的，但它们的值却不同。


### 最小值大于零

Number.MIN_VALUE 是最小的数字，大于零：

      Number.MIN_VALUE > 0; // -> true

#### 说明：
> Number.MIN_VALUE 是 5e-324，即可以在浮点精度内表示的最小正数，也是在该精度内无限接近零的数字。它定义了浮点数的最高精度。
> 现在，整体最小的值是 Number.NEGATIVE_INFINITY，尽管这在严格意义上并不是真正的数字。


### 数组相加

如果你尝试将两个数组相加：

      [1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
#### 说明：
数组之间会发生串联。步骤如下：

      [1, 2, 3] +
        [4, 5, 6][
          // 调用 toString()
          (1, 2, 3)
        ].toString() +
        [4, 5, 6].toString();
      // 串联
      "1,2,3" + "4,5,6";
      // ->
      ("1,2,34,5,6");


### 数组中的尾逗号

假设你想要创建了一个包含 4 个空元素的数组。如下所示，最终只能得到一个包含三个元素的数组，原因在于尾逗号：

      let a = [, , ,];
      a.length; // -> 3
      a.toString(); // -> ',,'

#### 说明：
> 尾逗号 （trailing commas，有时也称为“最后逗号”（final commas）） 在向 JavaScript 代码中添加新元素、参数或属性时非常有用。如果您想添加一个新属性，若前一行已经有尾逗号，你无需修改前一行，只要添加一个新行并加上尾逗号即可。这使得版本控制历史较为干净，编辑代码也很简单。

### 数组的相等性是深水猛兽

数组之间进行相等比较是 JS 中的深水猛兽，看看这些例子：

      [] == ''   // -> true
      [] == 0    // -> true
      [''] == '' // -> true
      [0] == 0   // -> true
      [0] == ''  // -> false
      [''] == 0  // -> true

      [null] == ''      // true
      [null] == 0       // true
      [undefined] == '' // true
      [undefined] == 0  // true

      [[]] == 0  // true
      [[]] == '' // true

      [[[[[[]]]]]] == '' // true
      [[[[[[]]]]]] == 0  // true

      [[[[[[ null ]]]]]] == 0  // true
      [[[[[[ null ]]]]]] == '' // true

      [[[[[[ undefined ]]]]]] == 0  // true
      [[[[[[ undefined ]]]]]] == '' // true



### parseInt 是一个坏蛋

parseInt 以它的怪异而出名。

      parseInt("f*ck"); // -> NaN
      parseInt("f*ck", 16); // -> 15

#### 说明： 
      
  > 这是因为 parseInt 会持续解析直到它解析到一个不识别的字符，'f*ck' 中的 f 是 16 进制下的 15。

解析 Infinity 到整数也很有意思……

      //
      parseInt("Infinity", 10); // -> NaN
      // ...
      parseInt("Infinity", 18); // -> NaN...
      parseInt("Infinity", 19); // -> 18
      // ...
      parseInt("Infinity", 23); // -> 18...
      parseInt("Infinity", 24); // -> 151176378
      // ...
      parseInt("Infinity", 29); // -> 385849803
      parseInt("Infinity", 30); // -> 13693557269
      // ...
      parseInt("Infinity", 34); // -> 28872273981
      parseInt("Infinity", 35); // -> 1201203301724
      parseInt("Infinity", 36); // -> 1461559270678...
      parseInt("Infinity", 37); // -> NaN
      也要小心解析 null：

parseInt(null, 24); // -> 23

####说明：

 > 它将 null 转换成字符串 'null'，并尝试转换它。对于基数 0 到 23，没有可以转换的数字，因此返回 NaN。而当基数为 24 时，第 14 个字母“n”也可以作数字用。当基数为 31 时，第 21 个字母“u”进入数字的行列，此时整个字符串都可以解析了。而当基数增加到 37 以上，已经超出了数字和字母所能表达的数字范围，因此一律返回 NaN。


不要忘记八进制：

      parseInt("06"); // 6
      parseInt("08"); // 8 如果支持 ECMAScript 5
      parseInt("08"); // 0 如果不支持 ECMAScript 5


#### 说明：

> 当输入的字符串以“0”开始时，根据实现的不同，会被解释为八进制或十进制。ECMAScript 5 明确表示应当使用十进制，但有部分浏览器仍不支持。因此推荐在调用 parseInt 函数时总是传入表示基数的第二个参数。

parseInt 会先将参数值转换为字符串：

      parseInt({ toString: () => 2, valueOf: () => 1 }); // -> 2
      Number({ toString: () => 2, valueOf: () => 1 }); // -> 1

解析浮点数的时候要注意

      parseInt(0.000001); // -> 0
      parseInt(0.0000001); // -> 1
      parseInt(1 / 1999999); // -> 5


#### 说明：
      parseInt 接受字符串参数并返回一个指定基数下的整数。
      parseInt 会将字符串中首个非数字字符（字符集由基数决定）及其后的内容全部截断。
      如 0.000001 被转换为 "0.000001"，因此 parseInt 返回 0。
      而 0.0000001 转换为字符串会变成 "1e-7"，因此 parseInt 返回 1。
      1/1999999 被转换为 5.00000250000125e-7，所以 parseInt 返回 5。



### 0.1 + 0.2 精度计算

来自 JavaScript 的知名笑话。0.1 和 0.2 相加是存在精度错误的

      0.1 + 0.2; // -> 0.30000000000000004
      0.1 + 0.2 === 0.3; // -> false

#### 说明：
      程序中的常量 0.2 和 0.3 是最接近真实值的近似值。最接近 0.2 的 double 大于有理数 0.2，但最接近 0.3 的 double 小于有理数 0.3。0.1 和 0.2 的和大于有理数 0.3，因此在程序中进行常量比较会得到假。

      这个问题太过于出名，甚至有一个网站叫 0.30000000000000004.com。这不仅仅是 JavaScript 特有的问题，在其他采用浮点计算的语言中也广泛存在。


### 有趣的数学

通常 JavaScript 中的算术运算的结果可能是非常难以预料的。 考虑这些例子：

      3  - 1  // -> 2
      3  + 1  // -> 4
      '3' - 1  // -> 2
      '3' + 1  // -> '31'

      '' + '' // -> ''
      [] + [] // -> ''
      {} + [] // -> 0
      [] + {} // -> '[object Object]'
      {} + {} // -> '[object Object][object Object]'

      '222' - -'111' // -> 333

      [4] * [4]       // -> 16
      [] * []         // -> 0
      [4, 4] * [4, 4] // NaN

#### 说明：

前四个例子发生了什么？你可以参考此处的给出的关于 JavaScript 中的加法的对照表：

      Number  + Number  -> 加法
      Boolean + Number  -> 加法
      Boolean + Boolean -> 加法
      Number  + String  -> 串联字符串
      String  + Boolean -> 串联字符串
      String  + String  -> 串联字符串


不过需要注意此处的 {} + []，这是一个例外。你可以发现它的求值结果与 [] + {} 不同，这是因为当我们不加括号时，它被当作是一个空的代码块和一个一元加法运算符，这个运算符会把其后的 [] 转换为数字。具体如下：

      {
        // 代码块
      }
      +[]; // -> 0
      当我们加上括号，情况就不一样了：

      ({} + []); // -> [object Object]



### 棘手的箭头函数

考虑下面的例子：

      let f = () => 10;
      f(); // -> 10

这看起来没问题，但是如果这样呢？

      let f = () => {};
      f(); // -> undefined


#### 说明：

      你可能觉得应该返回 {} 而不是 undefined。这是因为花括号是箭头函数语法的一部分，所以 f 会返回 undefined。不过要从箭头函数明确返回 {} 对象也是有可能的，这时你需要用括号把返回值括起来。

      let f = () => ({});
      f(); // -> {}


### 箭头函数不能作为构造函数

考虑下面的例子：

      let f = function() {
        this.a = 1;
      };
      new f(); // -> { 'a': 1 }

现在，试着用箭头函数做同样的事情：

      let f = () => {
        this.a = 1;
      };
      new f(); // -> TypeError: f is not a constructor

#### 说明：

> 箭头函数不能作为构造函数调用，并且会在 new 的时候抛出错误。因为它具有词域 this，而且它也没有 prototype 属性，所以这样做没什么意义。


### arguments 和箭头函数

考虑下面的例子：

      let f = function() {
        return arguments;
      };
      f("a"); // -> { '0': 'a' }

现在，试着用箭头函数做同样的事情：

      let f = () => arguments;
      f("a"); // -> Uncaught ReferenceError: arguments is not defined

#### 说明：

箭头函数是常规函数的轻量级版本，注重于短小和词域 this。同时箭头函数不提供 arguments 对象的绑定。你可以使用 剩余参数（rest parameters） 来得到同样的结果：

      let f = (...args) => args;
      f("a");


### 棘手的返回

return 语句是很棘手的. 看下面的代码:

      (function() {
        return
        {
          b: 10;
        }
      })(); // -> undefined

#### 说明：

return 和返回的表达式必须在同一行:

      (function() {
        return {
          b: 10
        };
      })(); // -> { b: 10 }

 > 这是因为一个叫自动分号插入的概念，它会在大部分换行处插入分号。第一个例子里，return 语句和对象字面量中间被插入了一个分号。所以函数返回 undefined，其后的对象字面量永远不会被求值。


### Number.toFixed() 显示不同的数字

Number.toFixed() 在不同的浏览器中会表现得有点奇怪。看看这个例子：

      (0.7875).toFixed(3);
      // Firefox: -> 0.787
      // Chrome: -> 0.787
      // IE11: -> 0.788
      (0.7876).toFixed(3);
      // Firefox: -> 0.788
      // Chrome: -> 0.788
      // IE11: -> 0.788


#### 说明：

尽管你的第一直觉可能是 IE11 是正确的而 Firefox/Chrome 错了，事实是 Firefox/Chrome 更直接地遵循数字运算的标准（IEEE-754 Floating Point），而 IE11 经常违反它们（可能）去努力得出更清晰的结果。

你可以通过一些快速的测试来了解为什么它们发生：

      // 确认 5 向下取整的奇怪结果
      (0.7875).toFixed(3); // -> 0.787
      // 当你展开到 64 位（双精度）浮点数准确度限制时看起来就是一个 5
      (0.7875).toFixed(14); // -> 0.78750000000000
      // 但如果你超越这个限制呢？
      (0.7875).toFixed(20); // -> 0.78749999999999997780
      浮点数在计算机内部不是以一系列十进制数字的形式存储的，而是通过一个可以产生一点点通常会被 toString 或者其他调用取整的不准确性的更复杂的方法，但它实际上在内部会被表示。

      在这里，那个结尾的 "5" 实际上是一个极其小的略小于 5 的分数。将其以任何常理的长度取整它都会被看作一个 5，但它在内部通常不是 5。

      然而 IE11 会直接在这个数字后面补 0，甚至在 toFixed(20) 的时候也是这样，因为它看起来强制取整了值来减少硬件限制带来的问题。
