<!--  -->
<template>
  <div>
    <div class="first">
       <div>
          <h2>CREEP</h2>
          <span>/*web srawler for zhihu */</span>
      </div>
      <div class="scroll_down">
        <i class="icon" @click="icon"></i>
      </div>
    </div> 

    <div class="seconed">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  
  components: {},

  computed: {},

  mounted: {},

  methods: {
    icon(e){
      var height = document.querySelector(".first").offsetHeight
      window.scrollTo(0,height)
   }
  }
}

</script>
<style lang='less' scoped>
  .first{
    position: relative;
    width:100vw;
    height:100vh;
    box-shadow: 1px 1px 1px;
    div{
        position: absolute;
        top: 384.5px;
        width : 100vw;
        margin: 0 auto;
        text-align: center;
        h2{
            display: block;
            font-size: 48px;
            font-weight: 400;
        }
        span{
            display: block;
            margin-top: 20px;
        }
    }

    .scroll_down{
      width: 100vw;
      height : 5%;
      position: absolute;
      top: 95%;
        .icon{
          display: inline-block;
          width: 28px;
          height:28px;
          cursor: pointer;
          background-image: url("../assets/icon/down.png");
          background-position: center center;
          animation: shak 1s infinite;
      }
    }
  }
    @keyframes shak{
      0%{
        transform:translateY(0PX) ;
      }
      50%{
        transform: translateY(8PX);
      }
      100%{
        transform: translateY(16px);
      }
    }

    
    .seconed{
      width: 100vw;
      height: 100vh;

    }
</style>