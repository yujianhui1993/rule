---
sidebar_position: 3
---

# JSON 常用操作

这是理解和编写 JSON 格式配置文件的快速参考备忘单。

### 访问对象

      let myObject = {
        "name": "Jason",
        "last": "Doe",
        "age": 39,
        "gender": "M",
        "salary": 70000,
        "married": true
      };
      myObject.name	"Jason"
      myObject["name"]	"Jason"
      myObject.age	39
      myObject.other	undefined
      myObject[0]	undefined


### 访问阵列

      let myArray = [
        "Jason",
        "Doe",
        39,
        "M",
        70000,
        true
      ];
      myArray[1]	"Doe"
      myArray[5]	true
      myArray[6]	undefined


### 访问嵌套

      let myObject = {
          "ref": {
              "name": 0,
              "last": 1,
              "age": 2,
              "gender": 3,
              "salary": 4,
              "married": 5
          },
          "jdoe": [
              "Jason",
              "Doe",
              39,
              "M",
              70000,
              true
          ],
          "jsmith": [
              "Tom",
              "Smith",
              42,
              "F",
              80000,
              true
          ]
      };
      myObject.ref.age	2
      myObject["ref"]["age"]	2
      myObject.jdoe	["Jason", "Doe", 39 ...]
      myObject.jsmith[3]	"F"
      myObject[1]	undefined


### 访问对象数组

      let myArray = [
        {
          "name": "Jason",
          "last": "Doe",
          "age": 39,
          "gender": "M",
          "salary": 70000,
          "married": true
        },
        {
          "name": "Tom",
          "last": "Smith",
          "age": 42,
          "gender": "F",
          "salary": 80000,
          "married": true
        },
        {
          "name": "Amy",
          "last": "Burnquist",
          "age": 29,
          "gender": "F",
          "salary": 60000,
          "married": false
        }
      ];
      myArray[0]	{"name": "Jason", ...}
      myArray[1].name	"Tom"
      myArray[1][2]	42
      myArray[3]	undefined
      myArray[3].gender	TypeError: Cannot read...