<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
  .detailPage-container{
    padding-bottom: px2rem(100);
    .van-swipe-item{
      height: px2rem(612) !important;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .price-box{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      height: px2rem(112);
      /*line-height: px2rem(112);*/
      padding: 0 px2rem(20);
      background: #ff3f31;
      .price{
        color: #fff;
        font-size: px2rem(50);
        font-weight: bold;
        display: flex;
        align-items: flex-end;
        span{
          font-size: px2rem(84);
        }
      }
      .info{
        color: #fffefe;
        font-size: px2rem(18);
      }
    }
    .title{
      padding: px2rem(20) px2rem(32);
      font-size: px2rem(32);
      line-height: px2rem(50);
      font-weight: bold;
      background: #fff;
    }
    .area-2{
      margin-top: px2rem(20);
      .area-2-title{
        background: #fff;
        height: px2rem(112);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .border{
          width: px2rem(103);
          border-bottom: 1px solid #eee;
        }
        .name{
          font-size: px2rem(28);
          font-weight: bold;
          margin: 0 px2rem(30);
        }
      }
      .img-box{
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
    .btn-bottom{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: px2rem(100);
      line-height: px2rem(100);
      z-index: 1;
      text-align: center;
      background-image: linear-gradient(-90deg,
        #ff3657 0%,
        #ff7836 100%),
      linear-gradient(
          #ff3f31,
          #ff3f31);
      font-size: px2rem(30);
      color: #fff;
      font-weight: bold;
    }
  }
</style>
<template>
  <div class="detailPage-container">
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in detailData.pics.split(';')" :key="index">
          <img :src="filePath + image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="price-box">
      <div class="price">￥<span>{{detailData.nowPrice}}</span></div>
      <div class="info">已售{{detailData.totalSales}}/剩{{JSON.parse(detailData.attrs)[0].stock}}</div>
    </div>
    <div class="title ellipsis-2">【{{detailData.title}}】{{detailData.subtitle}}</div>
    <div class="area-2">
      <div class="area-2-title">
        <div class="border"></div>
        <div class="name">详情介绍</div>
        <div class="border"></div>
      </div>
      <div class="img-box" v-for="(image, index) in detailData.details.split(';')" :key="index">
        <img :src="filePath + image" alt="">
      </div>
    </div>
    <div class="btn-bottom" @click="addToWarehouse">加入仓库</div>
  </div>
</template>
<script>
import { Toast } from 'vant'

export default {
  name: 'detailPage',
  components: {
  },
  data () {
    return {
      detailData: '',
      filePath: ''
    }
  },
  methods: {
    test () {
      Toast.loading({
        mask: true,
        message: '加载中...'
      })
    },
    addToWarehouse () {
      this.$post('/api/goods/insertGoodsPoxy', {
        goodsId: this.detailData.id
      }).then(res => {
        if (res.result === 0) {
          Toast.success(res.message)
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        Toast.fail('系统内部错误')
      })
    }
  },
  mounted () {
    // this.test()
  },
  created () {
    this.detailData = JSON.parse(this.$route.params.item)
    this.filePath = this.$route.params.filePath
    console.log('detailData', this.detailData)
  },
  watch: {
  }
}
</script>
