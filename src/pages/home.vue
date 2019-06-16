<style lang="scss" scoped>
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
    .search-box{
        background: #fff;
        padding: px2rem(10) px2rem(30);
      .input-box{
        background: #eee;
        border-radius: px2rem(29);
        padding-left: px2rem(50);
        height: px2rem(58);
        width: 100%;
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
          }
        }
      }
      .listbox{
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
          }
        }
      }
    }
  }
</style>

<template>
  <div class="home-container">
    <div class="banner">
      <img src="../images/icon1.png" alt="">
    </div>
    <div class="search-box">
      <div class="input-box">
        <img src="../images/icon6.png" alt="">
        <input type="text">
      </div>
    </div>
    <div class="fixed-box">
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
    </div>
    <div class="area-3">
      <div class="scroll-box">
        <div class="item on">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
        <div class="item">
          热门
        </div>
      </div>
      <div class="listbox">
        <div class="wrapper">
          <van-card
            price="2.00"
            desc="描述信息"
            title="PZAAO 中空缎面款色休闲短袖PZAAO 中空缎面款色休闲短袖PZAAO 中空缎面款色休闲短袖PZAAO 中空缎面款色休闲短袖"
            :thumb="images[0]"
            origin-price="10.00"
          >
            <div class="btn" slot="num"><img src="../images/icon3.png" alt=""></div>
            <div class="des" slot="bottom">
              已售1389/剩2000
            </div>
          </van-card>
        </div>
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
      ]
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
