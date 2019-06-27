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
router.beforeEach((to, from, next) => {
  if (!/micromessenger/i.test(navigator.userAgent)) {
    next()
    return
  }
  // 不要对 WxAuth 路由进行拦截，不进入 WxAuth 路由就拿不到微信返回的授权 code
  if (to.name === 'WxAuth') {
    next()
    return
  }
  let wxUserInfo = localStorage.getItem('wxUserInfo')
  if (!wxUserInfo) {
    // 保存当前路由地址，授权后还会跳到此地址
    sessionStorage.setItem('wxRedirectUrl', to.fullPath)
    // 请求微信授权,并跳转到 /WxAuth 路由
    let appId = 'wx2690a3570f2c3151'
    let redirectUrl = encodeURIComponent('http://huoyuancheng.wurenyulecang.com/#/WxAuth')
    // 判断是否为正式环境
    if (window.location.origin.indexOf('http://huoyuancheng.wurenyulecang.com') !== -1) {
      appId = 'wx2690a3570f2c3151'
      redirectUrl = encodeURIComponent('http://huoyuancheng.wurenyulecang.com/#/WxAuth')
    }
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  } else {
    next()
  }
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
