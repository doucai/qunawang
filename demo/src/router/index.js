import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      // 异步加载组件
      component: ()=>import('@/page/Home/Home')
    },
    {
      path: '/city',
      name: 'city',
      // 异步加载组件
      component: ()=>import('@/page/city/city')
    },{
      path: '/detail/:id',
      name: 'detail',
      // 异步加载组件
      component: ()=>import('@/page/detail/detail')
    }
  ],
  // 每次回到页面的时候保持初始值为X:0,y:0
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}
  }
})
