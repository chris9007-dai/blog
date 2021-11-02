/* eslint-disable eqeqeq */
<template>
  <div :class="{'background':true}">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avater_box">
        <img src="../assets/img/boy.jpg" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        label-width="0px"
        class="login_form"
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <!-- 用户名区域 -->
        <el-form-item prop="userName">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="loginForm.userName"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>
        <!-- 密码区域 -->
        <el-form-item prop="passWord">
          <el-input
            prefix-icon="iconfont icon-password"
            v-model="loginForm.passWord"
            type="password"
            @keypress.enter.native="enter"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <span class="register">没有账号？<router-link to="./register" >立即注册</router-link></span>
          <el-button type="primary" round @click="login">登录</el-button>
          <!-- <el-button type="primary" round @click="register">注册</el-button> -->
          <el-button type="info" round @click="hide()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="register_box">

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        userName: 'damin',
        passWord: '123456'
      },
      // 表单的验证规则对象
      loginFormRules: {
        userName: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur'
          }
        ],
        passWord: [
          { required: true, messge: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, messge: '长度在 6 到 15 位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return
        const data = await this.$http.post('login', this.loginForm)
        if (data.status !== 200) {
          if (data.data.flag === 1) {
            return this.$message.error('密码错误')
          } else if (data.data.flag === 2) {
            return this.$message.error('用户不存在')
          }
        }
        this.$message.success(data.data)
        this.hide()
      })
    },
    register () {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return
        const data = await this.$http.post('register', this.loginForm)
        // eslint-disable-next-line eqeqeq
        if (data.status != 200) return this.$message.error(data.data)
        this.$message.success(data.data)
      })
    },
    enter (e) {
      // eslint-disable-next-line eqeqeq
      if (e.keyCode == 13) {
        this.login()
      }
    },
    hide () {
      if (this.show) {
        this.show()
      }
    }
  },
  props: {
    show: {
      type: Function,
      default: null
    }
  }
}
</script>
<style lang="less" scoped>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px gray;
  .avater_box {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -190%);
    box-shadow: 0 0 10px gray;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
    .register{
      margin-right: 120px;
    }
  }
}
</style>
