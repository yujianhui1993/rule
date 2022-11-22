---
sidebar_position: 4
---

# Sass 操作

这是一份快速参考备忘单，列出了 SASS 最有用的功能。

## Sass 基础

### 介绍

- [Sass 官方文档](https://sass-lang.com/documentation/)
- [Sass 中文文档](https://www.sass.hk/docs/)

      Sass 是一种 CSS 的预编译语言

      $ npm install -g sass
      在 Node.js 环境中使用 Sass

      $ sass source/index.scss build/index.css
      $ sass --watch input.scss output.css
      $ sass --watch app/sass:public/css


### 嵌套(Nesting)

      nav {
        ul {
          padding: 0;
          list-style: none;
        }
        li { display: inline-block; }
        a {
          display: block;
        }
      }
      编译 css 为：

      nav ul {
        padding: 0;
        list-style: none;
      }
      nav li {
        display: inline-block;
      }
      nav a {
        display: block;
      }


### 变量

      $defaultLinkColor: #46EAC2;
      a {
        color: $defaultLinkColor;
      }


### 字符串插值

      $wk: -webkit-;
      .rounded-box {
        #{$wk}border-radius: 4px;
      }

### 注释

      /*
      这是多行注释
      块注释
      块注释
      */
      // 这是一条单行注释

### Extend

      .button {
        ···
      }
      .push-button {
        @extend .button;
      }

### 模块（片段）

      // _base.scss
      $font-stack:    Helvetica, sans-serif;
      $primary-color: #333;
      注意以下划线开头的 Sass 文件

      // styles.scss
      @use 'base';

      .inverse {
        background-color: base.$primary-color;
        color: white;
      }
      编译 css 为：

      .inverse {
        background-color: #333;
        color: white;
      }

### 混合(Mixins)

      @mixin heading-font {
          font-family: sans-serif;
          font-weight: bold;
      }
      h1 {
          @include heading-font;
      }


### @import

      @import './other_sass_file';
      @import '/code', 'lists';
      // 纯 CSS @imports
      @import "theme.css";
      @import url(theme);


## Sass 混合(Mixins)

### 参数

      @mixin font-size($n) {
        font-size: $n * 1.2em;
      }
      body {
        @include font-size(2);
      }


### 默认值

      @mixin pad($n: 10px) {
          padding: $n;
      }
      body {
          @include pad(15px);
      }

### 默认变量

      $default-padding: 10px;
      @mixin pad($n: $default-padding) {
        padding: $n;
      }
      body {
        @include pad(15px);
      }

## Sass 颜色函数

#### rgba

      rgb(100, 120, 140)
      rgba(100, 120, 140, .5)
      rgba($color, .5)


#### Mixing

      mix($a, $b, 10%)   // 10% a, 90% b

#### 修改 HSLA

      darken($color, 5%)
      lighten($color, 5%)
      saturate($color, 5%)
      desaturate($color, 5%)
      grayscale($color)
      adjust-hue($color, 15deg)
      complement($color)    // like adjust-hue(_, 180deg)
      invert($color)
      fade-in($color, .5)   // aka opacify()
      fade-out($color, .5)  // aka transparentize()
      rgba($color, .5)      // sets alpha to .5
      

#### 获取值

              HSLA
      hue($color)         // 0deg..360deg
      saturation($color)  // 0%..100%
      lightness($color)   // 0%..100%
      alpha($color)       // 0..1 (aka opacity())

              RGB

      red($color)         // 0..255
      green($color)
      blue($color)
      color.red()	用于获取颜色的红色通道
      color.green()	用于获得颜色的绿色通道
      color.blue()	用于获取颜色的蓝色通道
      color.hue()	以获得颜色的色调
      color.saturation()	用于获得颜色的饱和度
      color.lightness()	以获得颜色的亮度


#### Sass 内置了对颜色值的支持

      @debug rgb(204, 102, 153);  // #c69
      @debug rgba(107, 113, 127, 0.8); // rgba(107, 113, 127, 0.8)
      @debug hsl(228, 7%, 86%);        // #dadbdf
      @debug hsla(20, 20%, 85%, 0.7);  // rgb(225, 215, 210, 0.7)


#### 调整

      // 固定金额变动
      adjust-color($color, $blue: 5)
      adjust-color($color, $lightness: -30%) // darken(_, 30%)
      adjust-color($color, $alpha: -0.4)     // fade-out(_, .4)
      adjust-color($color, $hue: 30deg)      // adjust-hue(_, 15deg)
      // 通过百分比变化
      scale-color($color, $lightness: 50%)
      // 完全改变一个属性
      change-color($color, $hue: 180deg)
      change-color($color, $blue: 250)
