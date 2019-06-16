<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
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
        transform: rotate(180deg) 
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
          border-bottom: 1px solid #ececec;
          .btn{
            width: px2rem(59);
            height: px2rem(59);
            img{
              width: 100%;
              height: 100%;
            }
          }
          .des{
            font-size: px2rem(22);
            line-height: px2rem(36);
            color: #9c9c9c;
          }
          .van-card{
            background-color: #fff;
          }
        }
    }
  }
</style>
<template>
  <div class="myInfo-container">
    <div class="area-1">
      <div class="icon-box">
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
              <van-card
                price="2.00"
                title="PZAAO 中空缎面款色休闲短袖PZAAO 中空缎面款色休闲短袖PZAAO 中空缎面款色休闲短袖PZAAO 中空缎面款色休闲短袖"
                :thumb="images[0]"
                origin-price="10.00"
              >
                <div class="des" slot="bottom">
                  已售1389/剩2000
                </div>
              </van-card>
            </div>
          </div>
        </van-tab>
        <van-tab title="标签 2">
          <div class="time-select-box">{{time?time:'选择时间'}}<span></span></div>
          <div>
            <div class="time-box">2019-06-16</div>
            <div class="goodsList">
              <div class="wrapper">
                <van-card
                  price="2.00"
                  title="PZAAO 中空缎面款色休闲短袖PZAAO 中空缎面款色休闲短袖PZAAO 中空缎面款色休闲短袖PZAAO 中空缎面款色休闲短袖"
                  :thumb="images[0]"
                  origin-price="10.00"
                >
                  <div class="des" slot="bottom">
                    已售1389/剩2000
                  </div>
                </van-card>
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
    timeConfirm(value) {
      console.log(value)
      var month = value.getMonth() + 1
      var strDate = value.getDate()
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.time = value.getFullYear() + '-' + month + '-' + strDate
      this.showPop = false
    }
  },
  mounted () {
    // this.test()
  },
  watch: {
  }
}
</script>

