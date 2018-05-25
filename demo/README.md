# demo
作者:小菜
本项目是防写去哪网app项目，相关像素会有偏差。
项目中主要使用了 
iconfont，
fastclick.js 
stylus.css 
axios  
vue-router
vue-awesome-swipe
better-scroll
vuex
异步加载组件

本项目比较基础偏上一点点，功能相对简单，其中有主页，城市页，列表页，搜索，图集，
所有资源来源于去哪网,侵删!
本项目仅作为个人学习



> A Vue.js project

项目启动：
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

因数据是本地json,我设置的端口号是8080，所以请在8080端口下查看，或者修改config下的index文件中的target
proxyTable: {
    '/api': {  
    target: 'http://localhost:8080', //源地址 
    pathRewrite: { 
        '^/api': '/static/mock' //路径重写 
        } 
    } 
},



