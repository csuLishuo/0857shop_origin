import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import MyCenter from '@/pages/myCenter'
import MyInfo from '@/pages/myInfo'
import MyWarehouse from '@/pages/myWarehouse'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: true,
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
  }, {
    path: '/myInfo',
    name: 'myInfo',
    component: MyInfo,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/myWarehouse',
    name: 'myWarehouse',
    component: MyWarehouse,
    meta: {
      keepAlive: true,
      isBack: false
    }
  }]
})
