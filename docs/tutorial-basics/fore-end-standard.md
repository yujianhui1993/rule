---
sidebar_position: 1
---

# 前端命名规范

一个不好的命名，可能就会引起别人的错误理解；

遵循一套严格的命名规范，无论是对自己还是接手的他人，都会大大降低代码的维护成本，所以想要成为一名合格的前端开发，命名规范是必须的；

## 一些常见的不规则命名：

- 单词拼写错误：到底是 form 还是 from ？

- 中英文混用：到底用 dzTable 还是 addressList 呢？

- 以 1-9，a-z 命名：不同类型直接用 type1、type2、type3？

- 混用命名格式：一会 addressList 一会 addresslist 一会 addresses，这样不太好吧？

- 单复数不分: 到底 address 还是 addresses 啊？到底是 photoes 还是 photos ？

- 正反义词错用：到底用 showDialog 还是 isDialog 还是 visibleDialog ？

## 一些常见好的命名：

1. 驼峰式命名法介绍：

    - Pascal Case 大驼峰式命名法：首字母大写；

      - StudentInfo、UserInfo、ProductInfoCamel

    -  Case 小驼峰式命名法：首字母小写；

      - studentInfo、userInfo、productInfo

2. 文件资源命名：
    - 文件名不得含有空格；

      - 文件名建议只使用小写字母，不使用大写字母；

    - 名称较长时采用半角连接符(-)分隔；

            usr/dev/document/front-end/project-vue3

3. 变量命名
    - 命名方式：采用小驼峰式命名方法；

    - 命名规范：

      - 普通变量(number, string, date)；

      - 布尔类型：需要一个标识变量含义的前缀，比如has, is, wether, can, should等；

      - 数组/集合等复数形式：最好以s或list等能够标识复数形式的后缀结尾，标识当前变量是复数形式，提高可读性；

    - 常量全部大写，且用下划线来分割单词，eg：MAX_LENGTH = 1

4. 函数

    - 命名方式 : 小驼峰方式 lowerCamelCase ( 构造函数使用大驼峰命名法 )

    - 命名规则 : 前缀为动词，动词 eg：add / update / delete / detail / get

          // 更新数据
          function updateData(){
            return {};
          }

          // 获取用户信息
          function getUserInfo{
            return {}
          }

5. css 命名：

    - 样式类名使用小写字母，以半角连接符(-)分割；
    
    - id 采用驼峰式命名；
    
    - scss / less 中的变量、函数、混合、placeholder 采用驼峰式命名  