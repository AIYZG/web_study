## Vue相关知识
### Vue生命周期
#### vue实例生命周期

vue实例从创建到销毁的过程，一般分为四个过程：

1.创建Vue实例：初始化data、加载el；

2.数据挂载：将vue实例data中的数据渲染到网页HTML标签；

3.重新渲染：当vue的data数据发生变化，会重新渲染到HTML标签;

4.销毁实例。

### 钩子函数

beforeCreate () {} 创建实例以前, 此时的 DOM 还是语法, data 内的数据还没有;

created () {} 创建实例以后, 此时 DOM 还是语法, data 内已经有数据了;

beforeMount () {} 挂载以前, 渲染页面以前, 此时 DOM 还是语法, data 内已经有数据了;

mounted () {} 挂载以后, 渲染页面以后, 此时 DOM 正常了, data 内的数据正常;

beforeUpdate () {} 更新以前, 该组件内容修改之前, data 内的数据是修改前的数据;

undated () {} 更新以后, 该组件内容修改之后, data 内的数据就是修改后的数据;

beforeDestroy () {} 销毁前, 当你需要销毁该组件的时候, 销毁之前使用;

destroyed () {} 销毁后, 组件完全销毁完毕。


<img width="361" alt="image" src="https://user-images.githubusercontent.com/77945453/178386722-89001486-6f8a-4aa8-8436-f6479c38a9b5.png">

### Vue项目结构

##### build：项目构建(webpack)相关代码
##### config：配置目录，包括端口号等。我们初学可以使用默认的。
##### node_modules：npm 加载的项目依赖模块
##### src：这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：
  assets: 放置一些图片，如logo等。

  components: 目录里面放了一个组件文件，可以不用。

  App.vue: 项目入口文件，我们可以直接将组件写这里，而不使用 components 目录。

  main.js: 项目的核心文件。

  index.css: 样式文件。

##### static：静态资源目录，如图片、字体等。	
##### public：公共资源目录。
##### test：初始测试目录，可删除
##### .xxxx文件：这些是一些配置文件，包括语法配置，git配置等。
##### index.html：首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
##### package.json：项目配置文件。
##### README.md：项目的说明文档，markdown 格式

