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
        /*line-height: px2rem(82);*/
        height: px2rem(82);
        font-size: px2rem(26);
        color: #707070;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
          display: inline-block;
          width: px2rem(14);
          height: px2rem(9);
          margin-left: px2rem(20);
          img{
            width: 100%;
            height: 100%;
          }
        }
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
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              max-width: 100%;
              max-height: 100%;
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
        .del-good {
          width: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #ff0000;
          color: #ffffff;
          font-size: px2rem(28);
          height: 100%;
          img{
            width: px2rem(39);
            height: px2rem(41);
            margin-top: px2rem(22);
          }
        }
      }
      .noData{
        font-size: px2rem(32);
        color: #666;
        text-align: center;
        margin-top: px2rem(50);
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
      <van-tabs v-model="active" @click="changeTab">
        <van-tab title="新进仓库">
          <div class="time-box">{{sendData.dateTime}}</div>
        </van-tab>
        <van-tab title="历史货物">
          <div class="time-select-box" @click="showPopFun">{{sendData.dateTime?sendData.dateTime:'选择时间'}}<span><img src="../images/icon11.png" alt=""></span></div>
          <div>
            <div class="time-box">{{sendData.dateTime}}</div>
          </div>
        </van-tab>
      </van-tabs>
      <div class="goodsList" v-if="goodsList.length>0">
        <van-list
          v-model="loadingList"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="getOneMorePage"
        >
          <div v-for="(item, index) in goodsList" :key="item.id">
            <van-swipe-cell
              :right-width="70"
            >
              <div class="wrapper">
                <div class="img-box"><img :src="filePath + item.pics.split(';')[0]" alt=""></div>
                <div class="right-box">
                  <div class="title ellipsis-2">【{{item.title}}】{{item.subTitle}}</div>
                  <div class="des"></div>
                  <div class="price">￥<span>{{item.nowPrice}}</span></div>
                  <div class="info-bottom">已售{{item.totalSales}}/剩{{JSON.parse(item.attrs)[0].stock}}</div>
                  <div class="border"></div>
                </div>
              </div>
              <div slot="right" class="del-good" @click="delGood(item.id, index)">
                <span>删除</span>
                <img src="../images/icon01.png">
              </div>
            </van-swipe-cell>
          </div>
        </van-list>
      </div>
      <div class="noData" v-if="goodsList.length==0">暂无数据</div>
    </div>
    <van-popup v-model="showPop" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :max-date="maxData"
        @confirm="timeConfirm"
      />
    </van-popup>
  </div>
</template>
<script>
import { Toast } from 'vant'

export default {
  name: 'myWarehouse',
  components: {
  },
  data () {
    return {
      active: 0,
      images: [
        require('../images/icon1.png'),
        require('../images/icon1_on.png'),
        require('../images/icon2.png')
      ],
      showPop: false,
      maxData: new Date(),
      currentDate: new Date(),
      time: '',
      nowTime: '',
      sendData: {
        pageNumber: 1,
        pageSize: 10,
        dateTime: ''
        // dateTime: '2019-06-25'
      },
      filePath: '',
      goodsList: [],
      loadingList: false,
      finished: false
    }
  },
  methods: {
    changeTab (index) {
      if (index === 0) {
        this.init()
      } else {
        this.sendData.dateTime = ''
        this.getGoodsList()
      }
    },
    getOneMorePage () {
      setTimeout(() => {
        this.sendData.pageNumber++
        this.getGoodsList()
      }, 500)
    },
    test () {
      Toast.loading({
        mask: true,
        message: '加载中...'
      })
    },
    removeArrayItem (arr, i) {
      if (isNaN(i) || i > arr.length) {
        return false
      }
      for (var m = 0, n = 0; m < arr.length; m++) {
        if (arr[m] !== arr[i]) {
          arr[n++] = arr[m]
        }
      }
      arr.length -= 1
    },
    delGood (id, index) {
      this.$post('/api/goods/delGoodsPoxy', {
        id: id
      }).then(res => {
        if (res.result === 0) {
          Toast.success(res.message)
          this.goodsList.splice(index, 1)
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    },
    getGoodsList () {
      this.$post('/api/goods/getGoodsPoxyList', this.sendData).then(res => {
        if (res.result === 0) {
          if (this.sendData.pageNumber === 1) {
            this.goodsList = res.data.list
          } else {
            this.goodsList.push(res.data.list)
          }
          this.filePath = res.filePath
          this.total = res.data.totalCount
          // 加载状态结束
          this.loadingList = false
          // 数据全部加载完成
          if (this.goodsList.length >= Number(this.total)) {
            this.finished = true
          }
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
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
      this.sendData.dateTime = this.time
      this.getGoodsList()
      this.showPop = false
    },
    getNowTime () {
      let now = new Date()
      var month = now.getMonth() + 1
      var strDate = now.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      this.sendData.dateTime = now.getFullYear() + '-' + month + '-' + strDate
    },
    goBack () {
      this.$router.back(-1)
    },
    showPopFun () {
      this.showPop = true
    },
    init () {
      this.getNowTime()
      this.getGoodsList()
    }
  },
  mounted () {
    // this.test()
  },
  created () {
    this.init()
  },
  watch: {
  }
}
</script>
