---
title: 建议
sidebar: false
---
## 一、框架

### 1、标准vue工程的配置

### 2、element-ui、cheers-ui优雅的按需引入

### 3、引入的包越来越多如何优化main.js入口文件

### 4、路由(router)的配置及正确使用方式（前端路由守卫，及动态路由，按钮跳转路由的权限灵活配置）

### 5、状态管理(vuex)的优雅的使用方式之多模块自动导入及协同开发namespace的作用

### 6、用户交互反馈（面包屑导航、路由动画，表格自适应，新标签页打开，及单页应用keep-alive的使用）

### 7、用户交互反馈之请求防止重复提交

### 8、换肤、布局、放大缩小，富文本等相关功能

### 9、websocket类的封装使用及不使用心跳链接的问题

## 二、优雅的使用vue

### 1、页面有多个v-for，key不能同为index，key应确保唯一性

### 2、v-for不要和v-if一起使用,v-for的优先级比v-if高，所以在进行列表展示的时候有些值不需要展示但是v-for已经把所有的都循环了一遍了,对于不想使用的属性可以使用计算属性先过滤一遍，提高性能。

### 3、Props 定义应该尽量详细，至少要有type和default和注释

```
detailTelId: {
	type: String,
	default: ""
}
```

### 4、使用定时器setInterval、延时函数setTimeout、事件监听一定要在beforeDestroy里面释放
```
setTimeout(()=> { ... }); 等价于window.setTimeout(() => { ... });
```
### 5、方法名加f_开头，后面遵循驼峰命名，一个方法只做一件事情，不要写一坨一坨的长长的方法，学会拆分方法

### 6、Vue方法书写顺序

```
components
props
data
computed
watch
created
mounted
beforeDestroy
methods 
filter
```

### 7、使用watch来简化你的代码 immediate:true

### 8、在这个es11都出来的时候，多使用es6，es7的语法糖吧

```
使用async await（es7）的方式去使用promise
Vuex使用map方式引入并使用
Eg：...mapActions(["getDesignFollowUpUnionPage"])

三目运算符去简化代码
使用&&符号去替换if
多使用对象的思想去操作变量
```

### 9、Object.freeze()去冻结表格数据和下拉框数据

```
对于data或vuex里使用freeze冻结了的对象，vue不会做getter和setter的转换。
如果有一个巨大的数组或Object，并且确信数据不会修改，使用Object.freeze()可以让性能大幅提升
并且，Object.freeze()冻结的是值，仍然可以将变量的引用替换掉
```

### 10、前端缓存统一使用LocalStroage

## 三、前端组件化(封装的目的就是要简化，能少写一行就少写一行，干掉重复代码)

### 1、cheers-ui的使用

```
文档地址：https://pangwenbo.github.io/cheers-ui/
github地址：https://github.com/pangwenbo/cheers-ui
npm地址：https://www.npmjs.com/package/cheers-ui
```

### 2、工作效率的提升

### 3、页面代码可读性，可维护性

### 4、mixins混入的使用