<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  img,input{
    vertical-align: middle;
    display: block;
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
    .area-3{
      background: #fff;
      .scroll-box{
        height: px2rem(88);
        padding-left: px2rem(30);
        display: -webkit-box;
        overflow-x: scroll;
        -webkit-overflow-scrolling:touch;
        width: 100%;
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
