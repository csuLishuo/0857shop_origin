<style lang="scss">
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .home-container{
    padding-bottom: px2rem(50);
    .banner{
      width: 100%;
      height: px2rem(268);
      background: #fff;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .van-swipe-item{
      height: px2rem(268) !important;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .search-box{
      background: #fff;
      padding: px2rem(10) px2rem(30);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .input-box{
        background: #eee;
        border-radius: px2rem(29);
        padding-left: px2rem(50);
        height: px2rem(58);
        width: 90%;
        position: relative;
        overflow: hidden;
        img{
          width: px2rem(25);
          height: px2rem(25);
          position: absolute;
          left: px2rem(16);
          top: px2rem(17);
        }
        input{
          width: 100%;
          line-height: px2rem(58);
          font-size: px2rem(25);
          background: transparent;
        }
      }
      .btn{
        font-size: px2rem(26);
        color: #666;
      }
    }
    .fixed-box{
      z-index: 100;
      position: fixed;
      top: 50%;
      right: px2rem(30);
      width: px2rem(77);
      height: px2rem(164);
      background-color: #282a2e;
      border-radius: px2rem(39);
      opacity: 0.7;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-around;
      .wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        width: px2rem(43);
        height: 50%;
        .img-box{
          width: px2rem(43);
          height: px2rem(39);
          img{
            width: 100%;
            height: 100%;
          }
        }
        &.wrapper-1{
          .img-box{
            position: relative;
          }
          span{
            position: absolute;
            top: px2rem(-10);
            right: px2rem(-10);
            height: px2rem(30);
            line-height: px2rem(30);
            border-radius: px2rem(15);
            min-width: px2rem(30);
            color: #fff;
            text-align: center;
            background: #ff0000;
            font-size: px2rem(24)
          }
        }
        &.wrapper-2{
          .img-box{
            width: px2rem(31);
            height: px2rem(34);
          }
          border-top: px2rem(1) solid rgba(255,255,255,0.3);
        }
      }
    }
    .area-3{
      background: #fff;
      .scroll-box{
        height: px2rem(88);
        padding-left: px2rem(30);
        display: -webkit-box;
        overflow-x: scroll;
        -webkit-overflow-scrolling:touch;
        width: 100%;
        border-bottom: 1px solid #ececec;
        .item{
          font-size: px2rem(28);
          line-height: px2rem(88);
          color: #666;
          margin-right: px2rem(30);
          position: relative;
          &.on{
            color: #000000;
            font-weight: bold;
          }
        }
      }
      .listbox{
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
          /*.van-card{
            background-color: #fff;
          }
          .tags{
            span{
              display: inline-block;
              height: px2rem(30);
              line-height: px2rem(30);
              border: 1px solid #ff981e;
              text-align: center;
              padding: 0 px2rem(10);
              font-size: px2rem(20);
              color: #ff981e;
              border-radius: px2rem(10);
              margin-right: px2rem(20);
            }
          }*/
        }
      }
    }
  }
</style>

<template>
  <div class="home-container">
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerData" :key="index">
          <img :src="filePath + item.bannerPic" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="search-box">
      <div class="input-box">
        <img src="../images/icon6.png" alt="">
        <input type="text" v-model="sendData.title">
      </div>
      <div class="btn" @click="search">搜索</div>
    </div>
    <!--我的仓库，回到顶部-->
    <!--<div class="fixed-box">
      <div class="wrapper wrapper-1">
        <div class="img-box">
          <img src="../images/icon8.png" alt="">
          <span>1</span>
        </div>
      </div>
      <div class="wrapper wrapper-2">
        <div class="img-box">
          <img src="../images/icon9.png" alt="">
        </div>
      </div>
    </div>-->
    <div class="area-3">
      <div class="scroll-box">
        <div class="item" :class="{'on':sendData.categoryId == 0}" @click="changeCate(0)">
          热门
        </div>
        <div class="item" :class="{'on':sendData.categoryId == item.id}" v-for="item in categoryList" :key="item.id" @click="changeCate(item.id)">
          {{item.chname}}
        </div>
      </div>
      <div class="listbox">
        <van-list
          v-model="loadingList"
          :finished="finished"
          :immediate-check="false"
          finished-text="没有更多了"
          @load="getOneMorePage"
        >
          <div class="wrapper" v-for="item in goodsList" :key="item.id" @click="goDetail(item)">
            <div class="img-box"><img :src="filePath + item.pics.split(';')[0]" alt=""></div>
            <div class="right-box">
              <div class="title ellipsis-2">【{{item.title}}】{{item.subTitle}}</div>
              <div class="des"></div>
              <div class="price">￥<span>{{item.nowPrice}}</span></div>
              <div class="info-bottom">已售{{item.totalSales}}/剩{{JSON.parse(item.attrs)[0].stock}}</div>
              <div class="btn"><img src="../images/icon3.png" alt=""></div>
              <div class="border"></div>
            </div>
          </div>
        </van-list>
      </div>
    </div>
    <tabbar :activeIndex="0"></tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant'
import tabbar from '../components/tabbar'

export default {
  name: 'home',
  components: {
    tabbar
  },
  data () {
    return {
      images: [
        require('../images/icon1.png'),
        require('../images/icon1_on.png'),
        require('../images/icon2.png')
      ],
      categoryList: [],
      goodsList: [],
      filePath: '',
      total: '',
      sendData: {
        categoryId: 0,
        title: '',
        pageNumber: 1,
        pageSize: 5
      },
      loadingList: false,
      finished: false,
      bannerData: []
    }
  },
  methods: {
    changeCate (id) {
      this.sendData.pageNumber = 1
      this.finished = false
      this.goodsList = []
      this.sendData.categoryId = id
      this.getGoodsList()
    },
    search () {
      this.finished = false
      this.sendData.pageNumber = 1
      this.goodsList = []
      this.getGoodsList()
    },
    getBannerList () {
      this.$post('/api/banner/getBannerListByBannerType', {
        bannerType: 1
      }).then(res => {
        if (res.result === 0) {
          this.bannerData = res.data
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    },
    getOneMorePage () {
      setTimeout(() => {
        this.sendData.pageNumber++
        this.getGoodsList()
      }, 500)
    },
    addToWarehouse (id) {
      this.$post('/api/goods/insertGoodsPoxy', {
        goodsId: id
      }).then(res => {
        if (res.result === 0) {
          Toast.success(res.message)
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    },
    getGoodsCategory () {
      this.$post('/api/goods/getGoodsCategoryByLevel', {
        level: 1
      }).then(res => {
        if (res.result === 0) {
          this.categoryList = res.data
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    },
    getGoodsList () {
      this.$post('/api/goods/getGoodsListByCategoryId', this.sendData).then(res => {
        if (res.result === 0) {
          if (this.sendData.pageNumber === 1) {
            this.goodsList = res.data.list
          } else {
            this.goodsList = this.goodsList.concat(res.data.list)
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
    goDetail (item) {
      this.$router.push({
        name: 'detailPage',
        params: {
          item: JSON.stringify(item),
          filePath: this.filePath
        }
      })
    },
    init () {
      this.getBannerList()
      this.getGoodsCategory()
      this.getGoodsList()
    }
  },
  mounted () {
    this.init()
    if (!sessionStorage.getItem('authStatus')) {
      location.href = 'http://huoyuancheng.wurenyulecang.com/api/user/authorize?returnUrl=' + encodeURI('http://huoyuancheng.wurenyulecang.com:10101/#/home')
    }
  },
  watch: {
  }
}
</script>
