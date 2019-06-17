<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .myWarehouse-container{
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
    .tabs{
      .time-box{
        background: #f6f6f6;
        line-height: px2rem(82);
        font-size: px2rem(26);
        padding-left: px2rem(40);
      }
      .time-select-box{
        background: #f2f2f2;
        line-height: px2rem(82);
        font-size: px2rem(26);
        color: #707070;
        text-align: center;
      }
      .goodsList{
        .wrapper{
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          height: px2rem(259);
          background: #fff;
          .img-box{
            width: px2rem(295);
            height: px2rem(259);
            img{
              width: 100%;
              height: 100%;
            }
          }
          .right-box{
            width: px2rem(430);
            height: px2rem(259);
            position: relative;
            .title{
              font-size: px2rem(28);
              width: px2rem(390);
              line-height: px2rem(38);
              margin-top: px2rem(16);
              color: #393939;
            }
            .price{
              color: #ff6c00;
              font-size: px2rem(24);
              font-weight: bold;
              margin-top: px2rem(50);
              span{
                font-size: px2rem(34);
                vertical-align: bottom;
              }
            }
            .btn{
              width: px2rem(59);
              height: px2rem(59);
              position: absolute;
              bottom: px2rem(54);
              right: px2rem(24);
              img{
                width: 100%;
                height: 100%;
              }
            }
            .info-bottom{
              font-size: px2rem(22);
              line-height: px2rem(36);
              color: #9c9c9c;
            }
            .border{
              position: absolute;
              bottom: 0;
              width: 100%;
              border-bottom: 1px solid #ececec;
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div class="myWarehouse-container">
    <div class="area-1">
      <div class="icon-box" @click="goBack">
        <img src="../images/icon7.png" alt="">
      </div>
      <div class="title">我的仓库</div>
    </div>
    <div class="tabs">
      <van-tabs v-model="active">
        <van-tab title="标签 1">
          <div class="time-box">2019-06-16</div>
          <div class="goodsList">
            <div class="wrapper">
              <div class="img-box"><img src="../images/icon3.png" alt=""></div>
              <div class="right-box">
                <div class="title ellipsis-2">【立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g</div>
                <div class="des"></div>
                <div class="price">￥<span>599.00</span></div>
                <div class="info-bottom">已售1389/剩2000</div>
                <div class="border"></div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="标签 2">
          <div class="time-select-box">{{time?time:'选择时间'}}<span></span></div>
          <div>
            <div class="time-box">2019-06-16</div>
            <div class="goodsList">
              <div class="wrapper">
                <div class="img-box"><img src="../images/icon3.png" alt=""></div>
                <div class="right-box">
                  <div class="title ellipsis-2">【立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g立体小脸妆出来】RIRE双头阴影高光修容棒3g+3g</div>
                  <div class="des"></div>
                  <div class="price">￥<span>599.00</span></div>
                  <div class="info-bottom">已售1389/剩2000</div>
                  <div class="border"></div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-popup v-model="showPop" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :max-date="currentDate"
        @confirm="timeConfirm"
      />
    </van-popup>
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
      active: 1,
      images: [
        require('../images/icon1.png'),
        require('../images/icon1_on.png'),
        require('../images/icon2.png')
      ],
      showPop: true,
      currentDate: new Date(),
      time: ''
    }
  },
  methods: {
    test () {
      Toast.loading({
        mask: true,
        message: '加载中...'
      })
    },
    timeConfirm (value) {
      console.log(value)
      var month = value.getMonth() + 1
      var strDate = value.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      this.time = value.getFullYear() + '-' + month + '-' + strDate
      this.showPop = false
    },
    goBack () {
      this.$router.back(-1)
    }
  },
  mounted () {
    // this.test()
  },
  created () {
  },
  watch: {
  }
}
</script>
