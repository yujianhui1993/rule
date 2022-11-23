"use strict";(self.webpackChunkyjh_rule=self.webpackChunkyjh_rule||[]).push([[8698],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),k=a,m=u["".concat(i,".").concat(k)]||u[k]||p[k]||l;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:4},o="Sass \u64cd\u4f5c",s={unversionedId:"tutorial-extras/sass",id:"tutorial-extras/sass",title:"Sass \u64cd\u4f5c",description:"\u8fd9\u662f\u4e00\u4efd\u5feb\u901f\u53c2\u8003\u5907\u5fd8\u5355\uff0c\u5217\u51fa\u4e86 SASS \u6700\u6709\u7528\u7684\u529f\u80fd\u3002",source:"@site/docs/tutorial-extras/sass.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/sass",permalink:"/rule/docs/tutorial-extras/sass",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"JSON \u5e38\u7528\u64cd\u4f5c",permalink:"/rule/docs/tutorial-extras/json"},next:{title:"\u795e\u5947\u7684Javascript",permalink:"/rule/docs/category/\u795e\u5947\u7684javascript"}},i={},c=[{value:"Sass \u57fa\u7840",id:"sass-\u57fa\u7840",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:3},{value:"\u5d4c\u5957(Nesting)",id:"\u5d4c\u5957nesting",level:3},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:3},{value:"\u5b57\u7b26\u4e32\u63d2\u503c",id:"\u5b57\u7b26\u4e32\u63d2\u503c",level:3},{value:"\u6ce8\u91ca",id:"\u6ce8\u91ca",level:3},{value:"Extend",id:"extend",level:3},{value:"\u6a21\u5757\uff08\u7247\u6bb5\uff09",id:"\u6a21\u5757\u7247\u6bb5",level:3},{value:"\u6df7\u5408(Mixins)",id:"\u6df7\u5408mixins",level:3},{value:"@import",id:"import",level:3},{value:"Sass \u6df7\u5408(Mixins)",id:"sass-\u6df7\u5408mixins",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u9ed8\u8ba4\u503c",id:"\u9ed8\u8ba4\u503c",level:3},{value:"\u9ed8\u8ba4\u53d8\u91cf",id:"\u9ed8\u8ba4\u53d8\u91cf",level:3},{value:"Sass \u989c\u8272\u51fd\u6570",id:"sass-\u989c\u8272\u51fd\u6570",level:2},{value:"rgba",id:"rgba",level:4},{value:"Mixing",id:"mixing",level:4},{value:"\u4fee\u6539 HSLA",id:"\u4fee\u6539-hsla",level:4},{value:"\u83b7\u53d6\u503c",id:"\u83b7\u53d6\u503c",level:4},{value:"Sass \u5185\u7f6e\u4e86\u5bf9\u989c\u8272\u503c\u7684\u652f\u6301",id:"sass-\u5185\u7f6e\u4e86\u5bf9\u989c\u8272\u503c\u7684\u652f\u6301",level:4},{value:"\u8c03\u6574",id:"\u8c03\u6574",level:4}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sass-\u64cd\u4f5c"},"Sass \u64cd\u4f5c"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4efd\u5feb\u901f\u53c2\u8003\u5907\u5fd8\u5355\uff0c\u5217\u51fa\u4e86 SASS \u6700\u6709\u7528\u7684\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"sass-\u57fa\u7840"},"Sass \u57fa\u7840"),(0,a.kt)("h3",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://sass-lang.com/documentation/"},"Sass \u5b98\u65b9\u6587\u6863"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.sass.hk/docs/"},"Sass \u4e2d\u6587\u6587\u6863")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"Sass \u662f\u4e00\u79cd CSS \u7684\u9884\u7f16\u8bd1\u8bed\u8a00\n\n$ npm install -g sass\n\u5728 Node.js \u73af\u5883\u4e2d\u4f7f\u7528 Sass\n\n$ sass source/index.scss build/index.css\n$ sass --watch input.scss output.css\n$ sass --watch app/sass:public/css\n")))),(0,a.kt)("h3",{id:"\u5d4c\u5957nesting"},"\u5d4c\u5957(Nesting)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  nav {\n    ul {\n      padding: 0;\n      list-style: none;\n    }\n    li { display: inline-block; }\n    a {\n      display: block;\n    }\n  }\n  \u7f16\u8bd1 css \u4e3a\uff1a\n\n  nav ul {\n    padding: 0;\n    list-style: none;\n  }\n  nav li {\n    display: inline-block;\n  }\n  nav a {\n    display: block;\n  }\n")),(0,a.kt)("h3",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  $defaultLinkColor: #46EAC2;\n  a {\n    color: $defaultLinkColor;\n  }\n")),(0,a.kt)("h3",{id:"\u5b57\u7b26\u4e32\u63d2\u503c"},"\u5b57\u7b26\u4e32\u63d2\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  $wk: -webkit-;\n  .rounded-box {\n    #{$wk}border-radius: 4px;\n  }\n")),(0,a.kt)("h3",{id:"\u6ce8\u91ca"},"\u6ce8\u91ca"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  /*\n  \u8fd9\u662f\u591a\u884c\u6ce8\u91ca\n  \u5757\u6ce8\u91ca\n  \u5757\u6ce8\u91ca\n  */\n  // \u8fd9\u662f\u4e00\u6761\u5355\u884c\u6ce8\u91ca\n")),(0,a.kt)("h3",{id:"extend"},"Extend"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  .button {\n    \xb7\xb7\xb7\n  }\n  .push-button {\n    @extend .button;\n  }\n")),(0,a.kt)("h3",{id:"\u6a21\u5757\u7247\u6bb5"},"\u6a21\u5757\uff08\u7247\u6bb5\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  // _base.scss\n  $font-stack:    Helvetica, sans-serif;\n  $primary-color: #333;\n  \u6ce8\u610f\u4ee5\u4e0b\u5212\u7ebf\u5f00\u5934\u7684 Sass \u6587\u4ef6\n\n  // styles.scss\n  @use 'base';\n\n  .inverse {\n    background-color: base.$primary-color;\n    color: white;\n  }\n  \u7f16\u8bd1 css \u4e3a\uff1a\n\n  .inverse {\n    background-color: #333;\n    color: white;\n  }\n")),(0,a.kt)("h3",{id:"\u6df7\u5408mixins"},"\u6df7\u5408(Mixins)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  @mixin heading-font {\n      font-family: sans-serif;\n      font-weight: bold;\n  }\n  h1 {\n      @include heading-font;\n  }\n")),(0,a.kt)("h3",{id:"import"},"@import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  @import './other_sass_file';\n  @import '/code', 'lists';\n  // \u7eaf CSS @imports\n  @import \"theme.css\";\n  @import url(theme);\n")),(0,a.kt)("h2",{id:"sass-\u6df7\u5408mixins"},"Sass \u6df7\u5408(Mixins)"),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  @mixin font-size($n) {\n    font-size: $n * 1.2em;\n  }\n  body {\n    @include font-size(2);\n  }\n")),(0,a.kt)("h3",{id:"\u9ed8\u8ba4\u503c"},"\u9ed8\u8ba4\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  @mixin pad($n: 10px) {\n      padding: $n;\n  }\n  body {\n      @include pad(15px);\n  }\n")),(0,a.kt)("h3",{id:"\u9ed8\u8ba4\u53d8\u91cf"},"\u9ed8\u8ba4\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  $default-padding: 10px;\n  @mixin pad($n: $default-padding) {\n    padding: $n;\n  }\n  body {\n    @include pad(15px);\n  }\n")),(0,a.kt)("h2",{id:"sass-\u989c\u8272\u51fd\u6570"},"Sass \u989c\u8272\u51fd\u6570"),(0,a.kt)("h4",{id:"rgba"},"rgba"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  rgb(100, 120, 140)\n  rgba(100, 120, 140, .5)\n  rgba($color, .5)\n")),(0,a.kt)("h4",{id:"mixing"},"Mixing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  mix($a, $b, 10%)   // 10% a, 90% b\n")),(0,a.kt)("h4",{id:"\u4fee\u6539-hsla"},"\u4fee\u6539 HSLA"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  darken($color, 5%)\n  lighten($color, 5%)\n  saturate($color, 5%)\n  desaturate($color, 5%)\n  grayscale($color)\n  adjust-hue($color, 15deg)\n  complement($color)    // like adjust-hue(_, 180deg)\n  invert($color)\n  fade-in($color, .5)   // aka opacify()\n  fade-out($color, .5)  // aka transparentize()\n  rgba($color, .5)      // sets alpha to .5\n  \n")),(0,a.kt)("h4",{id:"\u83b7\u53d6\u503c"},"\u83b7\u53d6\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"          HSLA\n  hue($color)         // 0deg..360deg\n  saturation($color)  // 0%..100%\n  lightness($color)   // 0%..100%\n  alpha($color)       // 0..1 (aka opacity())\n\n          RGB\n\n  red($color)         // 0..255\n  green($color)\n  blue($color)\n  color.red()   \u7528\u4e8e\u83b7\u53d6\u989c\u8272\u7684\u7ea2\u8272\u901a\u9053\n  color.green() \u7528\u4e8e\u83b7\u5f97\u989c\u8272\u7684\u7eff\u8272\u901a\u9053\n  color.blue()  \u7528\u4e8e\u83b7\u53d6\u989c\u8272\u7684\u84dd\u8272\u901a\u9053\n  color.hue()   \u4ee5\u83b7\u5f97\u989c\u8272\u7684\u8272\u8c03\n  color.saturation()    \u7528\u4e8e\u83b7\u5f97\u989c\u8272\u7684\u9971\u548c\u5ea6\n  color.lightness() \u4ee5\u83b7\u5f97\u989c\u8272\u7684\u4eae\u5ea6\n")),(0,a.kt)("h4",{id:"sass-\u5185\u7f6e\u4e86\u5bf9\u989c\u8272\u503c\u7684\u652f\u6301"},"Sass \u5185\u7f6e\u4e86\u5bf9\u989c\u8272\u503c\u7684\u652f\u6301"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  @debug rgb(204, 102, 153);  // #c69\n  @debug rgba(107, 113, 127, 0.8); // rgba(107, 113, 127, 0.8)\n  @debug hsl(228, 7%, 86%);        // #dadbdf\n  @debug hsla(20, 20%, 85%, 0.7);  // rgb(225, 215, 210, 0.7)\n")),(0,a.kt)("h4",{id:"\u8c03\u6574"},"\u8c03\u6574"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  // \u56fa\u5b9a\u91d1\u989d\u53d8\u52a8\n  adjust-color($color, $blue: 5)\n  adjust-color($color, $lightness: -30%) // darken(_, 30%)\n  adjust-color($color, $alpha: -0.4)     // fade-out(_, .4)\n  adjust-color($color, $hue: 30deg)      // adjust-hue(_, 15deg)\n  // \u901a\u8fc7\u767e\u5206\u6bd4\u53d8\u5316\n  scale-color($color, $lightness: 50%)\n  // \u5b8c\u5168\u6539\u53d8\u4e00\u4e2a\u5c5e\u6027\n  change-color($color, $hue: 180deg)\n  change-color($color, $blue: 250)\n")))}p.isMDXComponent=!0}}]);