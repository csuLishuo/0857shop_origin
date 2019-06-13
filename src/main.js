// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import flex from './js/flex/flexible.js'
import _ from 'lodash'
import lf from 'lf'
import store from './vuex/store'

import Cube from 'cube-ui'
import wx from 'weixin-js-sdk'
import Vant from 'vant'
import 'vant/lib/index.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(flex)
Vue.use(Cube)
Vue.use(lf)
Vue.use(wx)
Vue.use(Vant)
Vue.use(ElementUI)
Vue.prototype._ = _
Vue.config.productionTip = false
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  to.meta.keepAlive = true
  // if (!to.meta.isBack) {
  //   to.meta.isBack = true
  // }
  next()
})
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
