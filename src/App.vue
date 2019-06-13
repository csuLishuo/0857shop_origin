<template>
  <div id="app">
    <keep-alive include="list">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  },
  mounted () {
  }
}
</script>
<style type="text/scss" lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  #app{
    height:100%;
    width:100%;
    max-width: 667px;
    margin: 0 auto;
  }
</style>
