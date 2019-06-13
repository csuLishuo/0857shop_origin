import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import MyCenter from '@/pages/myCenter'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: false,
      isBack: false
    }
  }, {
    path: '/myCenter',
    name: 'myCenter',
    component: MyCenter,
    meta: {
      keepAlive: false,
      isBack: false
    }
  }]
})
