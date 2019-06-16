<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .area-1{
    width: 100%;
    height: px2rem(418);
    background-image: url("../images/img1.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .wrapper{
      padding: px2rem(96) px2rem(40) 0;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-start;
      .portrait-box{
        width: px2rem(153);
        height: px2rem(153);
        border-radius: 50%;
        overflow: hidden;
        margin-right: px2rem(20);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .name{
        font-size: px2rem(38);
        color: #fff;
      }
    }
  }
  .area-2{
    .wrapper{
      padding: 0 px2rem(38);
      height: px2rem(98);
      line-height: px2rem(98);
      background: #fff;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      .left-box{
        width: 80%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        img{
          width: px2rem(38);
          height: px2rem(38);
          margin-right: px2rem(27);
        }
        .name{
          font-size: px2rem(30);
        }
      }
      .right-box{
        width: px2rem(13);
        height: px2rem(24);
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
<template>
  <div class="myCenter-container">
    <div class="area-1">
      <div class="wrapper">
        <div class="portrait-box">
          <img src="../images/icon2.png" alt="">
        </div>
        <div class="name">
          name
        </div>
      </div>
    </div>
    <div class="area-2">
      <div class="wrapper">
        <div class="left-box">
          <img src="../images/icon4.png" alt="">
          <div class="name">我的仓库</div>
        </div>
        <div class="right-box">
          <img src="../images/icon7.png" alt="">
        </div>
      </div>
      <div class="wrapper">
        <div class="left-box">
          <img src="../images/icon5.png" alt="">
          <div class="name">我的消息</div>
        </div>
        <div class="right-box">
          <img src="../images/icon7.png" alt="">
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
    }
  },
  mounted () {
    // this.test()
  },
  watch: {
  }
}
</script>