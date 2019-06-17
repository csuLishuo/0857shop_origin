<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myInfo-container{
    .area-1{
      height: px2rem(95);
      line-height: px2rem(95);
      text-align: center;
      position: relative;
      background: #fff;
      .title{
        font-size: px2rem(36);
        color: #010101;
      }
      .icon-box{
        width: px2rem(19);
        height: px2rem(36);
        position: absolute;
        left: px2rem(40);
        top: px2rem(30);
        img{
          width: 100%;
          height: 100%;
          transform: rotate(180deg);
        }
      }
    }
    .area-2{
      margin-top: px2rem(20);
      padding-bottom: px2rem(50);
      .wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        padding: px2rem(23) px2rem(29);
        border-bottom: px2rem(1) solid #f6f6f6;
        background: #fff;
        .img-box{
          width: px2rem(94);
          height: px2rem(94);
          border-radius: 50%;
          overflow: hidden;
          margin-right: px2rem(30);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text-box{
          .title{
            font-size: px2rem(32);
            color: #000;
            line-height: px2rem(50);
          }
          .info{
            width: px2rem(570);
            font-size: px2rem(26);
            line-height: px2rem(32);
            color: #979797;
            margin-top: px2rem(10)
          }
        }
      }
    }
  }
</style>
<template>
  <div class="myInfo-container">
    <div class="area-1">
      <div class="icon-box" @click="goBack">
        <img src="../images/icon7.png" alt="">
      </div>
      <div class="title">我的消息</div>
    </div>
    <div class="area-2">
      <div class="wrapper">
        <div class="img-box">
          <img src="../images/icon10.png" alt="">
        </div>
        <div class="text-box">
          <div class="title">平台通知</div>
          <div class="info ellipsis-2">所有代理在2019年5月30日之前，全部选择30种产品，总平台准备上架新货所有代理在2019年5月30日之前，全部选择30种产品，总平台准备上架新货</div>
        </div>
      </div>
    </div>
    <tabbar :activeIndex="1"></tabbar>
  </div>
</template>
<script>
import { Toast } from 'vant'
import tabbar from '../components/tabbar'

export default {
  name: 'myCenter',
  components: {
    tabbar
  },
  data () {
    return {
    }
  },
  methods: {
    test () {
      Toast.loading({
        mask: true,
        message: '加载中...'
      })
    },
    goBack () {
      this.$router.back(-1)
    }
  },
  mounted () {
    // this.test()
  },
  watch: {
  }
}
</script>
