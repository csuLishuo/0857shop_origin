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
    .topBar{
      background: #ff3e31;
      height: px2rem(94);
      padding: px2rem(18) 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      .scan{
        width: px2rem(37);
        height: px2rem(36);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .input-box{
        background: #fff;
        border-radius: px2rem(10);
        padding-left: px2rem(50);
        height: px2rem(58);
        width: px2rem(564);
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
        }
      }
      .info{
        position: relative;
        width: px2rem(37);
        height: px2rem(35);
        img{
          width: 100%;
          height: 100%;
        }
        span{
          position: absolute;
          height: px2rem(26);
          line-height: px2rem(26);
          font-size: px2rem(20);
          color: #ff0d00;
          background: #fff;
          padding: 0 px2rem(10);
          top: 0;
          right: 0;
          margin-top: px2rem(-13);
          margin-right: px2rem(-13);
          border-radius: px2rem(26);
        }
      }
    }
    .banner{
      .van-swipe-item{
        height: px2rem(278) !important;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .links{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      background: #fff;
      .wrapper{
        margin: px2rem(10) px2rem(40);
        .img-box{
          width: px2rem(79);
          height: px2rem(79);
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text{
          font-size: px2rem(23);
          text-align: center;
        }
      }
    }
    .ad-box{
      width: 100%;
      height: px2rem(234);
      background: #fff;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .area-1{
      background: #fff;
      .title{
        background-image: url("../images/img-1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: px2rem(259);
        height: px2rem(30);
        line-height: px2rem(30);
        font-size: px2rem(32);
        text-align: center;
        margin: px2rem(24) auto;
      }
      .area-1-container{
        padding: 0 px2rem(24) px2rem(17);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: space-between;
        .mask{
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0.4));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .text{
            font-size: px2rem(25);
            line-height: px2rem(50);
            color: #5b5d66;
          }
          .icon-box{
            width: px2rem(30);
            height: px2rem(30);
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .left-box{
          width: px2rem(281);
          height: px2rem(383);
          display: flex;
          align-items: center;
          position: relative;
          img{
            width: 100%;
          }
        }
        .right-box{
          width: px2rem(416);
          height: px2rem(383);
          border-radius: px2rem(5);
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
          .right-box-1{
            position: relative;
            width: 100%;
            height: px2rem(200);
            display: flex;
            align-items: center;
            margin-bottom: px2rem(16);
            border-radius: px2rem(5);
            overflow: hidden;
          }
          .right-box-2{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: flex-start;
            justify-content: space-between;
            .inner{
              position: relative;
              width: px2rem(203);
              height: px2rem(168);
              border-radius: px2rem(5);
              overflow: hidden;
            }
          }
        }
      }
    }
    .area-2{
      background: #fff;
      margin: px2rem(17) px2rem(22);
      border-radius: px2rem(5);
      overflow: hidden;
      .area-2-container{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: space-between;
        .left-box{
          width: px2rem(260);
          height: px2rem(394);
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          align-items: flex-start;
          justify-content: space-around;
          border-right: 1px solid #f0f0f0;
          .img-box{
            width: 100%;
            height: px2rem(152);
            img{
              width: 100%;
              height: 100%;
            }
          }
          .title-box{
            .title{
              font-size: px2rem(28);
              line-height: px2rem(40);
              font-weight: bold;
              padding-left: px2rem(30);
            }
            .des{
              padding-left: px2rem(30);
              font-size: px2rem(26);
              line-height: px2rem(40);
              color: #8e9198;
            }
            .time-box{
              padding-left: px2rem(30);
              margin: px2rem(10) 0;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-items: center;
              justify-content: flex-start;
              span{
                height: px2rem(30);
                background: #ff3e31;
                padding: 0 px2rem(5);
                font-size: px2rem(26);
                color: #fff;
              }
              i{
                font-style:normal;
                color: #ff3e31;
                font-size: px2rem(26);
                font-weight: bold;
                margin: 0 px2rem(5);
              }
            }
          }
        }
        .right-box{
          width: px2rem(446);
          height: px2rem(394);
          .right-box-1{
            border-bottom: 1px solid #f0f0f0;
          }
          .right-box-1,.right-box-2{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: flex-start;
            justify-content: space-between;
            .inner{
              position: relative;
              width: px2rem(223);
              height: px2rem(197);
              .title{
                font-size: px2rem(28);
                font-weight: bold;
                padding-left: px2rem(28);
                line-height: px2rem(84);
                color: #f84f77;
              }
              .img-box{
                width: 100%;
                height: px2rem(113);
                img{
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    .area-3{
      background: #fff;
      .scroll-box{
        height: px2rem(86);
        padding-left: px2rem(30);
        display: -webkit-box;
        overflow-x: scroll;
        -webkit-overflow-scrolling:touch;
        width: 100%;
        .item{
          font-size: px2rem(26);
          line-height: px2rem(86);
          color: #7c7c7c;
          margin-right: px2rem(30);
          position: relative;
          &.on{
            color: #000000;
            span{
              position: absolute;
              bottom: 0;
              left: 50%;
              margin-left: px2rem(-16);
              width: px2rem(32);
              height: px2rem(7);
              border-radius: px2rem(3);
              background-color: #ff3e31;
            }
          }
        }
      }
      .listbox{
        .wrapper{
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
    <div class="topBar">
      <div class="scan"><img src="../images/icon5.png" alt=""></div>
      <div class="input-box">
        <img src="../images/icon6.png" alt="">
        <input type="text"></div>
      <div class="info">
        <img src="../images/icon7.png" alt="">
        <span>1</span>
      </div>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="links">
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon8.png" alt=""></div>
        <div class="text">签到</div>
      </div>
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon9.png" alt=""></div>
        <div class="text">团购</div>
      </div>
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon10.png" alt=""></div>
        <div class="text">秒杀</div>
      </div>
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon11.png" alt=""></div>
        <div class="text">抽奖</div>
      </div>
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon12.png" alt=""></div>
        <div class="text">砍价</div>
      </div>
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon13.png" alt=""></div>
        <div class="text">任务</div>
      </div>
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon14.png" alt=""></div>
        <div class="text">计步</div>
      </div>
      <div class="wrapper">
        <div class="img-box"><img src="../images/icon15.png" alt=""></div>
        <div class="text">更多</div>
      </div>
    </div>
    <div class="ad-box">
      <img src="../images/icon1.png" alt="">
    </div>
    <div class="area-1 clearfix">
      <div class="title">热卖商品</div>
      <div class="area-1-container">
        <div class="left-box">
          <img src="../images/icon1.png" alt="">
        </div>
        <div class="right-box">
          <div class="right-box-1">
            <img src="../images/icon1.png" alt="">
          </div>
          <div class="right-box-2">
            <div class="inner">
              <img src="../images/icon1.png" alt="">
            </div>
            <div class="inner">
              <img src="../images/icon1.png" alt="">
              <div class="mask">
                <div class="text">查看更多</div>
                <div class="icon-box"><img src="../images/icon16.png" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-2 clearfix">
      <div class="area-2-container">
        <div class="left-box">
          <div class="title-box">
            <div class="title">限量秒杀</div>
            <div class="des">3个整点9.9元秒杀</div>
            <div class="time-box">
              <span>05</span>
              <i>:</i>
              <span>05</span>
              <i>:</i>
              <span>05</span>
            </div>
          </div>
          <div class="img-box">
            <img src="../images/icon1.png" alt="">
          </div>
        </div>
        <div class="right-box">
          <div class="right-box-1">
            <div class="inner">
              <div class="title">新品速递</div>
              <div class="img-box">
                <img src="../images/icon1.png" alt="">
              </div>
            </div>
            <div class="inner">
              <div class="title">新品速递</div>
              <div class="img-box">
                <img src="../images/icon1.png" alt="">
              </div>
            </div>
          </div>
          <div class="right-box-2">
            <div class="inner">
              <div class="title">新品速递</div>
              <div class="img-box">
                <img src="../images/icon1.png" alt="">
              </div>
            </div>
            <div class="inner">
              <div class="title">新品速递</div>
              <div class="img-box">
                <img src="../images/icon1.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-3">
      <div class="scroll-box">
        <div class="item on">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
        </div>
        <div class="item">
          热门
          <span></span>
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
            <div slot="tags" class="tags">
              <span>标签</span>
              <span>标签</span>
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
        require('../images/icon2.png'),
        require('../images/icon3.png')
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
