# demo
作者:小菜
本项目是防写去哪网app项目，相关像素，内容会有偏差。
项目中主要使用了 ：
1.小图标 ： iconfont，
2.解决300ms延迟 ： fastclick.js 
3.css : stylus.css 
4.数据加载 ：axios  
5.路由 ：vue-router
6.轮播插件 ：vue-awesome-swipe
7.滚动插件 ：better-scroll
8.数据流管理 ：vuex
9.优化 ：异步加载组件（在项目较小的情况下不建议使用）
10.数据存储 ：localstorage
11.数据属于本地json,目录：static/mock

本项目比较基础偏上一点点，功能相对简单，其中有主页，城市页（锚点），列表页，搜索，图集，
所有资源来源于去哪网,侵删!
本项目仅作为个人学习和交流使用。
接下来打算防去哪网app,数据接口在网上爬取。



> A Vue.js project

项目启动：
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

因数据是本地json,我设置的端口号是8080，所以请在8080端口下查看，或者修改config下的index文件中的target
proxyTable: {
    '/api': {  
    //此处是为了后端接口做好后而设置
    target: 'http://localhost:8080', //源地址 
    //changeOrigin: true, //改变源 
    pathRewrite: { 
        '^/api': '/static/mock' //路径重写 
        } 
    } 
},


图示：



![Image text](https://github.com/doucai/qunawang/blob/master/demo/src/assets/img/1.png)

![Image text](https://github.com/doucai/qunawang/blob/master/demo/src/assets/img/2.png)

![Image text](https://github.com/doucai/qunawang/blob/master/demo/src/assets/img/3.png)

![Image text](https://github.com/doucai/qunawang/blob/master/demo/src/assets/img/4.png)

![Image text](https://github.com/doucai/qunawang/blob/master/demo/src/assets/img/5.png)

![Image text](https://github.com/doucai/qunawang/blob/master/demo/src/assets/img/6.png)


