<template>
  <div class="home-container">
    <van-tabbar v-model="active" active-color="#ff3e31" inactive-color="#333333" route>
      <van-tabbar-item to="home">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? iconHome.active : iconHome.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item to="myCenter">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? iconCenter.active : iconCenter.normal"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'tabbar',
  props: ['activeIndex'],
  components: {
  },
  data () {
    return {
      active: this.activeIndex,
      iconHome: {
        normal: require('../images/icon1.png'),
        active: require('../images/icon1_on.png')
      },
      iconCenter: {
        normal: require('../images/icon2.png'),
        active: require('../images/icon2_on.png')
      }
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
<style lang="scss" scoped>
  @function px2rem($px) {
    //$px为需要转换的字号
    @return $px * 1 / 100 * 1rem;
  }
</style>
