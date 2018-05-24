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
    },{
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
