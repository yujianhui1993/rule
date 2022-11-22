---
sidebar_position: 1
---

# ES6+ 常用

ES2015、ES2016、ES2017、ES2018 及以后的 JavaScript 新特性

### 块范围
#### let
      function fn () {
        let x = 0
        if (true) {
          let x = 1 // 只在这个`if`里面
        }
      }

#### const
      const a = 1
      let 是新的 var。 常量(const) 就像 let 一样工作，但不能重新分配.


### 反引号字符串

#### 插值

      const message = `Hello ${name}`

#### 多行字符串
      const str = `
      hello
      world
      `

### 指数运算符

      const byte = 2 ** 8
      // 同: Math.pow(2, 8)


### 字符串方法

      "hello".repeat(3)
      "hello".includes("ll")
      "hello".startsWith("he")
      "hello".padStart(8) // "   hello"
      "hello".padEnd(8) // "hello   " 
      "hello".padEnd(8, '!') // hello!!!
      "\u1E9B\u0323".normalize("NFC")

### 数字方法

      Number.EPSILON
      Number.isInteger(Infinity) // false
      Number.isNaN("NaN")

### Math 方法

      Math.acosh(3) // 1.762747174039086
      Math.hypot(3, 4) // 5
      Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

### 对象解构

      const { id, ...detail } = song;
      使用 rest(...) 运算符单独提取一些键和对象中的剩余键


### 对象扩展

#### 与对象扩展

      const options = {
        ...defaults,
        visible: true
      }


#### 没有对象扩展

      const options = Object.assign(
        {}, defaults,
      { visible: true })

### 数组扩展

#### 具有数组扩展

      const users = [
        ...admins,
        ...editors,
        'rstacruz'
      ]

#### 没有数组扩展

      const users = admins
        .concat(editors)
        .concat([ 'rstacruz' ])