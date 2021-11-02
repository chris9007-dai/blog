<template>
  <div class="content">
    <div class="contenner_main">
      <div class="contenner_nav">
        <el-row>
          <!-- 手机端样式 -->
          <el-col :xs="24" class="hidden-sm-and-up">
            <div class="phone_header">
              <!-- <i class="iconfont icon-t"></i> -->
              <i class="iconfont icon-nav" @click="show_nav"></i>
            </div>
            <ul :class="isShow_nav?'show':'hidden'" class="phone_nav">
              <li>
                <a href="#">留言墙</a>
              </li>
              <li>
                <a href="#">技术杂谈</a>
              </li>
              <li>
                <a href="#">生活</a>
              </li>
              <li>
                <a href="#">关于我</a>
              </li>
            </ul>
          </el-col>
          <!-- 电脑端样式 -->
          <el-col :md="24" class="hidden-xs-only">
            <ul class="computer_nav">
              <li>
                <a href="#">留言墙</a>
              </li>
              <li>
                <a href="#">技术杂谈</a>
              </li>
              <li>
                <a href="#">生活</a>
              </li>
              <li>
                <a href="#">关于我</a>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
      <div class="main_cover">
        <h1>
          <span>我是戴楚源:</span>
          <br />
          <span>欢迎你的到来!</span>
        </h1>
      </div>
      <div class="item_content">
        <h1>我是一名想成为coder的97年coder</h1>
        <span>
          一名自学前端的菜鸟小码农,热爱生活,喜欢IT技术,
          <br />爱电影,爱音乐,爱英语,
          <br />这是我独自建立的第一个网站分享学习经历,生活琐事,见闻趣事。
        </span>
        <br />
        <span>--再次欢迎你的到来--</span>
      </div>
      <el-row class="footer_nav" :gutter="10">
        <el-col :xs="24" :md="12" class="well">
          <router-link to="#">留言墙</router-link>
        </el-col>
        <el-col :xs="24" :md="12" class="Technology">
          <router-link to="#">技术杂谈</router-link>
        </el-col>
        <el-col :xs="24" :md="12" class="life">
          <router-link to="#">生活分享</router-link>
        </el-col>
        <el-col :xs="24" :md="12" class="aboutMe">
          <router-link to="#">关于我</router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow_nav: false
    }
  },
  methods: {
    show_nav () {
      this.isShow_nav = !this.isShow_nav
    }
  }
}
</script>

<style lang="less" scoped>
.el-col {
  background-color: pink;
}
.main_cover {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/img/sakura.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  h1 {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -50%);
    font-size: 50px;
    font-weight: 800;

    span:nth-last-child(1) {
      display: block;
      text-align: center;
      font-size: 30px;
      line-height: 60px;
      /*  color: rgb(129, 151, 159); */
    }
  }
}
.computer_nav {
  li {
    margin: 20px 10px;
    list-style-type: none;
    display: inline-block;
    a {
      padding: 10px;
      margin: 10px;
      color: white;
      text-decoration: none;
      &:hover {
        border-bottom: 2px solid white;
      }
    }
  }
}
.phone_header {
  position: relative;
  height: 60px;
  box-shadow: 1px 1px 1px gray;
  i {
    font-size: 50px;
    position: absolute;
    right: 20px;
  }
}
.show {
  transition: all 0.5s;
  height: 160px;
  overflow: hidden;
}
.hidden {
  transition: all 0.5s;
  height: 0px;
  overflow: hidden;
}
.phone_nav {
  li {
    margin: 20px 10px;
    list-style-type: none;
    a {
      padding: 10px;
      margin: 10px;
      color: white;
      text-decoration: none;
      &:hover {
        border-bottom: 2px solid white;
      }
    }
  }
}
.item_content {
  width: 100%;
  height: 100vh;
  /* background-color: pink; */
  h1 {
    margin: 50px 0;
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    color: rgb(83, 109, 118);
  }
  span {
    display: block;
    text-align: center;
    font-size: 30px;
    line-height: 60px;
    color: rgb(129, 151, 159);
  }
  span:nth-last-child(1) {
    position: relative;
    bottom: -100px;
  }
}
.footer_nav {
  .el-col {
    position: relative;
    height: 500px;
    overflow: hidden;
    a {
      text-decoration: none;
      font-size: 40px;
      color: white;
    }
  }
  .well {
    background-image: url('../assets/img/book.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transition: all 0.5s;
    a {
      position: absolute;
      left: 30px;
      bottom: 80px;
      transition: all 0.5s;
    }
    &:hover {
      a {
        bottom: 180px;
        transition: all 0.5s;
      }
      background-size: 130% 130%;
      transition: all 0.5s;
    }
  }
  .Technology {
    background-image: url('../assets/img/preari.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    a {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      transition: all 0.5s;
    }
    &:hover {
      a {
        top: 30%;
        transition: all 0.5s;
      }
    }
  }
  .life {
    background-image: url('../assets/img/mapleLeaf.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    a {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: blue;
      transition: all 0.5s;
    }
    &:hover {
      a {
        border-left: 3px solid blue;
        top: 40%;
        transition: all 0.5s;
      }
    }
  }

  .aboutMe {
    background-image: url('../assets/img/tree.jpg');
    background-size: cover;
    background-repeat: no-repeat;
      a {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.5s;
    }
    &:hover {
      a {
        border-bottom: 3px solid;
        top: 40%;
        transition: all 0.5s;
      }
    }
  }
}
</style>
