<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
</style>
<template>
  <div></div>
</template>
<script>
import { Toast } from 'vant'
function getCode (code) {
  var locations = location + ""
  // if (locations.indexOf('/?#/') > 0) {//处理在支付页面授权时，获取code失败
  // locations = locations.replace('/?#/', '/#/')
  // }
  if (locations.indexOf("?") == -1) {
    return "";
  }
  var params = locations.split("?");
  var queryArr = params[1].split("&");
  var queryMap = {};
  for (var index in queryArr) {
    var k = queryArr[index].split("=")[0];
    var v = queryArr[index].split("=")[1];
    queryMap[k] = v;
  }

  return queryMap[code];
}
export default {
  name: 'WxAuth',

  async created () {
    // 如果连接中有微信返回的 code，则用此 code 调用后端接口，向微信服务器请求用户信息
    // 如果不是从微信重定向过来的，没有带着微信的 code，则直接进入首页
    if (this.$route.query.code) {
      this.$post('/api/user/userInfo', {
        code: this.$route.query.code
      }).then(res => {
        if (res.result === 0) {
          localStorage.setItem('wxUserInfo', JSON.stringify(res.data))
          let redirectUrl = sessionStorage.getItem('wxRedirectUrl')
          this.$router.replace(redirectUrl)
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    } else {
      this.$router.replace('/login')
    }
  }
}
</script>
