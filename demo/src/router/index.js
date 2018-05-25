import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home/Home'
import city from '@/page/city/city'
import detail from '@/page/detail/detail'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },{
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ],
  // 每次回到页面的时候保持初始值为X:0,y:0
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}
  }
})
