<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .login-container{
    min-height: 100%;
    background: #fff;
    .banner{
      width: 100%;
      height: px2rem(497);
      img{
        width: 100%;
        height: 100%;
      }
    }
    .form-box{
      padding: px2rem(20) px2rem(60) 0;
      .line{
        border-bottom: 1px solid #e7e7e7;
        .van-field{
          display: flex;
          align-items: center;
        }
        .icon-box{
          margin-right: px2rem(20);
          img{
            width: 100%;
            height: 100%;
          }
        }
        &.line-1{
          .icon-box{
            width: px2rem(22);
            height: px2rem(34);
          }
        }
        &.line-2{
          .icon-box{
            width: px2rem(26);
            height: px2rem(30);
          }
        }
      }
    }
    .area-1{
      padding: 0 px2rem(60) 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: px2rem(100);
      .text{
        color: #ff5656;
        font-size: px2rem(26);
      }
    }
    .area-2 {
      width: px2rem(630);
      height: px2rem(88);
      line-height: px2rem(88);
      background-color: #ff3f31;
      border-radius: px2rem(44);
      text-align: center;
      color: #fff;
      font-size: px2rem(32);
      font-weight: bold;
      margin-top: px2rem(80);
      margin: px2rem(80) auto;
    }
  }
</style>
<template>
  <div class="login-container">
    <div class="banner">
      <img src="../images/img2.png" alt="">
    </div>
    <div class="form-box">
      <div class="line line-1">
        <van-field
          v-model="username"
          required
          clearable
          placeholder="手机号"
        >
          <div class="icon-box" slot="left-icon"><img src="../images/icon12.png" alt=""></div>
        </van-field>
      </div>
      <div class="line line-2">
        <van-field
          v-model="password"
          type="password"
          placeholder="密码"
          required
        >
          <div class="icon-box" slot="left-icon"><img src="../images/icon13.png" alt=""></div>
        </van-field>
      </div>
    </div>
    <div class="area-1">
      <div class="text" @click="goRegister">新用户注册</div>
    </div>
    <div class="area-2" @click="login">登录</div>
  </div>
</template>
<script>
import { Toast } from 'vant'

export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goRegister () {
      this.$router.push({
        name: 'register'
      })
    },
    login () {
      if (this.username && this.password) {
        this.$post('/api/login/logins', {
          userName: this.username,
          password: this.password
        }).then(res => {
          if (res.result === 0) {
            Toast.success('登录成功')
            this.$router.push({
              name: 'home'
            })
          } else {
            Toast.fail(res.message)
          }
        }).catch(res => {
          Toast.fail('系统内部错误')
        })
      } else {
        Toast.fail('请完善登录信息')
      }
    }
  },
  mounted () {
  },
  created () {
  },
  watch: {
  }
}
</script>
