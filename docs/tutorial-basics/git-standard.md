---
sidebar_position: 4
---

# Git规范

### 写好git commit提交有什么好处呢？


  - 查看提交的log也非常的优雅，这个就不多提了


  - 方便查找日志记录，通过简单的过滤便能定位到具体想要查找的log


  - 方便问题回溯，通过git log就能查找到当时提交的代码文件，以及修改的代码


  - 其实如果使用过github的release, 可以直接根据feat和fix来过滤提取日志发布版本


### 如何提交git commit

  1. 创建自己分支 (Yjh/{type}/xxx) 头部为提交人缩写 type为提交类型 xxx为模块描述

  2. 编写 commit 内容，内容应该尽量精简描述

  type 值一般有以下几种：

    - feat：新功能 feature
    - bug：测试反馈 bug 列表中的 bug 号
    - fix： 修复 bug
    - ui：更新UI；
    - docs： 文档注释变更
    - style： 代码格式(不影响代码运行的变动)；
    - refactor： 重构、优化(既不增加新功能，也不是修复bug)；
    - perf： 性能优化；
    - release：发布；
    - deploy：部署；
    - test： 增加测试
    - chore： 构建过程或辅助工具的变动
    - revert： 回退
    - build： 打包



