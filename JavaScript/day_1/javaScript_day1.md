# JavaScript个人学习手册 

## day_1

三种输出方式：
```js
alert('Hello World!');  //警告框

document.write('Hello World!');   //页面输出

console.log('Hello World!');     //控制台
```

简短的javascript语句可以直接写在其关联事件中，如onclick
```js
<button onclick="alert('Hello World')">点击</button>

<a href="javascript:alert('真听话！！！')">点我</a>
```
##### 这种直接将JavaScript语句写在标签属性里的做法，虽然方便，但是他们属于结构与行为耦合，不方便维护，所以一般不推荐使用！！！

#### 引入外部js文件
```js
<script type="text/javascript" src="js/script.js"></script>
```
注：type为 " text/javascript " 时可以不写

script标签一旦用来引用外部js文件后，就不能在内部编写代码，即使写了也会被浏览器忽略，建议另加一个script标签。

#### mousemove与mouseleave

mouseenter、mouseleave 是一对儿，mouseover、mouseout 是一对儿。

##### mouseenter、mouseleave：

mouseenter：光标从元素外部移到元素内部时触发。
mouseleave：光标从元素内部移到元素外部时触发。
这两个事件 a) 不冒泡，b) 光标经过子元素时不触发。

##### mouseover、mouseout：

mouseover：光标从元素外部移到元素内部时触发。
mouseout：光标从元素内部移到元素外部时触发。
这两个事件 a)冒泡，b) 光标经过子元素时也触发。
