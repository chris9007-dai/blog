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
      <div class="seconed_left">
        <div>
          <h2>操作方便</h2>
          <h5>修改网址自动爬取 <button @click="address">点我看看</button></h5>
          <p> 有需求需要爬取文章，回答，不懂python，边写边学，现在写网页没素材，拿来充数，初学可以看一下，大佬轻点喷！！！</p>
          <p>git: https://github.com/chris9007-dai/zhihuCreep.git</p>
        </div>
      </div>
      <div class="seconed_right">
        <div>
          <img src="../assets/img/creep.png">
        </div>
      </div>
    </div>

    <div class="third">
        <h3>代码展示</h3>
        <div>
          <ul>
            <li>case1</li>
            <li>case2</li>
            <li>case3</li>
            <li>case4</li>
            <li>case5</li>
          </ul>
        </div>
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
   },
    address(e){
      var height_third = document.querySelector(".third").offsetTop
      window.scrollTo(0,height_third)
    }
  }
}

</script>
<style lang='less' scoped>
  .first{
    position: relative;
    width:100vw;
    height:100vh;
    background-color: #fbfbfb;
    box-shadow: 2px 2px 2px;
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
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 2px;
      .seconed_left{
        width : 40%;
        height: 70%;
        div{
          width: 80%;
          height: 80%;
          margin: 10% 10%;
          text-align: center;
          h2{
            font-size: larger;
            font-weight: 800;
            margin-top:25%;
          }
          p{
            margin-top: 30px;
            padding: 20px;
            font-size: small;
            font-weight: 200;
          }
          h5{
            margin-top: 30px;
            button{
              cursor: pointer;
              border: none;
              box-shadow: 2px 2px 2px;
            }
          }
        }
      }
      .seconed_right{
        width : 40%;
        height: 70%;
        div{
          width: 80%;
          height: 80%;
          margin: 10% 10%;
        }
      }
    }

  .third{
    width: 100vw;
    height: 100vh;
    box-shadow: 2px 2px 2px;
      h3{
        margin-top: 5%;
        text-align: center;
      }
      div{

        ul{
          margin-top: 2%;
          list-style: none;
          display: flex;
          justify-content: center;
          li{
            margin-right: 20px;
            font-size:x-large;
          }
        }
      }
    }
</style>