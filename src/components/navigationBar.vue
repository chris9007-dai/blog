<!--  -->
<template>
  <div class="main">
        <div>
            <router-link to="/main" class="li">主页</router-link>
            <router-link to="/creep" class="li">知乎爬虫</router-link>
            <router-link to="/down" class="li">视频下载</router-link>  
            <router-link to="" class="li">case2</router-link>
            <router-link to="" class="li">case3</router-link>
        </div>
        <div class="cover"></div>
    </div>
    
</template>

<script>
export default {
  data () {
    return {
    };
  },

  mounted() {
    let li = document.querySelectorAll(".li");
    let cover = document.querySelector(".cover");
    cover.style.width = li[0].offsetWidth + "px";
    let state = {
        left: "0px",
        width: li[0].offsetWidth + "px"
    }
    for(let i = 0; i < li.length; i++ ){
        li[i].addEventListener("mouseover",function(){
            cover.style.width = this.offsetWidth + "px";
            cover.style.left = this.offsetLeft + "px";
        })
        li[i].addEventListener("click",function(){
            state.left = this.offsetLeft + "px";
            state.width = this.offsetWidth + "px";
        })
        li[i].addEventListener("mouseout",function(){
            cover.style.width = state.width
            cover.style.left = state.left
        })
    }
  },

}

</script>
<style lang='less' scoped>
    *{
            margin: 0;
            padding: 0;
        }
        .li{
            z-index: 1;
            height: 50px;
            padding: 0 10px ;
            line-height: 50px;
            list-style: none;
            float: left;
        }
        .cover{
            position: relative;
            left: 0px;
            height: 50px;
            z-index: -1;
            background-color: orange;
            opacity: 0.5;
            transition: 1s;
            border-radius: 10px;
        }
</style>