import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home/Home'
import List from '@/page/list/list'
Vue.use(Router)

export default new Router({
  mode:history,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/List',
      name: 'List',
      component: List
    }
  ]
})
