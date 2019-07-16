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
  <div class="myInfo-container">
    <div class="area-1">
      <div class="icon-box" @click="goBack">
        <img src="../images/icon7.png" alt="">
      </div>
      <div class="title">我的消息</div>
    </div>
    <div class="area-2">
      <van-list
        v-model="loadingList"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="getOneMorePage"
      >
        <div v-for="(item, index) in infoList" :key="item.id">
          <van-swipe-cell
            :right-width="70"
          >
            <div class="wrapper">
              <div class="img-box">
                <img src="../images/icon10.png" alt="">
              </div>
              <div class="text-box">
                <div class="title">{{item.title}}</div>
                <div class="info ellipsis-2">{{item.summary}}</div>
              </div>
            </div>
            <div slot="right" class="del-good" @click="delInfo(item.id, index)">
              <span>删除</span>
              <img src="../images/icon01.png">
            </div>
          </van-swipe-cell>
        </div>
        <div class="noData" v-if="infoList.length==0">暂无消息</div>
      </van-list>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'

export default {
  name: 'myInfo',
  components: {
  },
  data () {
    return {
      sendData: {
        pageNumber: 1,
        pageSize: 10
      },
      total: 0,
      infoList: [],
      loadingList: false,
      finished: false
    }
  },
  methods: {
    getOneMorePage () {
      setTimeout(() => {
        this.sendData.pageNumber++
        this.getInfoList()
      }, 500)
    },
    getInfoList () {
      this.$post('/api/systemMessage/getSystemMessageListByUserId', this.sendData).then(res => {
        if (res.result === 0) {
          if (this.sendData.pageNumber === 1) {
            this.infoList = res.data.list
          } else {
            this.infoList.push(res.data.list)
          }
          this.filePath = res.filePath
          this.total = res.data.totalCount
          // 加载状态结束
          this.loadingList = false
          // 数据全部加载完成
          if (this.infoList.length >= Number(this.total)) {
            this.finished = true
          }
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    delInfo (id, index) {
      this.$post('/api/systemMessage/delSystemMessage', {
        id: id
      }).then(res => {
        if (res.result === 0) {
          Toast.success(res.message)
          this.infoList.splice(index, 1)
        } else {
          Toast.fail(res.message)
        }
      }).catch(res => {
        console.error(res)
      })
    },
    goBack () {
      this.$router.back(-1)
    },
    init () {
      this.getInfoList()
    }
  },
  mounted () {
  },
  created () {
    this.init()
  },
  watch: {
  }
}
</script>
