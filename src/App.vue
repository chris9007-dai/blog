<template>
  <div id="app">
    <navigation class="navigation"></navigation>
    <router-view class="container"></router-view>
  </div>
</template>
<script>
  import navigation from "../src/components/navigationBar.vue"
  export default {
    name: "app",
    components: {
      navigation,
    }
  }
</script>

<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    width: 100%;
    height: 100%;
  }

  .navigation{
    position: absolute;
    left: 0px;
    top: 0px;
    z-index:10;
  }
</style>
