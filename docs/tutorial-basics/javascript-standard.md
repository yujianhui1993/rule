---
sidebar_position: 2
---

# Javascript 规范

## 引入 Eslint、Prettier 规范

## 命名

  1. 方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风 格，必须遵从驼峰形式

          正例： localValue / getHttpMessage() / inputUserId
        
          其中 method 方法命名必须是 动词 或者 动词+名词 形式
          
          正例： saveShopCarData /openShopCarInfoDialog
          
          反例： save / open / show / go
        
          特此说明，增删查改，详情统一使用如下 5 个单词，不得使用其他（目的是为了统一各个端）

          add / update / delete / detail / get 

          附： 函数方法常用的动词: 
          get 获取/set 设置, 
          add 增加/remove 删除, 
          create 创建/destory 销毁, 
          start 启动/stop 停止, 
          open 打开/close 关闭, 
          read 读取/write 写入, 
          load 载入/save 保存,
          begin 开始/end 结束, 
          backup 备份/restore 恢复,
          import 导入/export 导出, 
          split 分割/merge 合并,
          inject 注入/extract 提取,
          attach 附着/detach 脱离, 
          bind 绑定/separate 分离, 
          view 查看/browse 浏览, 
          edit 编辑/modify 修改,
          select 选取/mark 标记, 
          copy 复制/paste 粘贴,
          undo 撤销/redo 重做, 
          insert 插入/delete 移除,
          add 加入/append 添加, 
          clean 清理/clear 清除,
          index 索引/sort 排序,
          find 查找/search 搜索, 
          increase 增加/decrease 减少, 
          play 播放/pause 暂停, 
          launch 启动/run 运行, 
          compile 编译/execute 执行, 
          debug 调试/trace 跟踪, 
          observe 观察/listen 监听,
          build 构建/publish 发布,
          input 输入/output 输出,
          encode 编码/decode 解码, 
          encrypt 加密/decrypt 解密, 
          compress 压缩/decompress 解压缩, 
          pack 打包/unpack 解包,
          parse 解析/emit 生成,
          connect 连接/disconnect 断开,
          send 发送/receive 接收, 
          download 下载/upload 上传, 
          refresh 刷新/synchronize 同步,
          update 更新/revert 复原, 
          lock 锁定/unlock 解锁, 
          check out 签出/check in 签入, 
          submit 提交/commit 交付, 
          push 推/pull 拉,
          expand 展开/collapse 折叠, 
          enter 进入/exit 退出,
          abort 放弃/quit 离开, 
          obsolete 废弃/depreciate 废旧, 
          collect 收集/aggregate 聚集


2. 常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚， 不要嫌名字长

        正例： MAX_STOCK_COUNT
        
        反例： MAX_COUNT

3. 使用 ES6+

  > 优先使用ES6+ 中新增的语法糖和函数。这将简化你的程序，并让你的代码更加灵活和可复用。比如箭头函数，await/async, 解构，let, for...of 等等。

4. undefined 判断

  永远不要直接使用 undefined 进行变量判断；使用 typeof 和字符串’undefined’对变量进行判断。

  正例：

        if (typeof person === 'undefined') { ... }

  反例：

        if (person === undefined) { ... }


5. 条件判断和循环最多三层

  > 条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断，但是谨记不要写太长的三目运算符。如果超过3层请抽离成函数，并写清楚zhushi。

6. this 的转换命名

 > 对上下文this的引用只能使用 self 来命名。

 

 ## [vue 规则](https://v2.cn.vuejs.org/v2/style-guide/) 以官方文档

 
 ### Prop 定义必要

  > Prop 定义应该尽量详细。
  >在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

 #### 反例
      // 这样做只有开发原型系统时可以接受
      props: ['status']
  #### 正例
      props: {
        status: String
      }
      // 更好的做法！
      props: {
        status: {
          type: String,
          required: true,
          validator: function (value) {
            return [
              'syncing',
              'synced',
              'version-conflict',
              'error'
            ].indexOf(value) !== -1
          }
        }
      }
### 为 v-for 设置键值必要

>总是用 key 配合 v-for。
>在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的对象固化 (object constancy)，也是一种好的做法。

#### 反例

      <ul>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ul>
#### 正例

      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
        >
          {{ todo.text }}
        </li>
      </ul>

### 避免 v-if 和 v-for 用在一起必要
  
#### 永远不要把 v-if 和 v-for 同时用在同一个元素上。

一般我们在两种常见的情况下会倾向于这样做：

- 为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

- 为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul、ol)。

#### 反例
      <ul>
        <li
          v-for="user in users"
          v-if="user.isActive"
          :key="user.id"
        >
          {{ user.name }}
        </li>
      </ul>
      <ul>
        <li
          v-for="user in users"
          v-if="shouldShowUsers"
          :key="user.id"
        >
          {{ user.name }}
        </li>
      </ul>
#### 正例

      <ul>
        <li
          v-for="user in activeUsers"
          :key="user.id"
        >
          {{ user.name }}
        </li>
      </ul>
      <ul v-if="shouldShowUsers">
        <li
          v-for="user in users"
          :key="user.id"
        >
          {{ user.name }}
        </li>
      </ul>


### 为组件样式设置作用域

#### 对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。

这条规则只和单文件组件有关。你不一定要使用 scoped attribute。设置作用域也可以通过 CSS Modules，那是一个基于 class 的类似 BEM 的策略，当然你也可以使用其它的库或约定。

不管怎样，对于组件库，我们应该更倾向于选用基于 class 的策略而不是 scoped attribute。

这让覆写内部样式更容易：使用了常人可理解的 class 名称且没有太高的选择器优先级，而且不太会导致冲突。

#### 反例
      <template>
        <button class="btn btn-close">X</button>
      </template>

      <style>
      .btn-close {
        background-color: red;
      }
      </style>
#### 正例

##### 使用 `scoped` attribute

```

  <template>
    <button class="button button-close">X</button>
  </template>

  <style scoped>
  .button {
    border: none;
    border-radius: 2px;
  }

  .button-close {
    background-color: red;
  }
  </style>

```
##### 使用 CSS Modules

```

<template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style>

```

#####  使用 BEM 约定

``` 
<template>
  <button class="c-Button c-Button--close">X</button>
</template>

<style>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>

```


### 组件文件强烈推荐
#### 只要有能够拼接文件的构建系统，就把每个组件单独分成文件。

当你需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。

#### 反例

      Vue.component('TodoList', {
        // ...
      })

      Vue.component('TodoItem', {
        // ...
      })
#### 正例

      components/
      |- TodoList.js
      |- TodoItem.js
      components/
      |- TodoList.vue
      |- TodoItem.vue

### 单文件组件文件名的大小写

#### 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

>单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。

#### 反例
      components/
      |- mycomponent.vue
      components/
      |- myComponent.vue

#### 正例
      components/
      |- MyComponent.vue
      components/
      |- my-component.vue


### 基础组件名

#### 应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。

#### 反例
      components/
      |- MyButton.vue
      |- VueTable.vue
      |- Icon.vue

#### 正例

      components/
      |- BaseButton.vue
      |- BaseTable.vue
      |- BaseIcon.vue
      components/
      |- AppButton.vue
      |- AppTable.vue
      |- AppIcon.vue
      components/
      |- VButton.vue
      |- VTable.vue
      |- VIcon.vue

#### 单例组件名

##### 只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。

>这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。

#### 反例

      components/
      |- Heading.vue
      |- MySidebar.vue

#### 正例

      components/
      |- TheHeading.vue
      |- TheSidebar.vue


### 紧密耦合的组件名

#### 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

>如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

#### 反例

      components/
      |- TodoList.vue
      |- TodoItem.vue
      |- TodoButton.vue
      components/
      |- SearchSidebar.vue
      |- NavigationForSearchSidebar.vue
#### 正例

      components/
      |- TodoList.vue
      |- TodoListItem.vue
      |- TodoListItemButton.vue
      components/
      |- SearchSidebar.vue
      |- SearchSidebarNavigation.vue

### 组件名中的单词顺序

#### 组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

#### 反例
      components/
      |- ClearSearchButton.vue
      |- ExcludeFromSearchInput.vue
      |- LaunchOnStartupCheckbox.vue
      |- RunSearchButton.vue
      |- SearchInput.vue
      |- TermsCheckbox.vue
#### 正例

      components/
      |- SearchButtonClear.vue
      |- SearchButtonRun.vue
      |- SearchInputQuery.vue
      |- SearchInputExcludeGlob.vue
      |- SettingsCheckboxTerms.vue
      |- SettingsCheckboxLaunchOnStartup.vue


### 完整单词的组件名强烈推荐

#### 组件名应该倾向于完整单词而不是缩写。

>编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。

#### 反例
      components/
      |- SdSettings.vue
      |- UProfOpts.vue
#### 正例

      components/
      |- StudentDashboardSettings.vue
      |- UserProfileOptions.vue


### Prop 名大小写

#### 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。

>我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

#### 反例

      props: {
        'greeting-text': String
      }
      <WelcomeMessage greetingText="hi"/>
#### 正例

      props: {
        greetingText: String
      }
      <WelcomeMessage greeting-text="hi"/>
